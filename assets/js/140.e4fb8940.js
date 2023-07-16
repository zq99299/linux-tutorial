(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{647:function(v,_,e){"use strict";e.r(_);var p=e(16),t=Object(p.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"centos-7-x-预设启动的服务简易说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-x-预设启动的服务简易说明"}},[v._v("#")]),v._v(" CentOS 7.x 预设启动的服务简易说明")]),v._v(" "),e("p",[v._v("软件很多，无法介绍完所有的，这里仅介绍几个很常见的 daemons。其他的可以使用 "),e("code",[v._v("systemctl list-unit-files --type=service")]),v._v(" 去查询")]),v._v(" "),e("p",[v._v("下面的建议是针对 Linux 单机服务器的角色来说的，不是桌上型的环境")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("abrtd：")]),v._v(" "),e("p",[v._v("（系统）abrtd 服务可以提供使用者一些方式，让使用者可以针对不同的应用软件去设计错误登录的机制，当软件产生问题时，用户可以根据 abrtd 的登录档来进行错误克服的行为。还有其他的 abrt-xxx.service 均是使用该服务来加强应用程序的 debug 任务的")])]),v._v(" "),e("li",[e("p",[v._v("accounts-daemon：可关闭")]),v._v(" "),e("p",[v._v("（系统）使用 accountsservice 计划所提供的一系列 D-Bus 界面来进行使用者账户信息的查询。基本上是与 useradd、usermod、userdel 等软件有关")])]),v._v(" "),e("li",[e("p",[v._v("alsa-x：可关闭")]),v._v(" "),e("p",[v._v("（系统）开头为 alsa 的服务有不少，这些服务大部分都与音效有关。一般来说，服务器不开图形界面的话，都可以关闭")])]),v._v(" "),e("li",[e("p",[v._v("atd：")]),v._v(" "),e("p",[v._v("（系统）单一的例行性工作排程，请参考第 15 章，抵挡机制的配置文件在 "),e("code",[v._v("/etc/at.{allow,deny}")])])]),v._v(" "),e("li",[e("p",[v._v("auditd：")]),v._v(" "),e("p",[v._v("（系统）可以让 SELinux 的稽核信息写入 "),e("code",[v._v("/var/log/audit/audit.log")]),v._v(" 中")])]),v._v(" "),e("li",[e("p",[v._v("avahi-daemon：可关闭")]),v._v(" "),e("p",[v._v("（系统）客户端无法，可以通过 Zeroconf 自动的分析与管理网络。Zeroconf 常用在笔记本电脑与行动装置上")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("brandbot-rhel-*")]),v._v("：")]),v._v(" "),e("p",[v._v("（系统）大多用于开机过程中所需要的各种侦测环境的脚本，同时也提供网络界面的启动与关闭")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("chronyd ntpd ntpdate")]),v._v("：")]),v._v(" "),e("p",[v._v("（系统）网络校正时间服务，一般来说，你可能需要的只有 chronyd")])]),v._v(" "),e("li",[e("p",[v._v("cpupower：")]),v._v(" "),e("p",[v._v("（系统）提供 CPU 的运行规范。可参考 "),e("code",[v._v("/etc/sysconfig/cpupower")]),v._v(" 的信息")])]),v._v(" "),e("li",[e("p",[v._v("cups：可关闭")]),v._v(" "),e("p",[v._v("（系统/网络）用来管理打印机的服务，可以提供网络联机的功能，类似打印服务器的功能，可以在 Linux 本机上面浏览 http://localhost:631 来管理打印机")])]),v._v(" "),e("li",[e("p",[v._v("dbus：")]),v._v(" "),e("p",[v._v("（系统）使用 D-Bus 的方式在不同的应用程序之间传送信息，使用的方向列入应用程序间的信息传递、每个用户登录时提供的信息数据等")])]),v._v(" "),e("li",[e("p",[v._v("dm- event  multipathd：")]),v._v(" "),e("p",[v._v("（系统）监控设置对应表（device mapper）的主要服务，如果关掉，就无法让 Linux 使用外围设备和存储设备了")])]),v._v(" "),e("li",[e("p",[v._v("dmraid-activation mdmonitor：")]),v._v(" "),e("p",[v._v("（系统）用来启动 Softwar RAID 的重要服务")])]),v._v(" "),e("li",[e("p",[v._v("dracut-shutdown：")]),v._v(" "),e("p",[v._v("（系统）用来处理 initramfs 的相关行为，与开机流程相关性较高")])]),v._v(" "),e("li",[e("p",[v._v("ebtables")]),v._v(" "),e("p",[v._v("（系统/网络）通过类似 iptables 这种防火墙规则的设置方式，设计网络卡作为桥接时的封包分析政策。其实就是防火墙，不过与下面说到的防火墙不太一样，如果没有使用虚拟化，或则启用了 firewalld，这个服务可以不启动")])]),v._v(" "),e("li",[e("p",[v._v("emergency rescue：")]),v._v(" "),e("p",[v._v("（系统）进入紧急模式或则是救援模式的服务")])]),v._v(" "),e("li",[e("p",[v._v("firewalld：")]),v._v(" "),e("p",[v._v("（系统/网络）防火墙，以前有 iptables 与 ip6tables 等防火墙机制，新的 firewalld 搭配 firewall-cmd 指令，可以快速建立好防火墙系统，因此 CentOS 7.1 之后，iptables 服务的启动脚本已经被忽略了，请使用 firewalld 来取代 iptables")])]),v._v(" "),e("li",[e("p",[v._v("gdm：")]),v._v(" "),e("p",[v._v("（系统）GNOME 的登录管理员，就是图形界面上一个很重要的登录管理服务")])]),v._v(" "),e("li",[e("p",[v._v("getty@：")]),v._v(" "),e("p",[v._v("（系统）在本机能产生几个文字界面 tty 登录的服务")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("hyper* ksm* libvirrt* vmtoolsd")]),v._v(":")]),v._v(" "),e("p",[v._v("（系统）建立虚拟机有关的许多服务，如果不玩虚拟机就可以关闭。这些服务时让实体机器来建立虚拟机的")])]),v._v(" "),e("li",[e("p",[v._v("irqbalance：")]),v._v(" "),e("p",[v._v("（系统）如果系统是多核心的硬件，那么该服务需要启动，可以自动的分配系统中断（IRQ）之类的硬件资源")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("iscsi*")])]),v._v(" "),e("p",[v._v("（系统）可以关注来自网络驱动器机的服务。可以在系统内仿真好贵的 SAN 网络驱动器。如果确定没有挂载这种网络驱动器，也可以关闭")])]),v._v(" "),e("li",[e("p",[v._v("kdump：可关闭")]),v._v(" "),e("p",[v._v("（系统）在安装 CentOS 章节讲过，主要是 Linux 核心如果出错时，用来记录内存的东西。可以不启用，除非你是核心黑客")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("lvm2-*")]),v._v(":")]),v._v(" "),e("p",[v._v("（系统）与 LVM 相关性较高的许多服务，不能关闭")])]),v._v(" "),e("li",[e("p",[v._v("microcode：")]),v._v(" "),e("p",[v._v("（系统）Intel 的 CPU 会提供一个外挂的微指令集提供系统运行，如果没有下载 Intel 相关的指令文件，就不需要启动")])]),v._v(" "),e("li",[e("p",[v._v("ModemManager network NetworkManager*：")]),v._v(" "),e("p",[v._v("（系统/网络）主要是调制调节器、网络设置等服务、进入 CentOS 7 之后，系统似乎不太希望我们使用 network 服务了，比较建议的使用 networkManager 搭配 nmcli 指令来处理网络设置。NetworkManager 要开，而 network 不用开")])]),v._v(" "),e("li",[e("p",[v._v("quotaon：")]),v._v(" "),e("p",[v._v("（系统）启动 Quota 要用到的服务")])]),v._v(" "),e("li",[e("p",[v._v("rc-local：")]),v._v(" "),e("p",[v._v("（系统）兼容与 "),e("code",[v._v("/etc/rc.d/rc.local")]),v._v(" 的调用方式，只是要让 "),e("code",[v._v("/etc/rc.d/rc.local")]),v._v(" 具有 x 的权限后，该服务才能真的运行，否则写目录的脚本还是不会运行")])]),v._v(" "),e("li",[e("p",[v._v("rsyslog：")]),v._v(" "),e("p",[v._v("（系统）可以记录系统所产生的各项信息，包括 "),e("code",[v._v("/var/log/messages")]),v._v(" 内几个重要的日志")])]),v._v(" "),e("li",[e("p",[v._v("smartd：")]),v._v(" "),e("p",[v._v("（系统）可以自动的侦测硬盘的状态，如果硬盘发生问题，还可以自动的回报给系统管理员，很重要，不要关闭")])]),v._v(" "),e("li",[e("p",[v._v("sysstat")]),v._v(" "),e("p",[v._v("（系统）我们的系统有个名为 sar 的指令会记载某些时间点下，系统的资源使用情况，包括 CPU、流量、输入输出量等，当 systat 服务启动后，这些记录的数据才能写入到记录文件 log 中去")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("systemd-*")])]),v._v(" "),e("p",[v._v("（系统）大概都是属于系统运行过程中所需要的服务，没有必要不要去动他们")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("plymount* upower")])]),v._v(" "),e("p",[v._v("（系统）与图形界面的使用相关性较高，没启动图形界面时，可以暂时不管他们")])])]),v._v(" "),e("p",[v._v("如上是 CentOS 7.x 预设启动的，很多是针对桌面计算机所设计的，所以在优化时要注意他们的功能")]),v._v(" "),e("p",[v._v("下面一些无法可能在你的系统中的服务，但是预设没有启动。只是简介，具体的需要自行查询相关文件")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("dovecot:")]),v._v(" "),e("p",[v._v("（网络）可以设置 POP3/IMAP 等收信服务，如果你的主机是 email server 才需要这个服务")])]),v._v(" "),e("li",[e("p",[v._v("httpd：")]),v._v(" "),e("p",[v._v("（网络）可以让你的 LInux 服务成为 www server")])]),v._v(" "),e("li",[e("p",[v._v("named")]),v._v(" "),e("p",[v._v("（网络）领域域名服务器（Domain Name System）的服务，非常重要，但是设置非常困难")])]),v._v(" "),e("li",[e("p",[v._v("nfs nfs-server")]),v._v(" "),e("p",[v._v("（网络）Network Filesystem，是 Unix-Like 之间互相作为网络驱动器的一个功能")])]),v._v(" "),e("li",[e("p",[v._v("smb nmb")]),v._v(" "),e("p",[v._v("（网络）可以让 Linux 仿真为 windows 上面的网络邻居。如果 Linux 主机想要作为 windows 客户端的网络驱动器服务器，就可以玩玩这个")])]),v._v(" "),e("li",[e("p",[v._v("vsftpd")]),v._v(" "),e("p",[v._v("（网络）作为文件传输服务器 FTP 的服务")])]),v._v(" "),e("li",[e("p",[v._v("sshd")]),v._v(" "),e("p",[v._v("（网络）远程联机服务器的软件功能，该通信协议比 telnet 好的地方在于 sshd 在传送资源时可以进行加密")])]),v._v(" "),e("li",[e("p",[v._v("rpcbind")]),v._v(" "),e("p",[v._v("（网络）达成 RPC 协议的重要服务，包括 NFS、NIS 等等都需要它")])]),v._v(" "),e("li",[e("p",[v._v("postfix")]),v._v(" "),e("p",[v._v("（网络）寄件的邮件主机，因为系统会产生很多的 email 信息，例如  crond、atd 就会发送 email 给本机用户，即使你不是 mail server 也是要启动该服务的")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);