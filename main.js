const { app,BrowserWindow } = require('electron');
const path = require('path')

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Image Resizer',
        width: 500,
        height: 600,
        

    });
    mainWindow.loadFile(path.join(__dirname, './renderer/yourFrontend.html'));

}
app.whenReady().then(() =>{
    createMainWindow();
});

