(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{558:function(s,t,n){"use strict";n.r(t);var a=n(16),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"目录与路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录与路径"}},[s._v("#")]),s._v(" 目录与路径")]),s._v(" "),n("h2",{attrs:{id:"相对路径与绝对路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相对路径与绝对路径"}},[s._v("#")]),s._v(" 相对路径与绝对路径")]),s._v(" "),n("ul",[n("li",[s._v("绝对路径：由根目录开头，如  /home/mrcode")]),s._v(" "),n("li",[s._v("相对路径：不是由根目录开头的，如 ./mrcode")])]),s._v(" "),n("h2",{attrs:{id:"目录的相关操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录的相关操作"}},[s._v("#")]),s._v(" 目录的相关操作")]),s._v(" "),n("p",[s._v("以下的特殊目录需要着重了掌握")]),s._v(" "),n("ul",[n("li",[n("code",[s._v(".")]),s._v("：代表此层目录")]),s._v(" "),n("li",[n("code",[s._v("..")]),s._v("：上一层目录")]),s._v(" "),n("li",[n("code",[s._v("-")]),s._v("：前一个工作目录")]),s._v(" "),n("li",[n("code",[s._v("~")]),s._v("：目前用户身份坐在的家目录")]),s._v(" "),n("li",[n("code",[s._v("~account")]),s._v("：表示 account 这个用户的家目录（account 是个账户名称）")])]),s._v(" "),n("p",[s._v("需要特别注意的是，在所有目录下都会看到两个目录 "),n("code",[s._v(". 与 ..")]),s._v("，当前目录和上一层目录。")]),s._v(" "),n("p",[s._v("那么 linux 中，根目录有没有上层目录存在？")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al /\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以看到这两个目录的属性一模一样，所以这两个目录其实都是同一个目录")]),s._v("\ndr-xr-xr-x.  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("224")]),s._v(" Oct  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":31 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ndr-xr-xr-x.  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("224")]),s._v(" Oct  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":31 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("那么下面讲解下几个常见的处理目录的指令：")]),s._v(" "),n("ul",[n("li",[s._v("cd：变换目录")]),s._v(" "),n("li",[s._v("pwd：显示当前目录")]),s._v(" "),n("li",[s._v("mkdir：建立一个新的目录")]),s._v(" "),n("li",[s._v("rmdir：删除一个空的目录")])]),s._v(" "),n("h3",{attrs:{id:"cd（change-directory）变换目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cd（change-directory）变换目录"}},[s._v("#")]),s._v(" cd（change directory）变换目录")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("Last login: Fri Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 04:01:50 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.105\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录 linux 后，每个账号都会在自己账号的家目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意看前面的符号 ~，这个表示在 家里")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上面使用 cd ../ 进入了上一层目录，那么这里 ~ 变成了 home。实际路径是  /home/账户家")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里直接使用 cd 不带参数，会默认回到家目录中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 现在在家，返回前一个目录，也就是 /home 目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n/home\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上次是从家出来的，这里再返回前一个目录，就又回到了家的目录中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n/home/mrcode\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"pwd（print-working-directory）-显示当前所在目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pwd（print-working-directory）-显示当前所在目录"}},[s._v("#")]),s._v(" pwd（print Working Directory） 显示当前所在目录")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study mail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/var/mail\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 带参数 P 是显示真实的路径，而不是连接（link）路径，然而 /var/mail 就是一个连接路径")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study mail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v(" -P\n/var/spool/mail\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过命令也能看到，连接到了 spool/mail 目录中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study mail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -ld /var/mail\nlrwxrwxrwx. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" Oct  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":21 /var/mail -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" spool/mail\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"mkdir-建立新目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mkdir-建立新目录"}},[s._v("#")]),s._v(" mkdir 建立新目录")]),s._v(" "),n("p",[s._v("语法如下")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-mp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 目录名称\n\n-m：配置文件案的权限，直接设定，不需要看预设权限（umask）的脸色\n-p：将该路径上所有的目录都创建出来（当然不存在的话）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("练习")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入临时目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp/\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不带参数 -p 不能创建多级目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" test1/test2/test3/test4\nmkdir: cannot create directory ‘test1/test2/test3/test4’: No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p test1/test2/test3/test4\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建目录时直接配置该目录的权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -m "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("711")]),s._v(" test2\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -ld test*\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这些是创建目录默认的权限")]),s._v("\ndrwxrwxr-x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" mrcode mrcode  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 04:32 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ndrwxrwxr-x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" mrcode mrcode "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 04:33 test1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个是创建目录时直接配置的权限")]),s._v("\ndrwx--x--x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" mrcode mrcode  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 04:35 test2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"rmdir-删除空的目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rmdir-删除空的目录"}},[s._v("#")]),s._v(" rmdir 删除空的目录")]),s._v(" "),n("p",[s._v("语法如下")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rmdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 目录名称\n\n-p：「上层」的「空目录」也一起删除\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("练习")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -ld test*\ndrwxrwxr-x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" mrcode mrcode  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 04:32 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ndrwxrwxr-x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" mrcode mrcode "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 04:33 test1\ndrwx--x--x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" mrcode mrcode  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 04:35 test2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该目录下无数据，可直接删除")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rmdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该目录下由多个目录，就无法阐述了，会报错")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rmdir")]),s._v(" test1\nrmdir: failed to remove ‘test1’: Directory not empty\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里使用 -p 删除最后一个目录，但是当再次查看的时候，test4 的上层空的目录都不在了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rmdir")]),s._v(" -p test1/test2/test3/test4/\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -ld test*\ndrwx--x--x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" mrcode mrcode "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 04:35 test2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 删除上级空目录是什么意思，下面再来体验下")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建了多个目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p test1/test2/test3/test4\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后在 test1 中创建了一个 txt 文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" test1/txt\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除的时候，就报错了，无法删除 test1，因为该目录下有 txt 文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但是注意，只是 test1 没有被删除， test2、test3、test4 还是被删除了的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rmdir")]),s._v(" -p test1/test2/test3/test4/\nrmdir: failed to remove directory ‘test1’: Directory not empty\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("但是如果想把该目录下所有的东西都删除呢？你可以使用指令 "),n("code",[s._v("rm -r test1")]),s._v(" 就能全部删掉了，\n相对来说，rmdir 没有这么危险")]),s._v(" "),n("h2",{attrs:{id:"关于执行文件路径的变量：-path"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于执行文件路径的变量：-path"}},[s._v("#")]),s._v(" 关于执行文件路径的变量："),n("code",[s._v("$PATH")])]),s._v(" "),n("p",[s._v("前面讲解 FHS 后，我们知道 ls 指令完整文件名为 /bin/ls（这是绝对路径），\n那么为什么我们可以在任何地方执行 /bin/ls 这个指令呢？这是因为换了变量 PATH 的能力")]),s._v(" "),n("p",[s._v("当我们执行一个指令的时候，系统会按照 PATH 的设定去每个 PATH 定义的目录下搜索对应的可执行文件\n（比如 ls），如果在 PATH 定义的目录中含有多个文件名为 ls 的可执行文件，那么先搜索到的被执行")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印变量的信息，使用 echo ,「$」表示接一个变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n/usr/lib64/qt-3.3/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/mrcode/.local/bin:/home/mrcode/bin\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意，每个账户的 path 值也是不一样的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo $PATH")]),s._v("\n/usr/lib64/qt-3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("仔细看上面的输出，无论哪个账户都有 /bin 或 /usr/bin 在 PATH 变量内。所以可以在任何地方使用 ls 指令")]),s._v(" "),n("p",[s._v("下面来几个范例来让你了解 PATH 很重要！")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先把 ls 移动到 /bin 目录之外去，再运行 ls 看能不能运行？")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv /bin/ls ../")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nbash: ls: 未找到命令"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n相似命令是： "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lz'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 现在已经报错找不到命令了，是因为 / 并不再 PATH 变量中")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但是可以通过路径来运行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /l")]),s._v("\nlib/   lib64/ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls 的确被移动到 根目录下了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里直接通过绝对路径运行指令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /ls")]),s._v("\nanaconda-ks.cfg  initial-setup-ks.cfg  initial-setup-ks-mrcode.cfg\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要想不用绝对/相对路径也能使用 ls ，那么将 根目录加入到 PATH 中即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 也可以使用 PATH="${PATH}:/"  来配置')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# PATH="$PATH:/"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nanaconda-ks.cfg  initial-setup-ks.cfg  initial-setup-ks-mrcode.cfg\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把 ls 移回原来的目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv /ls /bin/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可能会出现找不到指令了，没有关系，可能是因为指令参数被快取得关系")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只要 exit 再登入 su -  就可以使用了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 另外说一句，刚刚在命令行中把根目录添加到 PATH 中，不是永久的，退出后，再登录就失效了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\n-bash: /ls: 没有那个文件或目录\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 假设 /usr/local/bin/ls 与 /bin/ls 两个指令，哪个先被执行？")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以使用 echo $PATH 或则 ${PATH} 直接显示某一个变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${PATH}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里看哪一个目录在最前面，就是哪个目录下的 ls 先执行")]),s._v("\n-bash: /usr/lib64/qt-3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin: 没有那个文件或目录\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PATH")]),s._v("\nbash: "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 未找到命令"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])]),n("p",[s._v("为什么不建议把 "),n("code",[s._v(".")]),s._v(" 当前目录添加到 PATH 路径中？这其实是为了安全起见，不建议添加到 PATH 中，\n比如在 /tmp 目录下，因为是大家都可以写的，有人搞破坏，写了一个 ls 的指令，但是里面写的是删除文件的，\n这样就会先收到这个恶意的命令")]),s._v(" "),n("p",[s._v("由上面的示例，我们可以知道几件事情：")]),s._v(" "),n("ul",[n("li",[s._v("不同身份使用者预设的 PATH 不同，默认能够随意执行的指令也不同（如 root 与 mrcode)")]),s._v(" "),n("li",[s._v("PATH 是可以修改的")]),s._v(" "),n("li",[s._v("使用绝对路径或相对路径直接指定某个指令文件名来执行，会比搜寻 PATH 来的正确")]),s._v(" "),n("li",[s._v("指令应该要放置到正确的目录下，执行才比较方便")]),s._v(" "),n("li",[s._v("当前目录「.」建议不要放到 PATH 中")])]),s._v(" "),n("p",[s._v("与 PATH 更详细的变量会在后续的 bash shell 中详细说明")])])}),[],!1,null,null,null);t.default=e.exports}}]);