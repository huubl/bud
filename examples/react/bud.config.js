/**
 * React configuration example
 *
 * @typedef {import('@roots/bud').Bud} Bud
 * @type {(app: Bud): Bud}
 */

module.exports = app => {
  return app
    .use([
      require('@roots/bud-babel'),
      require('@roots/bud-postcss'),
      require('@roots/bud-react'),
    ])
    .html({
      enabled: true,
      template: 'public/index.html',
    })
    .entry('app', 'app.{js,css}')
    .when(app.isProduction, () =>
      app.runtime().splitChunks().minimize(),
    )
    .persist({
      type: 'memory',
    })
}
