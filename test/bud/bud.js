const test = require('ava')
const {bud} = require('@roots/bud')

test('has property: args', t => t.true(bud.hasOwnProperty('args')))
test('has property: compiler', t => t.true(bud.hasOwnProperty('compiler')))
test('has property: configs', t => t.true(bud.hasOwnProperty('configs')))
test('has property: env', t => t.true(bud.hasOwnProperty('env')))
test('has property: features', t => t.true(bud.hasOwnProperty('features')))
test('has property: flags', t => t.true(bud.hasOwnProperty('flags')))
test('has property: fs', t => t.true(bud.hasOwnProperty('fs')))
test('has property: hooks', t => t.true(bud.hasOwnProperty('hooks')))
test('has property: inDevelopment', t => t.true(bud.hasOwnProperty('inDevelopment')))
test('has property: inProduction', t => t.true(bud.hasOwnProperty('inProduction')))
test('has property: logger', t => t.true(bud.hasOwnProperty('logger')))
test('has property: loaders', t => t.true(bud.hasOwnProperty('loaders')))
test('has property: mode', t => t.true(bud.hasOwnProperty('mode')))
test('has property: util', t => t.true(bud.hasOwnProperty('util')))
test('has property: options', t => t.true(bud.hasOwnProperty('options')))
test('has property: paths', t => t.true(bud.hasOwnProperty('paths')))
test('has property: patterns', t => t.true(bud.hasOwnProperty('patterns')))
