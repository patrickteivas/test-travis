require("env2")(".env"); 
var fetch = require("isomorphic-fetch"); // or another library of choice.
var Dropbox = require("dropbox").Dropbox;
var fs = require("fs");


var dbx = new Dropbox({
	accessToken: process.env.DROPBOX_TOKEN,
	fetch: fetch
});

fs.readdir("screenshots/", function (err, files) {
	files.forEach(function (file) {
		dbx.filesUpload({
			path: "/" + file,
			contents: fs.createReadStream("screenshots/" + file)
		});
	});
});