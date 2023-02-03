## 若报以下错误则将 node 由 12.16.3 换成 19.2.0
> Error: Child compilation failed:
  [eslint] Must use import to load ES Module: C:\Users\fli\Desktop\React\first-react\node_modules\@eslint\eslintrc\universal.js
  require() of ES modules is not supported.
  require() of C:\Users\fli\Desktop\React\first-react\node_modules\@eslint\eslintrc\universal.js from C:\Users\fli\Desktop\React\first-react\node_modules\eslint\lib\linter\linter.js is an ES module file as it is a .js file who  se nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
  Instead rename universal.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from C:\Users\fli\Desktop\React\first-react\node_modules\@eslint\eslintrc\package.json.

