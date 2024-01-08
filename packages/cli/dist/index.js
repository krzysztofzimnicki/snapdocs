#!/usr/bin/env bun
import{Command as o}from"commander";process.on("SIGINT",()=>process.exit(0));process.on("SIGTERM",()=>process.exit(0));async function n(){new o().name("snapdocs").description("create some docs").parse(),console.log("The Command run Sucessfully!")}n();
//# sourceMappingURL=index.js.map