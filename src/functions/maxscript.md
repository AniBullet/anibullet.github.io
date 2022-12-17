---
title: Fn_Maxscript
index: false
icon: code
category:
  - Maxscript
  - FnDocs
tag:
  - Maxscript
  - Docs
---

## 常用 FN 个人整理与分享

::: tip *

若有更好的方法希望能不吝指教!!! 

:::

### 1. 选择任意物体子级

```
mapped fn fnSelectChildrens objSel =
(
    selectmore objSel.children
    for i in objSel.children do (fnSelectChildrens i)
)
-- for i in selection as array do execute ("selectmore $'" + i.name + "'/...*")
```



### 2. 找到所选物体最父级并选中

```
fn fnSelectAllParent =
(
    local arrParent = #()---存每个选中物体的最父级
    fn fnSelectParent objSel arrParent = ---求单个物体的最父级
    (
        if objSel.parent != undefined then 
        (
            fnSelectParent objSel.parent arrParent
        )
        else (append arrParent objSel)---将单个物体最父级加入临时数组
    )
    for i in selection as array do (fnSelectParent i arrParent) ---每个选中物体最父级添加到数组
    select arrParent---选中每个选择物体的最父级
)
```



### 3. 去除 String 末尾的记数

```
fn fnRemoveCount str =
(
    str = trimRight str "_1234567890"
    str
)
```

