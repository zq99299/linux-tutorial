# 开机流程、模块管理与 Loader

系统开机其实是一项非常复杂的程序，因为核心需要检测硬件并加载适当的驱动程序后，接下来必须要调用程序来准备好系统运行的环境，让使用者能够顺利的操作整部主机系统。

如果能够理解开机原理，当系统出现问题时，就能很快速的修复系统，而且还能顺利的配置多重操作系统的多重引导问题，为了多重引导的问题，那么就需要学习 grub2 这个 Linux 下优秀的开机管理程序（boot loader）

在系统运行期间，也需要学会管理核心模块

::: tip
本章没有接触过的东西较多，笔者基本上全程都很难理解在讲什么，只好大部分都直接抄下来的。只有小部分能跟着练习，因此感觉看看就好
:::