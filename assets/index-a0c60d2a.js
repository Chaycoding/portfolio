import{_ as n}from"./index-9596a354.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-e81a7072.js"),["assets/PolygonDrawer-e81a7072.js","assets/PolygonDrawerBase-8ca449f7.js","assets/index-9596a354.js","assets/index-4ac19059.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-cd321c8a.js"),["assets/TriangleDrawer-cd321c8a.js","assets/PolygonDrawerBase-8ca449f7.js","assets/index-9596a354.js","assets/index-4ac19059.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
