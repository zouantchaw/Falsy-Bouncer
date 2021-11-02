// Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// using forEach
function bouncer(arr) {
  let newArray = []
  arr.forEach(element => {
    if (element) return newArray.push(element)
  })
  return newArray
}

// using filter()
function bouncer2(arr) {
  return arr.filter(Boolean)
}

// using for loop
function bouncer3(arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i])
  }
  return newArray
}

bouncer3([7, "ate", "", false, 9]);