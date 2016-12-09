---
layout: page
title: 简介
---

leap是一个轻量级的微服务api开发框架，可以方便快速开发微服务api，并且支持按照swagger标准生成api文档。

## 简单的依赖配置

在一个新的maven工程中，只需编辑pom.xml,添加资源库地址(如果已经在全局设置leap的资源库地址,这里也可以不配置)：

```xml
<repositories>
    <!-- leap快照资源库 -->
   <repository>
        <id>leap-snapshots</id>
        <url>https://raw.githubusercontent.com/leapframework/repo/master/snapshots</url>
        <snapshots>
            <enabled>true</enabled>
            <updatePolicy>always</updatePolicy>
            <checksumPolicy>warn</checksumPolicy>
        </snapshots>
   </repository>
    
    <repository>
        <id>leap-releases</id>
        <url>https://raw.githubusercontent.com/leapframework/repo/master/releases</url>
        <releases>
            <enabled>true</enabled>
            <updatePolicy>never</updatePolicy>
            <checksumPolicy>warn</checksumPolicy>
        </releases>
    </repository>
</repositories>
```

添加如下依赖:

```xml
<dependency>
    <groupId>org.leapframework</groupId>
    <artifactId>leap</artifactId>
    <version>${leap.version}</version>
    <type>pom</type>
</dependency>
```

## 优秀的运行性能

在目前主流的开发框架中，spring mvc + mybatis + velocity (smv)是性能相当优秀的开发组合， 我们已经对比过leap和smv的全栈性能和各个模块单独的性能，对比结果如下: 

![性能对比](/images/throughput_chat.png)
    
    
## 便捷的安全配置


登录校验，CSRF校验等安全校验功能，只需要一行代码便可启用和关闭，便捷轻松。
   
* 内置支持CSRF校验，一行代码启用CSRF校验
* 内置登录校验，一行代码启用登录校验，轻松实现用户身份认证
* 内置HTML5 CORS标准支持，简单注解实现跨域资源共享
* 模板引擎自动防XSS攻击，可以更加专注于业务逻辑

## 良好的开发体验

leap是全栈统一风格设计，基于html注释的模板引擎，基于ActiveRecord的ORM框架，高度智能的参数绑定，遵从约定大于配置的原则，代码简洁，使用轻松。

* 模板语法简单，提高开发效率；静态资源自动标识版本，不用再与客户端缓存做斗争
* mvc智能简单的参数绑定，遵循约定大于配置的原则，代码简洁，极少冗余注解
* 基于ActiveRecord的ORM框架，零sql完成绝大多数数据操作
* 智能控制反转和依赖注入，无需关注对象生命周期
* 框架内置语言包，大量工具类可供使用