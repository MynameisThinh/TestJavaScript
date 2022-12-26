// import { pi, testTemp, testQues } from "./test.js";
import * as uitl from "./test.js";
console.log(uitl.pi);
let cir = uitl.testTemp(2.3);
console.log(cir);
let yes = uitl.testQues(2);
console.log(yes);
// const getTempe = {
//     today: 8.12,
//     tomorrow: 7.23,
// }

// function setTempe(temperature) {
//     const maroc = temperature;
//     return maroc;
// }
// console.log(setTempe(getTempe));

// TRUYEN DU LIEU VAO THE HTML
// let a;
// let b;
// let c;

// document.getElementById("submit-1").onclick = function () {
//     a = document.getElementById("butt1").value;
//     a = Number(a);

//     b = document.getElementById("butt1").value;
//     b = Number(b);

//     c = Math.pow(a, 2) + Math.pow(b, 3);
//     document.getElementById("numC").innerHTML = "Side C" + c;
//     }

// let count = 0;

// document.getElementById("butt1").onclick = function () {
//     count -= 1;
//     document.getElementById("number").innerHTML = count;
// }
// document.getElementById("butt2").onclick = function () {
//     count = 0;
//     document.getElementById("number").innerHTML = count;
// }
// document.getElementById("butt3").onclick = function () {
//     count += 1;
//     document.getElementById("number").innerHTML = count;
// }


// VONG LAP VO TAN
// do {
//     let a = Math.floor(Math.random() * 6) + 1;
//     document.getElementById("butt1").onclick = function () {
//         document.getElementById("number").innerHTML = a
//     }
// } while (a = 0)

// document.getElementById("reset").onclick = function () {
//     document.getElementById("number").innerHTML = a
//     a = 0;
// }

// CHIEU DAI MANG VA VIET IN HOA + THUONG
// let userName = "Truong-Thinh";
// // console.log(username.length);
// // console.log(username.charAt(2));
// // console.log(username.lastIndexOf("T"));
// let phoneNumber = "123-456-789";
// userName = userName.toLowerCase();
// console.log(userName);

// userName = userName.replaceAll("-", "/"); console.log(userName);
// let fullName = "truong Thinh";

// let letter = fullName.charAt(4).toUpperCase().trim();

// console.log(letter);


// IF ELSE KHI TRUYEN DU LIEU VAO THE HTML
// document.getElementById("myButton").onclick = function () {
//     if (document.getElementById("visaBtn").checked) {
//         console.log("dang ky thanh cong visa");
//     } else if (document.getElementById("mastercardBtn").checked) {
//         console.log("dang ky  thanh cong mastercard");
//     } else if (document.getElementById("paypalBtn").checked) {
//         console.log("dang ky  thanh cong mastercard");
//     }
// }

//SWITCH CASE
// let temp = 20;
// function checkMate() {
//     switch (true) {
//         case temp > 15:
//             console.log("Ok");
//             break;
//         case temp > 20 && temp < 25:
//             console.log("Wrong");
//             break;
//         default:
//             console.log("Undef");
//     }
// }

// console.log(checkMate());

// VAN LA VONG LAP
// let userName = "";

// do {
//     userName = window.prompt("nhap username");
// } while (userName == "" || userName == null)
// console.log(userName);

//DAU $ TRONG JS
// let ourName = "Thinh";
// let age = 35;

// document.getElementById("myLabel").innerHTML = (`ten toi la ${ourName} va toi dang ${age} tuoi`);

// let myNum = 213882139;
// myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" })
// console.log(myNum);

// let a = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;
// document.getElementById("numberSubmit").onclick = function () {
//     let guess = document.getElementById("guessField").value;
//     guesses += 1;
//     if (guess == a) {
//         alert(`${a} is the #. it took you ${guesses} guesses`);
//     } else if (guess < a) {
//         alert("Too small");
//     } else {
//         alert("Too large");
//     }
// }

