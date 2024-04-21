
//<--------------------------------------------------------->

// ГОНКИ

        // const player = document.getElementById('player');
        // const game = document.getElementById('game');
        // const gameWidth = game.clientWidth;
        // const playerWidth = player.clientWidth;
        // const playerSpeed = 5;

        // document.addEventListener('keydown', function(event) {
        //     if (event.key === 'a') {
        //         movePlayer(-playerSpeed);
        //     } else if (event.key === 'd') {
        //         movePlayer(playerSpeed);
        //     }
        // });

        // function movePlayer(speed) {
        //     let currentPosition = parseInt(player.style.left) || gameWidth / 2 - playerWidth / 2;
        //     let newPosition = currentPosition + speed;

        //     if (newPosition < 0) {
        //         newPosition = 0;
        //     } else if (newPosition + playerWidth > gameWidth) {
        //         newPosition = gameWidth - playerWidth;
        //     }

        //     player.style.left = newPosition + 'px';
        // }



//<--------------------------------------------------------->








//<--------------------------------------------------------->

//const name = prompt('Your namr')
//const age = prompt ('enter age')
//console.log(`name ${name} age is ${age}`)

//<--------------------------------------------------------->

//const youTube = prompt('your name')
//console.log (`https://www.youtube.com/@${youTube}`); 

//<--------------------------------------------------------->

//operatori

//+ - / * %

//const y = 5
//const x = 5
//not a number

//console.log(y + x);
//console.log(y - x);
//console.log(y / x);
//console.log(y * x);
//console.log(y % x);

//<--------------------------------------------------------->

// const year= prompt ('enter yor year')

// const a = 2024
// const b = year

// console.log (a - b)

//<--------------------------------------------------------->

//increment & dicriment

// let y = 1 
// console.log(y);
// y--
// console.log(y)

// && и, || или

//<--------------------------------------------------------->

//  const isMarried = true 
//  const haveChild = false 

//  console.log(isMarried || haveChild)

//<--------------------------------------------------------->

// const  NumberOfSeries = prompt('Сколько Вы видели сериал?')


// const seriesDB ={
//   count:NumberOfSeries,
//   serias:{},
//   acters:{},
//   genres:[],
//   private:false
//   }
//   const a = prompt('Последний сериал, который ты смотрел?')
//   const b = +prompt('Оцените сериал от 1-10?')

//   const c = prompt('Последний сериал, который ты смотрел?')
//   const d = +prompt('Оцените сериал от 1-10?')

//   seriesDB.serias[a] = b
//   seriesDB.serias[c] = d


// console.log(seriesDB)

//<--------------------------------------------------------->

//  const light = ''

//  if (light == 'red'){
//   alert('stop')
//  }else if(light=='yellow'){
//   alert('redy')
//  }else if(light == 'green'){
//   alert('goo')
//  }else{
//   alert ('goo goo')
//  }


// const age = prompt ('how old are you')

// if(age <= 18 ){
//   alert('no acsees')
// }else {
//   alert('acsees')
// }

//<--------------------------------------------------------->

//  const light = ''
//  switch(light){
//   case 'green':
//   alert('goo')
//   break
//   case 'red':
//     alert('ready')
//     break
//     default:
//       alert('vse ravno go')

//  }

//<--------------------------------------------------------->

//  let i = 0

//  for(i; i >=20; i++){
//   if(i== 10){
//     continue //пропускает
//     break //останавливает 
//   }
//   console.log(i);
//  }

//  while (i <= 100){
//   console.log (i);
//   i++
//  }

//<--------------------------------------------------------->

// <=>

// const numberOfserias = prompt('Сколько сериалов видели?')

// const seraiDB = {
//   count:numberOfserias,
//   serias:{},
//   actors:{},
//   genres:[],
//   private:false
// }

// for(let i = 0; i < 2; i++){

