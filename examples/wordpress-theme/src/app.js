import React from 'react'
import {render} from 'react-dom'
import {App} from './components/App'
import bootstrap from 'bootstrap'

console.log(bootstrap)

render(<App />, document.getElementById('root'))

/**
 * Accept module updates
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
module?.hot?.accept(err => {
  console.err(err)
})
