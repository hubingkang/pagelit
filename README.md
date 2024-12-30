# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

<!--
我现在是一个 vite + react 的新起项目，我现在想要实现功能如下：

实现的是一个图片生成编辑器。可以在一些模版上添加一些文字，生成一张图片。可以对模版的一些参数调节。以及对文字的调节。

1. 页面整个是一个编辑器
   - 左边是一个模版区域，给一些常用模版
   - 中间是一个预览区域
   - 右边是一个参数区域，可以对模版的一些参数调节
2. 生成的图片的最终效果是一本书上某一空白的页面上添加一些文字
   - 书本像是真正的书本一样，包括纸张类似普通纸张的样式效果
   - 支持加一些光影效果，像是在真实情况下，阳光照在书本上的样子
   - 完全使用 css 效果来实现
   - 文字可以调节颜色，大小，位置，字体等等 -->
