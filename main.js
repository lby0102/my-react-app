// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600,/*frame:false*/})



//   mainWindow.loadFile('./public/index.html');
const argv = process
 .argv
 .slice(2)
// 对createWindow 函数中的内容进行修改
//判断是否是开发模式
 if (argv && argv[1] == 'dev') {
   mainWindow.loadURL("http://localhost:3000/")
 } else if (argv && argv[1] == 'build') {
   // window 加载build好的html.
   mainWindow.loadURL(url.format({
     pathname: path.join(__dirname, './build/index.html'),
     protocol: 'file:',
     slashes: true
   }))
 }


  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
