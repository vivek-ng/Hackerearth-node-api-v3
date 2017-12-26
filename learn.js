function xx() {
  return new Promise((resolve , reject) => {
    reject('vivek!!');
  });
}

function yy() {

// xx().then((res) => {
//   return new Promise((resolve , reject) => {
//     resolve(res);
//   })
// });

return new Promise((resolve , reject) => {
  xx().then((res) => {
    resolve('vivek!!!!');
  })
  .catch((res) => {
    console.log(res);
  })
})
}


yy().then((res)=> {
  console.log(res);
})
.catch((res) => {
  console.log(res);
})


function test() {
  console.log('OK Time to learn Actual Programming!!!!');
  console.log('uiui', this);
  this.ggg = 'klklkl';
}

test();

module.exports = test;
test.prototype.cv = function() {
  console.log('hhhhh' , this.ggg);
}
console.log(test , 'yoy!!!');
test.prototype.bb = function(){
  console.log('yyyyy!!!', this);
  this.cv();
  console.log(test.prototype);
}

test.prototype.bb();
