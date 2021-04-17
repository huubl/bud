import {PurgeCss} from '@roots/bud-framework'

export const purge: PurgeCss.Config = function configuration(
  userOptions,
) {
  this.postcss.set(['@fullhuman/postcss-purgecss', userOptions])

  return this
}