// BAI TAP TRUYEN DU LIEU VAO THE HTML VA CAC INPUT/BUTTON
// document.getElementById("submit").onclick = function () {
//     let temp;
//     if (document.getElementById("cRadio").checked) {
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toCelcius();
//         document.getElementById("tempLabel").innerHTML = temp + "C";
//     } else if (document.getElementById("fRadio").checked) {
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toFahreint();
//         document.getElementById("tempLabel").innerHTML = temp + "F";
//     }
//     else {
//         document.getElementById("tempLabel").innerHTML = "select a unit";
//     }

// }
// function toCelcius(temp) {
//     return (temp - 32)
// }
// function toFahreint(temp) {
//     return (temp + 21)
// }

//THEM XOA DU LIEU O MANG
// let array = ["ao", "lam", "truong", "thinh"];
// let bray = ["tao", "cam", "oi"];
// let cray = ["siu", "siuu", "siuuu"];
// array.push("Ten");
// array.pop();
// array.shift();
// array.unshift("Tao");

// DUNG FOR(LET..OF)
// let dray = [array, bray, cray];
// dray[0][1] = "Tao";
// for (let list of dray) {
//     for (let b of list) {
//         console.log(b);
//     }
// }
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// console.log(sum(a, b, c, d, e));

//PARAMETERS
// function sum(x, y, ...numbers) {
//     let total = 0;
//     for (let number of numbers) {
//         total += number;
//     }
//     console.log(total);
// }

//DUNG CALLBACK DE TRUYEN FUNCTION VAO FUNCTION KHAC
// sum(2, 3, TongCong);

// function sum(x, y, callback) {
//     let result = x + y;
//     callback(result);
// }

// function TongCong(output) {
//     console.log(output);
// }

// function displayDom(output) {
//     document.getElementById("tempLabel").innerHTML = output;
// }


// total(1, 2, DapAn);

// function total(x, y, callBack) {
//     let result = x + y;
//     callBack(result);
// }

// function DapAn(output) {
//     console.log(output);
// }

// function traKQ(output) {
//     document.getElementById("tempLabel").innerHTML = output;
// }

//FOREACH
// const names = ["thinh", "minh", "quoc"];
// names.forEach(truyenPhanTu);
// names.forEach(print)

