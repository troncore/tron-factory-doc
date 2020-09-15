# 介绍

[TRON FACTORY](http://47.252.80.127:8080) 提供了一键发链的解决方案， 帮助您快速构建更稳定、 安全的生产级区块链环境， 避免在区块链部署、 运维、 管理、 应用开发等方面的挑战， 使您更专注于核心业务创新， 并实现业务快速上链。

#### 功能

- 创世账户
- 节点管理
  - 签名算法
  - 添加节点
  - 部署节点
    - 启动节点
    - 暂停节点
    - 重置节点
- 配置
  - 快速配置
  - 自定义配置
    - 基础配置
    - HTTP/RPC配置
    - 数据库基础配置
    - P2P配置
    - 模块定制化

## 起步

你需要在本地安装 [node](http://nodejs.org/) 、[yarn](https://yarn.bootcss.com/docs/install/#mac-stable)、[git](https://git-scm.com/)、expect 和 [maven](http://maven.apache.org/)（推荐当前官网稳定版本，不推荐旧版本 Node,否则项目无法正常启动）。   
前端技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue 2.6](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)  
后端技术栈基于 [sprint-boot](https://spring.io/projects/spring-boot)、[maven](https://maven.apache.org/guides/mini/index.html) 和 [lightbend](https://github.com/lightbend/config)  
提前了解和学习这些知识会对使用本项目有很大的帮助。

#### 节点服务器

基于java-tron部署的应用链需要确保部署服务器安装恰当的依赖环境（并非TRON FACTORY运行环境）。
- JDK1.8(暂不支持 JDK 1.9+)
- 在Linux Ubuntu系统上(例如Ubuntu 16.04.4 LTS), 要确保你的服务器已经安装了[Oracle JDK 8](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04), 而不是Open JDK 8. 如果你使用Open JDK 8去编译代码，编译结果可能会失败。
- 需要打开UDP端口
- 需要最少2个CPU

## 安装

```bash
# 克隆项目
git clone http://39.106.174.213/kangjiancheng/tron-factory.git

# 进入项目目录
cd tron-factory

# 安装依赖
./install.sh

# 启动服务：http://localhost:8080
./deploy.sh
```

现在你可以[开始](zh/quick-start.md) 去搭建一条私有链。

> 通过TRON FACTORY部署的节点在服务器运行的默认路径为`～/java-tron-timeStamp-id`（其中 timeStamp 为添加节点时的时间戳，id 为节点的ID）目录下，节点的运行日志可以到相应服务器上查看  

#### 浏览器支持

请使用最新版chrome浏览器.

#### 更新日志

最新稳定版本：2.6.12  
每个版本的更新日志见 [GitHub]()。
