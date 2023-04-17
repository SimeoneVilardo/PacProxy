var url = require('url');
var http = require('http');
var PacProxyAgent = require('pac-proxy-agent');

// URI to a PAC proxy file to use (the "pac+" prefix is stripped)
var proxy = 'pac+https://pastebin.com/raw/Q0PRpsEi';
console.log('using PAC proxy proxy file at %j', proxy);

// HTTP endpoint for the proxy to connect to
var endpoint = 'http://nodejs.org/api/';
console.log('attempting to GET %j', endpoint);
var opts = url.parse(endpoint);

// create an instance of the `PacProxyAgent` class with the PAC file location
var agent = new PacProxyAgent(proxy);
new PacProxyAgent(proxy);
opts.agent = agent;

http.get(opts, function (res) {
    console.log('"response" event!', res.headers);
    res.pipe(process.stdout);
});