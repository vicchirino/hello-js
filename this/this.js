
// this is determinated by the calling context
console.log(this)
this.vic = 1 
console.log(this)
console.log(this.vic)
// console.log(vic)

function checkThis() {
  console.log(this)
}

checkThis()

var vic = {
  checkThis2: function() {
    console.log(this)
    function checkOther() {
      this.moo = 1
      console.log(this)
    }
    checkOther()
    console.log(this.moo)
    console.log(moo)
  }

}

vic.checkThis2()
// console.log(vic)

// var func = vic.checkThis2 
// func()


var victor = {
  checkThis2: function() {
    self = this
    console.log(self)
    function checkOther() {
      self.moo = 1
      console.log(self)
    }
    checkOther()
    console.log(self.moo)
    console.log(moo)
  }

}

victor.checkThis2()