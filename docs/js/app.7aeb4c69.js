(function(e){function t(t){for(var i,o,l=t[0],a=t[1],c=t[2],h=0,u=[];h<l.length;h++)o=l[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var a=n[o];0!==s[a]&&(i=!1)}i&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},s={2:0},r=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{1:"76fd7d75",3:"ef8bbca0",4:"1bd0e208"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=s[e]=[t,i]}));t.push(n[2]=i);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.src=o(e);var c=new Error;r=function(t){a.onerror=a.onload=null,clearTimeout(h);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,n[1](c)}s[e]=void 0}};var h=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var h=0;h<a.length;h++)t(a[h]);var d=c;r.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var i=n("c973"),s=n.n(i),r=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),o=n("1f91"),l=n("42d2"),a=n("b05d"),c=n("f508");r["a"].use(a["a"],{config:{loading:{}},lang:o["a"],iconSet:l["a"],plugins:{Loading:c["a"]}});var h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],u=n("436a"),p={name:"App",mounted:function(){u["a"].init(window.rhino3dm,this.showLoading,this.hideLoading)},methods:{showLoading(){this.$q.loading.show()},hideLoading(){this.$q.loading.hide()}}},f=p,m=n("2877"),g=Object(m["a"])(f,h,d,!1,null,null,null),y=g.exports,b=n("8c4f");n("e6cf");const w=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"8b24"))},{path:"/view",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"8b24")),props:e=>({query:e.query.q})}]}];w.push({path:"*",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"e51e"))});var v=w;r["a"].use(b["a"]);var x=function(){const e=new b["a"]({scrollBehavior:()=>({x:0,y:0}),routes:v,mode:"hash",base:""});return e},_=function(){return T.apply(this,arguments)};function T(){return T=s()((function*(){const e="function"===typeof x?yield x({Vue:r["a"]}):x,t={router:e,render:e=>e(y),el:"#q-app"};return{app:t,router:e}})),T.apply(this,arguments)}function M(){return O.apply(this,arguments)}function O(){return O=s()((function*(){const{app:e,router:t}=yield _();new r["a"](e)})),O.apply(this,arguments)}M()},"436a":function(e,t,n){"use strict";n.d(t,"a",(function(){return re}));var i=n("de5e"),s=n.n(i),r=n("95ee"),o=n.n(r),l=(n("ddb0"),n("b669")),a=n.n(l),c=n("f763"),h=n.n(c),d=n("5a89"),u=n("4721"),p=n("aea1"),f=n("cbaf");n("fb6a"),n("ace4"),n("cfc3"),n("fd87");function m(e){let t=new d["c"],n=new Float32Array(3*e._starts.length);for(let l=0;l<e._starts.length;l++)n[3*l]=e._starts[l].x,n[3*l+1]=e._starts[l].y,n[3*l+2]=e._starts[l].z;if(t.setAttribute("position",new d["b"](n,3)),e._canBeLineSegments)return t;let i=new Float32Array(3*e._ends.length);for(let l=0;l<e._ends.length;l++)i[3*l]=e._ends[l].x,i[3*l+1]=e._ends[l].y,i[3*l+2]=e._ends[l].z;t.setAttribute("end",new d["b"](i,3));let s=new Float32Array(e._thicknesses.length);for(let l=0;l<e._thicknesses.length;l++)s[l]=e._thicknesses[l];t.setAttribute("thickness",new d["b"](s,1));let r=new Int8Array(e._sides.length);for(let l=0;l<e._sides.length;l++)r[l]=e._sides[l];t.setAttribute("side",new d["b"](r,1));let o=new Float32Array(4*e._colors.length);for(let l=0;l<e._colors.length;l++)o[4*l]=e._colors[l].r,o[4*l+1]=e._colors[l].g,o[4*l+2]=e._colors[l].b,o[4*l+3]=1;return t.setAttribute("color",new d["b"](o,4)),t.setIndex(e._indices),t}function g(e,t){let n="\nvoid main() {\n  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n  vec4 clip = projectionMatrix * modelViewPosition;\n#ifdef NO_CLIP_Z\n  clip.z = 0.0;\n#else\n  float z = clip.z / clip.w;\n  z -= 0.001;\n  clip.z = z * clip.w;\n#endif\n  gl_Position = clip;\n}\n",i="\nuniform vec3 color;\nvoid main() {\n  gl_FragColor = vec4(color.rgb, 1.0);\n}\n";e&&(n="#define NO_CLIP_Z\n    "+n,i="#define NO_CLIP_Z\n    "+i);let s=new d["F"]({uniforms:{color:{type:"vec3",value:t}},vertexShader:n,fragmentShader:i,depthWrite:!e,depthTest:!e});return s}function y(e){let t="\nuniform vec2 viewport_size;\n\nattribute vec3 end;\nattribute float thickness;\nattribute float side;\nattribute vec4 color;\n\nvarying vec4 fs_color;\n\nvec2 ClipToScreen(in vec4 clip)\n{\n  float x = viewport_size.x * (1.0 + clip.x / clip.w) * 0.5;\n  float y = viewport_size.y * (1.0 + clip.y / clip.w) * 0.5;\n  return vec2(x, y);\n}\n\nvec2 ScreenToClip(in vec2 screen)\n{\n  float x = 2.0 * screen.x / viewport_size.x - 1.0;\n  float y = 2.0 * screen.y / viewport_size.y - 1.0;\n  return vec2(x, y);\n}\n\nvec2 RotatePoint90(in vec2 p, in bool ccw, in vec2 center)\n{\n  float s = ccw ? -1.0 : 1.0;\n  \n  // translate point back to origin:\n  p = p - center;\n  \n  // rotate point\n  float xnew = -p.y * s;\n  float ynew = p.x * s;\n  \n  // translate point back:\n  p.x = xnew + center.x;\n  p.y = ynew + center.y;\n  return p;\n}\n\n// Helper constants and types for 4D homogeneous drawing routines...\nconst int XLO = 1;\nconst int XHI = 2;\nconst int YLO = 4;\nconst int YHI = 8;\nconst int ZLO = 16;\nconst int ZHI = 32;\n\nvec3 ClippingSideFlag(in vec4 q)\n{\n  vec3 side = vec3(0);\n  float w = abs(q.w);\n  if (abs(q.x)>w) side.x = q.x>q.w ? 1.0 : -1.0;\n  if (abs(q.y)>w) side.y = q.y>q.w ? 1.0 : -1.0;\n  if (abs(q.z)>w) side.z = q.z>q.w ? 1.0 : -1.0;\n  return side;\n}\n\nvoid snip(in float px, in float py, in float qx, in float qy, inout float t0, inout float t1)\n{\n  const float small_float = 1e-10;\n\n  float t0_local = 0.0;\n  float t1_local = 1.0;\n\n  // check which side of line P and Q are with respect to x=y\n  // in this case (+) means x-y>0\n  bool positive_p = (px - py) > 0.0;\n  bool positive_q = (qx - qy) > 0.0;\n  if (positive_p != positive_q)\n  {\n    // snip against x=y line\n    // (1-t)P + tQ = R = (c,c)\n    // (1-t)Px + tQx = (1-t)Py +tQy\n    // t = (Px-Py) / (Px-Py-Qx+Qy)\n    float denom = px - py - qx + qy;\n    if (abs(denom) > small_float) {\n      float posxy_t = (px - py) / denom;\n      if (positive_p) //reduce t1\n        t1_local = posxy_t < t1_local ? posxy_t : t1_local;\n      else // increase t0\n        t0_local = posxy_t > t0_local ? posxy_t : t0_local;\n    }\n  }\n  // check which side of line P and Q are with respect to x=-y\n  // in this case (+) means X+y>0\n  positive_p = (px + py) > 0.0;\n  positive_q = (qx + qy) > 0.0;\n  if (positive_p != positive_q) {\n    // snip against x=-y line\n    // (1-t)P + tQ = R = (c,-c)\n    // (1-t)Px + tQx = -((1-t)Py +tQy)\n    // t = (Px+Py) / (Px+Py-Qx-Qy)\n    float denom = px + py - qx - qy;\n    if (abs(denom) > small_float) {\n      float negxy_t = (px + py) / denom;\n      if (positive_p) //reduce t1\n        t1_local = negxy_t < t1_local ? negxy_t : t1_local;\n      else // increase t0\n        t0_local = negxy_t > t0_local ? negxy_t : t0_local;\n    }\n  }\n  if (t0_local >= t1_local)\n    return;\n  if (t0_local > t0)\n    t0 = t0_local;\n  if (t1_local < t1)\n    t1 = t1_local;\n}\n\nvoid SnipToFrustum(in vec4 start, in vec4 end, in vec3 start_side, in vec3 end_side, out float t0, out float t1)\n{\n  t0 = 0.0;\n  t1 = 1.0;\n\n  if( start_side.x != 0.0 || end_side.x != 0.0)\n  {\n    snip(start.w, start.x, end.w, end.x, t0, t1);\n  }\n  if( start_side.y != 0.0 || end_side.y != 0.0)\n  {\n    snip(start.w, start.y, end.w, end.y, t0, t1);\n  }\n  if( start_side.z != 0.0 || end_side.z != 0.0)\n  {\n    snip(start.w, start.z, end.w, end.z, t0, t1);\n  }\n}\nvoid main()\n{\n  fs_color = color;\n\n  vec4 clip_position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  vec4 clip_next = projectionMatrix * modelViewMatrix * vec4(end, 1.0);\n#ifdef NO_CLIP_Z\n  clip_position.z = 0.0;\n  clip_next.z = 0.0;\n#endif\n  vec3 start_side = ClippingSideFlag(clip_position);\n  vec3 end_side = ClippingSideFlag(clip_next);\n  float t0 = 0.0;\n  float t1 = 1.0;\n  SnipToFrustum(clip_position, clip_next, start_side, end_side, t0, t1);\n  vec3 world_dir = end - position;\n  vec3 clipped_start = position + world_dir * t0;\n  vec3 clipped_end = position + world_dir * t1;\n  clip_position = projectionMatrix * modelViewMatrix * vec4(clipped_start, 1.0);\n  clip_next = projectionMatrix * modelViewMatrix * vec4(clipped_end, 1.0);\n\n\n  vec2 screen0 = ClipToScreen(clip_position);\n  vec2 screen1 = ClipToScreen(clip_next);\n  vec2 dir = screen1 - screen0;\n  dir = normalize(dir);\n  vec2 offset_screen_point = screen0 + (dir * 0.5 * thickness);\n  vec2 screen = RotatePoint90(offset_screen_point, side>0.0, screen0);\n  vec2 s2c = ScreenToClip(screen);\n  clip_position.x = s2c.x*clip_position.w;\n  clip_position.y = s2c.y*clip_position.w;\n#ifdef NO_CLIP_Z\n  clip_position.z = 0.0;\n#else\n  float z = clip_position.z / clip_position.w;\n  z -= 0.001;\n  clip_position.z = z * clip_position.w;\n#endif\n  // clip_position.w = 1.0;\n  gl_Position = clip_position;\n}\n",n="\nvarying vec4 fs_color;\n\nvoid main() {\n  gl_FragColor = fs_color;\n}\n";e&&(t="#define NO_CLIP_Z\n    "+t,n="#define NO_CLIP_Z\n    "+n);let i=new d["F"]({uniforms:{viewport_size:{type:"vec2",value:P.viewportSize}},vertexShader:t,fragmentShader:n,depthWrite:!e,depthTest:!e});return i}function b(e){let t=!e._depthTesting;return e._canBeLineSegments?g(t,e._colors):y(t)}class w{static createThreeObjectFromLines(e,t,n,i){let s=new w(i);return s.addLines(e,t,n),s.createThreeObject()}static getBiasLinesMaterial(e){return g(!1,e)}constructor(e){this._canBeLineSegments=!0,this._starts=[],this._ends=[],this._thicknesses=[],this._sides=[],this._colors=[],this._indices=[],this._depthTesting=e}addLine(e,t,n,i){if(Array.isArray(e)&&(e=new d["J"](e[0],e[1],e[2])),Array.isArray(t)&&(t=new d["J"](t[0],t[1],t[2])),this._canBeLineSegments&&(1!==i||this._colors.length>0&&!this._colors[0].equals(n))){let e=new w;e._canBeLineSegments=!1;for(let t=0;t<this._starts.length;t+=2){let n=this._starts[t],i=this._starts[t+1];e.addLine(n,i,this._colors,this._thicknesses)}this._canBeLineSegments=!1,this._starts=e._starts,this._ends=e._ends,this._thicknesses=e._thicknesses,this._sides=e._sides,this._colors=e._colors,this._indices=e._indices}if(this._canBeLineSegments)return this._starts=this._starts.concat([e,t]),this._colors=n,void(this._thicknesses=1);this._starts=this._starts.concat([e,t,t,e]),this._ends=this._ends.concat([t,e,e,t]),this._sides=this._sides.concat([1,-1,1,-1]),this._colors=this._colors.concat([n,n,n,n]),this._thicknesses=this._thicknesses.concat([i,i,i,i]);let s=this._starts.length-4;this._indices=this._indices.concat([s,s+1,s+2,s+2,s+3,s])}addLines(e,t,n){for(let i=0;i<e.length;i+=2){let s=e[i],r=e[i+1];this.addLine(s,r,t,n)}}addPolyline(e,t,n){let i=e.length;if(!(i<2))for(let s=0;s<i-1;s++)this.addLine(e[s],e[s+1],t,n)}createThreeObject(){let e=m(this),t=b(this);return this._canBeLineSegments?new d["o"](e,t):new d["u"](e,t)}}var v=w;function x(){let e=new d["c"],t=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);return e.setAttribute("position",new d["b"](t,3)),e.setIndex([0,1,2,0,2,3]),e}function _(){let e="\nvarying vec2 tc;\nvoid main() {\n  tc = vec2((position.x + 1.0) * 0.5, (position.y + 1.0) * 0.5);\n  gl_Position = vec4(position, 1.0);\n}\n",t="\nuniform sampler2D imageLeft;\nuniform sampler2D imageRight;\nuniform float horizontalPosition;\nuniform int compareMode;\nvarying vec2 tc;\nvoid main() {\n  vec4 color1 = texture2D(imageLeft, tc);\n  vec4 color2 = texture2D(imageRight, tc);\n  // compareMode: 0 (swipe), 1 (blend)\n  if (compareMode == 0) {\n    gl_FragColor = texture2D(imageLeft, tc);\n    if (tc.x > horizontalPosition)\n      gl_FragColor = texture2D(imageRight, tc);\n  } else {\n    gl_FragColor = mix(color1, color2, horizontalPosition);\n  }\n}\n",n=new d["F"]({uniforms:{imageLeft:{type:"sampler2D",value:null},imageRight:{type:"sampler2D",value:null},horizontalPosition:{type:"float",value:1},compareMode:{type:"int",value:0}},vertexShader:e,fragmentShader:t,depthWrite:!1,depthTest:!1,transparent:!0});return n}class T{static createThreeObject(){let e=x(),t=_();return new d["u"](e,t)}}function M(e,t){let n=re.getRhino3dm(),i=t,s=[],r=[];if(e instanceof n.LineCurve)return[e.pointAtStart,e.pointAtEnd];if(e instanceof n.PolylineCurve){i=e.pointCount;for(let t=0;t<i;t++)s.push(e.point(t));return s}if(e instanceof n.PolyCurve){let t=e.segmentCount;for(let n=0;n<t;n++){let t=e.segmentCurve(n),r=M(t,i);s=s.concat(r),t.delete()}return s}e instanceof n.NurbsCurve&&1===e.degree&&console.info("degree 1 curve");let o=e.domain,l=i-1;for(let a=0;a<i;a++){let t=o[0]+a/l*(o[1]-o[0]);if(t===o[0]||t===o[1]){r.push(t);continue}let n=e.tangentAt(t),i=new d["J"](n[0],n[1],n[2]),s=e.tangentAt(r.slice(-1)[0]),c=new d["J"](s[0],s[1],s[2]),h=i.angleTo(c);h<.1||r.push(t)}return s=r.map(t=>e.pointAt(t)),s}function O(e,t){let n=e.materials(),i=n.findFromAttributes(t),s=0;return i&&(s=i.id,i.delete()),n.delete(),s}let j={createGrid(e=1,t=70,n=5){const i=-t*e,s=i,r=t*e,o=r;let l=new d["m"],a=[],c=[];for(let u=-t;u<=t;u++){let t=u*e,l=u*e;0!==u?u%n===0?(c.push(new d["J"](t,s,0)),c.push(new d["J"](t,o,0)),c.push(new d["J"](i,l,0)),c.push(new d["J"](r,l,0))):(a.push(new d["J"](t,s,0)),a.push(new d["J"](t,o,0)),a.push(new d["J"](i,l,0)),a.push(new d["J"](r,l,0))):(c.push(new d["J"](0,s,0)),c.push(new d["J"](0,0,0)),c.push(new d["J"](i,0,0)),c.push(new d["J"](0,0,0)))}l.add(v.createThreeObjectFromLines(a,new d["f"](147/255,.6,160/255),1,!1)),l.add(v.createThreeObjectFromLines(c,new d["f"](129/255,134/255,140/255),1,!1));let h=new v(!1);return h.addLine(new d["J"](0,0,0),new d["J"](r,0,0),new d["f"](150/255,75/255,75/255),2),h.addLine(new d["J"](0,0,0),new d["J"](0,o,0),new d["f"](75/255,150/255,75/255),2),l.add(h.createThreeObject()),l},meshWiresToThreejs(e,t){let n=e.topologyEdges(),i=new Float32Array(n.edgesToArray()),s=new d["c"];s.setAttribute("position",new d["b"](i,3));let r=new d["f"](t.r/255,t.g/255,t.b/255),o=v.getBiasLinesMaterial(r),l=new d["o"](s,o);return l.userData["surfaceWires"]=!0,l},meshToThreejs(e,t,n){let i=e;Array.isArray(e)||(i=[e]);for(let d=0;d<i.length;d++){let e=i[d].textureCoordinates();if(0===e.count){let e=re.getRhino3dm(),t=new e.Sphere([0,0,0],1e3),n=e.TextureMapping.createSphereMapping(t);i[d].setTextureCoordinates(n,null,!1)}e.delete()}let s=re.getRhino3dm(),r=new d["d"],o=s.Mesh.toThreejsJSONMerged(i,!1);var l=r.parse(o);let a=new d["f"](t.r/255,t.g/255,t.b/255);0===t.r&&0===t.g&&0===t.b&&(a.r=1,a.g=1,a.b=1);let c=new d["v"]({color:a,side:d["h"]}),h=new d["u"](l,c);return h.userData["diffuse"]=a,h.userData["materialId"]=n,h},createThreeGeometryOnLayer(e,t,n){let i=re.getRhino3dm(),s=[],r=t.materials();s.push(r);let o=[],l=[];for(let a=0;a<e.length;a++){let n=e[a][0],o=e[a][1];const c=n.objectType;switch(c){case i.ObjectType.Brep:{let e=o.drawColor(t),a=r.findFromAttributes(o);s.push(a);let c=n.faces();for(let t=0;t<c.count;t++){let n=c.get(t),s=n.getMesh(i.MeshType.Any);s&&l.push([e,a,s]),n.delete()}c.delete()}break;case i.ObjectType.Mesh:{let e=o.drawColor(t),i=r.findFromAttributes(o);s.push(i),l.push([e,i,n])}break;case i.ObjectType.SubD:{n.subdivide(3);let e=i.Mesh.createFromSubDControlNet(n),a=o.drawColor(t),c=r.findFromAttributes(o);s.push(c),l.push([a,c,e])}break;case i.ObjectType.Extrusion:{let e=n.getMesh(i.MeshType.Any);if(e){let n=o.drawColor(t),i=r.findFromAttributes(o);s.push(i),l.push([n,i,e])}}break;default:break}}for(let a=0;a<l.length;a++){let[e,t,r]=l[a],c=[r],h=r.getBoundingBox();for(let n=a+1;n<l.length;n++){let[r,o,d]=l[n];if(e.r!==r.r||e.g!==r.g||e.b!==r.b||e.a!==r.a||0!==i.Material.compareAppearance(t,o))break;{a=n,c.push(d);let e=d.getBoundingBox();s.push(e),h=i.BoundingBox.union(h,e)}}let d=t.id,u=this.meshToThreejs(c,e,d);n.push(u.geometry),n.push(u.material),o.push([u,h])}for(let a=0;a<e.length;a++){let i=e[a][0],s=e[a][1],r=this.createThreeGeometry(i,s,t,n,!1);o=o.concat(r)}for(let a=0;a<s.length;a++)s[a].delete();return o},createThreeGeometry(e,t,n,i,s){let r=re.getRhino3dm(),o=[],l=t.drawColor(n);const a=e.objectType;switch(a){case r.ObjectType.Point:{let t=new d["C"]({color:l}),n=new d["l"],s=e.location;n.vertices.push(new d["J"](s[0],s[1],s[2])),i.push(t),i.push(n),o.push([new d["B"](n,t),e.getBoundingBox()])}break;case r.ObjectType.PointSet:{let t=new d["C"]({color:l}),n=new d["l"];i.push(t),i.push(n);let s=e.count;for(let i=0;i<s;i++){let t=e.pointAt(i);n.vertices.push(new d["J"](t[0],t[1],t[2]))}o.push([new d["B"](n,t),e.getBoundingBox()])}break;case r.ObjectType.Curve:{let t=M(e,100),n=new v(!0),s=new d["f"](l.r/255,l.g/255,l.b/255);n.addPolyline(t,s,1.5);let r=n.createThreeObject();i.push(r.geometry),i.push(r.material),o.push([r,e.getBoundingBox()])}break;case r.ObjectType.Surface:console.warn("TODO: Implement surface");break;case r.ObjectType.Brep:{if(s){let s=O(n,t),a=e.faces();for(let e=0;e<a.count;e++){let t=a.get(e),n=t.getMesh(r.MeshType.Any);if(n){let e=this.meshToThreejs(n,l,s);i.push(e.geometry),i.push(e.material),o.push([e,n.getBoundingBox()]),n.delete()}t.delete()}a.delete()}let a=new d["m"];a.userData["surfaceWires"]=!0;let c=e.edges();for(let e=0;e<c.count;e++){let t=c.get(e),n=M(t,100),s=new v(!0),r=new d["f"](l.r/255,l.g/255,l.b/255);s.addPolyline(n,r,1.5);let o=s.createThreeObject();i.push(o.geometry),i.push(o.material),a.add(o)}o.push([a,e.getBoundingBox()])}break;case r.ObjectType.Mesh:if(s){let s=O(n,t),r=this.meshToThreejs(e,l,s);i.push(r.geometry),i.push(r.material),o.push([r,e.getBoundingBox()])}{let t=this.meshWiresToThreejs(e,l);i.push(t.geometry),i.push(t.material),o.push([t,e.getBoundingBox()])}break;case r.ObjectType.Light:console.warn("TODO: Implement light");break;case r.ObjectType.Annotation:console.warn("TODO: Implement annotation");break;case r.ObjectType.InstanceReference:{let t=e.parentIdefId,s=e.xform.toFloatArray(!0),l=null,a=new d["m"],c=new d["t"];c.set(s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8],s[9],s[10],s[11],s[12],s[13],s[14],s[15]),a.applyMatrix(c);let h=n.instanceDefinitions(),u=n.objects(),p=h.findId(t),f=p.getObjectIds();f.forEach(t=>{let s=u.findId(t),o=s.geometry(),c=s.attributes(),h=this.createThreeGeometry(o,c,n,i,!0);h.forEach(t=>{let n=t[1];n.transform(e.xform),l=null==l?n:r.BoundingBox.union(l,n),a.add(t[0])})}),o.push([a,l]),u.delete(),h.delete()}break;case r.ObjectType.TextDot:let a=document.createElement("div");a.style.fontFamily=e.fontFace,a.style.fontSize=e.fontHeight+"px",a.style.marginTop="-1em",a.style.color="#FFF",a.style.padding="2px",a.style.paddingRight="5px",a.style.paddingLeft="5px",a.style.borderRadius="5px",a.style.background=`rgba(${l.r},${l.g},${l.b},${l.a})`,a.textContent=e.text;let c=new p["a"](a),h=e.point;c.position.set(h[0],h[1],h[2]),o.push([c,null]);break;case r.ObjectType.Hatch:console.warn("TODO: Implement hatch");break;case r.ObjectType.SubD:if(s){e.subdivide(3);let s=r.Mesh.createFromSubDControlNet(e),a=O(n,t),c=this.meshToThreejs(s,l,a);i.push(c.geometry),i.push(c.material),o.push([c,e.getBoundingBox()]),s.delete()}break;case r.ObjectType.ClipPlane:let u=e.normalAt(0,0),f=e.pointAt(0,0),m=new d["A"](new d["J"](u[0],u[1],u[2]),0);m.translate(new d["J"](f[0],f[1],f[2])),o.push([m,null]);break;case r.ObjectType.Extrusion:if(s){let s=e.getMesh(r.MeshType.Any);if(s){let e=O(n,t),r=this.meshToThreejs(s,l,e);i.push(r.geometry),i.push(r.material),o.push([r,s.getBoundingBox()]),s.delete()}}break;default:break}return o},createScreenQuad(){return T.createThreeObject()},viewportSize:new d["I"](0,0)};var P=j;function S(e,t){if(null==e&&null==t)return!0;if(null==e||null==t)return!1;const n=1e-4;if(Math.abs(e.near-t.near)>n)return!1;if(Math.abs(e.far-t.far)>n)return!1;if(Math.abs(e.aspect-t.aspect)>n)return!1;for(let i=0;i<16;i++)if(Math.abs(e.matrix[i]-t.matrix[i])>n)return!1;return!(Math.abs(e.rotation.x-t.rotation.x)>n)&&(!(Math.abs(e.rotation.y-t.rotation.y)>n)&&(!(Math.abs(e.rotation.z-t.rotation.z)>n)&&(!(Math.abs(e.position.x-t.position.x)>n)&&(!(Math.abs(e.position.y-t.position.y)>n)&&!(Math.abs(e.position.z-t.position.z)>n)))))}var k=new WeakMap,C=new WeakMap,L=new WeakMap,A=new WeakMap,z=new WeakMap,B=new WeakMap,F=new WeakMap,E=new WeakMap,D=new WeakMap,J=new WeakMap,W=new WeakMap,I=new WeakMap;class q{constructor(e){k.set(this,{writable:!0,value:null}),C.set(this,{writable:!0,value:null}),L.set(this,{writable:!0,value:null}),A.set(this,{writable:!0,value:null}),z.set(this,{writable:!0,value:null}),B.set(this,{writable:!0,value:[0,0]}),F.set(this,{writable:!0,value:new d["E"]}),E.set(this,{writable:!0,value:[null,null]}),D.set(this,{writable:!0,value:null}),J.set(this,{writable:!0,value:new d["E"]}),W.set(this,{writable:!0,value:null}),I.set(this,{writable:!0,value:!1}),console.log("create pipeline"),d["x"].DefaultUp=new d["J"](0,0,1),h()(this,k,new d["L"]({antialias:!0})),a()(this,k).setPixelRatio(window.devicePixelRatio),a()(this,k).setSize(e.clientWidth,e.clientHeight),h()(this,z,e),a()(this,z).appendChild(a()(this,k).domElement),h()(this,C,new p["b"]),a()(this,C).domElement.id="labels",a()(this,C).setSize(e.clientWidth,e.clientHeight),a()(this,C).domElement.style.position="absolute",a()(this,C).domElement.style.top=0,a()(this,C).domElement.style.pointerEvents="none",e.appendChild(a()(this,C).domElement),h()(this,L,new d["z"](30,e.clientWidth/e.clientHeight,1,1e3)),a()(this,L).position.z=40,h()(this,A,new u["a"](a()(this,L),a()(this,k).domElement)),a()(this,A).screenSpacePanning=!0,a()(this,A).addEventListener("change",()=>this.updateFrustum()),h()(this,D,P.createScreenQuad()),a()(this,J).add(a()(this,D))}setDirtyFlag(){h()(this,I,!0)}drawFrameBuffer(e,t,n,i,s,r){let o=a()(this,I);h()(this,I,!1),null==i&&(r=100);let l=a()(this,z).clientWidth,c=a()(this,z).clientHeight;const d=a()(this,B)[0]!==a()(this,z).clientWidth||a()(this,B)[1]!==a()(this,z).clientHeight;h()(this,B,[a()(this,z).clientWidth,a()(this,z).clientHeight]),d&&(o=!0,a()(this,L).aspect=a()(this,z).clientWidth/a()(this,z).clientHeight,a()(this,L).updateProjectionMatrix(),a()(this,k).setSize(a()(this,z).clientWidth,a()(this,z).clientHeight),a()(this,C).setSize(a()(this,z).clientWidth,a()(this,z).clientHeight)),a()(this,A).update(),P.viewportSize.width=l,P.viewportSize.height=c,t.clipping?a()(this,k).clippingPlanes=n.clippingPlanes:a()(this,k).clippingPlanes=[],a()(this,k).autoClear=!1,a()(this,k).sortObjects=!1,this.drawBackground(e,t),null==a()(this,W)&&h()(this,W,a()(this,L).clone()),o|=!S(a()(this,W),a()(this,L)),o&&(a()(this,W).copy(a()(this,L),!1),this.drawMiddlegroundToTexture(0,n.three.middleground)),a()(this,D).material.uniforms.imageLeft.value=a()(this,E)[0].texture;const u=r/100;a()(this,D).material.uniforms.horizontalPosition.value=u,a()(this,D).material.uniforms.compareMode.value=s,null!=i?(null==i.syncCamera&&(i.syncCamera=a()(this,L).clone(),i.three.middleground.add(i.syncCamera)),i.syncCamera.copy(a()(this,L),!1),o&&this.drawMiddlegroundToTexture(1,i.three.middleground),a()(this,D).material.uniforms.imageRight.value=a()(this,E)[1].texture):a()(this,D).material.uniforms.imageRight.value=a()(this,E)[0].texture,a()(this,k).render(a()(this,J),a()(this,L))}drawBackground(e,t){if(t.backgroundStyle===f["a"].backgroundModes[0])a()(this,F).background=new d["f"](t.backgroundColor);else if(t.backgroundStyle===f["a"].backgroundModes[1]){const e=document.createElement("canvas");e.width=128,e.height=128;let n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,e.height);i.addColorStop(1,t.backgroundGradientTop),i.addColorStop(.1,t.backgroundGradientBottom),n.fillStyle=i,n.fillRect(0,0,e.width,e.height),a()(this,F).background=new d["e"](e)}null==a()(this,F).grid&&(a()(this,F).grid=P.createGrid(),a()(this,F).add(a()(this,F).grid)),a()(this,F).grid.visible=e,a()(this,k).render(a()(this,F),a()(this,L))}drawMiddlegroundToTexture(e,t){null==a()(this,E)[e]&&(a()(this,E)[e]=new d["K"](a()(this,B)[0],a()(this,B)[1])),a()(this,E)[e].width===a()(this,B)[0]&&a()(this,E)[e].height===a()(this,B)[1]||a()(this,E)[e].setSize(2*a()(this,B)[0],2*a()(this,B)[1]),a()(this,k).setRenderTarget(a()(this,E)[e]),a()(this,k).setClearColor(new d["f"](0,0,0),0),a()(this,k).clear(!0,!0),a()(this,k).render(t,a()(this,L)),a()(this,k).setRenderTarget(null)}boxCorners(e){return[new d["J"](e.min.x,e.min.y,e.min.z),new d["J"](e.min.x,e.min.y,e.max.z),new d["J"](e.min.x,e.max.y,e.min.z),new d["J"](e.min.x,e.max.y,e.max.z),new d["J"](e.max.x,e.min.y,e.min.z),new d["J"](e.max.x,e.min.y,e.max.z),new d["J"](e.max.x,e.max.y,e.min.z),new d["J"](e.max.x,e.max.y,e.max.z)]}updateFrustum(){if(re.viewModel().perspectiveCamera){let e=re.visibleObjectsBoundingBox(),t=this.boxCorners(e),n=new d["J"](0,0,-1);n.applyQuaternion(a()(this,L).quaternion);let i=new d["A"](n,0);i.translate(a()(this,L).position);let s=t.map(e=>i.distanceToPoint(e));a()(this,L).near=Math.max(.1,Math.min(...s)),a()(this,L).far=Math.max(...s),a()(this,L).updateProjectionMatrix()}}setPanMode(e){e?(a()(this,A).mouseButtons.LEFT=d["r"].PAN,a()(this,A).touches.ONE=d["H"].PAN):(a()(this,A).mouseButtons.LEFT=d["r"].ROTATE,a()(this,A).touches.ONE=d["H"].ROTATE)}zoomExtents(e){let t=re.getRhino3dm(),n=re.viewModel().perspectiveCamera?t.ViewportInfo.defaultPerspective():t.ViewportInfo.defaultTop(),i=new d["I"](0,0);a()(this,k).getSize(i),n.screenPort=[0,0,i.x,i.y];let s=re.visibleObjectsBoundingBox(),r=new t.BoundingBox(s.min.x,s.min.y,s.min.z,s.max.x,s.max.y,s.max.z),o=r.center,l=r.max[0]-r.min[0],c=r.max[1]-r.min[1],u=r.max[2]-r.min[2];r.inflate(.2*l,.2*c,.2*u);let p=l,f=p*i.y/i.x;if(n.setFrustum(-p/2,p/2,-f/2,f/2,.1,1e3),n.extents(50*Math.PI/180,r),r.delete(),e){re.getActiveModel().three.middleground.remove(a()(this,L));let e=n.getFrustum();re.viewModel().perspectiveCamera?h()(this,L,new d["z"](30,i.x/i.y,e.near,e.far)):(h()(this,L,new d["y"](e.left,e.right,e.top,e.bottom,e.near,e.far)),a()(this,L).up.set(n.cameraUp[0],n.cameraUp[1],n.cameraUp[2])),a()(this,A).object=a()(this,L);let t=new d["g"](re.viewModel().lightColor);t.position.set(0,0,1),a()(this,L).add(t),re.getActiveModel().three.middleground.add(a()(this,L))}let m=n.cameraLocation;a()(this,L).position.set(m[0],m[1],m[2]),a()(this,L).updateProjectionMatrix(),a()(this,A).target.set(o[0],o[1],o[2]),n.delete()}}var R=n("9523"),H=n.n(R),N=(n("bf19"),n("5a15"));let G={readFile(e,t,n){let i=new N["a"],s=i.parse(t),r=new n.File3dm,o=new n.Layer;o.name="Default",r.layers().add(o);let l=new n.ObjectAttributes;return l.layersIndex=0,s.children.forEach(e=>{if("Mesh"===e.type){let t=n.Mesh.createFromThreejsJSON(e.geometry.toJSON());e.material.color?(l.colorSource=n.ObjectColorSource.ColorFromObject,l.objectColor={r:255*e.material.color.r,g:255*e.material.color.g,b:255*e.material.color.b,a:255}):l.colorSource=n.ObjectColorSource.ColorFromLayer,r.objects().addMesh(t,l)}}),r}};var Q=G;let V={readFile(e,t,n){let i=n.DracoCompression.decompressByteArray(t),s=new n.File3dm,r=new n.Layer;r.name="Default",s.layers().add(r);let o=new n.ObjectAttributes;return o.layersIndex=0,s.objects().addMesh(i,o),s}};var Z=V,$=n("21cb");let U={readFile(e,t,n){let i=new $["a"],s=i.parse(t),r=new n.File3dm,o=new n.Layer;o.name="Default",r.layers().add(o);let l=new n.ObjectAttributes;l.layersIndex=0;let a=n.Mesh.createFromThreejsJSON(s.toJSON());return r.objects().addMesh(a,l),r}};var X=U;function Y(e,t,n){t.forEach(t=>{e.layers.hasOwnProperty(t)||(e.layers[t]={visible:!0,layers:{}}),e=e.layers[t]}),e.visible=n.visible}function K(e){let t=[],n=Object.getOwnPropertyNames(e.layers);return n.forEach(n=>{let i={label:n,visible:e.layers[n].visible},s=K(e.layers[n]);s.length>0&&(i.children=s),t.push(i)}),t}var ee=new WeakMap;class te{constructor(e,t){H()(this,"rhinoDoc",null),H()(this,"layers",[]),H()(this,"three",{middleground:null,foreground:null}),H()(this,"syncCamera",null),H()(this,"clippingPlanes",[]),ee.set(this,{writable:!0,value:null}),H()(this,"name",""),H()(this,"disposableResources",[]),this.rhinoDoc=e,this.name=t,this.three.middleground=new d["E"],this.three.foreground=new d["E"];let n=e.layers(),i=n.count(),s={layers:{},visible:!0};for(let r=0;r<i;r++){let e=n.get(r),t=e.fullPath,i=t.split("::");Y(s,i,e),e.delete()}n.delete(),this.layers=K(s),this.buildSceneHelper()}buildSceneHelper(){const e=this.rhinoDoc;let t=e.objects(),n={};for(let i=0;i<t.count;i++){let e=t.get(i);if(null==e)continue;let s=e.geometry(),r=e.attributes();if(e.delete(),r.isInstanceDefinitionObject){s.delete(),r.delete(),e.delete();continue}const o=r.layerIndex;n.hasOwnProperty(o)||(n[o]=[]),n[o].push([s,r])}for(const i in n){const t=n[i];let s=e.layers().get(parseInt(i)),r=P.createThreeGeometryOnLayer(t,e,this.disposableResources);r.forEach(e=>{let t=e[0],n=e[1];if(t.fullLayerPath=s.fullPath,n){let e=new d["J"](n.min[0],n.min[1],n.min[2]),i=new d["J"](n.max[0],n.max[1],n.max[2]);t.boundingBox=new d["a"](e,i),n.delete()}switch(t.constructor){case p["a"]:this.three.foreground.add(t);break;case d["A"]:this.clippingPlanes.push(t);break;default:this.three.middleground.add(t);break}})}t.delete()}static create(e,t,n){let i=null;if(i=e.endsWith(".obj")?Q.readFile(e,t,n):e.endsWith(".drc")?Z.readFile(e,t,n):e.endsWith(".ply")?X.readFile(e,t,n):n.File3dm.fromByteArray(t),null!=i){const t=new te(i,e);return t}return null}dispose(){null!=this.rhinoDoc&&this.rhinoDoc.delete(),this.rhinoDoc=null,this.disposableResources.forEach(e=>{e.dispose()}),this.disposableResources=[],this.three.middleground=null,this.three.foreground=null}getSceneObjectDictionary(){if(null==a()(this,ee)){let e={};this.three.foreground.children.forEach(t=>{let n=t.fullLayerPath.split("::")[0];e[n]||(e[n]=[]),e[n].push(t)}),this.three.middleground.children.forEach(t=>{let n=t.fullLayerPath.split("::")[0];e[n]||(e[n]=[]),e[n].push(t)}),h()(this,ee,e)}return a()(this,ee)}getSceneObjectsOnLayer(e){const t=this.getSceneObjectDictionary();return t[e]}}let ne=null,ie={model1:{exists:!1,name:"",displayAttrs:{wires:!0,shading:!0}},model2:{exists:!1,name:"",displayAttrs:{wires:!0,shading:!0}},expanded:["Layers"],layers:[],perspectiveCamera:!0,showGrid:!0,comparePosition:50,compareMode:0},se=f["a"].defaultModes();class re{static init(e,t,n){if(null==o()(re,re,oe)){let i=e();console.log("start loading rhino3dm"),t(),i.then(e=>{if(s()(re,re,oe,e),n(),console.log("rhino3dm loaded"),null!=ne){let e=ne[0],t=ne[1];ne=null,re.openFile(e,t)}})}}static applicationTitle(){return"rview WIP"}static registerWebGlElement(e){s()(re,re,ae,e)}static openFile(e,t,n=!1){if(null==o()(re,re,oe))return ne=[e,t],!1;const i=te.create(e,t,o()(re,re,oe));if(null==i)return alert("Invalid document"),!1;if(null!=o()(re,re,he)&&o()(re,re,he).dispose(),s()(re,re,he,null),n&&null!=o()(re,re,ce)?(s()(re,re,he,i),ie.model2Exists=!0):(null!=o()(re,re,ce)&&o()(re,re,ce).dispose(),s()(re,re,ce,i)),ie.model1.exists=!0,ie.model1.name=o()(re,re,ce).name,ie.model2.exists=null!=o()(re,re,he),ie.model2.name=null!=o()(re,re,he)?o()(re,re,he).name:"",ie.layers=o()(re,re,ce).layers,null!=o()(re,re,he)){let e=[];for(let t=0;t<o()(re,re,he).layers.length;t++){let n=!0;for(let e=0;e<ie.layers.length;e++)if(ie.layers[e].label===o()(re,re,he).layers[t].label){n=!1;break}n&&e.push(o()(re,re,he).layers[t])}ie.layers=ie.layers.concat(e)}let r=document.getElementById("labels");return null!=r&&(r.innerHTML=""),re.updateVisibility(),re.getDisplayPipeline().zoomExtents(!0),requestAnimationFrame(()=>re.renderLoop()),!0}static getDisplayPipeline(){if(null==o()(re,re,le)){if(""===o()(re,re,ae))throw new Error("no element defined for WebGL");s()(re,re,le,new q(document.getElementById(o()(re,re,ae))))}return o()(re,re,le)}static getRhino3dm(){return o()(re,re,oe)}static viewModel(){return ie}static updateVisibility(){ie.layers.forEach(e=>{re.getSceneObjectsOnLayer(e.label,!0,!1).forEach(t=>{t.visible=e.visible,t.visible&&"Mesh"===t.type&&(t.visible=ie.model1.displayAttrs.shading),t.visible&&t.userData["surfaceWires"]&&(t.visible=ie.model1.displayAttrs.wires)}),re.getSceneObjectsOnLayer(e.label,!1,!0).forEach(t=>{t.visible=e.visible,t.visible&&"Mesh"===t.type&&(t.visible=ie.model2.displayAttrs.shading),t.visible&&t.userData["surfaceWires"]&&(t.visible=ie.model2.displayAttrs.wires)})}),null!=o()(re,re,le)&&o()(re,re,le).setDirtyFlag()}static getActiveModel(){return o()(re,re,ce)}static getSceneObjectsOnLayer(e,t,n){let i=[];if(null!=o()(re,re,ce)&&t){const t=o()(re,re,ce).getSceneObjectsOnLayer(e);null!=t&&(i=i.concat(t))}if(null!=o()(re,re,he)&&n){const t=o()(re,re,he).getSceneObjectsOnLayer(e);null!=t&&(i=i.concat(t))}return i}static visibleObjectsBoundingBox(){let e=null;return ie.layers.forEach(t=>{if(!t.visible)return;let n=re.getSceneObjectsOnLayer(t.label,!0,!0);null!=n&&n.forEach(t=>{null!=t.boundingBox&&(null==e?e=t.boundingBox.clone():e.union(t.boundingBox))})}),e}static renderLoop(){requestAnimationFrame(()=>re.renderLoop()),null!=o()(re,re,le)&&o()(re,re,le).drawFrameBuffer(ie.showGrid,se[0],o()(re,re,ce),o()(re,re,he),ie.compareMode,ie.comparePosition)}}var oe={writable:!0,value:null},le={writable:!0,value:null},ae={writable:!0,value:""},ce={writable:!0,value:null},he={writable:!0,value:null}},cbaf:function(e,t,n){"use strict";function i(){let e=new l("Wireframe");return e.showSurfaceMeshes=!1,e}function s(){let e=new l("Shaded");return e}function r(){let e=new l("Ghosted");return e.transparency=.5,e}function o(){let e=new l("Rendered");return e.showSurfaceWires=!1,e}class l{constructor(e=null){this.name=e,this.backgroundStyle="Single Color",this.backgroundColor="rgb(157,163,170)",this.backgroundGradientTop="rgb(54,109,168)",this.backgroundGradientBottom="rgb(165,165,165)",this.lightColor="rgb(240,240,240)",this.showSurfaceWires=!0,this.showSurfaceMeshes=!0,this.clipping=!0,this.defaultModes=()=>{let e=[];return e.push(i()),e.push(s()),e.push(r()),e.push(o()),e}}}let a={defaultModes:()=>(new l).defaultModes(),backgroundModes:["Single Color","2 Color Gradient"]};t["a"]=a}});