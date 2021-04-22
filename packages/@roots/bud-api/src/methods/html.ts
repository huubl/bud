import {Framework} from '@roots/bud-framework'
import {isBoolean} from 'lodash'

declare module '@roots/bud-framework' {
  interface Framework {
    /**
     * ## html [💁 Fluent]
     *
     * Enable and/or configure a generated HTML template
     *
     * ### Usage
     *
     * ```js
     * app.html({
     *   enabled: true, // default: true
     *   template: 'public/index.html',
     *   replace: {
     *     APP_NAME: name,
     *     APP_DESCRIPTION: description,
     *     PUBLIC_URL: app.env.get('PUBLIC_URL'),
     *   },
     * })
     * ```
     */
    html: Api.Html
  }

  namespace Api {
    export {Html}
  }
}

type Html = (options?: {
  /**
   * Enable HTML generation
   */
  enabled?: boolean

  /**
   * An HTML template to use. If none is supplied the
   * default from @roots/bud-support will be used.
   */
  template?: string

  /**
   * ### Replacements
   *
   * Template variable names are used as keys.
   * Each key is associated with a replacement value.
   */
  replace?: {[key: string]: any}
}) => Framework

export const html: Html = function (options?) {
  /**
   * Allow html arg to override
   */
  if (!options) {
    this.store.enable('html')
    return this
  }

  /**
   * Update the enabled status for the html plugin
   */
  isBoolean(options.enabled)
    ? this.store.set('html', options.enabled)
    : this.store.enable('html')

  /**
   * Apply any replacements in the interpolation plugin
   */
  options.replace &&
    this.extensions
      .get('html-webpack-plugin')
      .set('options', value => ({
        ...value,
        ...options.replace,
      }))

  /**
   * Set the html-webpack-plugin template
   */
  options.template &&
    this.extensions
      .get('html-webpack-plugin')
      .set('options', value => ({
        ...value,
        template: options.template,
      }))

  return this
}
