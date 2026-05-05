const { spawn } = require("child_process");
const electronPath = require("electron");

const env = { ...process.env };
delete env.ELECTRON_RUN_AS_NODE;

const proc = spawn(electronPath, ["."], { env, stdio: "inherit" });
proc.on("close", (code) => process.exit(code ?? 0));
