import{a3 as E,a4 as M,N as m,a5 as R,a6 as g,a7 as q,p as D,a as p,a8 as H}from"./index-ad74bea5.js";import{C as d,R as b}from"./Ranges-d67f2cb3.js";import{Bounce as w}from"./index-297de6c8.js";import{E as I}from"./ExternalInteractorBase-029fb1b6.js";const O=2,l=.5,P=Math.PI*l,h=2,y=10,S=0;function x(a,e,t,o,s){const i=a.particles.quadTree.query(o,s);for(const n of i)o instanceof d?M(R(n),{position:e,radius:t,mass:t**O*P,velocity:m.origin,factor:m.origin}):o instanceof b&&g(n,q(e,t))}function T(a,e,t,o){const s=document.querySelectorAll(e);s.length&&s.forEach(i=>{const n=i,c=a.retina.pixelRatio,r={x:(n.offsetLeft+n.offsetWidth*l)*c,y:(n.offsetTop+n.offsetHeight*l)*c},v=n.offsetWidth*l*c,u=y*c,B=t.type==="circle"?new d(r.x,r.y,v+u):new b(n.offsetLeft*c-u,n.offsetTop*c-u,n.offsetWidth*c+u*h,n.offsetHeight*c+u*h);o(r,v,B)})}function W(a,e,t,o){E(t,e,(s,i)=>T(a,s,i,(n,c,r)=>x(a,n,c,r,o)))}function A(a,e){const t=a.retina.pixelRatio,o=y*t,s=a.interactivity.mouse.position,i=a.retina.bounceModeDistance;!i||i<S||!s||x(a,s,i,new d(s.x,s.y,i+o),e)}const f="bounce";class V extends I{constructor(e){super(e)}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.bounce;t&&(e.retina.bounceModeDistance=t.distance*e.retina.pixelRatio)}interact(){const e=this.container,t=e.actualOptions,o=t.interactivity.events,s=e.interactivity.status===D,i=o.onHover.enable,n=o.onHover.mode,c=o.onDiv;s&&i&&p(f,n)?A(this.container,r=>this.isEnabled(r)):W(this.container,c,f,r=>this.isEnabled(r))}isEnabled(e){const t=this.container,o=t.actualOptions,s=t.interactivity.mouse,i=((e==null?void 0:e.interactivity)??o.interactivity).events,n=i.onDiv;return!!s.position&&i.onHover.enable&&p(f,i.onHover.mode)||H(f,n)}loadModeOptions(e,...t){e.bounce||(e.bounce=new w);for(const o of t)e.bounce.load(o==null?void 0:o.bounce)}reset(){}}export{V as Bouncer};
