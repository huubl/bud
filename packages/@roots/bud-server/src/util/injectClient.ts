import {Framework} from '@roots/bud-framework'
import Webpack from 'webpack'

/**
 * Inject webpack entrypoints with
 * client HMR handling script(s).
 */
export declare type InjectClient = (
  app: Framework,
  injection: string[],
) => void

/**
 * Injects webpack entrypoints with HMR client scripts.
 *
 * Filters on `webpack.entry`
 */
export const injectClient: InjectClient = (app, injection) => {
  app.hooks.on(
    'build/entry',
    (entry: Webpack.Entry): Webpack.Entry => ({
      'bud-dev': injection,
      ...Object.entries(entry).reduce(
        (entries, [name, assets]) => ({
          ...entries,
          [name]: {
            ...assets,
            dependOn: ['bud-dev', ...(assets.dependOn ?? [])],
          },
        }),
        {},
      ),
    }),
  )
}
