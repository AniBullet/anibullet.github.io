---
title: 常见问题
index: false
icon: ask
category:
  - 使用指南
---

## 常见问题

### 1. 为什么安装后打开工具，看不到面板也没有报错？

::: tip

首先确认重启了Max，或者你知道该怎么运行该工具脚本ms

重启Max后还没有，可能是多屏导致界面位置在屏幕外，

（0.9.6版本后做了初次打开位置保护）

可在菜单栏点击    ``工具窗口  位置重置``

![img01](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/20221218033444.png)

:::

### 2. 为什么这个卸载以后每次打开还是会有啊？

::: tip

可能是卸载不干净，请手动删除3dsMax 安装根目录下的：

``*/Scripts/BulletScripts`` 文件夹

``*/Scripts/Startup/BulletKeyTools.ms`` 文件

``*/UI_ln\Icons\cstoolIcons`` 文件夹

:::

### 3.  怎么删除(备份)配置文件？

::: tip

右键工具面板或者点击设置，点击打开“配置文件"目录，``BulletConfig.ini`` 即配置文件

或者直接打开路径：``%localappdata%\Autodesk\3dsMax\{max版本号}\ENU{语言}\``

:::

### 4. 为什么帧栏范围不实时改变？

::: tip

可能因为杀毒工具禁用了回调，如max杀毒卫士，请点开主面板右下方“插件管理”，并按下图操作:
![img02](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Untitled.png)
![img03](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Untitled_1.png)

:::

### 5. 为什么切换语言版本后脚本设置没了

::: tip

因为配置文件放在跟语言版本相关的目录，

为啥不放通用地方呢，~~因为权限原因无奈之举...~~ 分开配置更灵活~

可以复制对应语言版本下配置文件到新的目录：

``%localappdata%\Autodesk\3dsMax\{max版本号}\ENU{语言}\BulletConfig.ini``

当然，我觉得还不如重新点几下快= =

:::

### 6. 运行报错 ``dotNet runtime exception ...... gitee.com``

::: tip

可能因为网络原因，无法检测最新版本，

工具使用无影响，可在设置中关闭检查更新，离线使用。

当然还是建议自动检测更新，因为真的很方便~

可以尝试检查网络 ( 看能否登陆码云 [gitee.com](http://gitee.com) ) 或者重装插件。

:::

### 7. 可能打开工具失败，弹出 Max 安全工具的报错 (如不是请忽略这条)

::: tip

因为高版本3dsmax自带的安全工具会阻隔dotnet接口，直接禁了 System.IO.File，所以工具打开失败，建议关闭自带安全工具，或者取消拦截dotnet接口。（本工具自带杀毒功能）  
![img04](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-05-13_19-46-04.png)  

![img05](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-05-13_19-47-20.png)
![img06](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-05-13_19-47-44.png)  

建议:  
1. 关闭对 dotnet 接口的阻拦  
2. 重启 3dsmax  

:::

### 8. 打开工具报错，并且没有显示工具主界面

::: tip 

![img07](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-06-08_03-44-30.png)



可尝试暂时移除配置文件:  
1. 首先关闭所有 3dsMax
2. 资源管理器粘贴下面路径, ``%localappdata%\Autodesk\3dsMax\2014 - 64bit\ENU`` 找到 BulletConfig.ini
3. 移动到其他文件夹，方便恢复部分设置
4. 重启 3dsMax，打开插件

ps：0.9.9.7 之后版本添加了报错提示出错脚本名，略微方便定位问题

:::