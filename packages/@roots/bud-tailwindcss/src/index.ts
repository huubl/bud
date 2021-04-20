import './interface'
import {Framework} from '@roots/bud-framework'
import {Module} from '@roots/bud-typings'
import {tailwind} from './api'

// Extension ident
export const name: Module['name'] = '@roots/bud-tailwindcss'

// Dependencies
export const devDependencies = [
  'tailwindcss',
  '@tailwindcss/jit',
]

// Extension config
export const api: Module['api'] = {tailwind}

// Boot extension
export const boot: Module['boot'] = (app: Framework) => {
  const implementation = require.resolve('@tailwindcss/jit')
    ? '@tailwindcss/jit'
    : require.resolve('tailwindcss')
    ? 'tailwindcss'
    : null

  if (!implementation) {
    app.dashboard.error(
      'You must install tailwindcss or @tailwindcss/jit in order for @roots/bud-tailwindcss to function',
    )
  }

  app.tailwind(null, implementation)
}
