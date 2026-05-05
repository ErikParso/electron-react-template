const { spawn } = require('child_process');
const path = require('path');

const env = { ...process.env };
delete env.ELECTRON_RUN_AS_NODE;

const bin = path.join(__dirname, '../node_modules/.bin/electron-vite');
const proc = spawn(bin, ['dev'], { env, stdio: 'inherit', shell: true });
proc.on('close', (code) => process.exit(code ?? 0));
