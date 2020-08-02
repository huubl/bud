import {eslint} from './js/eslint'
import {babel} from './js/babel'
import {typescript} from './js/typescript'
import {vue} from './js/vue'

import {css} from './css/css'
import {scss} from './scss/scss'
import {module as cssModule} from './css/module'
import {module as scssModule} from './scss/module'

import {font} from './font'
import {image} from './image'
import {svg} from './svg'

/**
 * Webpack loaders
 * @type {function} rules
 */
const rules = bud => ({
  bud,

  options: {
    module: {
      rules: [],
    },
  },

  make: function () {
    this.bud.features.enabled('typescript') &&
      this.options.module.rules.push(typescript(this.bud).make())

    this.bud.features.enabled('vue') &&
      this.options.module.rules.push(vue(this.bud).make())

    this.bud.features.enabled('eslint') &&
      !this.bud.features.enabled('typescript') &&
      this.options.module.rules.push(eslint(this.bud).make())

    this.bud.features.enabled('babel') &&
      this.options.module.rules.push(babel(this.bud).make())

    this.bud.features.enabled('css') &&
      this.options.module.rules.push(css(this.bud).make())

    this.bud.features.enabled('cssModules') &&
      this.options.module.rules.push(cssModule(this.bud).make())

    this.bud.features.enabled('scss') &&
      this.options.module.rules.push(scss(this.bud).make())

    this.bud.features.enabled('scssModules') &&
      this.options.module.rules.push(scssModule(this.bud).make())

    this.bud.features.enabled('font') &&
      this.options.module.rules.push(font(this.bud).make())

    this.bud.features.enabled('image') &&
      this.options.module.rules.push(image(this.bud).make())

    this.bud.features.enabled('svg') &&
      this.options.module.rules.push(svg(this.bud).make())

    return this.options
  },
})

export {rules}
