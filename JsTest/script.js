alert('Задание 1');
console.log('Задание 1');


var arr = ['Кефир','Водка','Водка','Кефир','Кефир' ]

for (i = 0; i < arr.length; i++){
    if (arr[i] === 'Кефир')
    {
        console.log(arr[i], 'это хорошо');
    }
    else
    {
        console.log(arr[i], 'это плохо');
    }
}


//----------------------------------------------------

alert('Задание 2');
console.log('Задание 2');

var array = [1, 5, 12, 4, 3];

for (i = 0; i < array.length; i++){

    if (i < 3){
        console.log(number(array[i] + 2));
    }
    else {
       console.log(number(array[i] + 3));
    }
}
number()

 function number (num) {
    return num;

}

//----------------------------------------------------

alert('Задание 3');
console.log('Задание 3');

var result  = prompt("Кто лучший друг крокодила Гены?", '');

function cheburash()
{
    if (result === 'чебураш' || result === 'чебурашка'|| result === 'cheburashka' )
    {
        alert('Это верно!!!');
    }
    else
    {
        alert('Это не верно!');
    }
}

cheburash(result);

//----------------------------------------------------

alert('Задание 4');
console.log('Задание 4');

var Duck = {
    name : 'Дональд',
    color: 'белый',
    old : 1,
    toStr: function () {
        return this.name + ',' + this.color + ',' + this.old;
    },
    toSay: function (voice) {
        return voice;
    }
};

console.log(Duck.toStr(), Duck.toSay('Кря кря'));

//----------------------------------------------------

alert('Задание 5');
console.log('Задание 5');

let string = [
    document.getElementById('string-3'),
    document.getElementById('string-5'),
    document.getElementById('string-2'),
    document.getElementById('string-6'),
    document.getElementById('string-4'),
    document.getElementById('string-1')];

for (i = 0 ; i < string.length; i++){
    console.log(string[i].textContent);
}

//----------------------------------------------------

alert('Задание 6');
console.log('Задание 6');

var colorDivs = document.getElementsByClassName("element");
for (i = 0 ; i < colorDivs.length; i++) {
   if (i < 3){
       colorDivs[i].style.backgroundColor = "#AA0000";
   }
}

//----------------------------------------------------

alert('Задание 7');
console.log('Задание 7');

var element = ('<div class="element7">Element7</div>');

var colorArray7 = document.getElementsByClassName("container7");
for(i = 0; i < colorArray7.length; i++) {
    var innerHtml7 = "";
    for(var j = 0; j < 5; j++) {
        innerHtml7 += element;
    }
    colorArray7[i].innerHTML = innerHtml7;
    console.log(colorArray7[i]);
}

//----------------------------------------------------

alert('Задание 8');
console.log('Задание 8');

function createElementsInsideAndButton() {
    var colorArray8 = document.body.getElementsByClassName("container8");
    for (var i = 0; i < colorArray8.length; i++) {
        var innerHtml8 = "";
        for (var j = 0; j < 3; j++) {
            innerHtml8 += '<div class="element8">Element8</div>';
        }
        colorArray8[i].innerHTML += innerHtml8;

        var btn = document.createElement("input");
        btn.id = "btn";
        btn.setAttribute("type", "button");
        btn.value = "+";
        colorArray8[i].parentNode.insertBefore(btn, colorArray8[i].nextSibling);
        console.log(colorArray8[i]);
        console.log(btn);
    }
}
//----------------------------------------------------

alert('Задание 9');
console.log('Задание 9');


var countNum = prompt("Введите сколько раз посторить", '');

var i = 0;

while (i < countNum) {

    function createTime() {
    }setTimeout(function () {
        createElementsInsideAndButton9();
        console.log("Содаёться элемент")
    }, i*2000);
    i++;
}


function createElementsInsideAndButton9() {
    var colorArray9 = document.body.getElementsByClassName("container9");
    for (var i = 0; i < colorArray9.length; i++) {
        var innerHtml9 = "";
        for (var j = 0; j < 1; j++) {
            innerHtml9 += '<div class="element9">Element9</div>';
        }
        colorArray9[i].innerHTML += innerHtml9;
        colorArray9[i].innerHTML += '</br>';
        console.log(colorArray9[i])

    }
}


