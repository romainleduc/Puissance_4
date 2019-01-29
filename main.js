const { app, session, BrowserWindow, Menu } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let window

function createWindow () {
  // Create the browser window.
  window = new BrowserWindow(
    { 
      title: "Puissance 4",
      width: 1250,
      height: 950,
      webPreferences: {
        "nodeIntegration": false,
        "contextIsolation": true,
        "sandbox": true,
        "webSecurity": true
      } 
    }
  )

  var menu = Menu.buildFromTemplate([])
  Menu.setApplicationMenu(menu); 

  // and load the index.html of the app.  
  window.loadFile('index.html')

  // Emitted when the window is closed.
  window.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    window = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (window === null) {
    createWindow()
  }
})

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

