(function(e){function t(t){for(var i,s,l=t[0],a=t[1],c=t[2],d=0,u=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},r={2:0},o=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{1:"f1a86d3b",3:"5676ef21",4:"c135f145"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=i);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.src=s(e);var c=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,n[1](c)}r[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var p=c;o.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"17c8":function(e,t,n){"use strict";n("ace4"),n("cfc3");var i=n("5a89"),r=n("aea1"),o=n("1bee");n("fd87");function s(e){let t=new i["d"],n=new Float32Array(3*e._starts.length);for(let i=0;i<e._starts.length;i++)n[3*i]=e._starts[i].x,n[3*i+1]=e._starts[i].y,n[3*i+2]=e._starts[i].z;if(t.setAttribute("position",new i["c"](n,3)),e._canBeLineSegments)return t;let r=new Float32Array(3*e._ends.length);for(let i=0;i<e._ends.length;i++)r[3*i]=e._ends[i].x,r[3*i+1]=e._ends[i].y,r[3*i+2]=e._ends[i].z;t.setAttribute("end",new i["c"](r,3));let o=new Float32Array(e._thicknesses.length);for(let i=0;i<e._thicknesses.length;i++)o[i]=e._thicknesses[i];t.setAttribute("thickness",new i["c"](o,1));let s=new Int8Array(e._sides.length);for(let i=0;i<e._sides.length;i++)s[i]=e._sides[i];t.setAttribute("side",new i["c"](s,1));let l=new Float32Array(4*e._colors.length);for(let i=0;i<e._colors.length;i++)l[4*i]=e._colors[i].r,l[4*i+1]=e._colors[i].g,l[4*i+2]=e._colors[i].b,l[4*i+3]=1;return t.setAttribute("color",new i["c"](l,4)),t.setIndex(e._indices),t}function l(e,t){let n="\nvoid main() {\n  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n  vec4 clip = projectionMatrix * modelViewPosition;\n#ifdef NO_CLIP_Z\n  clip.z = 0.0;\n#else\n  float z = clip_position.z / clip_position.w;\n  z -= 0.001;\n  clip_position.z = z * clip_position.w;\n#endif\n  gl_Position = clip;\n}\n",r="\nuniform vec3 color;\nvoid main() {\n  gl_FragColor = vec4(color.rgb, 1.0);\n}\n";e&&(n="#define NO_CLIP_Z\n    "+n,r="#define NO_CLIP_Z\n    "+r);let o=new i["X"]({uniforms:{color:{type:"vec3",value:t}},vertexShader:n,fragmentShader:r,depthWrite:!e,depthTest:!e});return o}function a(e){let t="\nuniform vec2 viewport_size;\n\nattribute vec3 end;\nattribute float thickness;\nattribute float side;\nattribute vec4 color;\n\nvarying vec4 fs_color;\n\nvec2 ClipToScreen(in vec4 clip)\n{\n  float x = viewport_size.x * (1.0 + clip.x / clip.w) * 0.5;\n  float y = viewport_size.y * (1.0 + clip.y / clip.w) * 0.5;\n  return vec2(x, y);\n}\n\nvec2 ScreenToClip(in vec2 screen)\n{\n  float x = 2.0 * screen.x / viewport_size.x - 1.0;\n  float y = 2.0 * screen.y / viewport_size.y - 1.0;\n  return vec2(x, y);\n}\n\nvec2 RotatePoint90(in vec2 p, in bool ccw, in vec2 center)\n{\n  float s = ccw ? -1.0 : 1.0;\n  \n  // translate point back to origin:\n  p = p - center;\n  \n  // rotate point\n  float xnew = -p.y * s;\n  float ynew = p.x * s;\n  \n  // translate point back:\n  p.x = xnew + center.x;\n  p.y = ynew + center.y;\n  return p;\n}\n\n// Helper constants and types for 4D homogeneous drawing routines...\nconst int XLO = 1;\nconst int XHI = 2;\nconst int YLO = 4;\nconst int YHI = 8;\nconst int ZLO = 16;\nconst int ZHI = 32;\n\nvec3 ClippingSideFlag(in vec4 q)\n{\n  vec3 side = vec3(0);\n  float w = abs(q.w);\n  if (abs(q.x)>w) side.x = q.x>q.w ? 1.0 : -1.0;\n  if (abs(q.y)>w) side.y = q.y>q.w ? 1.0 : -1.0;\n  if (abs(q.z)>w) side.z = q.z>q.w ? 1.0 : -1.0;\n  return side;\n}\n\nvoid snip(in float px, in float py, in float qx, in float qy, inout float t0, inout float t1)\n{\n  const float small_float = 1e-10;\n\n  float t0_local = 0.0;\n  float t1_local = 1.0;\n\n  // check which side of line P and Q are with respect to x=y\n  // in this case (+) means x-y>0\n  bool positive_p = (px - py) > 0.0;\n  bool positive_q = (qx - qy) > 0.0;\n  if (positive_p != positive_q)\n  {\n    // snip against x=y line\n    // (1-t)P + tQ = R = (c,c)\n    // (1-t)Px + tQx = (1-t)Py +tQy\n    // t = (Px-Py) / (Px-Py-Qx+Qy)\n    float denom = px - py - qx + qy;\n    if (abs(denom) > small_float) {\n      float posxy_t = (px - py) / denom;\n      if (positive_p) //reduce t1\n        t1_local = posxy_t < t1_local ? posxy_t : t1_local;\n      else // increase t0\n        t0_local = posxy_t > t0_local ? posxy_t : t0_local;\n    }\n  }\n  // check which side of line P and Q are with respect to x=-y\n  // in this case (+) means X+y>0\n  positive_p = (px + py) > 0.0;\n  positive_q = (qx + qy) > 0.0;\n  if (positive_p != positive_q) {\n    // snip against x=-y line\n    // (1-t)P + tQ = R = (c,-c)\n    // (1-t)Px + tQx = -((1-t)Py +tQy)\n    // t = (Px+Py) / (Px+Py-Qx-Qy)\n    float denom = px + py - qx - qy;\n    if (abs(denom) > small_float) {\n      float negxy_t = (px + py) / denom;\n      if (positive_p) //reduce t1\n        t1_local = negxy_t < t1_local ? negxy_t : t1_local;\n      else // increase t0\n        t0_local = negxy_t > t0_local ? negxy_t : t0_local;\n    }\n  }\n  if (t0_local >= t1_local)\n    return;\n  if (t0_local > t0)\n    t0 = t0_local;\n  if (t1_local < t1)\n    t1 = t1_local;\n}\n\nvoid SnipToFrustum(in vec4 start, in vec4 end, in vec3 start_side, in vec3 end_side, out float t0, out float t1)\n{\n  t0 = 0.0;\n  t1 = 1.0;\n\n  if( start_side.x != 0.0 || end_side.x != 0.0)\n  {\n    snip(start.w, start.x, end.w, end.x, t0, t1);\n  }\n  if( start_side.y != 0.0 || end_side.y != 0.0)\n  {\n    snip(start.w, start.y, end.w, end.y, t0, t1);\n  }\n  if( start_side.z != 0.0 || end_side.z != 0.0)\n  {\n    snip(start.w, start.z, end.w, end.z, t0, t1);\n  }\n}\nvoid main()\n{\n  fs_color = color;\n\n  vec4 clip_position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  vec4 clip_next = projectionMatrix * modelViewMatrix * vec4(end, 1.0);\n#ifdef NO_CLIP_Z\n  clip_position.z = 0.0;\n  clip_next.z = 0.0;\n#endif\n  vec3 start_side = ClippingSideFlag(clip_position);\n  vec3 end_side = ClippingSideFlag(clip_next);\n  float t0 = 0.0;\n  float t1 = 1.0;\n  SnipToFrustum(clip_position, clip_next, start_side, end_side, t0, t1);\n  vec3 world_dir = end - position;\n  vec3 clipped_start = position + world_dir * t0;\n  vec3 clipped_end = position + world_dir * t1;\n  clip_position = projectionMatrix * modelViewMatrix * vec4(clipped_start, 1.0);\n  clip_next = projectionMatrix * modelViewMatrix * vec4(clipped_end, 1.0);\n\n\n  vec2 screen0 = ClipToScreen(clip_position);\n  vec2 screen1 = ClipToScreen(clip_next);\n  vec2 dir = screen1 - screen0;\n  dir = normalize(dir);\n  vec2 offset_screen_point = screen0 + (dir * 0.5 * thickness);\n  vec2 screen = RotatePoint90(offset_screen_point, side>0.0, screen0);\n  vec2 s2c = ScreenToClip(screen);\n  clip_position.x = s2c.x*clip_position.w;\n  clip_position.y = s2c.y*clip_position.w;\n#ifdef NO_CLIP_Z\n  clip_position.z = 0.0;\n#else\n  float z = clip_position.z / clip_position.w;\n  z -= 0.001;\n  clip_position.z = z * clip_position.w;\n#endif\n  // clip_position.w = 1.0;\n  gl_Position = clip_position;\n}\n",n="\nvarying vec4 fs_color;\n\nvoid main() {\n  gl_FragColor = fs_color;\n}\n";e&&(t="#define NO_CLIP_Z\n    "+t,n="#define NO_CLIP_Z\n    "+n);let r=new i["X"]({uniforms:{viewport_size:{type:"vec2",value:y.viewportSize}},vertexShader:t,fragmentShader:n,depthWrite:!e,depthTest:!e});return r}function c(e){let t=!e._depthTesting;return e._canBeLineSegments?l(t,e._colors):a(t)}class d{static createThreeObjectFromLines(e,t,n,i){let r=new d(i);return r.addLines(e,t,n),r.createThreeObject()}constructor(e){this._canBeLineSegments=!0,this._starts=[],this._ends=[],this._thicknesses=[],this._sides=[],this._colors=[],this._indices=[],this._depthTesting=e}addLine(e,t,n,r){if(Array.isArray(e)&&(e=new i["eb"](e[0],e[1],e[2])),Array.isArray(t)&&(t=new i["eb"](t[0],t[1],t[2])),this._canBeLineSegments&&(1!==r||this._colors.length>0&&!this._colors[0].equals(n))){let e=new d;e._canBeLineSegments=!1;for(let t=0;t<this._starts.length;t+=2){let n=this._starts[t],i=this._starts[t+1];e.addLine(n,i,this._colors,this._thicknesses)}this._canBeLineSegments=!1,this._starts=e._starts,this._ends=e._ends,this._thicknesses=e._thicknesses,this._sides=e._sides,this._colors=e._colors,this._indices=e._indices}if(this._canBeLineSegments)return this._starts=this._starts.concat([e,t]),this._colors=n,void(this._thicknesses=1);this._starts=this._starts.concat([e,t,t,e]),this._ends=this._ends.concat([t,e,e,t]),this._sides=this._sides.concat([1,-1,1,-1]),this._colors=this._colors.concat([n,n,n,n]),this._thicknesses=this._thicknesses.concat([r,r,r,r]);let o=this._starts.length-4;this._indices=this._indices.concat([o,o+1,o+2,o+2,o+3,o])}addLines(e,t,n){for(let i=0;i<e.length;i+=2){let r=e[i],o=e[i+1];this.addLine(r,o,t,n)}}addPolyline(e,t,n){let i=e.length;if(!(i<2))for(let r=0;r<i-1;r++)this.addLine(e[r],e[r+1],t,n)}createThreeObject(){let e=s(this),t=c(this);return this._canBeLineSegments?new i["x"](e,t):new i["F"](e,t)}}var p=d;function u(e,t){let n=o["a"].getRhino3dm(),i=t,r=[];if(e instanceof n.LineCurve)return[e.pointAtStart,e.pointAtEnd];if(e instanceof n.PolylineCurve){i=e.pointCount;for(let t=0;t<i;t++)r.push(e.point(t));return r}if(e instanceof n.PolyCurve){let t=e.segmentCount;for(let n=0;n<t;n++){let t=e.segmentCurve(n),i=u(t);r=r.concat(i),t.delete()}return r}e instanceof n.NurbsCurve&&1===e.degree&&console.info("degree 1 curve");let s=e.domain,l=i-1;for(let o=0;o<i;o++){let t=s[0]+o/l*(s[1]-s[0]);r.push(e.pointAt(t))}return r}function h(e,t){let n=e.materials(),i=n.findFromAttributes(t),r=0;return i&&(r=i.id,i.delete()),n.delete(),r}let f={createGrid(e=1,t=70,n=5){const r=-t*e,o=r,s=t*e,l=s;let a=new i["v"],c=[],d=[];for(let p=-t;p<=t;p++){let t=p*e,a=p*e;0!==p?p%n===0?(d.push(new i["eb"](t,o,0)),d.push(new i["eb"](t,l,0)),d.push(new i["eb"](r,a,0)),d.push(new i["eb"](s,a,0))):(c.push(new i["eb"](t,o,0)),c.push(new i["eb"](t,l,0)),c.push(new i["eb"](r,a,0)),c.push(new i["eb"](s,a,0))):(d.push(new i["eb"](0,o,0)),d.push(new i["eb"](0,0,0)),d.push(new i["eb"](r,0,0)),d.push(new i["eb"](0,0,0)))}a.add(p.createThreeObjectFromLines(c,new i["h"](147/255,.6,160/255),1,!1)),a.add(p.createThreeObjectFromLines(d,new i["h"](129/255,134/255,140/255),1,!1));let u=new p(!1);return u.addLine(new i["eb"](0,0,0),new i["eb"](s,0,0),new i["h"](150/255,75/255,75/255),2),u.addLine(new i["eb"](0,0,0),new i["eb"](0,l,0),new i["h"](75/255,150/255,75/255),2),a.add(u.createThreeObject()),a},meshWiresToThreejs(e,t){let n=e.topologyEdges(),r=n.count,o=new Float32Array(2*r*3);for(let i=0;i<r;i++){let e=n.edgeLine(i);o[6*i]=e.from[0],o[6*i+1]=e.from[1],o[6*i+2]=e.from[2],o[6*i+3]=e.to[0],o[6*i+4]=e.to[1],o[6*i+5]=e.to[2]}n.delete();let s=new i["d"];s.setAttribute("position",new i["c"](o,3));let l=new i["h"](t.r/255,t.g/255,t.b/255),a=new i["w"]({color:l}),c=new i["x"](s,a);return c.userData["surfaceWires"]=!0,c},meshToThreejs(e,t,n){let r=e.textureCoordinates();if(0===r.count){let t=o["a"].getRhino3dm(),n=new t.Sphere([0,0,0],1e3),i=t.TextureMapping.createSphereMapping(n);e.setTextureCoordinates(i,null,!1)}r.delete();let s=new i["e"];var l=s.parse(e.toThreejsJSON());let a=new i["h"](t.r/255,t.g/255,t.b/255);0===t.r&&0===t.g&&0===t.b&&(a.r=1,a.g=1,a.b=1);let c=new i["H"]({color:a,side:i["n"]}),d=new i["F"](l,c);return d.userData["diffuse"]=a,d.userData["materialId"]=n,d},createThreeGeometry(e,t,n){let s=o["a"].getRhino3dm(),l=[],a=t.drawColor(n);const c=e.objectType;switch(c){case s.ObjectType.Point:{let t=new i["S"]({color:a}),n=new i["u"],r=e.location;n.vertices.push(new i["eb"](r[0],r[1],r[2])),l.push([new i["R"](n,t),e.getBoundingBox()])}break;case s.ObjectType.PointSet:{let t=new i["S"]({color:a}),n=new i["u"],r=e.count;for(let o=0;o<r;o++){let t=e.pointAt(o);n.vertices.push(new i["eb"](t[0],t[1],t[2]))}l.push([new i["R"](n,t),e.getBoundingBox()])}break;case s.ObjectType.Curve:{let t=u(e,32),n=new p(!0),r=new i["h"](a.r/255,a.g/255,a.b/255);n.addPolyline(t,r,1.5),l.push([n.createThreeObject(),e.getBoundingBox()])}break;case s.ObjectType.Surface:console.warn("TODO: Implement surface");break;case s.ObjectType.Brep:{let r=h(n,t),o=e.faces();for(let e=0;e<o.count;e++){let t=o.get(e),n=t.getMesh(s.MeshType.Any);if(n){let e=this.meshToThreejs(n,a,r);l.push([e,n.getBoundingBox()]),n.delete()}t.delete()}o.delete();let c=new i["v"];c.userData["surfaceWires"]=!0;let d=e.edges();for(let e=0;e<d.count;e++){let t=d.get(e),n=u(t,32),r=new p(!0),o=new i["h"](a.r/255,a.g/255,a.b/255);r.addPolyline(n,o,1.5),c.add(r.createThreeObject())}l.push([c,e.getBoundingBox()])}break;case s.ObjectType.Mesh:{let i=h(n,t),r=this.meshToThreejs(e,a,i);l.push([r,e.getBoundingBox()]);let o=this.meshWiresToThreejs(e,a);l.push([o,e.getBoundingBox()])}break;case s.ObjectType.Light:console.warn("TODO: Implement light");break;case s.ObjectType.Annotation:console.warn("TODO: Implement annotation");break;case s.ObjectType.InstanceReference:{let t=e.parentIdefId,r=e.xform.toFloatArray(!0),o=null,a=new i["v"],c=new i["E"];c.set(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]),a.applyMatrix(c);let d=n.instanceDefinitions(),p=n.objects(),u=d.findId(t),h=u.getObjectIds();h.forEach(t=>{let i=p.findId(t),r=i.geometry(),l=i.attributes(),c=this.createThreeGeometry(r,l,n);c.forEach(t=>{let n=t[1];n.transform(e.xform),o=null==o?n:s.BoundingBox.union(o,n),a.add(t[0])})}),l.push([a,o]),p.delete(),d.delete()}break;case s.ObjectType.TextDot:let o=document.createElement("div");o.style.fontFamily=e.fontFace,o.style.fontSize=e.fontHeight+"px",o.style.marginTop="-1em",o.style.color="#FFF",o.style.padding="2px",o.style.paddingRight="5px",o.style.paddingLeft="5px",o.style.borderRadius="5px",o.style.background=`rgba(${a.r},${a.g},${a.b},${a.a})`,o.textContent=e.text;let c=new r["a"](o),d=e.point;c.position.set(d[0],d[1],d[2]),l.push([c,null]);break;case s.ObjectType.Hatch:console.warn("TODO: Implement hatch");break;case s.ObjectType.SubD:console.warn("TODO: Implement SubD");break;case s.ObjectType.ClipPlane:let f=e.normalAt(0,0),y=e.pointAt(0,0);console.warn("TODO: Implementing clipplane in progress",e.normalAt(0,0));let g=new i["P"](new i["eb"](f[0],f[1],f[2]),0);g.translate(new i["eb"](y[0],y[1],y[2])),l.push([g,null]);break;case s.ObjectType.Extrusion:{let i=e.getMesh(s.MeshType.Any);if(i){let e=h(n,t),r=this.meshToThreejs(i,a,e);l.push([r,i.getBoundingBox()]),i.delete()}}break;default:break}return l},createThreeMaterial(e,t){let n=null,r=o["a"].getRhino3dm(),s=new i["ab"],l=e.physicallyBased();if(l.supported){let o=[r.TextureType.PBR_BaseColor,r.TextureType.PBR_Metallic,r.TextureType.PBR_Roughness];o.forEach(o=>{let l=e.getTexture(o);if(l){let e=t.getEmbeddedFileAsBase64(l.fileName);e&&(n||(n=new i["I"]),o===r.TextureType.PBR_BaseColor&&(n.map=s.load("data:image/png;base64,"+e)),o===r.TextureType.PBR_Metallic&&(n.metalnessMap=s.load("data:image/png;base64,"+e)),o===r.TextureType.PBR_Roughness&&(n.roughnessMap=s.load("data:image/png;base64,"+e))),l.delete()}})}if(n){let e=new i["i"];e.setPath("cubemaps/skyboxsun25deg/");let t=e.load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);n.envMap=t,n.metalness=l.metallic,n.roughness=l.roughness,n.normalScale.x=1,n.normalScale.y=1}return l.delete(),n},viewportSize:new i["db"](0,0)};var y=t["a"]=f},"1bee":function(e,t,n){"use strict";var i=n("5a89"),r=(n("bf19"),n("5a15"));let o={readFile(e,t){let n=T.getRhino3dm(),i=new r["a"],o=i.parse(t),s=new n.File3dm,l=new n.Layer;l.name="Default",s.layers().add(l);let a=new n.ObjectAttributes;return a.layersIndex=0,o.children.forEach(e=>{if("Mesh"===e.type){let t=n.Mesh.createFromThreejsJSON(e.geometry.toJSON());e.material.color?(a.colorSource=n.ObjectColorSource.ColorFromObject,a.objectColor={r:255*e.material.color.r,g:255*e.material.color.g,b:255*e.material.color.b,a:255}):a.colorSource=n.ObjectColorSource.ColorFromLayer,s.objects().addMesh(t,a)}}),s}};var s=o;let l={readFile(e,t){let n=T.getRhino3dm(),i=n.DracoCompression.decompressByteArray(t),r=new n.File3dm,o=new n.Layer;o.name="Default",r.layers().add(o);let s=new n.ObjectAttributes;s.layersIndex=0,r.objects().addMesh(i,s),T.setActiveDoc(e,r)}};var a=l,c=n("21cb");let d={readFile(e,t){let n=T.getRhino3dm(),i=new c["a"],r=i.parse(t),o=new n.File3dm,s=new n.Layer;s.name="Default",o.layers().add(s);let l=new n.ObjectAttributes;l.layersIndex=0;let a=n.Mesh.createFromThreejsJSON(r.toJSON());return o.objects().addMesh(a,l),o}};var p=d,u=n("17c8"),h=n("cbaf");let f=null,y=null,g=[],b=[],_=[],w={docExists:!1,filename:"rview WIP",expanded:["Layers"],layers:[],perspectiveCamera:!0,onChangeCamera:function(){},currentMaterialStyle:"Basic",materialOptions:["Basic","PBR: Carbon Fiber","PBR: Chipped Paint Metal","PBR: Scuffed Plastic","PBR: Streaked Metal"],displayMode:null},m={rhinoDoc:null,three:{background:null,middleground:null,foreground:null,setBackground:null},threeObjectsOnLayer:{},threeGrid:null,cameraLight:null,displayModes:null};function v(e,t,n){t.forEach(t=>{e.layers.hasOwnProperty(t)||(e.layers[t]={visible:!0,layers:{}}),e=e.layers[t]}),e.visible=n.visible}function x(e){let t=[],n=Object.getOwnPropertyNames(e.layers);return n.forEach(n=>{let i={label:n,visible:e.layers[n].visible},r=x(e.layers[n]);r.length>0&&(i.children=r),t.push(i)}),t}let O={init(e,t,n){if(m.displayModes=h["a"].defaultModes(),this.setActiveDisplayMode("Shaded",!1),null==f){let i=e();console.log("start loading rhino3dm"),t(),i.then(e=>{if(f=e,n(),console.log("rhino3dm loaded"),null!=y){let e=y[0],t=y[1];y=null,this.openFile(e,t)}})}},getRhino3dm(){return f},viewModel(){return w},updateVisibility(){w.layers.forEach(e=>{let t=m.threeObjectsOnLayer[e.label];null!=t&&t.forEach(t=>{t.visible=e.visible,t.visible&&"Mesh"===t.type&&(t.visible=w.displayMode.showSurfaceMeshes),t.visible&&t.userData["surfaceWires"]&&(t.visible=w.displayMode.showSurfaceWires)})}),m.threeGrid&&(m.threeGrid.visible=w.displayMode.showGrid)},setActiveDisplayMode(e,t=!0){for(let n=0;n<m.displayModes.length;n++)if(m.displayModes[n].name===e){w.displayMode=m.displayModes[n];break}this.applyMaterial2("Rendered"===e),t&&this.regen(),b.forEach(e=>{e()})},setClippingMode(){_.forEach(e=>{e(w.displayMode.clipping)})},updateColors(){const e=w.displayMode;m.cameraLight.color=new i["h"](e.lightColor),e.backgroundStyle===h["a"].backgroundModes[0]?m.three.setBackground(m.three.background,e.backgroundColor):e.backgroundStyle===h["a"].backgroundModes[1]?m.three.setBackground(m.three.background,e.backgroundGradientTop,e.backgroundGradientBottom):m.three.setBackground(m.three.background,null,null,e.backgroundStyle)},updateMaterial(){},regen(){this.updateVisibility(),this.updateColors(),this.updateMaterial()},applyMaterial(e){w.layers.forEach(t=>{let n=m.threeObjectsOnLayer[t.label];null!=n&&n.forEach(t=>{if("Mesh"===t.type&&t.userData["diffuse"])if(t.material&&(t.material.dispose(),t.material=null),null==e){let e=t.userData["diffuse"];t.material=new i["H"]({color:e,side:i["n"]}),w.displayMode.transparency&&(t.material.opacity=w.displayMode.transparency,t.material.transparent=!0)}else t.material=e})})},applyMaterial2(e){w.layers.forEach(t=>{let n=m.threeObjectsOnLayer[t.label];null!=n&&n.forEach(t=>{if("Mesh"===t.type&&t.userData["diffuse"]){if(t.material&&(t.material.dispose(),t.material=null),e){let e=t.userData["materialId"],n=m.rhinoDoc.materials(),i=n.findId(e);t.material=u["a"].createThreeMaterial(i,m.rhinoDoc),i.delete(),n.delete()}if(null==t.material){let e=t.userData["diffuse"];t.material=new i["H"]({color:e,side:i["n"]}),w.displayMode.transparency&&(t.material.opacity=w.displayMode.transparency,t.material.transparent=!0)}}})})},openFile(e,t){if(null!=f)if(e.endsWith(".obj")){let n=s.readFile(e,t);this.setActiveDoc(e,n)}else if(e.endsWith(".drc"))a.readFile(e,t);else if(e.endsWith(".ply")){let n=p.readFile(e,t);this.setActiveDoc(e,n)}else{let n=f.File3dm.fromByteArray(t);this.setActiveDoc(e,n)}else y=[e,t]},setActiveDoc(e,t){if(console.log("setActiveDoc ("+e+")"),m.rhinoDoc&&m.rhinoDoc.delete(),this.disposeMiddleground(),this.disposeForeground(),m.threeObjectsOnLayer={},m.rhinoDoc=t,w.docExists=null!=t,w.filename=e,w.layers.length=0,t){let e=t.layers(),n=e.count(),i={layers:{},visible:!0};for(let t=0;t<n;t++){let n=e.get(t),r=n.fullPath,o=r.split("::");v(i,o,n),n.delete()}w.layers=x(i),e.delete()}g.forEach(e=>{e()}),this.regen()},getActiveModel(){return m},addActiveDocChangedEventWatcher(e){g.push(e)},addDisplayModeChangedEventWatcher(e){b.push(e)},addClippingChangedEventWatcher(e){_.push(e)},disposeMiddleground(){m.three.middleground&&(m.three.middleground.dispose(),m.three.middleground=null)},disposeForeground(){m.three.foreground&&(m.three.foreground.dispose(),m.three.foreground=null)},visibleObjectsBoundingBox(){let e=null;return w.layers.forEach(t=>{if(!t.visible)return;let n=m.threeObjectsOnLayer[t.label];null!=n&&n.forEach(t=>{null!=t.boundingBox&&(null==e?e=t.boundingBox.clone():e.union(t.boundingBox))})}),e}};var T=t["a"]=O},"2f39":function(e,t,n){"use strict";n.r(t);var i=n("c973"),r=n.n(i),o=(n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),s=n("1f91"),l=n("42d2"),a=n("b05d"),c=n("f508");o["a"].use(a["a"],{config:{loading:{}},lang:s["a"],iconSet:l["a"],plugins:{Loading:c["a"]}});var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},p=[],u=n("1bee"),h={name:"App",mounted:function(){u["a"].init(window.rhino3dm,this.showLoading,this.hideLoading)},methods:{showLoading(){this.$q.loading.show()},hideLoading(){this.$q.loading.hide()}}},f=h,y=n("2877"),g=Object(y["a"])(f,d,p,!1,null,null,null),b=g.exports,_=n("8c4f");n("e6cf");const w=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"8b24"))},{path:"/view",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"8b24")),props:e=>({query:e.query.q})}]}];w.push({path:"*",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"e51e"))});var m=w;o["a"].use(_["a"]);var v=function(){const e=new _["a"]({scrollBehavior:()=>({x:0,y:0}),routes:m,mode:"hash",base:""});return e},x=function(){return O.apply(this,arguments)};function O(){return O=r()((function*(){const e="function"===typeof v?yield v({Vue:o["a"]}):v,t={router:e,render:e=>e(b),el:"#q-app"};return{app:t,router:e}})),O.apply(this,arguments)}function T(){return M.apply(this,arguments)}function M(){return M=r()((function*(){const{app:e,router:t}=yield x();new o["a"](e)})),M.apply(this,arguments)}T()},cbaf:function(e,t,n){"use strict";function i(){let e=new a("Wireframe");return e.showSurfaceMeshes=!1,e}function r(){let e=new a("Shaded");return e}function o(){let e=new a("Ghosted");return e.transparency=.5,e}function s(){let e=new a("Rendered");return e.showGrid=!1,e.showSurfaceWires=!1,e}function l(){let e=new a("Arctic");return e.showGrid=!1,e.backgroundColor="rgb(250,250,250)",e.showSurfaceWires=!1,e}class a{constructor(e=null){this.name=e,this.showGrid=!0,this.backgroundStyle="Single Color",this.backgroundColor="rgb(157,163,170)",this.backgroundGradientTop="rgb(54,109,168)",this.backgroundGradientBottom="rgb(165,165,165)",this.lightColor="rgb(240,240,240)",this.showSurfaceWires=!0,this.showSurfaceMeshes=!0,this.clipping=!0,this.defaultModes=()=>{let e=[];return e.push(i()),e.push(r()),e.push(o()),e.push(s()),e.push(l()),e}}}let c={defaultModes:()=>(new a).defaultModes(),backgroundModes:["Single Color","2 Color Gradient"]};t["a"]=c}});