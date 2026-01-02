---
title: 独立插件
icon: plugin
order: 20
category:
  - BsKeyTools
tag:
  - 插件
  - GhostTrails
  - AnimLibrary
  - AnimRef
---

# 独立插件模块

BsKeyTools 包含 3 个可独立使用的插件模块。

---

## 👻 GhostTrails 残影效果

实时显示动画运动轨迹的残影效果插件。

### 功能介绍

GhostTrails 为 3ds Max 提供专业的残影显示功能，帮助动画师直观地审阅动作轨迹。

### 版本支持

| 3ds Max 版本 | 插件文件 |
|:-------------|:---------|
| Max 9 | GhostTrailsMax9_64.dlm |
| Max 2008-2014 | 对应版本 .dlm |
| Max 2015-2025 | 对应版本 .dlm |
| Max 2026 | GhostTrails_2026_x64.dlm |

### 安装方法

插件随 BsKeyTools 自动安装到对应版本的 plugins 目录。

### 使用方法

1. 选择要显示残影的对象
2. 进入修改面板
3. 添加 `GhostTrails` 修改器
4. 调整参数

### 参数说明

| 参数 | 说明 |
|:-----|:-----|
| Ghost Count | 残影数量 |
| Frame Interval | 残影帧间隔 |
| Opacity | 残影透明度 |
| Color | 残影颜色 |
| Show Before/After | 显示前/后残影 |

### 使用技巧

- **审阅弧线**：观察运动轨迹的弧线是否流畅
- **检查间距**：通过残影间距判断速度变化
- **姿态对比**：同时显示多个时间点的姿态

---

## 📚 AnimLibrary 动画库

动画片段和 Pose 管理库，基于 Python 开发。

### 功能介绍

AnimLibrary 是一个专业的动画资产管理工具，支持保存、分类、预览和应用动画片段。

### 版本要求

| 3ds Max 版本 | Python 版本 |
|:-------------|:------------|
| Max 2020-2025 | Python 3 |
| Max 2026 | Python 3.11+ |

### 主要功能

| 功能 | 说明 |
|:-----|:-----|
| Pose 保存 | 保存当前姿态为 Pose |
| 动画片段 | 保存动画片段 |
| 缩略图预览 | 自动生成预览图 |
| 分类管理 | 创建文件夹分类 |
| 快速应用 | 双击应用到角色 |
| 导入导出 | 库文件的导入导出 |

### 使用步骤

#### 保存 Pose

1. 选择角色控制器
2. 调整到目标姿态
3. 打开 AnimLibrary
4. 点击 "Save Pose"
5. 输入名称并确认

#### 保存动画片段

1. 选择角色
2. 设置动画帧范围
3. 点击 "Save Animation"
4. 输入名称并确认

#### 应用动画

1. 选择目标角色
2. 在库中找到动画
3. 双击缩略图应用
4. 或右键选择应用选项

### 应用选项

| 选项 | 说明 |
|:-----|:-----|
| Replace | 替换当前动画 |
| Insert | 在当前帧插入 |
| Blend | 混合应用 |

### 库文件位置

默认保存在用户目录：
```
C:\Users\<用户名>\AppData\Local\Autodesk\3dsMax\<版本>\scripts\AnimLibrary\
```

---

## 🎥 AnimRef 动画参考播放器

在 3ds Max 视口中播放参考视频/图片序列，与时间轴同步。

### 功能介绍

AnimRef 让你可以在 3ds Max 内部直接播放参考视频，无需切换窗口，极大提高动画制作效率。

### 版本要求

| 3ds Max 版本 | 支持状态 |
|:-------------|:---------|
| Max 2021+ | ✅ 完全支持 |
| Max 2025 | ✅ 完全支持 |
| Max 2026 | ✅ 完全支持 |

### 支持格式

| 类型 | 格式 |
|:-----|:-----|
| 视频 | MP4, AVI, MOV, WMV, GIF |
| 图片序列 | PNG, JPG, JPEG, TGA, BMP |

### 主要功能

| 功能 | 说明 |
|:-----|:-----|
| 视频播放 | 在视口中播放视频 |
| 图片序列 | 播放图片序列 |
| 时间同步 | 与 3ds Max 时间轴同步 |
| 位置调整 | 自由调整显示位置和大小 |
| 透明度 | 调整参考画面透明度 |
| 格式转换 | 内置 FFmpeg 转换功能 |

### 使用步骤

#### 导入参考视频

1. 打开 AnimRef 工具
2. 点击 "Import Video"
3. 选择视频文件
4. 视频显示在视口中

#### 导入图片序列

1. 点击 "Import Sequence"
2. 选择第一张图片
3. 自动识别整个序列
4. 序列显示在视口中

#### 调整显示

| 操作 | 方法 |
|:-----|:-----|
| 移动 | 拖拽画面 |
| 缩放 | 滚轮或角点拖拽 |
| 透明度 | 滑块调整 |
| 比例锁定 | 勾选保持比例 |

#### 同步设置

| 设置 | 说明 |
|:-----|:-----|
| Start Frame | 参考开始帧 |
| Playback Speed | 播放速度倍率 |
| Loop | 循环播放 |
| Offset | 帧偏移量 |

### 内置工具

AnimRef 集成了以下工具用于格式转换：

| 工具 | 用途 |
|:-----|:-----|
| FFmpeg | 视频格式转换、提取帧 |
| Gifsicle | GIF 优化和压缩 |

### 视频转图片序列

1. 打开转换工具
2. 选择源视频
3. 设置输出格式和路径
4. 执行转换

---

## 📥 插件安装位置

所有插件随 BsKeyTools 自动安装：

```
_BsKeyTools/
├── GhostTrails/           # 残影插件
│   ├── 2020/
│   │   └── plugins/
│   │       └── GhostTrailsMax2020_64.dlm
│   ├── 2026/
│   │   └── plugins/
│   │       └── GhostTrails_2026_x64.dlm
│   └── ...
├── AnimLibrary/           # 动画库
│   ├── Contents/
│   │   ├── 2020/
│   │   │   └── AnimLibrary.py
│   │   └── 2026/
│   │       └── AnimLibrary.py
│   └── PackageContents.xml
└── AnimRef/               # 参考播放器
    ├── Contents/
    │   ├── 2021/
    │   │   └── animref.py
    │   ├── converter/
    │   │   ├── ffmpeg.exe
    │   │   └── gifsicle.exe
    │   └── interface/
    │       └── interface.ui
    └── PackageContents.xml
```

---

## 💡 使用技巧

### GhostTrails

- 配合洋葱皮使用，全方位审阅动画
- 设置不同颜色区分前后残影

### AnimLibrary

- 建立个人 Pose 库，提高工作效率
- 按项目、角色分类管理
- 定期备份库文件

### AnimRef

- 使用图片序列比视频更稳定
- 调低透明度方便同时查看角色
- 锁定比例防止变形

---

## 📺 视频教程

👉 [插件使用视频教程](https://space.bilibili.com/2031113/lists/560782)
