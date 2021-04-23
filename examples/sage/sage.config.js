/**
 * Sage Theme
 *
 * @typedef {import('@roots/sage/lib/types').Sage} Sage
 * @type {(sage: Sage) => Sage}
 */

module.exports = (sage) =>
  sage
    .entry({
      app: ['**/app.{js,css}'],
      editor: ['**/editor.{js,css}'],
      customizer: ['**/customizer.{js,css}'],
    })
    .assets(['assets/images'])
    .persist({
      type: 'memory',
    });
