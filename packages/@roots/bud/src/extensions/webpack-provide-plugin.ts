import {ProvidePlugin as Plugin} from 'webpack'
import type {Index, Module} from '@roots/bud-framework'

export const name = 'webpack-provide-plugin'

export const options = () => ({})

export const make: Module.Make<
  Plugin,
  Index<{[key: string]: any}>
> = options => new Plugin(options.all())

export const when: Module.When = (app, options) =>
  options && options.getEntries().length > 0
