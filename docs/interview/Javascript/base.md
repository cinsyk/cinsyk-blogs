# 基础
> 以面试题作为驱动与指引，学习其中的所包含的知识点
> 题目来源：https://github.com/lydiahallie/javascript-questions

1. 以下代码会输出什么？
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
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： undefined 和 ReferenceError
知识点： 变量提升 / 暂时性死区
扩展问题： 使用var let const function 定义的变量赋值过程有哪些不同？
</code>
</pre>
</details>

---
2. 以下代码会输出什么？
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
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 3 3 3 和 0 1 2
知识点： 事件执行机制 / 作用域
</code>
</pre>
</details>

---
3. 以下代码会输出什么？
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
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 20 和 NAN
知识点： this的指向 / 箭头函数的特性
</code>
</pre>
</details>

---
4. 以下代码会输出什么？
```javascript
+true;
!"Lydia";
/**
 * 第一行输出：1
 * 第二行输出：false
*/
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 1 和 false
知识点： 类型转换
</code>
</pre>
</details>

---
5.以下哪个选项是不对的？
```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```
* A: mouse.bird.size
* B: mouse[bird.size]
* C: mouse[bird["size"]]
* D: 以上全对

<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： A
知识点： 对象取值
</code>
</pre>
</details>

---
6. 以下代码会输出什么？
```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： Hello
知识点： 引用传递及值传递
</code>
</pre>
</details>

---
7. 以下代码会输出什么？
```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： true false false
知识点： 基本类型 / 隐式类型转换
</code>
</pre>
</details>

---
8. 以下代码会输出什么？
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
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： TypeError
知识点： class的静态方法
</code>
</pre>
</details>

---
9. 以下代码会输出什么？
```javascript
let greeting;
greetign = {}; 
console.log(greetign);
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： {}
知识点：全局变量
</code>
</pre>
</details>

---
10. 当我们这么做的时候会发生什么？
```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： bark上会多一个animal属性。
知识点： 数据类型
</code>
</pre>
</details>

---
<!-- templete -->
1.  以下代码会输出什么？
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
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： TypeError
知识点： 原型及原型链
</code>
</pre>
</details>

---
12. 以下代码会输出什么？
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
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： Person { firstName: 'Lydia',lastName: 'Hallie' } 和 undefined
知识点： new关键字
</code>
</pre>
</details>

---
13. 事件传播的三个阶段是什么？
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 捕获 => 目标 => 冒泡
知识点： 事件传播机制
</code>
</pre>
</details>

---
14. 所有对象都有原型.
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 错
知识点： 基本类型
</code>
</pre>
</details>

---
15. 以下代码会输出什么？
```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 3
知识点： 隐式类型转换
</code>
</pre>
</details>

---
16. 以下代码会输出什么？
```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 0 2 2
知识点： 一元运算符
</code>
</pre>
</details>

---
17. 以下代码会输出什么？
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
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： ['',' is ',' years old'] 'Lydia' 21
知识点： 函数传参 / 模版字符串解析
解析：查阅规范可知，模版字符串本身就是一个函数，它返回
</code>
</pre>
</details>

---
18.  以下代码会输出什么？
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
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： Hmm.. You don't have an age I guess
知识点： 比较运算符 / 类型转换 / 引用传递
</code>
</pre>
</details>

---
19. 以下代码会输出什么？
```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： object
知识点： 类型检查 / 数据类型 / 扩展运算符
</code>
</pre>
</details>

---
20. 以下代码会输出什么？
```javascript
function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge();
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： ReferenceError
知识点： 严格模式 / Error类型
</code>
</pre>
</details>

---
21. 以下代码会输出什么？
```javascript
const sum = eval('10*10+5');
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 105
知识点： eval
</code>
</pre>
</details>

---
22.  cool_secret 有效期是多久？
```javascript
sessionStorage.setItem('cool_secret', 123);
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 用户关闭选项卡时
知识点： session
</code>
</pre>
</details>

---
23. 以下代码会输出什么？
```javascript
var num = 8;
var num = 10;

console.log(num);
```
<details>
<summary>点此查看答案与解析</summary>
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

---
24. 以下代码会输出什么？
```javascript
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
```
<details>
<summary>点此查看答案与解析</summary>
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
25. 以下代码会输出什么？
```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： { a: 'three', b: 'two' }
知识点： 数据类型
</code>
</pre>
</details>

---
26. JavaScript全局执行上下文为你创建了两个东西:全局对象和this关键字。

<details>
<summary>点此查看答案与解析</summary>
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

---
27. 以下代码会输出什么？
```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 1 2 4
知识点： continue
</code>
</pre>
</details>

---
28. 以下代码会输出什么？
```javascript
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

name.giveLydiaPizza();
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 'Just give Lydia pizza already!'
知识点： 数据类型
</code>
</pre>
</details>

---
29. 以下代码会输出什么？
```javascript
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```
<details>
<summary>点此查看答案与解析</summary>
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
30. 以下代码会输出什么？
```javascript
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 
知识点： 
</code>
</pre>
</details>

---
31.  点击按钮时，event.target是什么
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
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： button
知识点： 事件触发机制
</code>
</pre>
</details>

---
32. 点击以下代码片段时，会输出什么？
```javascript
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： p div
知识点： 事件触发机制
</code>
</pre>
</details>

---
33. 以下代码会输出什么？
```javascript
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： Lydia is 21 function
知识点： this的指向
解析：call返回函数的运行结果，bind只绑定函数，不会执行。
</code>
</pre>
</details>

---
34. 以下代码会输出什么？
```javascript
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： number
知识点： 自执行函数 / 匿名函数
解析：括号内是一个匿名函数，函数后面加上括号，就是一个自执行函数（IIFE）
</code>
</pre>
</details>

---
35. 以下哪些值是false？
```javascript
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 0 '' undefined
知识点： new / 隐式类型转换
</code>
</pre>
</details>

---
36. 以下代码会输出什么？
```javascript
console.log(typeof typeof 1);
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： string
知识点： typeof
解析：typeof 1 返回值为 'number'， typeof 'number' 返回值为 'string'
</code>
</pre>
</details>

---

<!-- templete -->
1. 以下代码会输出什么？
```javascript
```
<details>
<summary>点此查看答案与解析</summary>
<pre>
<code>
答案： 
知识点： 
</code>
</pre>
</details>

---

