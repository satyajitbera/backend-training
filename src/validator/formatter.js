

const trimmer =function(){
 const tri ='              This  is    Satyajit    Bera   '
 console.log(tri.trim());
}


const changeLowerCase = function(){
const lCase  = 'I Will DEFINITELY cHANGE mY LiFE';
console.log(lCase.toLowerCase());
}

const changeUpperCase = function(){
const uCase = "Hope FUNctionup will Fullfill My Dream"
console.log(uCase.toUpperCase());
}


module.exports.forTrim = trimmer;
module.exports.lowerCase = changeLowerCase;
module.exports.upperCase = changeUpperCase;