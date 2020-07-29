import {optimize} from 'webpack'
const {LimitChunkCountPlugin} = optimize
import type {WebpackAdapter} from './types'

const limitChunkCount: WebpackAdapter = () => ({
  setOptions: function () {
    const enabled = this.bud.features.enabled('splitting')
    const chunks = this.bud.options.get('splitting').maxChunks

    if (!enabled) {
      return {
        maxChunks: 1,
      }
    }

    if (chunks) {
      return {
        maxChunks: chunks,
      }
    }

    return null
  },
  make: function () {
    return new LimitChunkCountPlugin(this.options)
  },
  when: function () {
    return this.bud.features.enabled('optimize') && this.options
  },
})

export {limitChunkCount}
