import {Framework, Service} from '@roots/bud-framework'
import type {Discovery as Contract} from '@roots/bud-typings'
import {boundMethod as bind} from 'autobind-decorator'
import fs from 'fs-extra'
import globby from 'globby'
import {dirname} from 'path'

/**
 * Framework/Discovery
 *
 * [🏡 Project home](https://roots.io/bud)
 */
export class Discovery extends Service implements Contract {
  /**
   * Service name
   */
  public name = 'framework/discovery'

  /**
   * Project info: get accessor
   */
  public get projectInfo(): {[key: string]: any} {
    return fs.readJsonSync(
      this.app.path('project', 'package.json'),
    )
  }

  /**
   * Package paths: get accessor
   */
  public get packagePaths() {
    return globby.sync([
      this.modulePath('@roots/sage/package.json'),
      this.modulePath('bud-*/package.json'),
      this.modulePath('**/bud-*/package.json'),
    ])
  }

  /**
   * Service boot.
   */
  @bind
  public boot(app: Framework): void {
    app.sequence([
      this.discoverPackages,
      this.registerDiscovered,
    ])
  }

  /**
   * Collect packages.
   */
  @bind
  public discoverPackages(): void {
    this.setStore(
      this.packagePaths
        .filter(this.filterUnique)
        .reduce(this.reducePackages, {}),
    )
  }

  /**
   * Register discovered packages as extensions
   */
  @bind
  public registerDiscovered() {
    this.app.store.isTrue('options.discover') &&
      this.every((name: string) => {
        const extension = require(name)
        this.app.extensions.add(extension)
      })
  }

  /**
   * Gather information on packages
   */
  @bind
  public reducePackages(pkgs: Framework.Pkgs, pkg: string) {
    const json = fs.readJsonSync(pkg)

    Object.assign(json, {
      isCore: json.name?.includes('@roots/'),
      isPreset: json.keywords?.includes('bud-preset'),
      isExtension: json.keywords?.includes('bud-extension'),
    })

    if (!json.isExtension) return pkgs

    return {
      ...pkgs,
      [json.name]: {
        ...json,
        path: dirname(pkg),
        type: 'extension',
        core: json.isCore,
      },
    }
  }
}
