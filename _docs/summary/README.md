## 1px

高清屏下用 1px 会显得比较粗，因为 dppx 大，单位像素上的点多了。通常我们可以使用伪元素定位，然后缩放的方法。
[例子](https://hduwkk.github.io/dist/1px)：
```css
/* 示例 */
/* 也可以利用媒体查询，缩放为1/2或者1/3  */
.border1px {
  position: relative;
  border: none;
}
.border1px::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  border: 1px solid $borderColor;
  transform: scale(0.5, 0.5);
  left: 0;
  top: 0;
  transform-origin: left top;
  border-radius: 2px;
}
```

## eslint + prettier

在 vue-cli 4.x 提供了使用 eslint + prettier 的配置，为了保存时自动格式化代码，可以在 vscode 中配置`editor.formatOnSave: true`以及`editor.codeActionsOnSave: {source.fixAll: true}`。
比如代码使用**单引号**(singleQuote),不用**分号**(semi), 我们可以在.prettier 中配置`semi: false, singleQuote: true`, 在.eslintrc.js 中配置`semi: ["error", "never"]`。`"eslint:recommended"`默认推荐使用单引号，所以不用单独配置。

然而有些冲突是不那么容易解决，比如`insertSpaceBeforeFunctionParenthesis`(函数名与括号间加个空格)。prettier 没有这个配置，你会发现自动格式化时，空格先删除后加上了。这里要么 eslint 飘红，要么 prettier 飘红。

虽然 prettier 官网上有解决方案 [点击进入](https://preview.mdnice.com/articles/)：
就是使用`prettier-eslint`来先 prettter 后 fix。但是我现场试验了一下发现并没有什么卵用。

后来我的方法是在项目中只使用 eslint 的 fix，关闭 prettier，不使用`editor.formatOnSave`,在需要格式化时手动使用 prettier。

当使用 prettier 作为 eslint 的 rule 时，函数名与括号之间就别加这个空格了。

::: details 部分翻译

Linters 不仅包括了代码质量规则，也包含了格式规则。使用 Prettier 时，格式规则是不必要的，甚至会起冲突。
幸好，通过预设的配置，可以很容易的关闭与 Prettier 冲突的或者不必要的规则。

> eslint-config-prettier、tslint-config-prettier、styleint-config-prettier

有些一般不推荐，但是在特定场合有用。首先，可以使用以下插件使你像 linter 的 rule 一样运行 Prettier

> eslint-plugin-prettier、tslint-plugin-prettier、styleint-prettier

这种方式的缺点：

- 代码出现飘红的曲线。Prettier 本意是让你忘记格式化，而不是去面对它。
- 比直接运行 Prettier 要慢
- They’re yet one layer of indirection where things may break.

最后，我们有工具，来先运行`prettier`然后立即运行`eslint --fix`。

> prettier-eslint、prettier-tslint、prettier-styleint

:::
