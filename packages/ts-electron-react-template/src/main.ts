import { app, BrowserWindow } from 'electron'
import * as isDev from 'electron-is-dev'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true // 使用remote模块
    }
  })
  const urlLocation = isDev ? 'http://localhost:2222' : ''
  mainWindow.loadURL(urlLocation)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
