import _ from 'lodash'
import {boundMethod as bind} from 'autobind-decorator'
import {Framework, Hooks, Module} from '@roots/bud-framework'

type ModuleKey = `${keyof Module & string}`

/**
 * Extensions controller class.
 *
 * Extensions controller for the Bud framework.
 *
 * [🏡 Project home](https://roots.io/bud)
 */
export default class implements Module {
  /**
   * Accessor stores
   */
  protected _module: Module
  protected _app: Framework['get']

  /**
   * Module
   */
  public get module(): Module {
    return this.app.access(this._module)
  }

  /**
   * App
   */
  public get app(): Framework {
    return this._app()
  }

  /**
   * Logging
   */
  public get logger() {
    return this.app.extensions.logger
  }

  /**
   * Constructor.
   */
  public constructor(app: Framework, extension: Module) {
    this._app = app.get
    this._module = extension

    this.logger
      .scope(this.module.name)
      .success('Extension instantiated')
  }

  /**
   * Register extension
   */
  @bind
  public register(app: Framework): this {
    if (this.module.register) {
      this.app.access(this.module.register)
      this.app.extensions.log(`Register method found`)
    }

    if (this.module.api) {
      Object.assign(this.app, this.app.access(this.module.api))
    }

    this.module.publish &&
      this.app.publish(
        this.app.access<{[key: string]: any}>(
          this.module.publish,
        ),
      )

    this.module.options &&
      this.set('options', () => this.module.options)

    this.module.dependencies &&
      this.set('dependencies', () => this.module.dependencies)

    this.module.devDependencies &&
      this.set(
        'devDependencies',
        () => this.module.devDependencies,
      )

    this.module.when && this.set('when', () => this.module.when)
    this.module.make && this.set('make', () => this.module.make)

    this.app.store.enabled('install') && this.install()

    this.logger.scope(this.name).success('Extension registered')

    return this
  }

  /**
   * Boot extension.
   */
  @bind
  public boot(app: Framework): this {
    this.module.boot && this.app.access(this.module.boot)
    this.logger.scope(this.name).success('Extension booted')

    return this
  }

  /**
   * Install package dependencies
   */
  @bind
  public install(): void {
    /**
     * Production dependencies
     */
    this.dependencies &&
      !_.isEmpty(this.dependencies) &&
      this.app.dependencies.install(this.dependencies, this.name)

    /**
     * Development dependencies
     */
    this.devDependencies &&
      !_.isEmpty(this.devDependencies) &&
      this.app.dependencies.installDev(
        this.devDependencies,
        this.name,
      )
  }

  /**
   * Make hook key from module property
   */
  @bind
  public makeKey(key: ModuleKey): Hooks.Name {
    return `extension/${this.name}/${key}` as Hooks.Name
  }

  /**
   * Get module properties (hooked)
   */
  @bind
  public get(key: ModuleKey) {
    const hook = this.makeKey(key)
    const value = this.app.subscribe(hook, this.name)

    this.logger.log({
      message: `get ${hook}: ${value}`,
    })

    return value
  }

  /**
   * Set module properties (hooked)
   */
  @bind
  public set(key: ModuleKey, value: any) {
    const hook = this.makeKey(key)

    this.app.publish({[hook]: value}, this.name)

    this.logger.log({
      message: `set ${hook}: ${value}`,
    })
  }

  /**
   * Name
   */
  public get name(): keyof Hooks.Extension.Definitions {
    return this.module.name
  }

  /**
   * Options
   */
  public get options() {
    return this.app.access(this.get('options'))
  }

  public set options(options: Module['options']) {
    this.set('options', options)
  }

  /**
   * Dependencies
   */
  public get dependencies() {
    return this.app.access(this.get('dependencies'))
  }

  public set dependencies(dependencies: Module['dependencies']) {
    this.set('dependencies', dependencies)
  }

  /**
   * Development Dependencies
   */
  public get devDependencies() {
    return this.app.access(this.get('devDependencies'))
  }

  public set devDependencies(
    devDependencies: Module['devDependencies'],
  ) {
    this.set('devDependencies', devDependencies)
  }

  /**
   * When
   */
  public get when() {
    if (_.isFunction(this.get('when'))) {
      return this.get('when')(
        this.app,
        this.app.container(this.options),
      )
    }

    return this.get('when')
  }

  public set when(when: Module['when']) {
    this.set('when', when)
  }

  /**
   * Make
   */
  public get make() {
    if (this.when == false) {
      this.logger.debug({
        message: `not set for inclusion. skipping.`,
        affix: this.when,
      })

      return
    }

    if (!this.get('make')) {
      return
    }

    if (_.isFunction(this.get('make'))) {
      return this.get('make')(
        this.options
          ? this.app.container(this.options)
          : this.app.container({}),
        this.app,
      )
    }

    return this.get('make')
  }

  public set make(make: Module['make']) {
    this.set('make', make)
  }
}
