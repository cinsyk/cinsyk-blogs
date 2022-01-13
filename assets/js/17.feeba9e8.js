(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{414:function(s,t,a){"use strict";a.r(t);var e=a(55),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"systemctl-使用手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-使用手册"}},[s._v("#")]),s._v(" systemctl 使用手册")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("Liunx 一直使用的 init 进程启动时间长且启动脚本复杂，Lennart Poettering 开发了 Systemd 用来解决这些问题，Systemd 的设计目标是为系统的启动和管理提供一套完整的解决方案。\n"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰：Systemd 入门教程：命令篇"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[s._v("#")]),s._v(" 常用指令")]),s._v(" "),a("h3",{attrs:{id:"检查版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查版本"}},[s._v("#")]),s._v(" 检查版本")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"启动程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动程序"}},[s._v("#")]),s._v(" 启动程序")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v(" systemctl start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("程序名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"查看程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看程序"}},[s._v("#")]),s._v(" 查看程序")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v(" systemctl status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("程序名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"停止程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止程序"}},[s._v("#")]),s._v(" 停止程序")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v(" systemctl stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("程序名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"重新启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新启动"}},[s._v("#")]),s._v(" 重新启动")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v(" systemctl restart "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("程序名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"重新加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新加载"}},[s._v("#")]),s._v(" 重新加载")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v(" systemctl reload "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("程序名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开机自启"}},[s._v("#")]),s._v(" 开机自启")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v("systemctl enable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("程序名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);