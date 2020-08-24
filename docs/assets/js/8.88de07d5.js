(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{351:function(e,t,r){"use strict";r.r(t);var i=r(42),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"eslint-prettier"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#eslint-prettier"}},[e._v("#")]),e._v(" eslint + prettier")]),e._v(" "),r("p",[e._v("在 vue-cli 4.x 提供了使用 eslint + prettier 的配置，为了保存时自动格式化代码，可以在 vscode 中配置"),r("code",[e._v("editor.formatOnSave: true")]),e._v("以及"),r("code",[e._v("editor.codeActionsOnSave: {source.fixAll: true}")]),e._v("。\n比如代码使用"),r("strong",[e._v("单引号")]),e._v("(singleQuote),不用"),r("strong",[e._v("分号")]),e._v("(semi), 我们可以在.prettier 中配置"),r("code",[e._v("semi: false, singleQuote: true")]),e._v(", 在.eslintrc.js 中配置"),r("code",[e._v('semi: ["error", "never"]')]),e._v("。"),r("code",[e._v('"eslint:recommended"')]),e._v("默认推荐使用单引号，所以不用单独配置。")]),e._v(" "),r("p",[e._v("然而有些冲突是不那么容易解决，比如"),r("code",[e._v("insertSpaceBeforeFunctionParenthesis")]),e._v("(函数名与括号间加个空格)。prettier 没有这个配置，你会发现自动格式化时，空格先删除后加上了。这里要么 eslint 飘红，要么 prettier 飘红。")]),e._v(" "),r("p",[e._v("虽然 prettier 官网上有解决方案 "),r("a",{attrs:{href:"https://preview.mdnice.com/articles/",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击进入"),r("OutboundLink")],1),e._v("：\n就是使用"),r("code",[e._v("prettier-eslint")]),e._v("来先 prettter 后 fix。但是我现场试验了一下发现并没有什么卵用。")]),e._v(" "),r("p",[e._v("后来我的方法是在项目中只使用 eslint 的 fix，关闭 prettier，不使用"),r("code",[e._v("editor.formatOnSave")]),e._v(",在需要格式化时手动使用 prettier。")]),e._v(" "),r("p",[e._v("当使用 prettier 作为 eslint 的 rule 时，函数名与括号之间就别加这个空格了。")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("部分翻译")]),e._v(" "),r("p",[e._v("Linters 不仅包括了代码质量规则，也包含了格式规则。使用 Prettier 时，格式规则是不必要的，甚至会起冲突。\n幸好，通过预设的配置，可以很容易的关闭与 Prettier 冲突的或者不必要的规则。")]),e._v(" "),r("blockquote",[r("p",[e._v("eslint-config-prettier、tslint-config-prettier、styleint-config-prettier")])]),e._v(" "),r("p",[e._v("有些一般不推荐，但是在特定场合有用。首先，可以使用以下插件使你像 linter 的 rule 一样运行 Prettier")]),e._v(" "),r("blockquote",[r("p",[e._v("eslint-plugin-prettier、tslint-plugin-prettier、styleint-prettier")])]),e._v(" "),r("p",[e._v("这种方式的缺点：")]),e._v(" "),r("ul",[r("li",[e._v("代码出现飘红的曲线。Prettier 本意是让你忘记格式化，而不是去面对它。")]),e._v(" "),r("li",[e._v("比直接运行 Prettier 要慢")]),e._v(" "),r("li",[e._v("They’re yet one layer of indirection where things may break.")])]),e._v(" "),r("p",[e._v("最后，我们有工具，来先运行"),r("code",[e._v("prettier")]),e._v("然后立即运行"),r("code",[e._v("eslint --fix")]),e._v("。")]),e._v(" "),r("blockquote",[r("p",[e._v("prettier-eslint、prettier-tslint、prettier-styleint")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);