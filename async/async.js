const doAsyncTask = () => Promise.resolve("done")
async function victor() {
  let value = await doAsyncTask()
  console.log(value)
}

victor()


let asyncFunction = async function() {
  let value = await doAsyncTask()
  console.log(value)
  console.log("2")
  return "3"
}

asyncFunction().then((val) => console.log(val))

const rejectedAsync = () => Promise.reject("error")

const rejectedAsyncFunction = async function() {
  try {
    let value = await rejectedAsync()
    console.log(value)
  } catch (e) {
    console.error(e)
    return
  }
}

rejectedAsyncFunction()