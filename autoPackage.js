var packager = require('electron-packager');
var fs = require('fs-extra');
var path = require('path');
console.log(__dirname);
var resourcesPath = path.join(__dirname, '../electron-quick-start');
var outPath = path.join(__dirname, '../');
var options = {
	'name': 'ebook3.0',
	'dir': resourcesPath,
	'out': outPath,
	'all': false,
	'appCopyright': '',
	'appVersion': '1.6.11',
	'download': {
		'cache': './electronSDK'
	},
	'arch': 'x64',
	'overwrite': true,
	'platform': 'win32',
	'buildVersion': '1.6.11',
	'electronVersion': '1.6.11',
	'icon': '',
	'asar': true
};
packager(options, function done_callback(err, appPaths) {
	console.log(err);
	console.log(appPaths);
	/*//将config.js、html、userData复制到resource下面
	fs.copy(path.join(__dirname, '../ebook3.0/app/config.json'), outPath + '\\ebook3.0-win32-x64\\resources\\app\\config.json', function(err) {
		if (err) return console.error(err);
		console.log("复制config.json成功！");
	});
	fs.copy(path.join(__dirname, '../ebook3.0/app/html'), outPath + '\\ebook3.0-win32-x64\\resources\\app\\html', function(err) {
		if (err) return console.error(err);
		console.log("复制html成功！");
	});
	fs.copy(path.join(__dirname, '../ebook3.0/app/userData'), outPath + '\\ebook3.0-win32-x64\\resources\\app\\userData', function(err) {
		if (err) return console.error(err);
		console.log("复制userData成功！");
	});*/
});