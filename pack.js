const packager = require("electron-packager");

packager({
  dir: ".",
  name: "TestElectron",
  platform: "win32",
  arch: "x64",
  out: "release",
  overwrite: true,
  prune: false,
  ignore: [
    /node_modules\/(electron-packager|electron$|typescript|vite|@vitejs|@types|concurrently|nodemon|wait-on|cross-env|@test-electron)/,
    /packages\/(main|renderer)\/src/,
    /release/,
  ],
})
  .then((paths) => console.log("Packaged to:", paths[0]))
  .catch((err) => { console.error(err); process.exit(1); });
