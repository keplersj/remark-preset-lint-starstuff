# remark-preset-lint-starstuff

[![npm](https://img.shields.io/npm/v/remark-preset-lint-starstuff)](https://www.npmjs.com/package/remark-preset-lint-starstuff)
[![npm](https://img.shields.io/npm/dw/remark-preset-lint-starstuff)](https://www.npmjs.com/package/remark-preset-lint-starstuff)
[![Codecov](https://img.shields.io/codecov/c/github/keplersj/remark-preset-lint-starstuff)](https://app.codecov.io/gh/keplersj/remark-preset-lint-starstuff)
[![Bundle Size](https://img.shields.io/bundlephobia/min/remark-preset-lint-starstuff)](https://bundlephobia.com/package/remark-preset-lint-starstuff)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/)

Opinionated, yet simple preset for `remark-lint`

## Philosophy

This config is built with the assumption that you're going to be using [Prettier](https://prettier.io/) across your project, and want [remark-lint](https://github.com/remarkjs/remark-lint) to provide advice and respect Prettier's formatting. This config aims to share this in a simple, shareable config.

## Installation

```shell
npm install --save-dev remark-preset-lint-starstuff
```

## Usage

Set the following in your `package.json`:

```json
{
  "remarkConfig": {
    "plugins": ["preset-lint-starstuff"]
  }
}
```

Run remark. Either [`remark-cli`](https://github.com/remarkjs/remark/tree/master/packages/remark-cli) or [`jest-runner-remark`](https://github.com/keplersj/jest-runner-remark) is recommended for this.

## License

Copyright 2019-2022 [Kepler Sticka-Jones](https://keplersj.com/). Licensed ISC
