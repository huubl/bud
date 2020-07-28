import type {Configuration} from 'webpack'
import type {Hooks} from './hooks/types'
import type {State} from './state/types'
import type {Util} from './util/types'
import type * as Api from './api/types'

export type Mode = Configuration['mode']
export type Production = boolean
export type Bud = {
  hooks: Hooks
  util: Util
  plugin: any
  mode: Mode
  inProduction: Production
  state: State
  compiler: any
  alias: Api.Alias
  auto: Api.Auto
  babel: Api.Babel
  bundle: Api.Bundle
  compile: any
  copy: Api.Copy
  copyAll: Api.Copy
  dashboard: Api.Dashboard
  debug: Api.Debug
  dependencyManifest: Api.DependencyManifest
  dev: Api.Dev
  devtool: Api.Devtool
  dist: Api.Dist
  distPath: Api.DistPath
  dump: any
  env: any
  featureEnabled: any
  features: any
  glob: any
  hash: any
  hot: any
  inlineManifest: Api.InlineManifest
  map: Api.SourceMap
  mini: Api.Mini
  option: any
  postCss: Api.PostCss
  preset: Api.Preset
  project: Api.Project
  projectPath: Api.ProjectPath
  proxy: any
  publicPath: any
  purge: Api.Purge
  resolve: any
  scss: any
  splitting: any
  src: Api.Src
  srcPath: Api.SrcPath
  sync: Api.Sync
  target: Api.Target
  terser: any
  translate: Api.Translate
  vendor: Api.Vendor
  watch: Api.Watch
}
