import { log } from "@v-util"

let routes = [];
try {
  let router = require("@app/router.js");
  for(let key in router){
    routes = router[key];
  }
} catch (e) {
  log("v-serve: router加载无效");
}

export default routes;
