
chrome.runtime.onMessage.addListener(function(message) {
	var url = 'http://localhost:4000/download?';
	var queryString = Object.keys(message).map(key => key + '=' + message[key]).join('&');
	url += queryString;
	console.log(url);
	chrome.downloads.download({url:url,
		filename: "ChromeDownloader/" + message.filename +'.' + message.format}, function(downID) {
			chrome.downloads.show(downID);
	});
});