//   const a = prompt('Последний сериал, который ты смотрел?')
//   const b = +prompt('Оцените сериал от 1-10?')

//   if(a !== null && a !== "" && b !== "" && b !== null){

//     seraiDB.serias[a] = b
//   }else{
//     i--
//   }
// }


// console.log(seraiDB);

// const age = prompt ('сколько сериалов вы просмотрели?')

// if(seraiDB.count <= 5 ){
//   console.log('Вы не посмотрели несколько серий');

// }else if (seraiDB.count <5 && seraiDB.count <= 10){
//   console.log('вы классический зритель');
// }else if (seraiDB.count <10){
//   console.log('Вы звезда сериалов');
// }

//<--------------------------------------------------------->
//function decloration

//   const number1 = +prompt('какое число вы хотите прибавить первым?')
//   const number2 = +prompt('какое число вы хотиете прибавить вторым?')

// function getNumber(a,b){
//   alert(a+b)
// }
// getNumber(number1,number2)

// function plus(){
//   console.log(5+5);
// }

// plus()

//<--------------------------------------------------------->

//function expression

//  const minus = function (a,b){
//   console.log(8 - 4);
//  }

//  minus()



//<--------------------------------------------------------->

//arrow finction

//  const userName = (user)=>{
//   console.log(user);
//  }

//<--------------------------------------------------------->

//return всегда должна возврощать ответ,в переменую либо в console.
// return

//<--------------------------------------------------------->

// const text = 'amal'

// console.log(text.length)//длина любого контента 
// console.log(text.toUpperCase());//
// console.log(text.toLocaleLowerCase());//
// console.log(text.trim());//удаляет лишнии пробелы
// console.log(text.slice(2));//удаляет буквы с начала/конца

//<--------------------------------------------------------->

//  let numberOfserias 


//  const seraiDB = {
//    count: numberOfserias,
//    serias: {},
//    actors: {},
//    genres: [],
//    private: false
//  }

//  function startApp (){
//    numberOfserias = +prompt('Сколько сериалов видели?')
//    while(numberOfserias == '',numberOfserias == null, numberOfserias == isNaN() ){
//      numberOfserias = +prompt('Сколько сериалов видели?')
//    }
//  }
//  startApp()


//  function cikl(){
//    for(let i = 0; i < 2; i++){
//      const a = prompt('Последний сериал, который ты смотрел?')
//      const b = +prompt('Оцените сериал от 1-10?')


//      if(a !== '' && a !== null && b !== '' && b !== null ){
//        seraiDB.serias[a] = b
//      }else{
//        i--
//      }
//    }
//  }
//  cikl()



//  console.log(seraiDB);


//<--------------------------------------------------------->



// function appendToDisplay(value) {
//   document.getElementById('display').value += value;
// }

// function clearDisplay() {
//   document.getElementById('display').value = '';
// }

// function calculate() {
//   var result = eval(document.getElementById('display').value);
//   document.getElementById('display').value = result;
// }


//<--------------------------------------------------------->


// pofic()

// function pofic() {
//   for (i = 0; i < 1000000; i++) {

//     let number1 = +prompt('первое число')
//     let number2 = +prompt('второе число')
//     let are = prompt('действе [ + ],[ * ],[ / ],[ - ]')

//     if (
//       isNaN(number1) &&
//       number1 == '' &&
//       number2 == null &&
//       isNaN(number2) &&
//       number2 == '' &&
//       number1 == null &&
//       are == '' &&
//       are == 'null' &&
//       are !== '+' &&
//       are !== '-' &&
//       are !== '/' &&
//       are !== '*') {
//       i--
//     } else {
     

//       if (are == '+') {
//         alert(`${number1} + ${number2} = ${number1 + number2}`)
//       } else if (are == '-') {
//         alert(`${number1} - ${number2} = ${number1 - number2}`)
//       } else if (are == '*') {
//         alert(`${number1} * ${number2} = ${number1 * number2}`)
//       } else if (are == '/') {
//         alert(`${number1} / ${number2} = ${number1 / number2}`)
//       }
//     }

