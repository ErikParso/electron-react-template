import "reflect-metadata";
import { app, BrowserWindow } from "electron";
import path from "path";
import { AppDataSource } from "./database/data-source";
import { seedDatabase } from "./database/seed";
import { registerHandlers } from "./ipc/handlers";

async function initDatabase(): Promise<void> {
  await AppDataSource.initialize();
  await seedDatabase();
}

function createWindow(): void {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile(path.join(__dirname, "../../renderer/dist/index.html"));
}

app.whenReady().then(async () => {
  await initDatabase();
  registerHandlers();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});



