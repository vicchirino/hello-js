"use strict"

function Person(first_name, last_name) {
  this.first_name = first_name
  this.last_name = last_name
  // this.full_name = function() {
  //   return this.first_name + " " + this.last_name
  // }
}

Person.prototype.full_name = function() {
  return this.first_name + " " + this.last_name
}

// var dude = Person("John", "Doe") // This returns an error.

var dude2 = new Person("John", "Doe") // This works.

// This is the same as:
var dude3 = {}
Person.call(dude3, "John", "Doe")
console.log(dude3)

console.log(dude2.full_name())

function Professional(honorific, first_name, last_name) {
  Person.call(this, first_name, last_name)
  this.honorific = honorific
}

Professional.prototype = Object.create(Person.prototype)
Professional.prototype.professional_name = function() {
  return this.honorific + " " + this.first_name + " " + this.last_name
}

var prof = new Professional("Dr.", "John", "Doe")
console.log(prof.full_name())
console.log(prof.professional_name())

function PersonFactory(first_name, last_name) {
  var person = Object.create(Person)
  person.first_name = first_name
  person.last_name = last_name
  return person
}

var victor = PersonFactory("Victor", "Chirino")
console.group(victor)
