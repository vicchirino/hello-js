
function doAsyncTask() {
  const promise = new Promise((resolve, reject) => {
    console.log("Asunc work complete")
    if(true) {
      resolve({x: 1})
    } else {
      reject("error")
    }
  })
  return promise
}

doAsyncTask().then(
  (val) => console.log("Task after async resolved", val),
  (error) => console.log("Task after async rejected", error))

