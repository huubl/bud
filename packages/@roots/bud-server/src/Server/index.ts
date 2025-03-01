import {Service, Server as Contract} from '@roots/bud-framework'
import Webpack from 'webpack'
import chokidar from 'chokidar'
import {sync} from 'globby'
import {FSWatcher} from 'fs-extra'
import {resolve} from 'path'
import {boundMethod as bind} from 'autobind-decorator'

import * as middleware from '../middleware'
import {injectClient} from '../util/injectClient'

export class Server extends Service implements Contract {
  public name = '@roots/bud-server'

  public middleware: Contract.Middleware.Inventory = {}

  public config: Contract.Config

  public _instance: Contract.Instance

  public _watcher: FSWatcher

  public get instance() {
    return this._instance
  }

  public set instance(instance) {
    this._instance = instance
  }

  public get watcher() {
    return this._watcher
  }

  public set watcher(watcher: FSWatcher) {
    this._watcher = watcher
  }

  public readonly _assets = [
    resolve(__dirname, '../client/index.js'),
  ]

  public get assets() {
    return this._assets
  }

  public get isWatchable(): boolean {
    return (
      Array.isArray(this.getWatchedFilesArray()) &&
      this.getWatchedFilesArray().length > 0
    )
  }

  @bind
  public getWatchedFilesArray(): string[] {
    return this.config
      .get('watch.files')
      .map((file: string) => this.app.path('project', file))
  }

  @bind
  public booted() {
    this.watcher = chokidar.watch(
      sync(this.config.get('watch.files')),
      this.config.get('watch.options'),
    )
  }

  @bind
  public processMiddlewares(compiler: Contract.Compiler) {
    Object.entries(middleware).map(([key, generate]) => {
      if (this.config.enabled(`middleware.${key}`)) {
        this.info(`Enabling ${key}`)

        this.middleware[key] = generate({
          config: this.config,
          compiler,
        })
      }
    })

    Object.values(this.middleware).forEach(middleware =>
      this.instance.use(middleware),
    )
  }

  @bind
  public run(compiler: Webpack.Compiler): this {
    /**
     * __roots route
     */
    this.instance
      .route('/__roots/config.json')
      .get((_req, res) => {
        res.send({
          ...this.app.store.all(),
          ...this.config.all(),
        })

        res.end()
      })

    this.processMiddlewares(compiler)

    /**
     * Listen
     */
    this.instance.listen(this.config.get('port'), () => {
      this.info(
        `Server listening on %s`,
        this.config.get('port'),
      )

      this.info({
        ...this.config.all(),
        middleware,
      })
    })

    this.isWatchable &&
      this.watcher?.on('change', path => {
        this.middleware.hot.publish({
          action: 'reload',
          message: `Detected file change: ${path}. Reloading window.`,
        })
      })

    return this
  }

  @bind
  public inject(): void {
    injectClient(this.app, this.assets)
  }
}
