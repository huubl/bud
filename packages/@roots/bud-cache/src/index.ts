import {bind} from '@roots/bud-support'
import Service from './Service'
import crypto from 'crypto'

/**
 * # bud.cache
 *
 * Cache utlity for Webpack modules.
 */
export class Cache extends Service {
  /**
   * Service name
   */
  public name = '@roots/bud-cache'

  /**
   * Service booted
   */
  public booted() {
    this.enabled() &&
      this.app.hooks.on(
        'build/cache/version',
        () => this.version,
      )
  }

  /**
   * ## bud.cache.enabled
   *
   * Returns boolean true if cache is enabled
   *
   * Cache is enabled when there is a cache record to read on disk and
   * the buildCache feature is enabled.
   *
   * ```js
   * bud.cache.enabled()
   * // => true if cache is enabled
   * ```
   */
  @bind
  public enabled(): boolean {
    return this.app.store.isTrue('options.cache')
  }

  /**
   * Version
   *
   * A hash created from the stringified contents of the project config
   * and package.json
   */
  public get version() {
    const conf = JSON.stringify(
      this.fs.readFileSync(
        this.app.disk
          .get('project')
          .get(`${this.app.name}.config.js`),
        'utf8',
      ),
    )

    const json = JSON.stringify(
      this.fs.readFileSync(
        this.app.disk.get('project').get('package.json'),
        'utf8',
      ),
    )

    return crypto
      .createHash('md4')
      .update(`${conf}${json}`)
      .digest('hex')
  }
}
