const {capitalize, reverseString, Calculator, caesarCipher, analyzeArray} = require("./tests")

test("Take a string and capitalize the first letter (1)", () => {
  expect(capitalize("cap me")).toBe("Cap me");
})

test("Take a string and capitalize the first letter (2)", () => {
  expect(capitalize("do it again")).toBe("Do it again");
})

test("Reverses a string(1)", () => {
  expect(reverseString("reverse me")).toBe("em esrever");
})

test("Reverses a string(1)", () => {
  expect(reverseString("reverse me again")).toBe("niaga em esrever");
})

test("Calculator add", () => {
  let calc = new Calculator();
  expect(calc.add(3,3)).toEqual(6)
})

test("Calculator subtract", () => {
  let calc = new Calculator();
  expect(calc.subtract(7, 2)).toEqual(5)
})

test("Calculator multiply", () => {
  let calc = new Calculator();
  expect(calc.multiply(4, 2)).toEqual(8)
})

test("Calculator divide", () => {
  let calc = new Calculator();
  expect(calc.divide(15,5)).toEqual(3)
})

test("Caesar Cipher test 1", () => {
  expect(caesarCipher("This should read like a real sentence!", 3)).toBe("Wklv vkrxog uhdg olnh d uhdo vhqwhqfh!")
})

test("Caesar Cipher test 2", () => {
  expect(caesarCipher("This sentence hAs CAPITALS, as well as p!un#ctua&tion...!", 7)).toBe("Aopz zlualujl oHz JHWPAHSZ, hz dlss hz w!bu#jabh&apvu...!")
})

test("Caesar Cipher test 3", () => {
  expect(caesarCipher("This cipher wants to be decoded with a negative number", -2)).toBe("Rfgq agnfcp uylrq rm zc bcambcb ugrf y lceyrgtc lskzcp")
})

//An analyzeArray function that takes an array of numbers 
//and returns an object with the following properties: average, min, max, and length.

test("Analyze array", () => {
  expect(analyzeArray([1,1,1,1,5])).toMatchObject({average:2, min:1, max:5, length:5}) 
})

test("Analyze array (2)", () => {
  expect(analyzeArray([10,300,3,11,69])).toMatchObject({average:79, min:3, max:300, length:5}) 
})