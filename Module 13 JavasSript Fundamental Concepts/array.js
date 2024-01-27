
var carName = ["BMW", "Audi", "Tata", "Mazda"]

// Know Index
console.log(carName[2]);

// Set by Array
console.log(carName)
carName[1] = "Maruti Suzuki";
console.log(carName)

// IndexOf 
console.log(carName.indexOf("Tata"))

// Array Length (To know how many Items are in the array)
console.log(carName.length)

// Push (Add in the END it's default)
carName.push("Tesla")
console.log(carName)

// Unshift (Add on the begain)
carName.unshift("Ford")
console.log(carName)

// Pop (it's Basically remove item on the END and It's Default)
console.log(carName)
carName.pop()
console.log(carName)

// Shift (To remove Items on the Begain)
carName.shift()
console.log(carName)

// Slice (To cut some Item on the Array)
var carName2 = ["BMW", "Audi", "Tata", "Mazda"]
console.log(carName2.slice(2))
// Where of the End
console.log(carName2.slice(2, 3))

