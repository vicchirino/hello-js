// Fat arrow function

setTimeout(function() {
  console.log('fat.js');
}, 1000)

let logFunc = () => {
  console.log('fat.js');
}

setTimeout(() => {
  console.log('fat.js');
}, 1000)

setTimeout(logFunc, 1000)

let add = (a, b) => a + b
add(1, 2)

let obj = {
  name: 'John',
  sayLater: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
}

obj.sayLater()

let obj2 = {
  name: 'John',
  sayLater: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
}

obj2.sayLater()
