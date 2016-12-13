# riot parser for fis3

## example:
`fis-config.js:`
```js
fis.match('*.tag', {
  parser: fis.plugin('riot', {
    modular: true,
    type: 'coffee',
    expr: true
  }),
  rExt: '.js'
})
```
