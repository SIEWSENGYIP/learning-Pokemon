import { question } from 'readline-sync'
function displayOptions(array){
    let i = 0
    while (i < 3) {
        console.log (i + '. ' + array[i])
        i += 1
    }
}

console.log("Choose your Resolution")
const resOptions = ['1920 x 1080 : RM 300',
'2560 x 1440 : RM 600',
'3280 x 1680 : RM 900']

displayOptions(resOptions)
let ansRes = question('Select Resolution Index\n')

console.log("Choose your Video Card")
const videoCardOptions = ['nVdia : RM600',
'AMD Radeon : RM550',
'Intel : RM500']

displayOptions(videoCardOptions)
let ansVC = question('Select Video Card Index\n')

console.log("Choose your Processor")
const processorOptions = ['i3 : RM 100',
'i5 : RM300',
'i7 : RM 500']

displayOptions(processorOptions)
let ansProcessor = question('Select Processor Index\n')

console.log("Choose your Hard Disk")
const hddOptions = ['128GB : RM100',
'256GB : RM200',
'1TB : RM300']

displayOptions(hddOptions)
let ansHDD = question('Select Hard Disk Index\n')

console.log('You have chosen the following option')
console.log(resOptions[ansRes])
console.log(videoCardOptions[ansVC])
console.log(processorOptions[ansProcessor])
console.log(hddOptions[ansHDD])