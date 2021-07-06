# yum 安装软件
## mongodb
### 制作repo文件
> 在/etc/yum.repos.d/中新建文件 mongodb-org-${mongodb版本}.repo

``` yml
# 文件内容
[mongodb-org-${mongodb版本}]
# 名字固定
name=MongoDB Repository 
# 下载源地址
baseurl=https://repo.mongodb.org/yum/redhat/${系统版本}/mongodb-org/${mongodb版本}/x86_64/
# 是否需要验证
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-${mongodb版本}.asc
```

### 使用yum命令安装
``` yml
yum install -y mongodb-org
```

### 配置mongodb文件
> 在/etc/中新建文件 mongod.conf


### mongodb 无法启动原因及解决方案
https://blog.csdn.net/weixin_44486991/article/details/88710261

## nodejs

### 设置地址

``` yml
curl --silent --location https://rpm.nodesource.com/setup_16.x |  bash
```

### 安装

``` yml
yum -y install nodejs
```

### 清除

``` yml
yum clean all
rm -fv /etc/yum.repos.d/nodesource*
```

