import{_ as e}from"./index-9596a354.js";import{E as s}from"./EmitterShapeBase-73267526.js";async function d(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-02423bb2.js"),[]);a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-0375c871.js").then(t=>t.c),["assets/EmittersPlugin-0375c871.js","assets/index-9596a354.js","assets/index-4ac19059.css","assets/AnimatableColor-0bc6ab24.js","assets/AnimationOptions-d5d33024.js","assets/OptionsColor-6872fa30.js"]),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,d as loadEmittersPlugin};
