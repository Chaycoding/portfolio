import{_ as n}from"./index-82395774.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-87a71df8.js"),["assets/PolygonDrawer-87a71df8.js","assets/PolygonDrawerBase-96d9feb1.js","assets/index-82395774.js","assets/index-03893f44.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-b7b2594e.js"),["assets/TriangleDrawer-b7b2594e.js","assets/PolygonDrawerBase-96d9feb1.js","assets/index-82395774.js","assets/index-03893f44.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
