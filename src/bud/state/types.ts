import type {Configuration as WebpackConfiguration} from 'webpack'
import type {Options as DependencyExtractionOptions} from '@wordpress/dependency-extraction-webpack-plugin/build-types'
import type {Options as BrowserSyncOptions} from 'browser-sync-webpack-plugin'
import type {TerserPluginOptions as TerserOptions} from 'terser-webpack-plugin'
/**
 * Mitch, all together.
 */
export type State = {
  configs: Configs
  features: Features
  options: Options
  paths: Paths
  plugins: any
  flags: Flags
}

/**
 * Paths
 */
export type Directory = string
export type Paths = {
  project: Directory
  framework: Directory
  src: Directory
  dist: Directory
  public: Directory
}

type optionsStore = {
  alias: any
  auto: any
  babel: BabelConfiguration
  copy: Copy
  dev: any
  devtool: any
  entry: any
  env: any
  inlineManifest: any
  node: any
  splitting: any
  uglify: any
  browserSync: any
  externals: Externals
  postCss: PostCssConfiguration
  target: WebpackConfiguration['target']
  terser: TerserOptions
  typescript: Typescript
  dependencyManifest: DependencyExtractionOptions
  vendor: Vendor
  watch: any
}

/**
 * Option value
 */
type OptionsValue = any

/**
 * Option entry
 */
type OptionsEntry = {[key: string]: OptionsValue}

/**
 * Get the value of a option.
 */
interface GetOption {(option: string): any}

/**
 * Set the value of a option.
 */
interface SetOption {(OptionsRepository): void}

/**
 * Returns true if there is a value set for this option.
 */
interface HasOption {(option: string): boolean}

/**
 * Returns true if option is equal to the supplied value.
 */
interface IsOption {(option: string, value: any): boolean}

/**
 * Options
 */
export type Options = {
  repository: OptionsEntry
  get: GetOption

  /**
   * Merge new values into an option
   */
  merge: (option: string, value: any) => void

  /**
   * Set the value of a option.
   */
  set: (option: string, value: any) => void
  has: HasOption
  is: IsOption
}

export type BabelConfiguration = {
  plugins: []
  presets: []
}
export type BrowserSync = BrowserSyncOptions
export type Copy = {
  patterns: object[]
}
export {DependencyExtractionOptions as WordPressDependenciesOptions}
export type Dev = any
export type Externals = WebpackConfiguration['externals']
export type PostCssConfiguration = {
  plugins: []
}
export type Target = WebpackConfiguration['target']
export type Typescript = Object
export type Vendor = {
  name: String
}

/**
 * Features
 */
type FeatureEntry = boolean
type FeatureRepository = {[key: string]: FeatureEntry}
interface Enable {(feature: string): void}
interface Enabled {(feature: string): boolean}
interface Disable {(feature: string): void}
interface Disabled {(feature: string): boolean}
interface Get {(feature: string): boolean}
interface Set {(Repository): void}
interface Has {(feature: string): boolean}

/**
 * ## bud.state.features
 */
type Features = {
  /**
   * Feature store
   */
  repository: FeatureRepository

  /**
   * Enable a feature
   */
  enable: Enable

  /**
   * Boolean check if feature is enabled.
   */
  enabled: Enabled

  /**
   * Disable a feature
   */
  disable: Disable

  /**
   * Boolean check if feature is disabled.
   */
  disabled: Disabled

  /**
   * Get the value of a feature.
   */
  get: Get

  /**
   * Set the value of a feature.
   */
  set: Set

  /**
   * Check if a feature exists
   */
  has: Has
}

export type {Features}

type FlagEntry = any
type FlagRepository = {[key: string]: FlagEntry}
interface GetFlag {(flag: string): any}
interface SetFlag {(Repository): void}
interface HasFlag {(flag: string): boolean}
interface IsFlag {(flag: string, value: any): boolean}
/**
 * ## bud.state.flags
 */
type Flags = {
  /**
   * Flags store
   */
  repository: FlagRepository

  /**
   * Get the value of a flag.
   */
  get: GetFlag

  /**
   * Set the value of a flag.
   */
  set: SetFlag

  /**
   * Check if a flag exists
   */
  has: HasFlag

  /**
   * Check if flag matches a given value
   */
  is: IsFlag
}

export type {Flags}


type Config = string
type ConfigEntry = {[key: string]: Config}

/**
 * ## bud.state.configs
 */
type Configs = {
  /**
   * Configs store
   */
  repository: ConfigEntry[]|{}

  /**
   * Get the contents of a config file.
   */
  contents: (this: Configs, config: string) => any|null

  /**
   * Get the value of a config.
   */
  get: (this: Configs, config: string) => any

  /**
   * Add a config
   */
  add: (this: Configs, name: string, contents: string) => void

  /**
   * Return true if config file exists
   */
  exists: (this: Configs, file: string) => boolean

  /**
   * Check if a config exists
   */
  has: (this: Configs, config: string) => boolean
}

export type {Configs}

/**
 * Env
 */
export type Environment = any
