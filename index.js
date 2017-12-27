const http = require('http');
const request = require('request');

function initApp(clientSecretKey , params) {
  if (!clientSecretKey) {
    throw new Error('Providing Client Secret Key is Mandatory!!!');
  }

this.clientSecretKey = clientSecretKey;
this.httpHost        = 'api.hackerearth.com'
this.httpUri         = 'https://' + this.httpHost;
this.possibleLangs   = ['C', 'CPP', 'CPP11', 'CLOJURE', 'CSHARP', 'JAVA', 'JAVASCRIPT', 'HASKELL', 'PERL', 'PHP', 'PYTHON', 'RUBY'];
}
