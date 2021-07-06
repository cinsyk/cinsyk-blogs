# trojan 搭建记录

## 资源地址
* [trojan 管理端: https://github.com/Jrohy/trojan](https://github.com/Jrohy/trojan)
* [let's encrypt: https://certbot.eff.org/lets-encrypt/centosrhel7-nginx](https://certbot.eff.org/lets-encrypt/centosrhel7-nginx)
* [snapd 安装: https://snapcraft.io/docs/installing-snap-on-centos](https://snapcraft.io/docs/installing-snap-on-centos)
<!-- * nginx -->

## 安装步骤

* 安装trojan管理软件
``` yaml
# 安装/更新
source <(curl -sL https://git.io/trojan-install)

#卸载
source <(curl -sL https://git.io/trojan-install) --remove
```

* 安装加速
``` yaml
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh"
chmod +x tcp.sh
./tcp.sh
```


## nginx 反向代理

#### 修改端口

``` yaml
# 修改 /etc/systemd/system/trojan-web.service 配置文件
# 在 /usr/local/bin/trojan-web 后面添加 -p port
# 然后运行:
systemctl daemon-reload
systemctl restart trojan-web
```

#### nginx 配置
``` yaml
location /admin {
    proxy_pass   http://localhost:81/;
}
location ~* ^/(static|common|auth|trojan)/ {
    proxy_pass  http://localhost:81;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
}
# http强制跳转到https
if ( $remote_addr != 127.0.0.1 ){
    rewrite ^/(.*)$ https://example.com/$1 redirect;
}  
```