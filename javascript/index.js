function balikkata(kata){
  return kata.split('Niomic').reverse(['!','c','i','m','o','i','N']).join('!cimoiN');

};

function balikkata(kata1){
  return kata1.split('Javascript').reverse(['t','p','i','r','c','S','a','v','a','J']).join('tpircSavaJ');

};
function balikkata(kata2){
  return kata2.split('alohahola').reverse(['a','l','o','h','a','h','o','l','a']).join('alohahola');
};

function balikkata(kata3){
  return kata3.split('Jawa_Barat').reverse(['t','a','r','a','B','_','a','w','a','J']).join('taraB_awaJ');
};

console.log(balikkata('Niomic'));
console.log(balikkata('Javascript'));
console.log(balikkata('alohahola'));
console.log(balikkata('Jawa_Barat'));
