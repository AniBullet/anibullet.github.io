if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const d=e=>a(e,r),b={module:{uri:r},exports:c,require:d};s[r]=Promise.all(f.map((e=>b[e]||d(e)))).then((e=>(i(...e),c)))}}define(["./workbox-24a20688"],(function(e){"use strict";e.setCacheNameDetails({prefix:"✨aniBullet Docs"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.6a67b9a1.js",revision:"2d18b05ac2f7ecd249eda6ccec226a8e"},{url:"assets/404.html.e39862bc.js",revision:"57e31dd118ed3c658acbab146cf9f8c3"},{url:"assets/app.227a688c.js",revision:"4ed407027c14f94bcc472bec038adf92"},{url:"assets/auto.13a9debe.js",revision:"f44355d40299023db3660428e196d12e"},{url:"assets/ChainsTools.html.6b39db68.js",revision:"a1ce182c31fbfc3f3a53187ca3b99080"},{url:"assets/ChainsTools.html.ea85d44c.js",revision:"48c938c9451b24adef156d3c9719e89a"},{url:"assets/disable.html.1818d159.js",revision:"1121f199ec9447ef0b779a1ae6216c95"},{url:"assets/disable.html.8f61e578.js",revision:"303810f6536431ba9eaa4814a843fe95"},{url:"assets/encrypt.html.1eeebf80.js",revision:"b6a1aa8867c958b446eb96638ba60dd7"},{url:"assets/encrypt.html.2f82ec4f.js",revision:"3aab732bffa6d6f9e519d7091351a02e"},{url:"assets/flowchart.parse.1479ec3f.js",revision:"a3bf05ec1dc83c91d060510bd82032b8"},{url:"assets/giscus.f746bbbb.js",revision:"d7dc3c40563282f337fd08941e0fcd2d"},{url:"assets/highlight.esm.1d809baf.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/index.d2b3e8c7.js",revision:"1fef675066bb95ec3b3edbc16cbab87e"},{url:"assets/index.html.2cce7574.js",revision:"55acdd459055ae44cdbd8def15a2ebaf"},{url:"assets/index.html.37a38d9f.js",revision:"9819da7a102a144cb8a006bffc0fa0eb"},{url:"assets/index.html.67522db5.js",revision:"7b42dfeec3e15ab8d28665c6eb6b48ba"},{url:"assets/index.html.6d1df13c.js",revision:"66ca87e188708c8127a42bc6ea85d89e"},{url:"assets/index.html.98040592.js",revision:"6c80b18cfd8d98f80df6df31cba3125f"},{url:"assets/index.html.b0444751.js",revision:"9144f6111b22539e04988c46e13f140d"},{url:"assets/index.html.d3eff659.js",revision:"af6b31a9ec6e74b0b3db87e578f1adb7"},{url:"assets/index.html.e3a8498f.js",revision:"6344bfe53c6c0153e29535f08911fd3a"},{url:"assets/index.html.f4cc7722.js",revision:"4ada47b5a5cdd27be6593c51d86f52d9"},{url:"assets/index.html.fce36774.js",revision:"43a48c4efea98cbeb32aaacb680adf82"},{url:"assets/intro.html.000b7a2b.js",revision:"9e2f3ef635607b8e8ce07573bf7896ef"},{url:"assets/intro.html.7008c6cb.js",revision:"da86f765919001ca329121a69d53cf85"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.36cfeb92.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markdown.html.39cf3790.js",revision:"647c45e8266fe297f265ecd1cd722470"},{url:"assets/markdown.html.49dbb455.js",revision:"238e0d41fa4185e362eb2d6ccffc257b"},{url:"assets/markdown.html.51deaf67.js",revision:"dfa2faac9801cf5d5bc16a9fc8e10f66"},{url:"assets/markdown.html.8eadd456.js",revision:"dfa2faac9801cf5d5bc16a9fc8e10f66"},{url:"assets/math.esm.0abc2843.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/maxscript.html.6bcf3c91.js",revision:"81997b1f61e176bb3407299b1a42586f"},{url:"assets/maxscript.html.9590f079.js",revision:"999fb8219594053188798c967d8c7c32"},{url:"assets/mermaid.core.2ef7b111.js",revision:"1a9675bf4f644dd119cfd93a9b47bbfc"},{url:"assets/notes.esm.55c982c5.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/page.html.7f881b24.js",revision:"633e15711a5812d730df5f7282220e55"},{url:"assets/page.html.cb571deb.js",revision:"7cf4c30da2b26b63d61f7be9d444423c"},{url:"assets/photoswipe.esm.a73472bf.js",revision:"a161e9f0f413b7279a37a1b80c9d0cf2"},{url:"assets/reveal.esm.e6b6f4fd.js",revision:"2ae13f3f401294fee79646ed1f70afec"},{url:"assets/search.esm.678cee5b.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/slides.html.648549e6.js",revision:"a693a633b07f9aff1dd1f0f0f268508a"},{url:"assets/slides.html.b165a783.js",revision:"8d98e67e99c693f1c4be14086eb8bbe5"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.fba9c029.css",revision:"11de9b52ee879c5ec1e1771fcdbb911d"},{url:"assets/vue-repl.69df2ce3.js",revision:"828593d62225e56098146b7f1a46c398"},{url:"assets/VuePlayground.f5cc4657.js",revision:"113ee07657e915b443327a876e342ada"},{url:"assets/zoom.esm.1d3cee89.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"bbf624263969e6ca779b0bab7f6752d2"},{url:"404.html",revision:"a7d0b38285909b07a679837fca003bbe"},{url:"functions/index.html",revision:"6dce774ddc970e5f039fb0d12f598f35"},{url:"functions/maxscript.html",revision:"78984296156d0040f01d6f748a18f6d8"},{url:"guide/disable.html",revision:"5491082c0c995b172f52bb48a233446b"},{url:"guide/encrypt.html",revision:"34b2ac2d514b4d707bd6d18fc3335da7"},{url:"guide/index.html",revision:"96bbfaa5c268c5e9c1f8b30bae5e20fe"},{url:"guide/markdown.html",revision:"d861f3eb590367bf9db04f2ee381c15d"},{url:"guide/page.html",revision:"1425c85dbac04cbb10248af95d2fb4f1"},{url:"index.html",revision:"5645ffae9dad59b4fd1c462f29e7282b"},{url:"intro.html",revision:"6ee1cd1069b01b65aa22e201357726be"},{url:"markdown.html",revision:"fa2856fd5d1edf03003e46f673098ca0"},{url:"slides.html",revision:"89f78880f839f2fe94f234d5f0cb9789"},{url:"tools/bskeytools/ChainsTools.html",revision:"a2598a4f7dcbe267743b2d7b1caff7bb"},{url:"tools/bskeytools/index.html",revision:"8e08def29e244524317ee78fec65c95d"},{url:"tools/index.html",revision:"61a4fa193915ae5b79baf6894cf932f5"},{url:"images/avatar.gif",revision:"c20a264bcd3171de2a93a6544b7d7c38"},{url:"images/logo-BULLETS-White.png",revision:"d2d27365abd89e09b2d6b667f333015f"},{url:"images/logo-BULLETS.png",revision:"649d295f167c6d6377d2cb681d0beaf3"},{url:"logo.png",revision:"c2c3ad88418babd2a77de8ef4f8bb46e"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
