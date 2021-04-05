import {
  Logger as Contract,
  Bootstrapper,
} from '@roots/bud-typings'
import {
  Signale,
  SignaleConfig,
  SignaleOptions,
} from '@roots/bud-support'
import {Framework} from '@roots/bud-framework'

/**
 * Logger service
 */
export class Logger implements Contract, Bootstrapper {
  /**
   * Service ident
   */
  public name = 'service/logger'

  /**
   * Framework
   */
  public _app: Framework['get']

  /**
   * Logger instance
   */
  public _instance: Signale

  /**
   * Logger options
   */
  public options: SignaleOptions<'remind'> = {
    disabled: true,
    interactive: false,
    scope: 'framework',
    secrets: [process.cwd()],
    stream: process.stdout,
    logLevel: 'all',
  }

  /**
   * Logger config
   */
  public config: SignaleConfig = {
    displayScope: true,
    displayBadge: false,
    displayDate: false,
    displayFilename: false,
    displayLabel: true,
    displayTimestamp: false,
    underlineLabel: false,
    underlineMessage: false,
    underlinePrefix: false,
    underlineSuffix: false,
    uppercaseLabel: false,
  }

  /**
   * Service contract fulfillment
   */
  public register() {}
  public boot() {}
  public booted() {}

  /**
   * Get logger instance
   */
  public get instance() {
    return this._instance
  }

  /**
   * Set logger instance
   */
  public set instance(instance) {
    this._instance = instance
  }

  /**
   * Get Framework
   */
  public get app(): Framework {
    return this._app()
  }

  /**
   * Constructor
   */
  public constructor(app: Framework['get']) {
    this._app = app

    this.makeLogger = this.makeLogger.bind(this)
  }

  /**
   * Framework lifecycle: bootstrapped
   */
  public bootstrapped(app: Framework) {
    this.instance = this.makeLogger()
  }

  /**
   * Framework lifecycle: registered
   */
  public registered(app: Framework) {
    if (app.store.enabled('options.log')) {
      app.logger.instance.enable()
    }
  }

  /**
   * Make logger
   */
  public makeLogger() {
    const logger = new Signale({
      ...this.options,
    })

    logger.config(this.config)

    return logger.scope('framework')
  }
}
