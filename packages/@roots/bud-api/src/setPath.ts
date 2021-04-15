import {Api, Hooks} from '@roots/bud-framework'

declare module '@roots/bud-framework' {
  export interface Framework {
    /**
     * ## bud.setPath [💁 Fluent]
     *
     * Set a directory. The project directory should be an absolute path.
     * All other directories should be relative (src, dist, etc.)
     *
     * ```js
     * bud.setPath('src', 'custom/src')
     * ```
     */
    setPath: Api.SetPath
  }

  namespace Api {
    interface SetPath {
      (
        name: keyof Hooks.Locale.Definitions,
        path?: string,
      ): Framework
    }

    interface SetPath {
      (
        paths: {
          [K in keyof Hooks.Locale.Definitions as `${K &
            string}`]?: string
        },
      ): Framework
    }
  }
}

export const setPath: Api.SetPath = function (...args) {
  if (typeof args[0] == 'string') {
    this.hooks.on(`location/${args[0]}`, () => args[1])
    return this
  }

  if (Object.entries(args[0]).length === 0) {
    this.error(
      `${args[0].toString()} cannot be empty. It should be an object with keys set to registered locations: ['src', 'dist', 'storage', 'publicPath', 'project', 'records]`,
      `Type error`,
    )
  }

  Object.entries(args[0]).map(([k, v]: [string, string]) => {
    if (k == 'project' && !v.startsWith('/')) {
      this.error(
        'The project path must be absolute',
        'Type error',
      )
    }

    if (
      !['project', 'publicPath'].includes(k) &&
      v.startsWith('/')
    ) {
      this.warn(
        `Path: ${k} was defined as ${v}. This path should be relative to the project root. You should fix this.`,
      )

      v = v.replace(this.hooks.filter('location/project'), '')
    }

    this.hooks.on(`location/${k}`, () => v)
  })

  return this
}