//   }


// }



//<--------------------------------------------------------->








//<--------------------------------------------------------->




// const person = {
//   name:'amal',
//   age:16,
//   job:'front-end'
// }
//        value
// for(let key in person){
  //      property
//   console.log(key);
// }


//<--------------------------------------------------------->


// деструптизация & метод

// const person = {
//   name:'amal',
//   age:22,
//   sayHello:function(){
//     console.log(1); //метод

//   }
// }

// person.sayHello()

// const name = person.name
// const age = person.age
// const sayHello = person.sayHello

// const {name, age, sayHello}= person



//<--------------------------------------------------------->


// const arr = ['red','black','green']

// console.log('длина массива',arr.length);
// console.log('вывести с помощью index:', arr[1]);
// console.log('удаляет из конца  один элемент:',arr.pop() );
// console.log('добавляет новый элемент с начала:', arr.push('yellow'));
// console.log('удаляет элементс начала:', arr.shift());
// console.log('добавляет новый элемент с начала:', arr.unshift('gray'));

// console.log(arr);

// arr[7] ='blue'

// console.log(arr.lingth);


//<--------------------------------------------------------->



//итерация

// const cars = ['BMW','mersedec','porchse','audi']


//1 cпособ
  // for(let i=0; i < cars.length; i++){
  //   console.log(cars[i]);

  // }

//2 способ

  // for(let key of cars){
  //   console.log(key);
  // }

//3 способ

// cars.forEach((c,i,arr) =>{
//   console.log(`index:${i},${c},${arr}`);
// })


// const students = [
//   { namr: "amal", age: 16 },
//   {name: "zaynidun", age:17 },
//   {name: "seragay", age:16 },
// ];

// students.forEach((c) => {
//   console.log(c.age);
// });


//<--------------------------------------------------------->


//split

// const socialMedia = 'youTube, instagram, facebook '
// console.log(socialMedia)
// const newArr = socialMedia.split(', ')
// console.log(newArr)

//<--------------------------------------------------------->



//sort

// const cars = ['mersedec','bmw','audi','porchse']

// console.log(cars);
// cars.sort()
// console.log(cars);
// const numbers = [51,180,4,10,33]
// console.log(numbers);
// numbers.sort(compareNum)
// console.log(numbers);

// function compareNum (a,b){
//   return a-b
// }


//<--------------------------------------------------------->


//oop

// const  cars = {
//   weight:1500,
//   length:3,
//    speed: () =>{
//     console.log(220);
//    }                                  
// }

//   const lacetti ={
//     name:'lacetti'

//   }

  //lacetti.__photo__= cars

  // Object.setPrototypeOf(lacetti,cars)
  // console.log(lacetti.length);


//<--------------------------------------------------------->





// const seraiDB = {
//   count: 0,
//   serias: {},
//   actors: {},
//   genres: [],
//   private: false,


//   visibleDB:function(){
//     private = prompt('это приватная информаця ?')

//     while(
//       private !== 'true'&&
//       private !== 'false'
//     ){
//       private = prompt('это приватная информаця ?')
//     }
  
//     if(private =='false'){
//       console.log(seraiDB)
//     }else if(private == 'true'){
//       console.log('данные приватны')
//     } 
//   },


//   writeGenres: function(){

//     for ( let i = 0; i < 3; i++){
//       const genre = prompt(`genres ${i+1}?`,'')
//       seraiDB.genres[i] = genre
//     }
//     console.log (seraiDB)
//   },


//  startApp:  function (){
//   seraiDB.count = +prompt('Сколько сериалов видели?')
//     while(seraiDB.count == '' ,seraiDB.count == null,  seraiDB.count == isNaN() ){
//       seraiDB.count = +prompt('Сколько сериалов видели?'
//       )
//     } 
    
    
  
  
//   },

