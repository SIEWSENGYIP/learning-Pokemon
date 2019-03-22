import { question } from 'readline-sync'

function displayOptions(array){
    let i = 0
    while (i < 3) {
        console.log (i + '. ' + array[i].label + ' : RM ' + array[i].price)
        i += 1
    }
}

function getPrice(option){
    return parseInt(option.split('RM ' [1]))
}

console.log("Choose your Resolution")
const resOptions = [{label : '1920 x 1080', price : 300},
{label: '2560 x 1440', price : 600},
{label: '3280 x 1680', price : 900}]

displayOptions(resOptions)
let ansRes = question('Select Resolution Index\n')

console.log("Choose your Video Card")
const videoCardOptions = [{label: 'nVdia', price: 600},
{label: 'AMD Radeon', price: 550},
{label: 'Intel',  price: 500}]

displayOptions(videoCardOptions)
let ansVC = question('Select Video Card Index\n')

console.log("Choose your Processor")
const processorOptions = [{label: 'i3', price: 100},
{label: 'i5', price : 300},
{label : 'i7', price: 500}]

displayOptions(processorOptions)
let ansProcessor = question('Select Processor Index\n')

console.log("Choose your Hard Disk")
const hddOptions = [{label: '128GB', price : 100},
{label: '256GB', price : 200},
{label: '1TB', price : 300}]

displayOptions(hddOptions)
let ansHDD = question('Select Hard Disk Index\n')

console.log('You have chosen the following option')

console.log(resOptions[ansRes].label + ' : RM ' + resOptions[ansRes].price)
console.log(videoCardOptions[ansVC].label + ' : RM ' + resOptions[ansVC].price)
console.log(processorOptions[ansProcessor].label + ' : RM ' + resOptions[ansProcessor].price)
console.log(hddOptions[ansHDD].label + ' : RM ' + resOptions[ansHDD].price)

let totalPrice = resOptions[ansRes].price + videoCardOptions[ansVC].price + processorOptions[ansProcessor].price + hddOptions[ansHDD].price

console.log('The total price is RM' + totalPrice)