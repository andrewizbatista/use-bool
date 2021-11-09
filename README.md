# `useBool`

![created by](https://img.shields.io/badge/Created%20By-@andrewizbatista-crimson?style=flat-square) ![license](https://img.shields.io/npm/l/@andrewizbatista/use-bool?label=License&style=flat-square)

The `useBool` hook encapsulates all the logic associated with a `boolean` value.

- 📦 **Tiny `4kB` bundle size (with `0` dependencies)**
- 🔰 **Super easy to use**

## <a name="index"></a>Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## <a name="getting-started"></a>Getting Started

#### [`yarn`](https://yarnpkg.com/package/@andrewizbatista/use-bool)

```
yarn add @andrewizbatista/use-bool
```

#### [`npm`](https://www.npmjs.com/package/@andrewizbatista/use-bool)

```
npm install @andrewizbatista/use-bool
```

## <a name="usage"></a>Usage

Use it as you would use any other React hook.

```tsx
import { useBool } from '@andrewizbatista/use-bool';

const Usage = () => {

  // Normal usage
  const { bool, toTrue, toFalse, toggle } = useBool(false);

  // Tip: In ES6 you can rename your object keys!
  const {
    bool: open,
    toTrue: openModal,
    toFalse: closeModal,
    toggle: toggleModal,
  } = useBool(false);

  return (
    ...
  )
};
```

## <a name="contributing"></a>Contributing

Want to help? Feel free to open an [Issue](https://github.com/andrewizbatista/use-bool/issues) or create a [Pull Request](<(https://github.com/andrewizbatista/use-bool/pulls)>) and let's get started 🚀

## <a name="license"></a>License

[MIT](https://github.com/andrewizbatista/use-bool/blob/main/LICENSE) © André Batista ([@andrewizbatista](https://github.com/andrewizbatista))
