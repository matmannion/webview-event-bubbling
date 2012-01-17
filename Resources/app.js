// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var webview = Ti.UI.createWebView({
	url: 'local_page.html'
});

win.add(webview);

win.open();
