import type Webpack from 'webpack'
import type {Framework, Module} from '@roots/bud-framework'
import {webpack} from '@roots/bud-support'

interface Options {
  definitions: Webpack.DefinePlugin['definitions']
}

export const name: Module.Name = `webpack-define-plugin`

export const make: Module.Make<
  Webpack.DefinePlugin,
  Options
> = options => new webpack.DefinePlugin(options.all())

export const when: Module.When = (_bud, opts) =>
  opts.getEntries()?.length > 0

export const options: Module.Options<Options> = (
  bud: Framework,
) => {
  /**
   * .env values which contain PUBLIC
   */
  const fromEnv = bud.env
    .getEntries()
    .filter(([k]: [string, string]) => k.includes('APP_PUBLIC'))
    .reduce((a, [k, v]) => ({...a, [k]: JSON.stringify(v)}), {})

  const fromStore = bud.store.get('options.define')

  return {
    ...fromEnv,
    ...fromStore,
  }
}
