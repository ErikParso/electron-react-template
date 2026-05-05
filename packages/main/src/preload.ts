import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getCompanies: () => ipcRenderer.invoke("get-companies"),
});
