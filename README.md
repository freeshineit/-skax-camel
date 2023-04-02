## @skax/camel

![build](https://github.com/freeshineit/skax-camel/workflows/build/badge.svg)
![Download](https://img.shields.io/npm/dm/@skax/camel.svg)
![Version](https://img.shields.io/npm/v/@skax/camel.svg)
![License](https://img.shields.io/npm/l/@skax/camel.svg)



A set of utility functions commonly.

### example

```ts
import {lowerCamel, upperCamel} from '@skax/camel'

lowerCamel("abcce_dddd_ffff") // -> abcceDdddFfff

lowerCamel("abcce-dddd-ffff", '-') // -> abcceDdddFfff

upperCamel("abcce_dddd_ffff") // -> AbcceDdddFfff

upperCamel("abcce-dddd-ffff", '-') // -> AbcceDdddFfff
```