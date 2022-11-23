var animal = {
  kind: "human"
}

console.log(animal)

var vic = {}

vic.__proto__ = animal

console.log(vic.kind) // human
console.log(animal.isPrototypeOf(vic))
vic.kind = "cat"
console.log(vic.kind)
// animal.kind = "dog"

var vic2 = Object.create(animal, {food: {value: "milk"}})
console.log(vic2.kind)

/**
 *           INHERITANCE
 *     PROTOTYPAL       CLASSICAL
 * PROTOTYPAL PSEUDOCLASSICAL
 * PATTERN    PATTERN
 * 
 */