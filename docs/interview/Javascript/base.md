# 开胃菜 - 基础面试题 (47道)
> 以面试题作为驱动与指引，学习其中的所包含的知识点
> <br>题目来源：[javascript-questions](https://github.com/lydiahallie/javascript-questions)

## 常规知识

```javascript
function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge();
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： ReferenceError
知识点： 严格模式
</code>
</pre>
</details>

--- 
```javascript
const sum = eval('10*10+5');
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 105
知识点： eval
</code>
</pre>
</details>

---
```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 1 2 4
知识点： continue
</code>
</pre>
</details>

---
<details>
<summary>JavaScript中的所有内容都是？点击查看答案</summary>
<pre>
<code>
答案： 基本类型和对象
</code>
</pre>
</details>

## 函数

```javascript
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： number
知识点： 自执行函数 / 匿名函数
解析：括号内是一个匿名函数，函数后面加上括号，就是一个自执行函数（IIFE）
</code>
</pre>
</details>

## 数据类型

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```
以下哪个选项是不对的？
* A: mouse.bird.size
* B: mouse[bird.size]
* C: mouse[bird["size"]]
* D: 以上全对

<details>
<summary>点击查看答案</summary>
<pre>
<code>
答案： A
解析：mouse.bird是undefined，是不存在size属性的。
</code>
</pre>
</details>

---
```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： Hello
知识点： 引用传递及值传递
</code>
</pre>
</details>

---
```javascript
+true;
!"Lydia";
/**
 * 第一行输出：1
 * 第二行输出：false
*/
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 1 和 false
知识点： 类型转换
</code>
</pre>
</details>

---
```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： true false false
知识点： 基本类型 / 隐式类型转换
</code>
</pre>
</details>

---
```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```
<details>
<summary>当我们这么做的时候会发生什么？点击查看答案</summary>
<pre>
<code>
答案： bark上会多一个animal属性。
知识点： 数据类型
</code>
</pre>
</details>

---
<details>
<summary>所有对象都有原型.对还是错？点击查看答案</summary>
<pre>
<code>
答案： 错
知识点： 数据类型
解析：基本类型的原型为null
</code>
</pre>
</details>

---
```javascript
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： true true false true
知识点： 数据类型
解析： 
对象键名都是以String的类型存储的，而Set保存的值是会保存值的类型。
所以在set里 1 和 '1' 是两个数据，而对象中 1 和 '1' 是同一个键。
</code>
</pre>
</details>

---
```javascript
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 456
知识点： 隐式类型转换
解析：对象的键名会被转换为字符串，对象转换为字符串会转换为[object object]。
代码中的两次操作相当于对同一个键进行赋值，因此只保留最后一个值。
</code>
</pre>
</details>

---
```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： { a: 'three', b: 'two' }
知识点： 数据类型
</code>
</pre>
</details>

---
```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 3
知识点： 隐式类型转换
</code>
</pre>
</details>

---
```javascript
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
```
<details>
<summary>以上哪些值是false？点击查看答案</summary>
<pre>
<code>
答案： 0 '' undefined
知识点： new / 隐式类型转换
</code>
</pre>
</details>

---
```javascript
console.log(typeof typeof 1);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： string
解析：typeof 1 返回值为 'number'， typeof 'number' 返回值为 'string'
</code>
</pre>
</details>

---
```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： [1,2,3,empty * 7,11]
知识点： 数据类型
解析：给超过数组长度的位置赋值时，数组会在中间部分自动填充empty，实际值等同于undefined。
</code>
</pre>
</details>

---
```javascript
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);
```
<details>
<summary>以上代码会会输出什么？点击查看答案</summary>
<pre>
<code>
答案： [{ name: 'Lydia' }]
解析：使用变量存储对象时，实际该变量指向的是对象的引用地址。
当我们改变变量存储的值时，并没有改变该对象。
</code>
</pre>
</details>

## 执行上下文

<details>
<summary>JavaScript全局执行上下文为你创建了两个东西:全局对象和this关键字。对还是错？点击查看答案</summary>
<pre>
<code>
答案： 对
知识点： 执行上下文
解析：执行上下文即execution context，通常称作执行环境，简称为EC。
红宝书中这么解释执行环境：执行环境定义了变量或函数有权访问的其他数据，决定了它们各自的行为。
执行环境定义的变量或其他数据，是保存在 variable object（OC）里面的，所以每一个OC代表了不同的执行环境。
执行环境中所有代码执行完毕后，该环境会被销毁。
</code>
</pre>
</details>

### 变量
```javascript
function sayHi() {
  console.log(name); 
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： undefined 和 ReferenceError
知识点： 变量提升 / 暂时性死区
扩展问题： 使用var let const function 定义的变量赋值过程有哪些不同？
</code>
</pre>
</details>

---
```javascript
let greeting;
greetign = {}; 
console.log(greetign);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： {}
知识点：全局变量
</code>
</pre>
</details>

---
```javascript
var num = 8;
var num = 10;

console.log(num);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 10
知识点： 变量
解析：
var定义的变量可以重复定义，重复定义会重新赋值，不会产生额外的变量。
let和const不可被重复定义，let可以重新赋值，const不可被重新赋值。
</code>
</pre>
</details>

### this

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 20 和 NAN
知识点： this的指向 / 箭头函数的特性
</code>
</pre>
</details>

---
```javascript
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： Lydia is 21 function
知识点： this的指向
解析：call返回函数的运行结果，bind只绑定函数，不会执行。
</code>
</pre>
</details>

### 作用域（链）

```javascript
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 1 undefined 2
知识点： 作用域链
解析：使用变量时，会先在当前上下文的变量对象中查找，如果找不到则继续往上找。
</code>
</pre>
</details>

## 原型及原型链

```javascript
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

name.giveLydiaPizza();
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 'Just give Lydia pizza already!'
知识点： 原型和原型链
</code>
</pre>
</details>

---
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： TypeError
知识点： 原型及原型链
</code>
</pre>
</details>


## new

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： Person { firstName: 'Lydia',lastName: 'Hallie' } 和 undefined
知识点： new关键字
</code>
</pre>
</details>


## 运算符

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 0 2 2
知识点： 一元运算符
</code>
</pre>
</details>

---  
```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： Hmm.. You don't have an age I guess
知识点： 比较运算符 / 类型转换 / 引用传递
</code>
</pre>
</details>

---
```javascript
!!null;
!!'';
!!1;
```
<details>
<summary>以上代码会会输出什么？点击查看答案</summary>
<pre>
<code>
答案： false false true
知识点：操作符
</code>
</pre>
</details>

## ES6

### 模版字符串
```javascript
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： ['',' is ',' years old'] 'Lydia' 21
知识点： 函数传参 / 模版字符串解析
解析：查阅规范可知，模版字符串本身就是一个函数，它返回
</code>
</pre>
</details>

### class
```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： TypeError
知识点： class的静态方法
</code>
</pre>
</details>

### 扩展运算符
```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： object
知识点： 类型检查 / 数据类型 / 扩展运算符
</code>
</pre>
</details>

---
```javascript
[...'Lydia'];
```
<details>
<summary>以上代码的返回是什么？点击查看答案</summary>
<pre>
<code>
答案： ['L','y','d','i','a']
知识点：扩展运算符
</code>
</pre>
</details>

## 浏览器

### 事件 

```javascript
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```
<details>
<summary>点击按钮时，event.target是什么？点击查看答案</summary>
<pre>
<code>
答案： button
</code>
</pre>
</details>

---
```javascript
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```
<details>
<summary>点击以上代码片段时，会输出什么？点击查看答案</summary>
<pre>
<code>
答案： p div
</code>
</pre>
</details>

---
<details>
<summary>事件传播的三个阶段是什么？点击查看答案</summary>
<pre>
<code>
答案： 捕获 => 目标 => 冒泡
</code>
</pre>
</details>

### 信息存储
```javascript
sessionStorage.setItem('cool_secret', 123);
```
<details>
<summary>cool_secret 有效期是多久？点击查看答案</summary>
<pre>
<code>
答案： 用户关闭选项卡时
知识点： session
</code>
</pre>
</details>




## 异步

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
/**
 * 第一个输出: 3 3 3
 * 第二个输出：0 1 2
*/
```
<details>
<summary>以上代码会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 3 3 3 和 0 1 2
知识点： 事件执行机制 / 作用域
</code>
</pre>
</details>

---
```javascript
setInterval(() => console.log('Hi'), 1000);
```
<details>
<summary>setInterval在浏览器中的返回是什么？点击查看答案</summary>
<pre>
<code>
答案： id
解析：setInterval函数执行后，会返回唯一id，将此id传入clearInterval函数中，可以取消定时器。
</code>
</pre>
</details>

---
```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```
<details>
<summary>以上代码会会输出什么？点击查看答案</summary>
<pre>
<code>
答案： 10 20
解析：在function关键字后面添加一个*符号，可以定义generator函数，又称*函数。
*函数的特点是可中断。
在函数内需要中断的地方使用yeild关键字，函数运行时遇到yeild时，等同于遇到return。
不同的是，return让整个函数都结束，*函数可以使用next()继续运行。
</code>
</pre>
</details>

---
```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```
<details>
<summary>以上代码会会输出什么？点击查看答案</summary>
<pre>
<code>
答案： two
解析：Promise的race方法是遇到任一执行完毕的promise即触发then函数。
</code>
</pre>
</details>

## 数组

```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
```
<details>
<summary>以上代码会会输出什么？点击查看答案</summary>
<pre>
<code>
答案： [1,2,0,1,2,3]
知识点：reduce 和 concat 的应用
</code>
</pre>
</details>


## 计算机基础

```javascript
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);
```
<details>
<summary>以上代码会会输出什么？点击查看答案</summary>
<pre>
<code>
答案： [{ name: 'Lydia' }]
解析：使用变量存储对象时，实际该变量指向的是对象的引用地址。
当我们改变变量存储的值时，并没有改变该对象。
</code>
</pre>
</details>

## 未分组
---
```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}
```
<details>
<summary>以上代码会会输出什么？点击查看答案</summary>
<pre>
<code>
答案： name age
</code>
</pre>
</details>
