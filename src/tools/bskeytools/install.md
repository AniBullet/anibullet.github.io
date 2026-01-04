---
title: 安装指南
icon: install
order: 2
category:
  - BsKeyTools
tag:
  - 安装
  - 配置
---

# 安装指南

---

## 📥 下载

| 下载源 | 链接 | 说明 |
|:-------|:-----|:-----|
| **GitHub** | [Releases](https://github.com/AniBullet/BsKeyTools/releases/latest) | 推荐，最新版本 |
| 蓝奏云 | [点击下载](https://anibullet.lanzoue.com/b07cmnqta) | 密码：2333 |
| 阿里云盘 | [点击下载](https://www.alipan.com/s/tFUkG2D9Z9J) | 无密码 |
| 夸克网盘 | [点击下载](https://pan.quark.cn/s/4a0d183b53c5) | 密码：x8Ee |
| 百度网盘 | [点击下载](https://pan.baidu.com/s/1WZLgXLid_ga9N-RNPI4N4Q?pwd=2333) | 提取码：2333 |

---

## 🤖 自动安装（推荐）

1. 下载并解压工具包
2. 运行 `_BsKeyTools.exe`
3. 选择安装模式：
   - **自动检测**：自动识别已安装的 3ds Max 版本
   - **手动选择**：手动指定 3ds Max 安装路径
4. 勾选要安装的版本，点击 **安装**
5. 重启 3ds Max

![自动安装演示](https://raw.githubusercontent.com/AniBullet/BsKeyTools/main/SetupPrev.gif)

::: warning 注意
- 安装前请关闭 3ds Max
- 如有杀毒软件拦截，请添加信任
:::

---

## 🚀 启动工具

安装完成并重启 3ds Max 后：

**菜单栏** → `BsKeyTools` → `🌟 BsKeyTools`

::: tip 添加工具栏按钮
菜单栏 → `BsKeyTools` → `+菜单栏按钮-` → `添加工具栏按钮`

添加后在主工具栏会出现一个蓝底白字 **S** 图标
:::

---

## 🔧 手动安装

如果自动安装失败，可以手动复制文件。

![手动安装](https://raw.githubusercontent.com/AniBullet/BsKeyTools/main/PreviewRes/10.png)

### 安装步骤

1. 下载并解压工具包，找到 `_BsKeyTools` 文件夹

2. 将以下内容复制到 **3ds Max 安装根目录**：

| 源文件夹 | 目标位置 |
|:---------|:---------|
| `_BsKeyTools\Scripts\*` | `{3dsMax安装目录}\Scripts\` |
| `_BsKeyTools\UI_ln\*` | `{3dsMax安装目录}\UI_ln\` |
| `_BsKeyTools\GhostTrails\{版本}\plugins\*` | `{3dsMax安装目录}\plugins\` |

3. 将插件包复制到系统目录（可选，用于 AnimRef 和 AnimLibrary）：

| 源文件夹 | 目标位置 |
|:---------|:---------|
| `_BsKeyTools\AnimRef\` | `C:\ProgramData\Autodesk\ApplicationPlugins\AnimRef\` |
| `_BsKeyTools\AnimLibrary\` | `C:\ProgramData\Autodesk\ApplicationPlugins\AnimLibrary\` |

4. 启动 3ds Max，工具会自动加载

::: tip 3ds Max 安装目录示例
- `C:\Program Files\Autodesk\3ds Max 2024\`
- `D:\Autodesk\3ds Max 2022\`
:::

---

## 🔄 更新工具

### 自动更新

工具内置更新检测，启动时会自动提示新版本。

### 手动更新

1. 下载最新版本
2. 重新运行安装程序，覆盖安装即可

---

## 🗑️ 卸载工具

### 方法一：使用卸载程序

在 3ds Max 安装目录的 `Scripts` 文件夹中找到卸载程序运行。

### 方法二：手动删除

删除以下文件/文件夹：

| 位置 | 删除内容 |
|:-----|:---------|
| `{3dsMax}\Scripts\` | `BulletScripts` 文件夹 |
| `{3dsMax}\Scripts\Startup\` | `BulletKeyTools.ms` 等 Bs 开头的文件 |
| `{3dsMax}\UI_ln\Icons\` | `cstoolIcons` 文件夹 |
| `{3dsMax}\plugins\` | `GhostTrails*.dlm` 文件 |

---

## ❓ 常见问题

### 安装后找不到工具？

- 确认已重启 3ds Max
- 检查菜单栏是否有 `BsKeyTools` 菜单
- 检查 `自定义` → `自定义用户界面` → `工具栏` 中是否有 BsKeyTools

### 菜单栏没有 BsKeyTools？

可能是 3ds Max 曾感染病毒，导致脚本自启加载功能被关闭。

**修复方法：**

1. 下载 [FixLoadScripts.ms](https://github.com/AniBullet/BsKeyTools/blob/main/FixLoadScripts.ms) 脚本
2. 将脚本拖入 3ds Max 窗口运行
3. 重启 3ds Max

### 安装程序被杀毒软件拦截？

安装程序基于 NSIS 打包，部分杀毒软件可能误报。请添加信任或临时关闭杀毒软件。

### 安装程序找不到 3ds Max？

- 使用手动选择模式，手动指定 3ds Max 安装路径
- 或使用手动安装方式
