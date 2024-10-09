 //formula for vault code
const key = 10
const keyTwo = key*4
const keyThree = keyTwo-1
const vaultCode = `${key}-${keyTwo}-${keyThree}`

//Notify user of vault code
const message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination:`
alert(`${message} ${vaultCode}`)