import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,f as l}from"./app.d3f972bb.js";const r={},a=l(`<h1 id="常用-fn-个人整理与分享" tabindex="-1"><a class="header-anchor" href="#常用-fn-个人整理与分享" aria-hidden="true">#</a> 常用 FN 个人整理与分享</h1><hr><p>tips: 若有更好的方法希望能不吝指教!!!</p><blockquote><ol><li>选择任意物体子级</li></ol></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mapped fn fnSelectChildrens objSel =
(
    selectmore objSel.children
    for i in objSel.children do (fnSelectChildrens i)
)
-- for i in selection as array do execute (&quot;selectmore $&#39;&quot; + i.name + &quot;&#39;/...*&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol start="2"><li>选择任意物体，找到该物体最父级并选中</li></ol></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn fnSelectAllParent =
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol start="3"><li>去除 String 末尾的记数</li></ol></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn fnRemoveCount str =
(
    str = trimRight str &quot;_1234567890&quot;
    str
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),s=[a];function d(t,c){return n(),i("div",null,s)}const u=e(r,[["render",d],["__file","maxscript.html.vue"]]);export{u as default};
