import{_ as e,W as n,X as i,a0 as a}from"./framework-fe9b007c.js";const r={},d=a(`<h2 id="常用-fn-个人整理与分享" tabindex="-1"><a class="header-anchor" href="#常用-fn-个人整理与分享" aria-hidden="true">#</a> 常用 FN 个人整理与分享</h2><div class="custom-container tip"><p class="custom-container-title">*</p><p>若有更好的方法希望能不吝指教!!!</p></div><h3 id="_1-选择任意物体子级" tabindex="-1"><a class="header-anchor" href="#_1-选择任意物体子级" aria-hidden="true">#</a> 1. 选择任意物体子级</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mapped fn fnSelectChildrens objSel =
(
    selectmore objSel.children
    for i in objSel.children do (fnSelectChildrens i)
)
-- for i in selection as array do execute (&quot;selectmore $&#39;&quot; + i.name + &quot;&#39;/...*&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-找到所选物体最父级并选中" tabindex="-1"><a class="header-anchor" href="#_2-找到所选物体最父级并选中" aria-hidden="true">#</a> 2. 找到所选物体最父级并选中</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn fnSelectAllParent =
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-去除-string-末尾的记数" tabindex="-1"><a class="header-anchor" href="#_3-去除-string-末尾的记数" aria-hidden="true">#</a> 3. 去除 String 末尾的记数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn fnRemoveCount str =
(
    str = trimRight str &quot;_1234567890&quot;
    str
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),s=[d];function l(t,c){return n(),i("div",null,s)}const u=e(r,[["render",l],["__file","maxscript.html.vue"]]);export{u as default};
