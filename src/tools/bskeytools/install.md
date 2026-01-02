---
title: 安装指南
icon: download
order: 2
category:
  - BsKeyTools
tag:
  - 安装
  - 配置
---

# 安装指南

BsKeyTools 支持自动安装和手动安装两种方式。

---

## 🤖 自动安装（推荐）

### 步骤

1. 前往 [GitHub Releases](https://github.com/AniBullet/BsKeyTools/releases/latest) 下载最新版本
2. 解压后运行 `_BsKeyTools.exe`
3. 在安装界面选择你的 3ds Max 版本
4. 点击 **安装** 按钮
5. 重启 3ds Max

![自动安装演示](https://raw.githubusercontent.com/AniBullet/BsKeyTools/main/SetupPrev.gif)

::: warning 注意
- 安装前请关闭 3ds Max
- 如有杀毒软件拦截，请添加信任
:::

---

## 🔧 手动安装

如果自动安装失败，可以使用手动方式：

### 步骤

1. 下载并解压工具包
2. 将 `_BsKeyTools` 文件夹复制到以下目录：

```
C:\Users\<用户名>\AppData\Local\Autodesk\3dsMax\<版本>\ENU\scripts\
```

3. 启动 3ds Max
4. 运行脚本：`MAXScript` → `运行脚本` → 选择 `BsKeyTools.ms`

![手动安装](https://raw.githubusercontent.com/AniBullet/BsKeyTools/main/PreviewRes/10.png)

---

## 📁 安装目录说明

| 目录 | 说明 |
|:-----|:-----|
| `Scripts/` | MaxScript 脚本文件 |
| `UI_ln/Icons/` | 工具图标资源 |
| `GhostTrails/` | 残影插件 (按版本区分) |
| `AnimLibrary/` | 动画库插件 |
| `AnimRef/` | 动画参考播放器 |

---

## 🔄 更新工具

### 自动更新

工具内置更新检测，启动时自动提示新版本。

### 手动更新

1. 下载最新版本
2. 重新运行安装程序
3. 选择覆盖安装

::: tip
更新不会丢失你的自定义配置
:::

---

## 🗑️ 卸载工具

### 方法一：使用卸载程序

运行安装目录下的卸载程序

### 方法二：手动删除

删除以下目录中的 `_BsKeyTools` 文件夹：

```
C:\Users\<用户名>\AppData\Local\Autodesk\3dsMax\<版本>\ENU\scripts\_BsKeyTools
```

---

## ❓ 常见问题

### 安装后找不到工具？

- 确认 3ds Max 版本与安装版本一致
- 重启 3ds Max
- 检查 `自定义` → `自定义用户界面` → `工具栏` 中是否有 BsKeyTools

### 安装程序被杀毒软件拦截？

安装程序基于 NSIS 打包，部分杀毒软件可能误报。请添加信任或临时关闭杀毒软件。

### 插件加载失败？

- 检查 3ds Max 版本是否在支持范围内 (2014-2026)
- 尝试以管理员身份运行 3ds Max
- 查看 MAXScript 监听器中的错误信息
