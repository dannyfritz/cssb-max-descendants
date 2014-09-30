cssb-max-descendants
====================

A css-bouncer plugin for checking against the maximum length of descendants.

## Usage

```js
var cssb = require('css-bouncer');
var linter = cssb();
linter.rule('cssb-max-descendants');
var result = linter.lint('div .class #id > ul > li.class {}');
console.log(result);
//[ { location: '1:1',
//    level: 'error',
//    message: 'Descendent length for selector is too long! 5 is more than the maximum of 3.' } ]
```
