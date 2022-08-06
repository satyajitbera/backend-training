const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();


const currentdate = `${day}-${month}-${year}`;

const printDate = function () {
    console.log(currentdate);
}
const currentMonth = date.toLocaleString('default', { month: 'long' })
const printMonth = function () {
    console.log(currentMonth)
}

const getBatchInfo ="Plutonium,W3D5,the topic for today is Nodejs module system"
    


module.exports.printDate= printDate
module.exports.printMonth= printMonth
module.exports.getBatchInfo= getBatchInfo