//    cikl:function(){
//     for(let i = 0; i < 2; i++){
//       const a = prompt('Последний сериал, который ты смотрел?')
//       const b = +prompt('Оцените сериал от 1-10?')
//       if(a !== '' && a !== null && b !== '' && b !== null ){
//         seraiDB.serias[a] = b
//       }else{
//         i--
//       }
//     }
//   }



// }



// seraiDB.writeGenres()
// seraiDB.startApp()
// seraiDB.cikl()






//<--------------------------------------------------------->



// const seriesDB = {
//   count: 0,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
//   start: function () {
//    seriesDB.count = +prompt('Сколько сериалов видели?')
 
//    while (
//     seriesDB.count == '',
//     seriesDB.count == null,
//     isNaN(seriesDB.count)
//    ) {
//     seriesDB.count = +prompt('Сколько сериалов видели?')
//    }
//   },
//   setSeries: function () {
//    for (let i = 0; i < 2; i++) {
//     const a = prompt(`Последний сериал который вы видели ${i + 1}?`)
//     const b = prompt(`дайте оценку 1-10? ${i + 1}`)
 
//     if (a !== null && b !== null && a !== '' && b !== '') {
//      seriesDB.series[a] = b
//     } else {
//      i--
//     }
//    }
//   },

//   detectingLevel: function () {
//    if (seriesDB.count < 5) {
//     console.log("Мало Сериалов смотрели")
//    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//     console.log('Вы классик зритель сериалов')
//    } else if (seriesDB.count >= 10) {
//     console.log('Вы звезда сериалов')
//    }
//   },
  
//   visibleDB: function () {
//    if (seriesDB.private) {
//     seriesDB.private = false
//    } else {
//     seriesDB.private = true
//    }
//   },

//   showDB: function () {
//    if (!seriesDB.private) {
//     console.log(seriesDB)
//    } else {
//     console.log("Private")
//    }
//   },

//   writeGenres: function () {
//    for (let i = 0; i < 3; i++) {
//     const genre = prompt(`Ваш любимый жанр ${i + 1}?, ''`)
//     if (genre === '' || genre === null) {
//      i--
//     } else {  
//      seriesDB.genres[i] = genre
//     }
//    }
//   },
//  }

//<--------------------------------------------------------->


  //  const btn = document.getElementById('btn') //используется если ID
  //  const btn = document.getElementsByClassName('btn')   //используется есил имя/название   


  // const box = document.querySelector('.box')
  // console.log(box);

  // box.style.padding = '100px'
  // box.style.backgroundColor = 'grey'

  //

//<--------------------------------------------------------->
      

  // box.classList.add('header')
  // box.classList.remove('header')

  // const box = document.querySelector('.box')
  // const btn = box.querySelectorAll('.btn')
  // console.log(btn);
  
//<--------------------------------------------------------->

// const root = document.querySelector('#root')

// const div = document.createElement('div')
// root.append(div)
// div.classList.add('header')

// div.innerText = 'hello world'//добволяет текст

// div.innerHTML = '<h1> hello world</h1>'//добавляет тег

//<--------------------------------------------------------->


// function addSerias () {
//   list.innerHTML = "";
  
//   serias.forEach((c,i) => {
//     list.innerHTML +=
//      `<li class="promo__interactive-item">${i+1} ${c}
//         <div class="delete"></div>
//       </li>`;
//   });
// }

// addSerias()



// sub.addEventListener('click',(e)=>{
//   e.preventDefault()
//   let newValue = input.value

//   serias.push(newValue)
//   console.log(serias);
//   addSerias()

// })

//<--------------------------------------------------------->


// const logger = () => {
//   console.log(2);
// }
// setTimeout (logger,3000)// нужен для того чтобы оповищение приходило в момент 

//===============================


