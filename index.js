

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
