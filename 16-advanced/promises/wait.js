// We want to wrap setTimeOut in a promise.

// Make this work
Wait(2000).then( () => {
  console.log(('2 seconds have elapsed'));
})
