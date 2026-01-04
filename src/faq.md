---
title: 常见问题
index: false
icon: ask
category:
  - 使用指南
---

# 常见问题 FAQ

遇到问题？在这里找找答案。

---

## 🚀 安装相关

### 安装后看不到工具面板？

::: details 点击查看解决方案

**步骤 1：确认重启**

安装后必须重启 3ds Max。

**步骤 2：检查窗口位置**

多屏幕用户可能遇到窗口在屏幕外的问题。

解决方法：菜单栏 → `BsKeyTools` → `工具窗口位置重置`

![位置重置](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/20221218033444.png)

**步骤 3：手动运行脚本**

菜单栏 → `MAXScript` → `运行脚本` → 选择 `BulletKeyTools.ms`

:::

---

### 卸载后工具还在？

::: details 点击查看解决方案

可能是卸载不完整，请手动删除以下文件/文件夹：

| 路径 | 说明 |
|:-----|:-----|
| `{3dsMax}\Scripts\BulletScripts\` | 主要脚本文件夹 |
| `{3dsMax}\Scripts\Startup\BulletKeyTools.ms` | 启动脚本 |
| `{3dsMax}\UI_ln\Icons\cstoolIcons\` | 图标文件夹 |
| `{3dsMax}\plugins\GhostTrails*.dlm` | 残影插件 |

> `{3dsMax}` 代表 3ds Max 安装根目录

:::

---

### 安装程序找不到 Max 路径？

::: details 点击查看解决方案

可能的原因：
- 3ds Max 非标准安装
- 注册表信息缺失

**解决方法：** 使用手动安装方式，参见 [安装指南](/tools/bskeytools/install)

:::

---

### 菜单栏没有 BsKeyTools？

::: details 点击查看解决方案

可能是 3ds Max 曾感染病毒，导致脚本自启加载功能被关闭。

**修复步骤：**

1. 下载 [FixLoadScripts.ms](https://github.com/AniBullet/BsKeyTools/blob/main/FixLoadScripts.ms) 脚本
2. 将脚本拖入 3ds Max 窗口运行
3. 重启 3ds Max

:::

---

## ⚙️ 使用相关

### 怎么删除/备份配置文件？

::: details 点击查看解决方案

**方法 1：通过工具**

右键工具面板 → 点击设置 → 打开"配置文件"目录

**方法 2：直接访问路径**

```
%localappdata%\Autodesk\3dsMax\{版本号}\ENU\BulletConfig.ini
```

配置文件：`BulletConfig.ini`

:::

---

### 帧栏范围不实时更新？

::: details 点击查看解决方案

可能是杀毒工具禁用了回调函数（如 Max 杀毒卫士）。

**解决步骤：**

1. 点击主面板右下方 **插件管理**
2. 找到杀毒相关插件
3. 启用回调功能

![设置1](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Untitled.png)

![设置2](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Untitled_1.png)

:::

---

### 切换语言后设置丢失？

::: details 点击查看解决方案

配置文件与语言版本相关，存放在不同目录。

**解决方法：** 复制配置文件到新语言目录

```
从：%localappdata%\Autodesk\3dsMax\{版本}\ENU\BulletConfig.ini
到：%localappdata%\Autodesk\3dsMax\{版本}\CHS\BulletConfig.ini
```

:::

---

## ❌ 报错相关

### 报错 `dotNet runtime exception ... gitee.com`

::: details 点击查看解决方案

**原因：** 网络问题导致无法检测更新

**影响：** 工具使用无影响

**解决方法：**
1. 在设置中关闭"检查更新"，离线使用
2. 或检查网络，确认能访问 [gitee.com](https://gitee.com)

:::

---

### Max 安全工具报错阻止运行

::: details 点击查看解决方案

高版本 3ds Max 自带的安全工具可能阻止 dotNet 接口。

![报错1](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-05-13_19-46-04.png)

**解决步骤：**

1. 打开 3ds Max 安全设置
2. 关闭对 **dotNet 接口** 的阻拦
3. 重启 3ds Max

![设置1](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-05-13_19-47-20.png)

![设置2](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-05-13_19-47-44.png)

::: tip
BsKeyTools 自带病毒防护功能，可以安全关闭官方安全工具
:::

:::

---

### 打开工具报错，没有显示主界面

::: details 点击查看解决方案

![报错图](https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-06-08_03-44-30.png)

**解决步骤：**

1. 关闭所有 3ds Max
2. 打开路径：
   ```
   %localappdata%\Autodesk\3dsMax\{版本}\ENU\
   ```
3. 将 `BulletConfig.ini` 移动到其他位置（备份）
4. 重启 3ds Max，重新打开工具

::: tip
0.9.9.7 版本后会提示出错的脚本名，方便定位问题
:::

:::

---

## 💬 其他问题

### 工具会收费吗？

::: info
**不会！** BsKeyTools 完全开源免费，仅供学习参考，请勿商用。
:::

---

### 如何反馈 Bug 或建议？

::: tip 反馈渠道

| 渠道 | 链接 |
|:-----|:-----|
| GitHub Issues | [提交 Issue](https://github.com/AniBullet/BsKeyTools/issues) |
| QQ 交流群 1 | [993590655](https://jq.qq.com/?_wv=1027&k=hmeHhTwu) |
| QQ 交流群 2 | [907481113](https://qm.qq.com/q/FZ2gBKJeYE) |
| B 站私信 | [@Bullet_S](https://space.bilibili.com/2031113) |

:::

---

### 如何参与贡献？

::: tip
欢迎参与贡献！请查看 [GitHub 仓库](https://github.com/AniBullet/BsKeyTools) 的 CONTRIBUTING.md
:::

---

## 🔍 找不到答案？

加入 QQ 交流群获取帮助：

- **群 1：** [993590655](https://jq.qq.com/?_wv=1027&k=hmeHhTwu)
- **群 2：** [907481113](https://qm.qq.com/q/FZ2gBKJeYE)
