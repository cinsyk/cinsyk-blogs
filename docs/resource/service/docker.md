# docker 学习
## docker 
> docker是什么。。。。。

#### 程序相关
``` yml
# 配置文件
"/etc/docker/daemon.json"

# systemctl 方式

# 守护进程重启
sudo systemctl daemon-reload

# 重启docker服务
sudo systemctl restart docker

# 关闭docker
sudo systemctl stop docker

# 启动docker
sudo systemctl start docker

# service 方式

# 重启docker服务
sudo service docker restart

# 关闭docker
sudo service docker stop

# 启动docker
sudo service docker start
```

#### 镜像相关
``` yml
# 删除镜像
docker rmi [image]
docker image rm [image]

# 清理镜像
docker image prune

# 删除所有没有用的镜像，而不仅仅是临时文件
docker image prune -a 

# 强制删除镜像文件
docker image prune -f

```

#### 容器相关
``` yml
# 查看容器
docker ps
docker ps -a

# 停用容器
docker stop xxxx
docker stop $(docker ps -q)

# 删除容器
docker rm xxxx
docker rm $(docker ps -aq)

# 清空容器
docker stop $(docker ps -q) & docker rm $(docker ps -aq)
```

#### 文件拷贝
> 不管容器有没有启动，拷贝命令都会生效。

``` yml
# 从容器里面拷文件到宿主机
docker cp [容器名]:[容器路径] [宿主路径]

# 从宿主机拷文件到容器里面
docker cp [宿主路径] [容器名]:[容器路径]
```

## podman 

> CentOS8 以上的版本默认已经安装一个等同于 Docker的容器解决方案，这个就是Podman。
> Podman可以直接使用 Docker 镜像 且 命令非常相似

#### 配置文件

``` yml
/etc/containers/registries.conf 
```

## 自建仓库

* 仓库端
``` yml
# 拉取镜像
docker pull registry 

# 运行docker私有仓库
docker run -d -v /registry:/var/lib/registry -p 5000:5000 --restart=always --privileged=true --name registry registry:latest
```

* 使用端
``` yml

# 配置http传输
"insecure-registries": ["仓库ip:5000"]

# 查看镜像
curl [仓库ip]:5000/v2/_catalog

# 上传镜像
docker tag [镜像名] [tag名]
docker push [tag名]
```

## 参考文章
https://blog.websoft9.com/podman-quickstart/
https://www.cnblogs.com/edwardloveyou/p/13293377.html