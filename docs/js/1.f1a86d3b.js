(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"8b24":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center",attrs:{id:"canvasParent"}},[e.viewmodel.docExists?e._e():n("q-card",{attrs:{flat:""}},[n("q-img",{attrs:{alt:"rview",src:"logo.png"}}),n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("rview WIP")])])],1),e.viewmodel.docExists?n("q-page-sticky",{attrs:{position:"bottom-left",offset:[10,10]}},[n("q-fab",{attrs:{color:"primary",icon:"keyboard_arrow_up",direction:"up"}},[n("q-fab-action",{attrs:{color:e.panMode?"secondary":"primary",icon:"pan_tool"},on:{click:function(t){return e.togglePan()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Pan\n        ")])],1),n("q-fab-action",{attrs:{color:"primary",icon:"zoom_out_map"},on:{click:function(t){return e.zoomExtents()}}},[n("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[e._v("\n          Zoom Extents\n        ")])],1),e.viewmodel.perspectiveCamera?n("q-fab-action",{attrs:{color:"primary",icon:"img:icons/2D.svg"},on:{click:function(t){return e.setProjection(!1)}}}):e._e(),e.viewmodel.perspectiveCamera?e._e():n("q-fab-action",{attrs:{color:"primary",icon:"img:icons/3D.svg"},on:{click:function(t){return e.setProjection(!0)}}})],1)],1):e._e(),e.panMode?n("q-page-sticky",{attrs:{position:"bottom-right",offset:[10,10]}},[n("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"Pan Mode","icon-right":"close"},on:{click:function(t){return e.togglePan()}}})],1):e._e()],1)},i=[],r=(n("ace4"),n("e6cf"),n("5cc6"),n("ddb0"),n("c973")),o=n.n(r),s=n("5a89"),l=n("4721"),c=n("aea1"),d=n("1bee"),m=n("17c8"),h=n("32d9"),u=n("ba3e");let p={renderer:null,labelRenderer:null,camera:null,controls:null,effectComposer:null,ssaoPass:null,sceneBbox:null,initialize:function(){if(null!=this.renderer)return;s["M"].DefaultUp=new s["eb"](0,0,1),this.renderer=new s["hb"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio);let e=document.getElementById("canvasParent");this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>b(!0),!1),this.labelRenderer=new c["b"],this.labelRenderer.domElement.id="labels",this.labelRenderer.setSize(e.clientWidth,e.clientHeight),this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top=0,this.labelRenderer.domElement.style.pointerEvents="none",e.appendChild(this.labelRenderer.domElement),this.camera=new s["O"](30,e.clientWidth/e.clientHeight,1,1e3),this.camera.position.z=40,this.controls=new l["a"](this.camera,this.renderer.domElement),this.controls.screenSpacePanning=!0,this.controls.addEventListener("change",f)},zoomExtents:function(e){let t=d["a"].getRhino3dm(),n=d["a"].viewModel().perspectiveCamera?t.ViewportInfo.defaultPerspective():t.ViewportInfo.defaultTop(),a=new s["db"](0,0);p.renderer.getSize(a),n.screenPort=[0,0,a.x,a.y];let i=d["a"].visibleObjectsBoundingBox(),r=new t.BoundingBox(i.min.x,i.min.y,i.min.z,i.max.x,i.max.y,i.max.z),o=r.center,l=r.max[0]-r.min[0],c=r.max[1]-r.min[1],m=r.max[2]-r.min[2];r.inflate(.2*l,.2*c,.2*m);let h=l,u=h*a.y/a.x;if(n.setFrustum(-h/2,h/2,-u/2,u/2,.1,1e3),n.extents(50*Math.PI/180,r),r.delete(),e){d["a"].getActiveModel().three.middleground.remove(this.camera);let e=n.getFrustum();d["a"].viewModel().perspectiveCamera?this.camera=new s["O"](30,a.x/a.y,e.near,e.far):(this.camera=new s["N"](e.left,e.right,e.top,e.bottom,e.near,e.far),this.camera.up.set(n.cameraUp[0],n.cameraUp[1],n.cameraUp[2])),this.controls.object=this.camera;let t=new s["m"](d["a"].viewModel().lightColor);t.position.set(0,0,1),d["a"].getActiveModel().cameraLight=t,this.camera.add(t),d["a"].getActiveModel().three.middleground.add(this.camera)}let g=n.cameraLocation;this.camera.position.set(g[0],g[1],g[2]),this.camera.updateProjectionMatrix(),this.controls.target.set(o[0],o[1],o[2]),n.delete()},enableSSAO(e){if(this.effectComposer)this.effectComposer.passes[0].enabled=e;else if(e){this.effectComposer=new h["a"](this.renderer);let e=d["a"].getActiveModel(),t=document.getElementById("canvasParent");this.ssaoPass=new u["a"](e.three.middleground,this.camera,t.clientWidth,t.clientHeight),this.ssaoPass.kernelRadius=18,this.ssaoPass.minDistance=.002,this.ssaoPass.maxDistance=.2,this.ssaoPass.output=u["a"].OUTPUT.SSAO,this.effectComposer.addPass(this.ssaoPass)}}},g=function(e){return[new s["eb"](e.min.x,e.min.y,e.min.z),new s["eb"](e.min.x,e.min.y,e.max.z),new s["eb"](e.min.x,e.max.y,e.min.z),new s["eb"](e.min.x,e.max.y,e.max.z),new s["eb"](e.max.x,e.min.y,e.min.z),new s["eb"](e.max.x,e.min.y,e.max.z),new s["eb"](e.max.x,e.max.y,e.min.z),new s["eb"](e.max.x,e.max.y,e.max.z)]},f=function(){if(d["a"].viewModel().perspectiveCamera){let e=d["a"].visibleObjectsBoundingBox(),t=g(e),n=new s["eb"](0,0,-1);n.applyQuaternion(p.camera.quaternion);let a=new s["P"](n,0);a.translate(p.camera.position);let i=t.map(e=>a.distanceToPoint(e));p.camera.near=Math.max(.1,Math.min(...i)),p.camera.far=Math.max(...i)}},b=function(e=!1){let t=document.getElementById("canvasParent"),n=t.clientWidth,a=t.clientHeight;(e||p.effectComposer)&&(p.camera.aspect=t.clientWidth/t.clientHeight,p.camera.updateProjectionMatrix(),p.renderer.setSize(t.clientWidth,t.clientHeight),p.labelRenderer.setSize(t.clientWidth,t.clientHeight),p.effectComposer&&p.effectComposer.setSize(t.clientWidth,t.clientHeight)),requestAnimationFrame(b),p.controls.update(),m["a"].viewportSize.width=n,m["a"].viewportSize.height=a;let i=d["a"].getActiveModel();p.renderer.autoClear=!1,p.renderer.sortObjects=!1,p.renderer.render(i.three.background,p.camera),p.renderer.sortObjects=!0,p.labelRenderer.render(i.three.foreground,p.camera),p.effectComposer&&p.effectComposer.passes[0].enabled?p.effectComposer.render():p.renderer.render(i.three.middleground,p.camera)};function w(e,t,n=null,a=null){if(n||a||(e.background=new s["h"](t)),t&&n){let a=document.createElement("canvas");a.width=128,a.height=128;let i=a.getContext("2d"),r=i.createLinearGradient(0,0,0,a.height);r.addColorStop(1,n),r.addColorStop(.1,t),i.fillStyle=r,i.fillRect(0,0,a.width,a.height),e.background=new s["f"](a)}if(a){let t=new s["i"];t.setPath("cubemaps/"+a+"/");let n=t.load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);e.background=n,b(!0)}}function x(){p.initialize(),d["a"].disposeMiddleground(),d["a"].disposeForeground();let e=document.getElementById("labels");e.innerHTML="";let t=d["a"].getActiveModel();if(t.three.middleground=new s["W"],t.three.foreground=new s["W"],t.clippingPlanes=[],p.renderer.clippingPlanes=t.clippingPlanes,null==t.three.background){t.three.background=new s["W"],t.three.background.background=new s["h"](.75,.75,.75);let e=m["a"].createGrid();t.threeGrid=e,t.three.background.add(e)}t.three.setBackground=w}function v(){console.log("Building Scene"),x();let e=d["a"].getActiveModel(),t=e.rhinoDoc,n=t.objects();for(let a=0;a<n.count;a++){let i=n.get(a);if(null==i)continue;let r=i.geometry(),o=i.attributes();if(o.isInstanceDefinitionObject)continue;let l=t.layers().get(o.layerIndex),c=l.fullPath.split("::")[0];e.threeObjectsOnLayer[c]||(e.threeObjectsOnLayer[c]=[]);let d=m["a"].createThreeGeometry(r,o,t);d.forEach(t=>{let n=t[0],a=t[1];if(a){let e=new s["eb"](a.min[0],a.min[1],a.min[2]),t=new s["eb"](a.max[0],a.max[1],a.max[2]);n.boundingBox=new s["b"](e,t),a.delete()}switch(n.constructor.name){case"CSS2DObject":e.three.foreground.add(n),e.threeObjectsOnLayer[c].push(n);break;case"Plane":e.clippingPlanes.push(n);break;default:e.three.middleground.add(n),e.threeObjectsOnLayer[c].push(n);break}}),i.delete(),r.delete(),o.delete()}n.delete(),d["a"].updateVisibility(),p.zoomExtents(!0),b()}function y(e){if(e){let e=d["a"].getActiveModel();p.renderer.clippingPlanes=e.clippingPlanes}else p.renderer.clippingPlanes=[]}function P(){let e="Arctic"===d["a"].viewModel().displayMode.name;p.enableSSAO(e)}var C={data(){let e=d["a"].viewModel();return{panMode:!1,viewmodel:e}},props:{url:{type:String,default:""}},created(){d["a"].addActiveDocChangedEventWatcher(v),d["a"].addDisplayModeChangedEventWatcher(P),d["a"].addClippingChangedEventWatcher(y),this.viewmodel.onChangeCamera=this.updateCameraProjection},mounted(){this.$route.query&&this.$route.query["url"]&&(console.log("MOUNTED with "+this.$route.query["url"]),this.openURL(this.$route.query["url"])),console.log("MOUNTED")},watch:{$route(e,t){e.query["url"]&&this.openURL(e.query["url"]),console.log(e.query)}},methods:{openURL(e){fetch(e).then(function(){var t=o()((function*(t){let n=yield t.arrayBuffer(),a=new Uint8Array(n);d["a"].openFile(e,a)}));return function(e){return t.apply(this,arguments)}}())},updateCameraProjection(){p.zoomExtents(!0),this.setLeftButtonMode()},zoomExtents(){p.zoomExtents(!0)},togglePan(){this.panMode=!this.panMode,this.setLeftButtonMode()},setProjection(e){this.viewmodel.perspectiveCamera!==e&&(this.viewmodel.perspectiveCamera=e,this.updateCameraProjection(),this.zoomExtents())},setLeftButtonMode(){this.panMode||!this.viewmodel.perspectiveCamera?(p.controls.mouseButtons.LEFT=s["B"].PAN,p.controls.touches.ONE=s["Z"].PAN):(p.controls.mouseButtons.LEFT=s["B"].ROTATE,p.controls.touches.ONE=s["Z"].ROTATE)}}},E=C,M=n("2877"),z=n("9989"),j=n("f09f"),O=n("068f"),k=n("a370"),S=n("de5e"),q=n("c294"),B=n("72db"),A=n("05c0"),R=n("9c40"),L=n("eebe"),W=n.n(L),T=Object(M["a"])(E,a,i,!1,null,null,null);t["default"]=T.exports;W()(T,"components",{QPage:z["a"],QCard:j["a"],QImg:O["a"],QCardSection:k["a"],QPageSticky:S["a"],QFab:q["a"],QFabAction:B["a"],QTooltip:A["a"],QBtn:R["a"]})}}]);