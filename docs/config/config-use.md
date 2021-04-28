---
description: Extend Bud with additional packaged functionality.
---

# bud.use

Registers a [Bud extension](extending-using-extensions.md).

## Usage

Add support for [sass](https://sass-lang.com) using the
[`@roots/bud-sass`](https://github.com/roots/bud/tree/stable/packages/extension-sass) extension.

```ts
import sass from '@roots/bud-sass'

bud.use(sass)
```

Multiple extensions can be added as an array:

```js
bud.use([
  require('@roots/bud-sass'),
  require('@roots/bud-typescript'),
])
```
