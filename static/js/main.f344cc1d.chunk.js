(this["webpackJsonpreact-three-fiber-untitled-game"]=this["webpackJsonpreact-three-fiber-untitled-game"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/explosion.5c5ce697.mp3"},25:function(e,t,n){e.exports=n.p+"static/media/earth.12d16034.jpg"},26:function(e,t,n){e.exports=n.p+"static/media/moon.85e26bcf.png"},34:function(e,t,n){e.exports=n.p+"static/media/laser.a97c8e67.mp3"},35:function(e,t,n){e.exports=n.p+"static/media/engine.e896d081.mp3"},36:function(e,t,n){e.exports=n.p+"static/media/engine2.bdb08091.mp3"},37:function(e,t,n){e.exports=n.p+"static/media/bg.a93d8e1a.mp3"},38:function(e,t,n){e.exports=n.p+"static/media/warp.5699f1c4.mp3"},39:function(e,t,n){e.exports=n.p+"static/media/click.8d516cce.mp3"},48:function(e,t,n){e.exports=n(62)},62:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"zap",(function(){return L})),n.d(a,"engine",(function(){return U})),n.d(a,"engine2",(function(){return q})),n.d(a,"bg",(function(){return W})),n.d(a,"warp",(function(){return J})),n.d(a,"click",(function(){return K})),n.d(a,"explosion",(function(){return H})),n.d(a,"mp3",(function(){return $}));var r=n(1),o=n(12),i=n.n(o),c=n(0),l=n.n(c),s=n(3);function m(e){var t=e.count,n=void 0===t?2e3:t,a=Object(c.useMemo)((function(){for(var e=[],t=0;t<n;t++){var a=2*Math.PI*Math.random(),r=Math.acos(2*Math.random()-1),o=4e3*Math.cos(a)*Math.sin(r)+(4e3*Math.random()-2e3),i=4e3*Math.sin(a)*Math.sin(r)+(4e3*Math.random()-2e3),c=4e3*Math.cos(r)+(2e3*Math.random()-1e3);e.push(o),e.push(i),e.push(c)}return new Float32Array(e)}),[n]);return l.a.createElement("points",null,l.a.createElement("bufferGeometry",{attach:"geometry"},l.a.createElement("bufferAttribute",{attachObject:["attributes","position"],count:a.length/3,array:a,itemSize:3})),l.a.createElement("pointsMaterial",{attach:"material",size:12.5,sizeAttenuation:!0,color:"white",fog:!1}))}var u=n(4),f=n(25),h=n.n(f),d=n(26),p=n.n(d);function g(){var e=Object(c.useRef)(),t=Object(s.e)(r.TextureLoader,[h.a,p.a]),n=Object(u.a)(t,2),a=n[0],o=n[1];return l.a.createElement("group",{ref:e,scale:[100,100,100],position:[-500,-500,1e3]},l.a.createElement("mesh",null,l.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[5,32,32]}),l.a.createElement("meshStandardMaterial",{attach:"material",map:a,roughness:1,fog:!1})),l.a.createElement("mesh",{position:[5,-5,-5]},l.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[.75,32,32]}),l.a.createElement("meshStandardMaterial",{attach:"material",roughness:1,map:o,fog:!1})),l.a.createElement("pointLight",{position:[-5,-5,-5],distance:1e3,intensity:6}),l.a.createElement("mesh",{position:[-30,-10,-60]},l.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[4,32,32]}),l.a.createElement("meshBasicMaterial",{attach:"material",color:"#FFFF99",fog:!1}),l.a.createElement("pointLight",{distance:6100,intensity:50,color:"white"})))}var b=n(43),y=n(14),E=n(31),v=n(44),x=n(45);function M(){var e=Object(c.useRef)(),t=Object(s.f)(),n=t.scene,a=t.gl,r=t.size,o=t.camera;return Object(c.useEffect)((function(){e.current.setSize(r.width,r.height)}),[r]),Object(s.d)((function(){return e.current.render()}),2),l.a.createElement("effectComposer",{ref:e,args:[a]},l.a.createElement("renderPass",{attachArray:"passes",scene:n,camera:o}),l.a.createElement("unrealBloomPass",{attachArray:"passes",args:[void 0,1.6,1,0]}),l.a.createElement("filmPass",{attachArray:"passes",args:[.05,.5,1500,!1]}))}Object(s.c)({EffectComposer:b.a,ShaderPass:y.a,RenderPass:E.a,UnrealBloomPass:v.a,FilmPass:x.a});var w=n(6),O=n(32),j=n(33),_=n(40),k=n(34),B=n.n(k),S=n(35),A=n.n(S),G=n(36),R=n.n(G),P=n(37),T=n.n(P),z=n(38),C=n.n(z),D=n(39),F=n.n(D),I=n(21),V=n.n(I),$={explosion:V.a},L=new Audio(B.a),U=new Audio(A.a),q=new Audio(R.a),W=new Audio(T.a),J=new Audio(C.a),K=new Audio(F.a),H=new Audio(V.a),X=1,Y=Object(_.a)((function(e,t){var n=new j.a.GrannyKnot,a=new r.TubeBufferGeometry(n,250,.2,10,!0),o=void 0,i=void 0,c=new r.Box3;return{sound:!1,camera:void 0,points:0,health:100,lasers:[],explosions:[],rocks:ee(100,a,150,8,(function(){return 1+2.5*Math.random()})),enemies:ee(10,a,20,15,1),mutation:{t:0,position:new r.Vector3,startTime:Date.now(),track:a,scale:15,fov:70,hits:!1,rings:te(30,a),particles:ee(2500,a,100,1,(function(){return.5+.8*Math.random()})),looptime:4e4,binormal:new r.Vector3,normal:new r.Vector3,clock:new r.Clock(!1),mouse:new r.Vector2(-250,50),dummy:new r.Object3D,ray:new r.Ray,box:new r.Box3},actions:{init:function(n){var r=t(),o=r.mutation,c=r.actions;e({camera:n}),o.clock.start(),c.toggleSound(t().sound),Object(s.b)((function(){var n=t(),r=n.rocks,l=n.enemies,s=Date.now(),m=o.t=(s-o.startTime)%o.looptime/o.looptime;o.position=a.parameters.path.getPointAt(m),o.position.multiplyScalar(o.scale);var u=!1;m>.3&&m<.4?u||(u=!0,ne(J)):m>.5&&(u=!1);var f=r.filter(c.test),h=l.filter(c.test),d=f.concat(h),p=o.hits;o.hits=d.length,0===p&&o.hits&&ne(K);var g=t().lasers;if(o.hits&&g.length&&s-g[g.length-1]<100){var b=d.map((function(e){return Object(O.a)({time:Date.now()},e)}));e((function(e){return{explosions:[].concat(Object(w.a)(e.explosions),Object(w.a)(b))}})),clearTimeout(i),i=setTimeout((function(){return e((function(e){return{explosions:e.explosions.filter((function(e){var t=e.time;return Date.now()-t<=1e3}))}}))}),1e3),e((function(e){return{points:e.points+100*f.length+200*h.length,rocks:e.rocks.filter((function(e){return!f.find((function(t){return t.guid===e.guid}))})),enemies:e.enemies.filter((function(e){return!h.find((function(t){return t.guid===e.guid}))}))}}))}}))},shoot:function(){e((function(e){return{lasers:[].concat(Object(w.a)(e.lasers),[Date.now()])}})),clearTimeout(o),o=setTimeout((function(){return e((function(e){return{lasers:e.lasers.filter((function(e){return Date.now()-e<=1e3}))}}))}),1e3),ne(L,.5)},toggleSound:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!t().sound;e({sound:n}),ne(U,1,!0),ne(q,.3,!0),ne(W,1,!0)},updateMouse:function(e){var n=e.clientX,a=e.clientY;t().mutation.mouse.set(n-window.innerWidth/2,a-window.innerHeight/2)},test:function(e){c.min.copy(e.offset),c.max.copy(e.offset),c.expandByScalar(e.size*e.scale),e.hit.set(1e4,1e4,1e4);var n=t().mutation.ray.intersectBox(c,e.hit);return e.distance=t().mutation.ray.origin.distanceTo(e.hit),n}}}})),N=Object(u.a)(Y,2),Q=N[0],Z=N[1];function ee(e,t,n,a,o){return new Array(e).fill().map((function(){var e=Math.random(),i=t.parameters.path.getPointAt(e);i.multiplyScalar(15);var c=i.clone().add(new r.Vector3(-n+Math.random()*n*2,-n+Math.random()*n*2,-n+Math.random()*n*2)),l=.1+Math.random();return{guid:X++,scale:"function"===typeof o?o():o,size:a,offset:c,pos:i,speed:l,radius:n,t:e,hit:new r.Vector3,distance:1e3}}))}function te(e,t){for(var n=[],a=.4,o=0;o<e;o++){a+=.003;var i=t.parameters.path.getPointAt(a);i.multiplyScalar(15);var c=a*t.tangents.length,l=Math.floor(c),s=t.parameters.path.getPointAt((a+1/t.parameters.path.getLength())%1).multiplyScalar(15),m=(new r.Matrix4).lookAt(i,s,t.binormals[l]);n.push([i.toArray(),m])}return n}function ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Z.getState().sound?(e.currentTime=0,e.volume=t,e.loop=n,e.play()):e.pause()}var ae=Q;function re(){var e=Object(c.useRef)(),t=ae((function(e){return e.mutation})),n=t.particles,a=t.dummy;return Object(c.useEffect)((function(){n.forEach((function(t,n){var r=t.offset,o=t.scale;a.position.copy(r),a.scale.set(o,o,o),a.rotation.set(Math.sin(Math.random())*Math.PI,Math.sin(Math.random())*Math.PI,Math.cos(Math.random())*Math.PI),a.updateMatrix(),e.current.setMatrixAt(n,a.matrix)})),e.current.instanceMatrix.needsUpdate=!0}),[]),l.a.createElement("instancedMesh",{ref:e,args:[null,null,n.length],frustumCulled:!1},l.a.createElement("coneBufferGeometry",{attach:"geometry",args:[2,2,3]}),l.a.createElement("meshStandardMaterial",{attach:"material",color:"#606060"}))}var oe=n(9);function ie(){return ae((function(e){return e.enemies})).map((function(e,t){return l.a.createElement(le,{key:t,data:e})}))}(new r.Box3).setFromCenterAndSize(new r.Vector3(0,0,1),new r.Vector3(3,3,3));var ce=new r.MeshBasicMaterial({color:new r.Color("lightblue")}),le=l.a.memo((function(e){var t=e.data,n=ae((function(e){return e.mutation})).clock,a=Object(s.e)(oe.a,"/drone.gltf"),r=Object(c.useRef)();return Object(s.d)((function(){var e=Math.cos(n.getElapsedTime()/2*t.speed)*Math.PI;r.current.position.copy(t.offset),r.current.rotation.set(e,e,e)})),l.a.createElement("group",{ref:r,scale:[5,5,5]},l.a.createElement("mesh",{position:[0,0,50],rotation:[Math.PI/2,0,0],material:ce},l.a.createElement("cylinderBufferGeometry",{attach:"geometry",args:[.25,.25,100,4]})),l.a.createElement("mesh",{name:"Sphere_DroneGlowmat_0"},l.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},a.__$[7].geometry)),l.a.createElement("meshStandardMaterial",Object.assign({attach:"material"},a.__$[7].material,{name:"DroneGlowmat"}))),l.a.createElement("mesh",{name:"Sphere_Body_0",material:ce},l.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},a.__$[8].geometry)),l.a.createElement("meshStandardMaterial",Object.assign({attach:"material"},a.__$[8].material,{name:"Body"}))))}));function se(){var e=Object(s.e)(oe.a,"/rock.gltf");return ae((function(e){return e.rocks})).map((function(t){return l.a.createElement(me,{gltf:e,key:t.guid,data:t})}))}var me=l.a.memo((function(e){var t=e.gltf,n=e.data,a=Object(c.useRef)(),r=ae((function(e){return e.mutation})).clock;return Object(s.d)((function(){var e=Math.cos(r.getElapsedTime()/2*n.speed)*Math.PI;a.current.rotation.set(e,e,e)})),l.a.createElement("group",{ref:a,position:n.offset,scale:[n.scale,n.scale,n.scale]},l.a.createElement("object3D",{position:[-.016298329457640648,-.012838120572268963,.24073271453380585],rotation:[3.0093872578726644,.27444228385461117,-.22745113653772078],scale:[20,20,20]},l.a.createElement("mesh",null,l.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},t.__$[7].geometry)),l.a.createElement("meshStandardMaterial",Object.assign({attach:"material"},t.__$[7].material,{color:"white",emissive:"black",roughness:1,metalness:1})))))}));function ue(e,t){return{ref:l.a.createRef(),color:e,data:new Array(20).fill().map((function(){return[new r.Vector3,new r.Vector3(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1).normalize().multiplyScalar(.75*t)]}))}}function fe(){return ae((function(e){return e.explosions})).map((function(e){var t=e.guid,n=e.offset,a=e.scale;return l.a.createElement(he,{key:t,position:n,scale:.75*a})}))}function he(e){var t=e.position,n=e.scale,r=Object(c.useRef)(),o=ae((function(e){return e.mutation})).dummy,i=Object(c.useMemo)((function(){return[ue("white",.8),ue("orange",.6)]}),[]);return Object(c.useEffect)((function(){ne(new Audio(a.mp3.explosion),.5)}),[]),Object(s.d)((function(){i.forEach((function(e,t){var n=e.data,a=r.current.children[t];n.forEach((function(e,t){var n=Object(u.a)(e,2),r=n[0],i=n[1];r.add(i),o.position.copy(r),o.updateMatrix(),a.setMatrixAt(t,o.matrix)})),a.material.opacity-=.025,a.instanceMatrix.needsUpdate=!0}))})),l.a.createElement("group",{ref:r,position:t,scale:[n,n,n]},i.map((function(e,t){var n=e.color,a=e.data;return l.a.createElement("instancedMesh",{key:t,args:[null,null,a.length],frustumCulled:!1},l.a.createElement("dodecahedronBufferGeometry",{attach:"geometry",args:[10,0]}),l.a.createElement("meshBasicMaterial",{attach:"material",color:n,transparent:!0,opacity:1,fog:!1}))})))}var de=new r.RingBufferGeometry(1,1.01,64),pe=new r.MeshBasicMaterial({color:new r.Color("lightgreen"),side:r.DoubleSide});function ge(){return ae((function(e){return e.mutation})).rings.map((function(e,t){var n=Object(u.a)(e,2),a=n[0],r=n[1],o=Math.sin(t/10)*Math.PI/2;return l.a.createElement("mesh",{key:t,position:a,scale:[30+5*t*o,30+5*t*o,30+5*t*o],onUpdate:function(e){return e.quaternion.setFromRotationMatrix(r)},geometry:de,material:pe})}))}function be(){var e=ae((function(e){return e.mutation})),t=e.scale,n=e.track;return l.a.createElement("mesh",{scale:[t,t,t],geometry:n},l.a.createElement("meshBasicMaterial",{attach:"material",color:"indianred"}))}var ye=new r.BoxBufferGeometry(1,1,40),Ee=new r.Color("lightgreen"),ve=new r.Color("hotpink"),xe=new r.MeshBasicMaterial({color:Ee}),Me=new r.MeshBasicMaterial({color:ve,fog:!1}),we=new r.Vector3,Oe=new r.Vector3;function je(){var e=Object(s.e)(oe.a,"/ship.gltf"),t=ae((function(e){return e.mutation})),n=t.clock,a=t.mouse,r=t.ray,o=ae((function(e){return e.lasers})),i=Object(c.useRef)(),m=Object(c.useRef)(),u=Object(c.useRef)(),f=Object(c.useRef)(),h=Object(c.useRef)(),d=Object(c.useRef)();return Object(s.d)((function(){i.current.position.z=Math.sin(40*n.getElapsedTime())*Math.PI*.1,i.current.rotation.z+=.1*(a.x/500-i.current.rotation.z),i.current.rotation.x+=.1*(-a.y/1200-i.current.rotation.x),i.current.rotation.y+=.1*(-a.x/1200-i.current.rotation.y),i.current.position.x+=.1*(a.x/10-i.current.position.x),i.current.position.y+=.1*(25+-a.y/10-i.current.position.y),f.current.scale.x=1+Math.sin(200*n.getElapsedTime()),f.current.scale.y=1+Math.sin(200*n.getElapsedTime());for(var e=0;e<o.length;e++){m.current.children[e].position.z-=20}u.current.intensity+=.3*((o.length&&Date.now()-o[o.length-1]<100?20:0)-u.current.intensity),i.current.getWorldPosition(we),i.current.getWorldDirection(Oe),r.origin.copy(we),r.direction.copy(Oe.negate()),Me.color=t.hits?Ee:ve,h.current.visible=!t.hits,d.current.visible=!!t.hits})),l.a.createElement("group",{ref:i},l.a.createElement("group",{scale:[3.5,3.5,3.5]},l.a.createElement("group",{ref:h,position:[0,0,-300],name:"cross"},l.a.createElement("mesh",{renderOrder:1e3,material:Me},l.a.createElement("boxBufferGeometry",{attach:"geometry",args:[20,2,2]})),l.a.createElement("mesh",{renderOrder:1e3,material:Me},l.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,20,2]}))),l.a.createElement("group",{ref:d,position:[0,0,-300],name:"target"},l.a.createElement("mesh",{position:[0,20,0],renderOrder:1e3,material:Me},l.a.createElement("boxBufferGeometry",{attach:"geometry",args:[40,2,2]})),l.a.createElement("mesh",{position:[0,-20,0],renderOrder:1e3,material:Me},l.a.createElement("boxBufferGeometry",{attach:"geometry",args:[40,2,2]})),l.a.createElement("mesh",{position:[20,0,0],renderOrder:1e3,material:Me},l.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,40,2]})),l.a.createElement("mesh",{position:[-20,0,0],renderOrder:1e3,material:Me},l.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,40,2]}))),l.a.createElement("pointLight",{ref:u,position:[0,0,-20],distance:100,intensity:0,color:"lightgreen"}),l.a.createElement("group",{ref:m},o.map((function(e,t){return l.a.createElement("group",{key:t},l.a.createElement("mesh",{position:[-2.8,0,-.8],geometry:ye,material:xe}),l.a.createElement("mesh",{position:[2.8,0,-.8],geometry:ye,material:xe}))}))),l.a.createElement("group",{rotation:[Math.PI/2,Math.PI,0]},l.a.createElement("mesh",{name:"Renault_(S,_T1)_0"},l.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[5].geometry)),l.a.createElement("meshStandardMaterial",{attach:"material",color:"#070707"})),l.a.createElement("mesh",{name:"Renault_(S,_T1)_1"},l.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[6].geometry)),l.a.createElement("meshStandardMaterial",{attach:"material",color:"black"})),l.a.createElement("mesh",{name:"Renault_(S,_T1)_2"},l.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[7].geometry)),l.a.createElement("meshStandardMaterial",{attach:"material",color:"#070707"})),l.a.createElement("mesh",{name:"Renault_(S,_T1)_3"},l.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[8].geometry)),l.a.createElement("meshBasicMaterial",{attach:"material",color:"lightblue"})),l.a.createElement("mesh",{name:"Renault_(S,_T1)_4"},l.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[9].geometry)),l.a.createElement("meshBasicMaterial",{attach:"material",color:"white"})),l.a.createElement("mesh",{name:"Renault_(S,_T1)_5"},l.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[10].geometry)),l.a.createElement("meshBasicMaterial",{attach:"material",color:"teal"})))),l.a.createElement("mesh",{ref:f,scale:[1,1,30],position:[0,1,30]},l.a.createElement("dodecahedronBufferGeometry",{attach:"geometry",args:[1.5,0]}),l.a.createElement("meshBasicMaterial",{attach:"material",color:"lightblue"})))}var _e=0;function ke(e){var t=e.children,n=Object(c.useRef)(),a=Object(c.useRef)(),r=ae((function(e){return e.mutation})),o=r.fov,i=r.scale,m=r.binormal,u=r.normal,f=r.track,h=r.mouse,d=Object(s.f)().camera;return Object(s.d)((function(){var e=r.t,t=r.position.clone(),a=f.tangents.length,c=e*a,l=Math.floor(c),s=(l+1)%a;m.subVectors(f.binormals[s],f.binormals[l]),m.multiplyScalar(c-l).add(f.binormals[l]);var p=f.parameters.path.getTangentAt(e);_e+=.05*(Math.max(15,15+-h.y/20)-_e),u.copy(m).cross(p),t.add(u.clone().multiplyScalar(_e)),d.position.copy(t);var g=f.parameters.path.getPointAt((e+30/f.parameters.path.getLength())%1).multiplyScalar(i);d.matrix.lookAt(d.position,g,u),d.quaternion.setFromRotationMatrix(d.matrix),d.fov+=.05*((e>.4&&e<.45?120:o)-d.fov),d.updateProjectionMatrix();var b=f.parameters.path.getPointAt((e+1/f.parameters.path.getLength())%1).multiplyScalar(i);n.current.position.copy(b),n.current.quaternion.setFromRotationMatrix(d.matrix)})),l.a.createElement("group",{ref:n},l.a.createElement("pointLight",{distance:400,position:[0,100,-420],intensity:5,color:"indianred"}),l.a.createElement("group",{ref:a,position:[0,0,-50]},t))}var Be=n(7),Se=n(8);function Ae(){var e=Object(Be.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  html,\n  body,\n  #root {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    user-select: none;\n    overflow: hidden;\n  }\n\n  #root {\n    overflow: auto;\n    padding: 0px;\n  }\n\n  body {\n    position: fixed;\n    overflow: hidden;\n    overscroll-behavior-y: none;\n    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;\n    color: black;\n    background: white;\n  }\n"]);return Ae=function(){return e},e}function Ge(){var e=Object(Be.a)(["\n  ","\n  bottom: 70px;\n  right: 50px;\n  transform: skew(5deg, 10deg);\n  height: 60px;\n  width: 200px;\n  background: black;\n  & > div {\n    height: 100%;\n    background: indianred;\n  }\n\n  @media only screen and (max-width: 900px) {\n    bottom: 50px;\n    height: 40px;\n    width: 150px;\n  }\n"]);return Ge=function(){return e},e}function Re(){var e=Object(Be.a)(["\n  ","\n  bottom: 5px;\n  left: 50px;\n  transform: skew(-5deg, -10deg);\n  width: 200px;\n  & > h1 {\n    margin: 0;\n    font-size: 14em;\n    line-height: 1em;\n  }\n  & > h2 {\n    margin: 0;\n    font-size: 4em;\n    line-height: 1em;\n  }\n  @media only screen and (max-width: 900px) {\n    bottom: 30px;\n    & > h1 {\n      font-size: 6em !important;\n    }\n    & > h2 {\n      font-size: 3em !important;\n    }\n  }\n"]);return Re=function(){return e},e}function Pe(){var e=Object(Be.a)(["\n  ","\n  text-align: right;\n  top: 40px;\n  right: 50px;\n  font-size: 2em;\n  transform: skew(-5deg, -10deg);\n  pointer-events: all;\n  cursor: pointer;\n  & > a {\n    color: indianred;\n    text-decoration: none;\n  }\n  @media only screen and (max-width: 900px) {\n    font-size: 1.5em;\n  }\n"]);return Pe=function(){return e},e}function Te(){var e=Object(Be.a)(["\n  ","\n  top: 40px;\n  left: 50px;\n  font-size: 2em;\n  transform: skew(5deg, 10deg);\n  pointer-events: all;\n  cursor: pointer;\n  @media only screen and (max-width: 900px) {\n    font-size: 1.5em;\n  }\n"]);return Te=function(){return e},e}function ze(){var e=Object(Be.a)(["\n  font-family: 'Teko', sans-serif;\n  position: absolute;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-variant-numeric: slashed-zero tabular-nums;\n  line-height: 1em;\n  pointer-events: none;\n  color: indianred;\n"]);return ze=function(){return e},e}function Ce(){var e=ae((function(e){return e.points})),t=ae((function(e){return e.health})),n=ae((function(e){return e.sound})),a=ae((function(e){return e.actions.toggleSound})),r=Object(c.useRef)();Object(c.useEffect)((function(){var e=Date.now(),t=setInterval((function(){return r.current.innerText=((Date.now()-e)/1e3).toFixed(1)}),100);return function(){return clearInterval(t)}}),[]);var o=Object(c.useMemo)((function(){return e>=1e3?(e/1e3).toFixed(1)+"K":e}),[e]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Fe,{onClick:function(){return a()}},"sound",l.a.createElement("br",null),n?"off":"on"),l.a.createElement(Ie,null,l.a.createElement("a",{href:"https://codesandbox.io/s/react-three-fiber-untitled-game-4pp5r"},"source"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://twitter.com/0xca0a"},"twitter"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/react-spring/react-three-fiber"},"github")),l.a.createElement(Ve,null,l.a.createElement("h2",{ref:r},"0.0"),l.a.createElement("h1",null,o)),l.a.createElement(Le,null),l.a.createElement($e,null,l.a.createElement("div",{style:{width:t+"%"}})))}var De=Object(Se.b)(ze()),Fe=Se.c.div(Te(),De),Ie=Se.c.div(Pe(),De),Ve=Se.c.div(Re(),De),$e=Se.c.div(Ge(),De),Le=Object(Se.a)(Ae());i.a.render(l.a.createElement((function(){var e=ae((function(e){return e.mutation})).fov,t=ae((function(e){return e.actions}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{concurrent:!0,onPointerMove:t.updateMouse,onClick:t.shoot,camera:{position:[0,0,2e3],near:.01,far:1e4,fov:e},onCreated:function(e){var n=e.gl,a=e.camera;t.init(a),n.gammaInput=!0,n.toneMapping=r.Uncharted2ToneMapping,n.setClearColor(new r.Color("#020207"))}},l.a.createElement("fog",{attach:"fog",args:["black",100,700]}),l.a.createElement("ambientLight",{intensity:.25}),l.a.createElement(m,null),l.a.createElement(fe,null),l.a.createElement(be,null),l.a.createElement(re,null),l.a.createElement(ge,null),l.a.createElement(c.Suspense,{fallback:null},l.a.createElement(se,null),l.a.createElement(g,null),l.a.createElement(ie,null),l.a.createElement(ke,null,l.a.createElement(je,null))),l.a.createElement(M,null)),l.a.createElement(Ce,null))}),null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.f344cc1d.chunk.js.map