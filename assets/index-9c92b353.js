import{s as o,_ as r}from"./index-ad74bea5.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-df250b67.js"),["assets/Remover-df250b67.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-ad74bea5.js","assets/index-58e4ab66.css"]);return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
