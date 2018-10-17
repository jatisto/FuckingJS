// console.log('Задание 1');
//
//
// var arr = ['Кефир','Водка','Водка','Кефир','Кефир' ]
//
// for (i = 0; i < arr.length; i++){
//     if (arr[i] === 'Кефир')
//     {
//         console.log(arr[i], 'это хорошо');
//     }
//     else
//     {
//         console.log(arr[i], 'это плохо');
//     }
// }
//
//
// //----------------------------------------------------
//
// console.log('Задание 2');
//
// var array = [1, 5, 12, 4, 3];
//
// for (i = 0; i < array.length; i++){
//
//     if (i < 3){
//         console.log(number(array[i] + 2));
//     }
//     else {
//        console.log(number(array[i] + 3));
//     }
// }
// number()
//
//  function number (num) {
//     return num;
//
// }
//
// //----------------------------------------------------
//
// console.log('Задание 3');

// var result  = prompt("Кто лучший друг крокодила Гены?", '');
//
// function cheburash()
// {
//     if (result === 'чебураш')
//     {
//         alert('And this right!');
//     }
//     else
//     {
//         alert('And this not right!');
//     }
// }
//
// cheburash(result);

// //----------------------------------------------------
//
// console.log('Задание 4');

// var Duck = {
//     name : 'Дональд',
//     color: 'белый',
//     old : 1,
//     toStr: function () {
//         return this.name + ',' + this.color + ',' + this.old;
//     },
//     toSay: function (voice) {
//         return voice;
//     }
// };
//
// console.log(Duck.toStr(), Duck.toSay('Кря кря'));

//----------------------------------------------------

// console.log('Задание 5');
//
// let string = [
//     document.getElementById('string-3'),
//     document.getElementById('string-5'),
//     document.getElementById('string-2'),
//     document.getElementById('string-6'),
//     document.getElementById('string-4'),
//     document.getElementById('string-1')];
//
// for (i = 0 ; i < string.length; i++){
//     console.log(string[i].textContent);
// }

//----------------------------------------------------
//
// console.log('Задание 6');
//
// Вариант 1

// var colorArray = document.getElementsByClassName('element');

// colorArray[0].style.backgroundColor = '#AA0000';
// colorArray[1].style.backgroundColor = '#AA0000';
// colorArray[2].style.backgroundColor = '#AA0000';

// Вариант 2

// var colorDivs = document.getElementsByClassName("element");
// for (i = 0 ; i < colorDivs.length; i++) {
//    if (i < 3){
//        colorDivs[i].style.backgroundColor = "#AA0000";
//    }
// }

//----------------------------------------------------

// console.log('Задание 7');
//
// var element = ('<div class="element">Element</div>');
//
// var colorArray2 = document.body.getElementsByClassName("container");
// for(var i = 0; i < colorArray2.length; i++) {
//     var innerHtml = "";
//     for(var j = 0; j < 5; j++) {
//         innerHtml += element;
//     }
//     colorArray2[i].innerHTML = innerHtml;
//     console.log(colorArray2[i])
// }

//----------------------------------------------------

console.log('Задание 7');
