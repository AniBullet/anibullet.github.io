if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const d=e=>a(e,c),b={module:{uri:c},exports:r,require:d};s[c]=Promise.all(f.map((e=>b[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-24a20688"],(function(e){"use strict";e.setCacheNameDetails({prefix:"✨aniBullet Docs"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.04f573b2.js",revision:"f61dcb767766b4847fde032adc6813ac"},{url:"assets/404.html.64818103.js",revision:"a9620c1da11230a8f0e1e9af4bb6bdf0"},{url:"assets/app.7e4461c0.js",revision:"d657546ac1d83b58be59ee8cf11f0dfe"},{url:"assets/auto.60abe5ba.js",revision:"8fd495ef85ea8266e0efc3145fa2b94a"},{url:"assets/ChainsTools.html.1c1d14cf.js",revision:"9d2cdd328aaa213479c2e3331d54b565"},{url:"assets/ChainsTools.html.fab6b31b.js",revision:"93e15374e4c1825c5d7fbd965afdc919"},{url:"assets/disable.html.7a4e7cec.js",revision:"97bfeee6c93abb49a5191e699c655090"},{url:"assets/disable.html.9f8fe168.js",revision:"70ec949f2bb0fe4bed9627660946df2a"},{url:"assets/encrypt.html.5c47df9d.js",revision:"c2a5a491c62da65944ba74c67a0e29ef"},{url:"assets/encrypt.html.fc49782b.js",revision:"1e89e72a24e3afc051ce7b90eab28e35"},{url:"assets/flowchart.parse.1479ec3f.js",revision:"a3bf05ec1dc83c91d060510bd82032b8"},{url:"assets/giscus.7155a2b8.js",revision:"005678f900cefd6ff7e53696613be254"},{url:"assets/highlight.esm.1d809baf.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/index.d2b3e8c7.js",revision:"1fef675066bb95ec3b3edbc16cbab87e"},{url:"assets/index.html.08f10a4f.js",revision:"4fcf52466112fe3fc57c80d87b2d14cc"},{url:"assets/index.html.11c4dd00.js",revision:"b148a8c5010c1d06b82881c3a5fdcbf6"},{url:"assets/index.html.38c1efe6.js",revision:"60b285b9c56fc18ce9d6e0299579b328"},{url:"assets/index.html.56f0f3df.js",revision:"16247863e470a2367b98a6c67105a8f7"},{url:"assets/index.html.595bc107.js",revision:"10bba000b1cfa8ca79d686077d28b259"},{url:"assets/index.html.622bb958.js",revision:"000e9ac37895598ac0ce5207c7758050"},{url:"assets/index.html.796a6019.js",revision:"7dc4d69e5340b57a3b66e16b4ad4e002"},{url:"assets/index.html.b18db1b6.js",revision:"13a6c31a1983fb3061511e031942f194"},{url:"assets/index.html.c73adc08.js",revision:"c3f374ee2c692e785d727c2e61b48c0e"},{url:"assets/index.html.dd3e08ae.js",revision:"0adba774cf0e4f0b790c4c785227aa29"},{url:"assets/intro.html.b50ececf.js",revision:"dfe076a027a3dae5bc1622eab51bc00f"},{url:"assets/intro.html.e52f3b3d.js",revision:"6ca77d7f871c40895de95aeb607263e1"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.36cfeb92.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markdown.html.0f7606f1.js",revision:"1f61274ad22b5067c62ad94c5c7cf4d9"},{url:"assets/markdown.html.150f7b19.js",revision:"1f61274ad22b5067c62ad94c5c7cf4d9"},{url:"assets/markdown.html.491f8485.js",revision:"58ea08c5c546dc95e61c86b2cf9aa985"},{url:"assets/markdown.html.92d7b591.js",revision:"40f942c0cf941335ccc98ddea26066e1"},{url:"assets/math.esm.0abc2843.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/maxscript.html.a7735f49.js",revision:"c48c30b41e544221fd431d6ea8311b69"},{url:"assets/maxscript.html.ff7a8f84.js",revision:"f68bd2852f19d445e2f0a1d94e4b60df"},{url:"assets/mermaid.core.d1a3c56e.js",revision:"df1c420f26de66f1b1bb4b34ba07811c"},{url:"assets/notes.esm.55c982c5.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/page.html.1d18b5c9.js",revision:"c659a90975c79ea6d251cda2be289350"},{url:"assets/page.html.85b74193.js",revision:"0612ee7d5282452a1f078d3af2096515"},{url:"assets/photoswipe.esm.09e03fed.js",revision:"317c562e1a4f43455c48b2cc085d9520"},{url:"assets/reveal.esm.e6b6f4fd.js",revision:"2ae13f3f401294fee79646ed1f70afec"},{url:"assets/search.esm.678cee5b.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/slides.html.216c1a41.js",revision:"74d2f23e34ae5a19ed5557c2ae4a4bd1"},{url:"assets/slides.html.cb4cd813.js",revision:"a50de87b230b3682916f4d936643d75a"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.0c539136.css",revision:"96a264e96ce229ac0d0ee65fc89c3fa1"},{url:"assets/vue-repl.949e853e.js",revision:"3e0a2ebd4539ced57c31f62dad6a8587"},{url:"assets/VuePlayground.68a11335.js",revision:"1ff3422ec81ece7fc46c35d1ebef83fd"},{url:"assets/zoom.esm.1d3cee89.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"bbf624263969e6ca779b0bab7f6752d2"},{url:"404.html",revision:"bd0199795b396c095aa40d0a56715aaf"},{url:"functions/index.html",revision:"136daa9cfd1db2483bac7ad1b6d63847"},{url:"functions/maxscript.html",revision:"4a4543ede07aa2211cde394c22ddaa79"},{url:"guide/disable.html",revision:"5c4ad3e094172a50354fc1fb3a4514cb"},{url:"guide/encrypt.html",revision:"8fb5d45fb21bb239f63c3c10bf68dbcf"},{url:"guide/index.html",revision:"32b09750190c3d7e2c489ca81df4618a"},{url:"guide/markdown.html",revision:"9601b9fddda24433c94f310bc344ec2b"},{url:"guide/page.html",revision:"b96a6876d72831e6564e40a045fc08a3"},{url:"index.html",revision:"26014b4254403a6e9aef0e2382051364"},{url:"intro.html",revision:"d37270beb2666fdad797585269ae74cc"},{url:"markdown.html",revision:"a6c38cb9225680a84ad646dd110b9cf0"},{url:"slides.html",revision:"d3e055a8d829e0c933da8919135c3af1"},{url:"tools/bskeytools/ChainsTools.html",revision:"20498731a2b9688b11ae0ed18e58d6b4"},{url:"tools/bskeytools/index.html",revision:"e834259e3217b79a80d51ffabb93a87f"},{url:"tools/index.html",revision:"199543936a0fbbf7f12396d0e3201f57"},{url:"images/avatar.gif",revision:"c20a264bcd3171de2a93a6544b7d7c38"},{url:"images/logo-BULLETS-White.png",revision:"d2d27365abd89e09b2d6b667f333015f"},{url:"images/logo-BULLETS.png",revision:"649d295f167c6d6377d2cb681d0beaf3"},{url:"logo.png",revision:"c2c3ad88418babd2a77de8ef4f8bb46e"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
