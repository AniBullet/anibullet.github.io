import{_ as n,E as s,W as c,X as o,Y as e,Z as t,$ as d,a0 as a}from"./framework-91d5f68d.js";const l={},r=a('<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="_1-为什么安装后打开工具-看不到面板也没有报错" tabindex="-1"><a class="header-anchor" href="#_1-为什么安装后打开工具-看不到面板也没有报错" aria-hidden="true">#</a> 1. 为什么安装后打开工具，看不到面板也没有报错？</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>首先确认重启了Max，或者你知道该怎么运行该工具脚本ms</p><p>重启Max后还没有，可能是多屏导致界面位置在屏幕外，</p><p>（0.9.6版本后做了初次打开位置保护）</p><p>可在菜单栏点击 <code>工具窗口 位置重置</code></p><p><img src="https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/20221218033444.png" alt="img01" loading="lazy"></p></div><h3 id="_2-为什么这个卸载以后每次打开还是会有啊" tabindex="-1"><a class="header-anchor" href="#_2-为什么这个卸载以后每次打开还是会有啊" aria-hidden="true">#</a> 2. 为什么这个卸载以后每次打开还是会有啊？</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>可能是卸载不干净，请手动删除3dsMax 安装根目录下的：</p><p><code>*/Scripts/BulletScripts</code> 文件夹</p><p><code>*/Scripts/Startup/BulletKeyTools.ms</code> 文件</p><p><code>*/UI_ln\\Icons\\cstoolIcons</code> 文件夹</p></div><h3 id="_3-怎么删除-备份-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-怎么删除-备份-配置文件" aria-hidden="true">#</a> 3. 怎么删除(备份)配置文件？</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>右键工具面板或者点击设置，点击打开“配置文件&quot;目录，<code>BulletConfig.ini</code> 即配置文件</p><p>或者直接打开路径：<code>%localappdata%\\Autodesk\\3dsMax\\{max版本号}\\ENU{语言}\\</code></p></div><h3 id="_4-为什么帧栏范围不实时改变" tabindex="-1"><a class="header-anchor" href="#_4-为什么帧栏范围不实时改变" aria-hidden="true">#</a> 4. 为什么帧栏范围不实时改变？</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>可能因为杀毒工具禁用了回调，如max杀毒卫士，请点开主面板右下方“插件管理”，并按下图操作: <img src="https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Untitled.png" alt="img02" loading="lazy"><img src="https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Untitled_1.png" alt="img03" loading="lazy"></p></div><h3 id="_5-为什么切换语言版本后脚本设置没了" tabindex="-1"><a class="header-anchor" href="#_5-为什么切换语言版本后脚本设置没了" aria-hidden="true">#</a> 5. 为什么切换语言版本后脚本设置没了</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>因为配置文件放在跟语言版本相关的目录，</p><p>为啥不放通用地方呢，<s>因为权限原因无奈之举...</s> 分开配置更灵活~</p><p>可以复制对应语言版本下配置文件到新的目录：</p><p><code>%localappdata%\\Autodesk\\3dsMax\\{max版本号}\\ENU{语言}\\BulletConfig.ini</code></p><p>当然，我觉得还不如重新点几下快= =</p></div><h3 id="_6-运行报错-dotnet-runtime-exception-gitee-com" tabindex="-1"><a class="header-anchor" href="#_6-运行报错-dotnet-runtime-exception-gitee-com" aria-hidden="true">#</a> 6. 运行报错 <code>dotNet runtime exception ...... gitee.com</code></h3>',12),p={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"提示",-1),m=e("p",null,"可能因为网络原因，无法检测最新版本，",-1),g=e("p",null,"工具使用无影响，可在设置中关闭检查更新，离线使用。",-1),_=e("p",null,"当然还是建议自动检测更新，因为真的很方便~",-1),u={href:"http://gitee.com",target:"_blank",rel:"noopener noreferrer"},x=a('<h3 id="_7-可能打开工具失败-弹出-max-安全工具的报错-如不是请忽略这条" tabindex="-1"><a class="header-anchor" href="#_7-可能打开工具失败-弹出-max-安全工具的报错-如不是请忽略这条" aria-hidden="true">#</a> 7. 可能打开工具失败，弹出 Max 安全工具的报错 (如不是请忽略这条)</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>因为高版本3dsmax自带的安全工具会阻隔dotnet接口，直接禁了 System.IO.File，所以工具打开失败，建议关闭自带安全工具，或者取消拦截dotnet接口。（本工具自带杀毒功能）<br><img src="https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-05-13_19-46-04.png" alt="img04" loading="lazy"></p><p><img src="https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-05-13_19-47-20.png" alt="img05" loading="lazy"><img src="https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-05-13_19-47-44.png" alt="img06" loading="lazy"></p><p>建议:</p><ol><li>关闭对 dotnet 接口的阻拦</li><li>重启 3dsmax</li></ol></div><h3 id="_8-打开工具报错-并且没有显示工具主界面" tabindex="-1"><a class="header-anchor" href="#_8-打开工具报错-并且没有显示工具主界面" aria-hidden="true">#</a> 8. 打开工具报错，并且没有显示工具主界面</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p><img src="https://cdn.jsdelivr.net/gh/AniBullet/Blog-cdn@master/images/Snipaste_2023-06-08_03-44-30.png" alt="img07" loading="lazy"></p><p>可尝试暂时移除配置文件:</p><ol><li>首先关闭所有 3dsMax</li><li>资源管理器粘贴下面路径, <code>%localappdata%\\Autodesk\\3dsMax\\2014 - 64bit\\ENU</code> 找到 BulletConfig.ini</li><li>移动到其他文件夹，方便恢复部分设置</li><li>重启 3dsMax，打开插件</li></ol><p>ps：0.9.9.7 之后版本添加了报错提示出错脚本名，略微方便定位问题</p></div>',4);function v(f,B){const i=s("ExternalLinkIcon");return c(),o("div",null,[r,e("div",p,[h,m,g,_,e("p",null,[t("可以尝试检查网络 ( 看能否登陆码云 "),e("a",u,[t("gitee.com"),d(i)]),t(" ) 或者重装插件。")])]),x])}const A=n(l,[["render",v],["__file","faq.html.vue"]]);export{A as default};
