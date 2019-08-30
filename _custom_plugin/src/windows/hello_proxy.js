var exec = require("cordova/exec");

module.exports = {
    sayHello: function (successCallback, errorCallback, name) {
        try {
            var appView = Windows.UI.ViewManagement.ApplicationView.GetForCurrentView();
            var titleBar = appView.TitleBar;
            titleBar.BackgroundColor = Color.FromArgb(1, 44, 189, 165);
            titleBar.ButtonBackgroundColor = Color.FromArgb(1, 44, 189, 165);
            titleBar.ForegroundColor = Colors.White;
            titleBar.ButtonForegroundColor = Colors.White;

            successCallback(response);
        } catch (err) {
            errorCallback(err)
        }
    }
};

//The proxy will be available for the Cordova
require("cordova/exec/proxy").add("HelloProxy", module.exports);