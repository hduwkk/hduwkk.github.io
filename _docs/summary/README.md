## 1px

高清屏下用 1px 会显得比较粗，因为 dppx 大，单位像素上的点多了。通常我们可以使用伪元素定位，然后缩放的方法。
[例子](https://hduwkk.github.io/dist/#/1px)：
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
.border1px-bottom::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  border: 1px solid $borderColor;
  transform: scale(0.5);
  left: 0;
  bottom: 0;
  transform-origin: left top;
}
```

## ios安全区域
[Link](https://hduwkk.github.io/saveArea.html)：

## 安卓文字偏上
[Link](https://hduwkk.github.io/dist/#/text)
在文字较小的时候容易出现，一说是文字大小奇数所致，也有大佬指出是文字在content-area内部渲染时已经偏移所致。解决方案: miui8+时使用miui字体或者使用系统默认字体sans-serif;

## eslint + prettier
在 vue-cli 4.x中提供了多种`linter/formatter`配置:
1. eslint
2. eslint + standard config
3. eslint + prettier

#### 先说说eslint的配置
配置方式: `.eslintrc.*` 结合 注释`例如 (// eslint-disable-next-line no-unused-vars)`、`/* eslint quotes: ["error", "double"], curly: 2 */`

多种信息的配置: 运行环境env、脚本执行期间访问的额外全局变量globals、启动的规则rules。

```json
{
  "rules": {
    // "off" 或 0 表示关闭规则
    // "warn" 或 1 表示开启规则，只做警告处理
    // "error" 或 2 表示开启规则，触发时程序会退出
    "semi": "error"
  },
  "globals": {
    // 在eslint中先定义全局变量，否则将会发出警告no-undef
    "wkkBridage": "writable",
    "echarts": "readonly"
  },
  "plugins": ["plugin1", "eslint-plugin-plugin2"], // 插件，可以省略eslint-plugin-前缀
  "extends": "eslint:recommended"
}
```

只启用eslint是比较简单的，eslint + prettier集成可能会遇到一些问题。
一些问题容易解决，只要配置好配置文件就可以。为了保存时自动格式化代码，可以在 vscode 中配置`editor.formatOnSave: true`以及`editor.codeActionsOnSave: {source.fixAll: true}`。
比如代码使用**单引号**(singleQuote),不用**分号**(semi), 我们可以在.prettier 中配置`semi: false, singleQuote: true`, 在.eslintrc.js 中配置`semi: ["error", "never"]`。`"eslint:recommended"`默认推荐使用单引号，所以不用单独配置。

然而有些冲突是不那么容易解决，比如`insertSpaceBeforeFunctionParenthesis`(函数名与括号间加个空格)。prettier 没有这个配置，你会发现自动格式化时，空格先删除后加上了。这里要么 eslint 飘红，要么 prettier 飘红。

虽然 prettier 官网上有解决方案 [点击进入](https://preview.mdnice.com/articles/)：
就是使用`prettier-eslint`来先 prettter 后 fix。但是我现场试验了一下发现并没有什么卵用。

此时推荐的解决方案:
1. 方案一：保存时候autofix, 同时format。但是不使用Prettier来format, 可以使用vetur来format，prettier只格式化html、css等，此外.js、.ts文件也禁用prettier格式化
2. 方案二: 保存时候autofix，提交前手动使用Prettier的format，然后提交。

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

## dppx、dpr、物理像素、设备像素、css像素傻傻搞不清楚？
TODO

## 手机适配 rem、vm 以及 px与(rem | vm)的结合

## 跨域问题
字体文件也会跨域？
什么时候会跨域？
跨域的解决方法？
简单请求与非简单请求？

## 缓存策略
TODO

## 软键盘的处理
TODO

## app与webview的交互
TODO

## 文件上传
TODO

## SVG动画入门
TODO