// function truyenPhanTu(element, index, array) {
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element) {
//     console.log(element);
// }

//array.map(bao nhieu element duoc tinh thi xuat tuong ung bay nhieu elemet)

// let numbers = [1, 2, 3, 4, 5, 6]
// let squares = numbers.map(dauMu);
// let cubes = numbers.map(muBa);

// cubes.forEach(print);
// function dauMu(element) {
//     return Math.pow(element, 2)
// }
// function muBa(element) {
//     return Math.pow(element, 3);
// }

// function print(element) {
//     console.log(element);
// }
// array.filter(co dieu kien)
// var ahq = ["Thinh", "Minh", "Thao"];
// let buss = ahq.filter((str) => {
//     return str.includes("inh");
// })

// buss.forEach(print);
// function print(str) {
//     console.log(str);
// }

//array.reduce ( tra ve 1 gia tri duy nhat)
// var string = [13, 15, 19, 20];
// let total = string.reduce((total, str) => {
//     return total + str;
// })
// console.log(`Tong cong la ${total}`);

// mang dem nguoc
// let grade = [20, 83, 123, 11, 30]
// grade = grade.sort(crisRonaldo).reverse();

// grade.forEach(print);
// function crisRonaldo(x, y) {
//     return y - x;
// }

// function print(element) {
//     console.log(element);
// }

// let count = 0;
// document.getElementById("butt1").onclick = function () {
//     count -= 1;
//     document.getElementById("tempLabel").innerHTML = count;
// }
// document.getElementById("butt2").onclick = function () {
//     count += 1;
//     document.getElementById("tempLabel").innerHTML = count;
// }
// document.getElementById("butt3").onclick = function () {
//     count = 0;
//     document.getElementById("tempLabel").innerHTML = count;
// }

// const percent = (x, y) => {
//     return x / y * 100;
// }
// console.log(`${percent(75, 100)} %`)

//arrow function :
// let grades =[21,4,5,86,763,1];
// grades.sort(despending);
// grades.forEach(print);

// function despending(x,y){
//     return x-y;
// }

// function print(element){
//     console.log(element);
// }
//rut gon
// let grades = [21, 4, 5, 86, 763, 1];
// grades.sort((x, y) => {
//     return x - y;
// });
// grades.forEach((element) => {
//     console.log(element);
// });

// let grades = ["A", "21", "b", "4", "5", "86", "763", "1"];
// shuffle(grades);

// console.log(grades[1]);
// grades.forEach(grades => console.log(grades));

// function shuffle(array) {
//     let currentIndex = array.length;
//     while (currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -= 1;
//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }

//     return array;
// }

//Map
// const nestArray = new Map([
//     ["T-shirt", 20],
//     ["A-shirt", 30],
//     ["F-shirt", 40],
//     ["R-shirt", 50],
// ])
// nestArray.set("hat", 80);
// nestArray.delete("hat");
// let shoppingCart = 0;
// shoppingCart += nestArray.get("hat");
// console.log(nestArray.has("hat"));
// nestArray.forEach((key, value) => console.log(`${key},${value}`))

//object JSON
// const car1 = {
//     model: "Ferrari",
//     price: "2000",
//     color: "yellow",
//     drive: function () {
//         console.log(`This car costs ${this.price}$`);
//     }
// }
// console.log(car1.model);


//SU DUNG OOP
//dung class
// class Player {
//     score = 0;
//     pause() {
//         console.log("T");
//     }
//     exit() {
//         console.log("X");
//     }
// }
// const player1 = new Player();
// player1.score += 1;
// console.log(player1.score);
// player1.pause();
// player1.exit();

//constructor
// class Student {

//     constructor(names, age, born) {
//         this.names = names;
//         this.age = age;
//         this.born = born;
//     }
//     study() {
//         console.log(`${this.names} is my name`);
//     }
// }

// const student1 = new Student("Thinh", 30, "Binh Thuan");
// console.log(student1.names);
// console.log(student1.age);
// console.log(student1.born);
// student1.study();

//static
// class Car {

//     static numberOfCar = 0;
//     constructor(model, color) {
//         this.model = model;
//         this.color = color;
//         Car.numberOfCar += 1;
//     }
//     static staticRow() {
//         console.log("1.2.3");
//     }
// }
// const car1 = new Car("Mustang", "White");
// const car2 = new Car("Ferrari", "Blue");
// console.log(Car.numberOfCar);
// console.log(car2.numberOfCar);
// Car.staticRow();
//Ke thua
// class Animal {
//     alive = true;
//     eat() {
//         console.log(`This ${this.names} is eating`);
//     }
//     sleep() {
//         console.log(`This ${this.names} is sleeping`);
//     }
// }
// class Rabbit extends Animal {
//     names = "rabbit";
//     run() {
//         console.log(`This ${this.names} is running`);
//     }
// }

// class Fish extends Animal {

//     names = "fish";
//     swim() {
//         console.log(`This ${this.names} is swimming`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// class Car {
//     constructor(power) {
//         this._gas = 25;
//         this._power = power;
//     }
//     get power() {
//         return this._power;
//     }
//     get gas() {
//         return `${this._gas}L (${this._gas / 50 * 100}%)`;
//     }
//     set gas(value) {
//         if (value > 50) {
//             value = 50
//         } else {
//             this._gas = value;
//         }
//     }
// }
// let car = new Car(400);
// console.log(car.power);
// console.log(car.gas);
//mang cua object
// class Car {
//     constructor(model, color, size, status) {
//         this._model = model;
//         this._color = color;
//         this._size = size;
//         this._status = status;
//     }
//     get checked() {
//         console.log("Ok");
//     }
//     set checked(value) {
//         if (true) {
//             return value = null;
//         } else {
//             this._model = value;
//         }
//     }
// }

// const car1 = new Car("Ferrari", "black", "30x40", "ready");
// const car2 = new Car("BMW", "red", "40x60", "repaired");
// const car3 = new Car("Realm", "yellow", "50x70", "still");

// const cars = [car1, car2, car3];
// console.log(cars[2]._model);

// class Card {
//     constructor(value, nubmer) {
//         this.value = value;
//         this.names = nubmer;
//     }
// }

// const card1 = new Card("Ro", "2")
// const card2 = new Card("Chuong", "A")
// const card3 = new Card("Bich", "K")
// const card4 = new Card("Co", "8")
// const card5 = new Card("Co", "7")
// const card6 = new Card("Bich", "3")
// const card7 = new Card("Ro", "J")

// const cards = [card1, card2, card3, card4, card5, card6, card7];

// cards.forEach(card => console.log(`${this.value} , ${this.nubmer}`))

// try {
//     let x = window.prompt("vui long nhap x");
//     x = Number(x);
//     if ((isNaN)) throw "That isn't a number";
//     console.log(`Gia tri x la : ${x}`);
// }
// catch (error) {
//     console.log(error);
// }

//set Timeout()
// let time1 = setTimeout(checkOut, 2000);
// let time2 = setTimeout(checkOut1, 2000);
// let time3 = setTimeout(checkOut2, 2000);
// function checkOut() {
//     alert("1");
// }
// function checkOut1() {
//     alert("2");
// }
// function checkOut2() {
//     alert("3");
// }
// let times = [time1, time2, time3];
// document.getElementById("myButton").onclick = function () {
//     clearTimeout.time1;
//     clearTimeout.time2;
//     clearTimeout.time3;
//     alert("stop");

// }
//set Interval()
// let count = 0;
// let max = window.prompt("Count up to what");
// max = Number(max);

// const setTime = setInterval(countUpto, 500);

// function countUpto() {
//     count += 1;
//     console.log(count);
//     if (count >= max) {
//         clearInterval(setTime);
//     }
// }

//getDate
// let date = new Date(2023, 0, 1, 2, 3, 4);

// document.getElementById("myLabel")
// setInterval(getFormat, 1000);

// getFormat();
// function getFormat() {
//     let date = new Date();
//     myLabel.innerHTML = formatTime(date);
//     function formatTime(date) {
//         let hour = date.getHours();
//         let minute = date.getMinutes();
//         let second = date.getSeconds();
//         let amPm = hour > 12 ? "pm" : "am";
//         hour = (hour % 12) || 12;

//         return `${hour}:${minute}:${second} ${amPm}`;
//     }
// }

// class Test {
//     constructor(point, teacher) {
//         this.point = point;
//         this.teacher = teacher;
//     }
//     checkOut(point) {
//         if (point == 0) {
//             console.log("Kem")
//         } else if (point > 0 && point <= 5) {
//             console.log("TrungBinh")
//         } else if (point > 5 && point <= 10) {
//             console.log("Gioi")
//         } else {
//             console.log("Undefined")
//         }

//     }
// }
// let student1 = new Test(6, "Thinh");
// let student2 = new Test(7, "Tuan");
// let student3 = new Test(2, "Luan");
// student1.checkOut(3);
// student2.checkOut(7);
// student3.checkOut(8);
// const student = [student1, student2, student3]
// student.forEach(print => (checkOut()));

// function print(element) {
//     console.log(element);
// }
//async + await promise
// async function loadFile() {
//     let fileUpload = false;
//     if (fileUpload) {
//         return "File loaded";
//     } else {
//         throw "file not loaded";
//     }
// }
// async function checkMate() {
//     try {
//         let check = await loadFile()
//         console.log(check);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// checkMate();
// loadFile().then((value) => console.log(value))
//          .catch(error => console.log(error));

//ES6 MODULE

//DOM
// console.dir(document);
// console.log(document.URL)
// document.title = "Yes"

let model = document.getElementsByName("set1");
model.forEach(fruits => {
    if (fruits.checked) {
        console.log(fruits.value)
    }
})
let vegetable = document.getElementsByTagName("li");
vegetable[2].style.background = "green"

let ok = document.getElementsByClassName("yes")
ok[0].style.background = "blue"
vegetable[2].style.background = "green"
let elements = document.querySelectorAll("li");
elements.forEach(element => {
    element.style.background = "yellow"
})

let seting = document.querySelector("#set1");
let parent = seting.parentElement;
parent.style.backgroundColor = "blue";