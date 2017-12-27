const http = require('http');
const request = require('request');
const clone = require('clone');
// version 3 is only supported

function initApp(clientSecretKey , params) {
  if (!clientSecretKey) {
    throw new Error('Providing Client Secret Key is Mandatory!!!');
  }

this.clientSecretKey = clientSecretKey;
this.httpHost        = 'api.hackerearth.com'
this.httpUri         = 'https://' + this.httpHost;
this.possibleLangs   = ['C', 'CPP', 'CPP11', 'CLOJURE', 'CSHARP', 'JAVA', 'JAVASCRIPT', 'HASKELL', 'PERL', 'PHP', 'PYTHON', 'RUBY'];
}

module.exports = initApp;


initApp.prototype.executeFunction = function(endpoint , userParams) {
  return new Promise((resolve , reject) => {
    let sendParams = clone(userParams);
    if(!sendParams['source']) {
       reject('Providing source is Mandatory!!!');
    }
    if(!sendParams['lang']) {
      reject('Providing Language is Mandatory!!!');
    }

    if(this.possibleLangs.indexOf(sendParams['lang'])) {
      reject('The Selected Language is not supported by Hackerearth . Please see their API documentation carefully!!!');
    }

  });
  // let sendParams = clone(userParams);
  // if(!sendParams['source']) {
  //
  // }

}
