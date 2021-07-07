(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{373:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"yum-安装软件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum-安装软件"}},[t._v("#")]),t._v(" yum 安装软件")]),t._v(" "),s("h2",{attrs:{id:"mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[t._v("#")]),t._v(" mongodb")]),t._v(" "),s("h3",{attrs:{id:"制作repo文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#制作repo文件"}},[t._v("#")]),t._v(" 制作repo文件")]),t._v(" "),s("blockquote",[s("p",[t._v("在/etc/yum.repos.d/中新建文件 mongodb-org-${mongodb版本}.repo")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mongodb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mongodb版本"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 名字固定")]),t._v("\nname=MongoDB Repository \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载源地址")]),t._v("\nbaseurl=https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//repo.mongodb.org/yum/redhat/$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("系统版本"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/mongodb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("org/$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mongodb版本"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/x86_64/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否需要验证")]),t._v("\ngpgcheck=1\nenabled=1\ngpgkey=https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//www.mongodb.org/static/pgp/server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mongodb版本"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".asc\n")])])]),s("h3",{attrs:{id:"使用yum命令安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用yum命令安装"}},[t._v("#")]),t._v(" 使用yum命令安装")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("yum install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y mongodb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("org\n")])])]),s("h3",{attrs:{id:"配置mongodb文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置mongodb文件"}},[t._v("#")]),t._v(" 配置mongodb文件")]),t._v(" "),s("blockquote",[s("p",[t._v("在/etc/中新建文件 mongod.conf")])]),t._v(" "),s("h3",{attrs:{id:"mongodb-无法启动原因及解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-无法启动原因及解决方案"}},[t._v("#")]),t._v(" mongodb 无法启动原因及解决方案")]),t._v(" "),s("p",[t._v("https://blog.csdn.net/weixin_44486991/article/details/88710261")]),t._v(" "),s("h2",{attrs:{id:"nodejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[t._v("#")]),t._v(" nodejs")]),t._v(" "),s("h3",{attrs:{id:"设置地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置地址"}},[t._v("#")]),t._v(" 设置地址")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("curl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("silent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("location https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//rpm.nodesource.com/setup_16.x "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("  bash\n")])])]),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y install nodejs\n")])])]),s("h3",{attrs:{id:"清除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除"}},[t._v("#")]),t._v(" 清除")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("yum clean all\nrm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fv /etc/yum.repos.d/nodesource*\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);