console.log("hello world node js");

var x=1;
console.log(typeof(x));
x = " Kenneth ";
console.log(typeof(x));
console.log(x);

function make1(x, y){
    console.log(x);
}

function make2(x,y,z){
    make1(x+1);
    console.log(typeof(x));
    if(x==null){
        console.log("x is null !");
    }
    if(typeof(y)==='undefined'){
        console.log("y is null and underfined!");
    }
    console.log(z);
}

make1 (x + 100);
make2('xxx',null,100);
make2('aaa');


function make3(fn1){
    console.log(fn1);
    fn1();
}

function fn1(){
    console.log("Hello World blah blah");
}


make3(fn1);

str1 = "Apple";
console.log(str1);
str2 = 'An ' + str1;

console.log(str1);
str2 = `
        xxxx An ${str1}
        \n test gello !
        `;

console.log(str2);


var x = true;
var yy = false;

if(x){
    console.log("x is true");
}

if(!yy){
    console.log("yy is flase");
}

x=100;
function make5(){
    let x = 10;
    console.log(`inside x >>> ${x}`);
}

make5();
console.log(`outside x >>> ${x}`);

var fruit = ['Apple', false, 'Orange', 1, 'Durain'];
console.log(fruit[0]);
console.log(fruit[1]);

fruit.push('Pineapple');
console.log(fruit);
fruit.pop();
console.log(fruit);

fruit.unshift(1);
console.log(fruit);
fruit.unshift('Watermelon');
console.log(fruit);

fruit.shift();
console.log(fruit);

fruit.sort();
console.log(fruit);

var number1 = [4,7,1,8,2];
number1.sort(function(a,b){
    console.log("a " + a + " & b " + b);
    console.log(b-a);
    return b - a;
})

console.log(number1);


var numbers1 = [4,7,1,8,2];
var numbers2 = [4,77,1,81,222];

result = numbers1.concat(numbers2);
console.log(result);
result.sort(); // doesn't work

result.sort(function(a,b){
    return b - a;
})

console.log(result);



//timeout -> after 5000ms it kills
// anonymous aka arrow function
/*setTimeout(()=>{
    console.log(1+1);
},5000); 

//anonymous fn
setTimeout(function(){
    console.log(1+1);
},5000);

//name function -> as x
function namex(){
    console.log(1+1);
};

setTimeout(namex, 5000);

//setInterval -> keep running at deifned interval time

setInterval(()=>{
    console.log("setInterval >"+ 1+1);
}, 5000); */

function throwError(){
    console.log("Throw fn");
}


try{
    throwError();
}catch(e){
    console.log(e);
}finally{
    console.log("Finallly");
}


var x5 = 4;
switch(x5){
    case 1:
        console.log('1');
        break;
    
    case 2:
        console.log('2');
        break;
        
    case 4:
        console.log('4');
        break;

    default:
        Console.log("This is default switch");
}


var yy=0;
while(yy <= 5){
    console.log(yy);
    yy++;
}


var t = [1,3,4,5,8,9];
t.forEach((result, index)=>{
    console.log("Result >> " + result);
    console.log("Index >>>> " + index)
})


for(var i=0; i<t.length; i++){
    console.log(t[i]);
}


var months = ['Jan', 'Feb', 'Mar' , 'Apr', 'May'];
console.log(months);
copyMonths = months.slice(1, 4); //slice index 1 to 3 /// 1,3-> feb,mar /// 1,4-> feb,mar,apr
console.log(">>>>>>" + copyMonths);


//index, deletecount, value

months.splice(4 , 2, 'June', 'July'); // remove  May and add June and July
console.log(months);

var person = {
    firstName : 'Kenneth',
    lastName : 'Phang',
    age : 18,
    'my house' : 'amk',
    gender : 'M',
    postalCode : 566344
}

function Person2(firstname, lastname, age, gender){
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    this.gender = gender;
}

var p2 = new Person2('Kenneth', 'Phang', 42, 'M');
console.log(p2.age);


class Animal {
    constructor(noOfLegs, color, shape){
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.shape= shape;
    }

    getAdditionalNoOfLegs(){
        return this.noOfLegs + 2;
    }
}

var c = new Animal(4, 'brown', 'dog');
console.log(c.noOfLegs);
console.log(c.color);
console.log(c.getAdditionalNoOfLegs());

class Cat extends Animal{
    constructor(noOfLegs, color, shape){
        super(noOfLegs, color, shape);
    }

    getBlackColor(){
        return 'black';
    }
}

var cc = new Cat(4, 'red', 'elephant');
console.log("Child obj ->>>> " + cc.getAdditionalNoOfLegs());

const words = ['spray', 'comb', 'limit', 'chocolate', 'coffee'];

const longwords = words.filter(word=> word.length > 6); // arrow function = call back function
console.log(longwords);

const total = [1,4,5,6].reduce((sum, value) => sum + value, 0);
// start from 0 value in sum and add every value in array // 16
//const total = [1,4,5,6].reduce((sum, value) => sum + value, 1); // 17
console.log(total);

//http call
// back end                 // front end
Promise.resolve('Success').then(function(value){
    console.log(value); // Success
}, function(value){
    console.log("Second" + value); //not called
});


var person = {
    firstName : 'Kenneth',
    lastName : 'Phang',
    age : 18,
    'my house' : 'amk',
    gender : 'M',
    postalCode : 566344
}

console.log(person.age);
console.log(person.gender);
console.log(person['age']);
console.log(person['my house']);
person.age = 40;
console.log(person.age);
console.log(person.postalCode);
delete person.postalCode;
console.log(person.postalCode);

person.breakfast = 'milo';

console.log(person.breakfast);