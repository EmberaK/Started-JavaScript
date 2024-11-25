/*
false:
null,undefinded,0,false,'',void
 
conditional-instractions.js
*/


const sayHiResult = sayHi();
// console.log(sayHiResult)
// if (sayHiResult) {
if (sayHi()) {
    console.log('"sayHi" handled')
}

function sayHi() {
    const text = 'hello from sayHi'
    console.log(text)
    return text
}

let firstExample = sayHiResult ? '"sayHi" handled' : '"sayHi" not handled'
console.log(firstExample)


/*   let answerUser = prompt('Яка “офіційна” назва JavaScript?')
      if(answerUser.toLowerCase()=='ecmascript'){
          alert('Правильно')
      } else{
          alert('Ви не знаєте? ECMAScript!')
      } */

/*  let result1;
 
 if (a + b < 4) {
     result1 = 'Нижче';
 } else {
     result1 = 'Вище';
 }
 
 let result2 = (a + b < 4)? 'Нижче':'Вище' */

/* let message1;
let login1 = 'Працівник';
let login2 = login1;
if (login1 == 'Працівник') {
    message1 = 'Привіт';
} else if (login1 == 'Директор') {
    message1 = 'Вітаю';
} else if (login1 == '') {
    message1 = 'Немає логіну';
} else {
    message1 = '';
}

let message2 = login2 == 'Працівник'? 'Привіт':
                login2 == 'Директор'? 'Вітаю':
                login2 == ''? 'Немає логіну':
                '';
console.log(`mesaage1: ` + message1);
console.log(`mesaage2: ` + message2); */
/* let age = Number(prompt('Please enter Number', '14-90'))
if(age>=14 && age<=90){
    alert("bla-bla")
} */



