# systemctl 使用手册

## 简介
Liunx 一直使用的 init 进程启动时间长且启动脚本复杂，Lennart Poettering 开发了 Systemd 用来解决这些问题，Systemd 的设计目标是为系统的启动和管理提供一套完整的解决方案。
[阮一峰：Systemd 入门教程：命令篇](http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html)

## 常用指令

### 检查版本
``` yml
 systemctl -v
```

### 启动程序
``` yml
 systemctl start [程序名]
```

### 查看程序
``` yml
 systemctl status [程序名]
```

### 停止程序
``` yml
 systemctl stop [程序名]
```
### 重新启动
``` yml
 systemctl restart [程序名]
```

### 重新加载
``` yml
 systemctl reload [程序名]
```

### 开机自启
``` yml
systemctl enable [程序名]
```

