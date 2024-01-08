#!/usr/bin/env bun

import { Command } from "commander"

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

async function main() {

  const command = new Command()
    .name("snapdocs")
    .description("create some docs")

  command.parse()

  console.log('The Command run Sucessfully!')

}

main()