// setInterval(() => {
//   console.log(2);
// }, 10); // тоже самое токо оно будет приходить кажду сек


//===============================

// let i = 0
// function logger() {
//  console.log(1);
// i++
// if(i== 5){
//   clearInterval(id)
//   }
// }

// const id = setInterval(logger,1000)
 
// let i = 0

// const id = setInterval(() => {
//   console.log(1);
// }, 2000);


// clearInterval(id)

//  if(i==3){

//   }

//===============================



// const car =document.querySelector('car')
// const but =document.querySelector('button')

// const letcar = () => {
//   let pos = 0
//   if(pos == 70){
//     clearInterval()
//   }else{
//     pos++
//     car.style.position = pos + '%'
//   }
// }

// const id = setInterval(letcar,10)


//===============================


    // const object = document.getElementById('car');
    // const goButton = document.getElementById('but');

    // const moveRight = () => {
    //     const currentPosition = parseInt(car.style.left) || 50;
    //     car.style.left = currentPosition + 10 + 'px';
    // };

    // goButton.addEventListener('click', moveRight);

//===============================

//     const btn = document.querySelector('button')
//   function startCar (){
//   const car = document.querySelector('.car')
//   let pos = 0

//   const id = setInterval(movecar, 5);

//   function movecar () {
//     if(pos == 1000){
//       clearInterval(id)
//     }else{
//       pos++
//       car.style.left = pos + "px"
//     }
//   }
// }



// btn.addEventListener('click',startCar)




//===================================================================================================//



// const btn = document.querySelector('button')
// const name = document.querySelector('.name')
// const number = document.querySelector('.number')

// const regExName = /^[a-zA-Z\s]{6,18}$/
// const regExNumber = /^[0-9]{9,9}$/

// form.addEventListener('submit',(e)=>{

//   e.preventDefault()

//   if(regExName.test(name.value) && regExNumber.test(number.value)){
//     box.innerHTML = '<h3> успешный вход </h3>'
//     box.style.padding = '20px'
//   } else {

//     box.innerHTML = '<h3> ваш номер не совподает,проверте номер</h3>'
//     box.style.paddinr ='20px'
//   }
// })


//<--------------------------------------------------------->


const nameInput = document.querySelector('.name');
const numberInput = document.querySelector('.number');
const form = document.querySelector('form')
const name = document.querySelector('.name')
const number = document.querySelector('.number')
const box = document.querySelector('.box')

// const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
const regExName = /^[a-zA-ZА-Яа-я\s]{6,}$/
const regExNumber = /^[0-9]{9,}$/

form.addEventListener('submit',(e)=> {
  e.preventDefault()

  if(regExName.test(name.value) && regExNumber.test(number.value)){
   box.innerHTML = '  '
    box.style.padding = '2px'
  } else {
    box.innerHTML = '<h3>В вашем имени или в номере что-то неправильно пожалуйста проверьте</h3>'
    box.style.padding = '2px'
    
  }
})

name.addEventListener('keyup', ()=>{

  if(regExName.test(name.value)){
    name.style.borderColor ='green'
  }else{
    name.style.borderColor = 'red'
  }
})

number.addEventListener('keyup', ()=>{

  if(regExNumber.test(number.value )){
    number.style.borderColor ='green'
  }else{
    number.style.borderColor ='red'
  }
})


form.addEventListener('submit', function(event) {
  event.preventDefault();
  const fullName = nameInput.value;
  const number = numberInput.value;
  
  const displayElement = document.createElement('p');
  displayElement.textContent = `Full Name: ${fullName}, ------ Number: ${number}`;
  document.body.appendChild(displayElement);
  displayElement.style.color ='rgba(0, 19, 54, 0.815)'
  displayElement.style.marginTop ='20px'
  displayElement.style.fontFamily ='Segoe UI, Tahoma, Geneva, Verdana, sans-serif'




});


//<--------------------------------------------------------->




