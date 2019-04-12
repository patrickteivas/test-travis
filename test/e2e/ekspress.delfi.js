const config = require("../../nightwatch.conf.js");
var curTime = new Date();
var date = curTime.getDate() + "-" + (curTime.getMonth() + 1) + "-" + curTime.getFullYear(); // January is 0 not 1
var time = curTime.getHours() + "-" + curTime.getMinutes() + "-" + curTime.getSeconds();


module.exports = {
	"Open Ekspress": function (browser) {
		browser
			.windowMaximize()
			.url("https://ekspress.delfi.ee/")
			.waitForElementVisible("body")
			.saveScreenshot(`${config.imgpath(browser)}ekspress-mainPage_${date}_${time}.png`)
			.end();
	}
};