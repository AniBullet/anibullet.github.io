import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,a as t,b as r,e as a,f as i,r as l}from"./app.4ab20a4d.js";const h={},p=i('<h2 id="chain-tools" tabindex="-1"><a class="header-anchor" href="#chain-tools" aria-hidden="true">#</a> Chain Tools</h2><p><img src="https://www.joleanes.com/uploads/3/0/6/8/30680865/3439183_orig.jpg" alt="" loading="lazy"></p><p>使用此工具，您可以创建连接到样条线的骨骼链，这对于制作弯曲的四肢或用于尾巴或脊椎的 IK 链很有用。它使用位置和观察约束或从骨骼到具有路径约束的助手的脚本控制器，以样条线为目标，可以应用偏移值。它可以使用样条 ik 求解器创建一个额外的链来控制拉伸。也可以使用样条线 IK 控件或蒙皮修改器将样条线约束到辅助对象。</p><h2 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h2><p><strong>骨骼设置</strong>：可以在此处编辑一些骨骼属性。</p><p>**骨骼：**要在链中创建的骨骼数量。 **宽度：**链骨的宽度。 **锥度：**链骨的锥度。 **挤压：**设置拉伸选项以挤压链骨。</p><p>**LookAt：**这是定位骨骼以查看其目标（附加到样条线的辅助对象）的方式。</p><p>**LookAt Constraint：**如果设置了这个选项，骨骼将分配标准的lookat约束，并将控制点助手作为目标 **Quaternion Aim：**如果设置了这个选项，骨骼将有旋转脚本而不是lookat约束，优点是脚本控制器有一种通过构建四元数来查找旋转值的查看算法，这可以防止不需要的翻转，除非骨骼与其父级重叠（x 轴正在寻找相反的方向）。</p><p>**链点设置：**链点是将通过路径约束附加到样条线的助手，在这里您可以设置它们的行为</p><p>**滚动平均值：**链点将具有相对于控制点或微调器的方向平均值（x 旋转），具体取决于所选选项。</p><p><strong>平均到：</strong></p><p><strong>第一个和最后一个控件：</strong> 与样条曲线的第一个和最后一个顶点等效的控制点助手将控制滚动平均值。（控制点是控制样条顶点位置的助手）。 **所有控制：**将考虑所有控制点来计算滚动平均值。 **微调器：**滚动平均值将由存储在控制点持有的属性修改器中的微调器控制。</p><p><strong>平均类型：</strong></p><p>**Quat 约束：**滚动平均值将使用 quat 计算来计算。如果控制点将持有任何不同于欧拉角的约束或控制器，这将很有用。 **欧拉角：**滚动平均值将使用控制点旋转的 x 轨迹计算。将链条扭转超过 180 度而不翻转很有用，缺点是滚动平均值取自控制点的本地欧拉控制器，这意味着您不能为它们分配任何约束，或者与欧拉不同的旋转控制器角度。</p><p><strong>操纵控制器：</strong> 如果选中此选项，则会将具有活动可编辑控制器的列表控制器分配给链点，以便独立编辑它们的变换，链点将同时具有位置、路径约束和活动控制器。</p><p><strong>Extra IK Solver Constraint：</strong> 如果此选项处于活动状态，则可以控制链的拉伸，将创建一个微调器并将其分配给控制点。</p><p>**样条控制设置：**样条顶点的控制方式由这些属性定义</p><p>**样条线 IK 控制：**样条线顶点位置由使用样条线 IK 控制修改器的控制点控制。这种方法的缺点是您无法控制切线手柄的位置。唯一的方法是使用控制点旋转。 **蒙皮：**样条线顶点位置由使用蒙皮修改器的控制点控制。这种方法的优点是您可以使用助手控制切线手柄的位置。 **切线：**如果此选项处于活动状态，将创建助手来控制样条线顶点的切线手柄。</p><h2 id="原文" tabindex="-1"><a class="header-anchor" href="#原文" aria-hidden="true">#</a> 原文</h2><p>Description:With this tool you can create a chain of bones attached to a spline, useful to make bendy limbs or IK chains for tails or spines. It uses position and lookat constraints or scripted controllers from the bones to helpers which have path constraints with the spline as target, offset values can be aplied. It can create an extra chain with a spline ik solver to control stretching. The spline can also be constrained to helper objects using the Spline IK Control or the skin Modifier.</p><h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> Settings</h2><p><strong>Bones Settings</strong>: Some of the bones properties can be edited here.</p><p><strong>Bones:</strong> The number of bones to create in the chain. <strong>Width:</strong> The width of the chain bones. <strong>Taper:</strong> The Taper of the chain bones. <strong>Squash:</strong> Set the stretch option to squash in the the chain bones.</p><p><strong>LookAt:</strong> This is the way that the bones will be orientated to look their targets (the helpers attached to the spline).</p><p><strong>LookAt Constraint:</strong> If this option is set the bones will have standard lookat constraints assigned having the control point helpers as targets <strong>Quaternion Aim:</strong> Is this option is set the bones will have rotation script instead of lookat constraint, the advantage is that the script controllers have a lookat algorithm that finds the rotation value by building a quaternion, this prevent undesirable flips, unless the bone overlaps its parent (the x axis are looking to opposite directions).</p><p><strong>Chain Points Settings:</strong> The chain points are the helpers that are going to be attached to the spline via path constraint, here you can setup their behavior</p><p><strong>Roll Average:</strong> The chain points will have an orientation average (x-rotation) regards to control points or a spinner depending on the chosen option.</p><p><strong>Average To:</strong></p><p><strong>First and Last Controls:</strong> The Control Point helpers equivalent to the first and last vertex of the spline will control the Roll average.(the Control points are helpers that control the spline vertices position). <strong>All Controls:</strong> All the Control Points will be considered to calculate the roll average. <strong>Spinner:</strong> The Roll average will be controlled by a spinner stored in an attribute modifier held by the control points.</p><p><strong>Average Type:</strong></p><p><strong>Quat Constraint:</strong> The roll average will be calculated using quat calculation. it useful if the control points will held any constraint or controller different than an Euler Angles. <strong>Euler Angles:</strong> The roll average will be calculated using the x track of the Control Points rotation. It is useful to twist the chain beyond 180 degrees without flipping, the disadvantage is that the roll average are taken from the local euler controller of the control points, that means that you can&#39;t assign them any constrain, or rotation controller different than euler angles.</p><p><strong>Manipulation Controllers:</strong> If this option is checked a list controller with active editable controllers will be assigned to the chain points in order to edit their transform independently, the chain points will have both position, the path constraint and the active controller.</p><p><strong>Extra IK Solver Constraint:</strong> The stretch of the chain can be controlled if this option is active, a spinner will be created and assigned to the control points.</p><p><strong>Spline Control Settings:</strong> The way that the spline vertices are controlled is defined by these properties</p><p><strong>Spline IK Control:</strong> The spline vertices position are controlled by the Control Points using a Spline IK control modifier. the disadvantage of this method is that you cannot control the tangents handles position. The only way is using the control Points rotation. <strong>Skin:</strong> The spline vertices position are controlled by the Control Points using a Skin modifier. the advantage of this method is that you can control the tangents handles position using helpers. <strong>Tangents:</strong> If this option is active Helpers will be created to control the tangent handles of the spline vertices.</p>',35),c={href:"https://www.joleanes.com/chain-tools.html",target:"_blank",rel:"noopener noreferrer"};function g(d,u){const e=l("ExternalLinkIcon");return n(),s("div",null,[p,t("blockquote",null,[t("p",null,[t("a",c,[r("https://www.joleanes.com/chain-tools.html"),a(e)])])])])}const v=o(h,[["render",g],["__file","ChainsTools.html.vue"]]);export{v as default};
