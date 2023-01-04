const os = require('os')
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(os.hostname())
console.log(os.platform())
console.log(os.userInfo())
console.log(`The uptime is : ${os.uptime()}`)
console.log(currentOS)