/***
 * 面向对象DEMO - 继承
 * - People是父类，公共的，不仅仅服务于Student类
 * - 继承可以公共方法抽离出来，提高复用，减少冗余
 */

class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
  speak() {
    console.log(`My name is ${this.name} , age ${this.age}`)
  }
}

class Student extends People{
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }

  study() {
    console.log(`${this.name} study`)
  }
}

let xiaoming = new Student('xiaoming', 18, 'No1')
xiaoming.eat()
xiaoming.speak()
xiaoming.study()
console.log(xiaoming.number)


/***
 * 面向对象DEMO - 封装（TypeScript实现）
 *
 * - public 完全开放
 * - protected 只对子类开放
 * - private 只对自己开放
 *
 * 减少耦合，不该外露的不外露
 * 利于数据、接口的权限管理
 * ES6目前不支持，一般认为_开头的属性是private
 *
 */

// TypeScript预览：http://www.typescriptlang.org/play/
// class People {
//   name
//   age
//   protected weight
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//     this.weight = 120
//   }
//   eat() {
//     console.log(`${this.name} eat something`)
//   }
//   speak() {
//     console.log(`My name is ${this.name} , age ${this.age}`)
//   }
// }
//
// class Student extends People{
//   number
//   private girlfriend
//   constructor(name, age, number) {
//     super(name, age)
//     this.number = number
//     this.girlfriend = 'xiaoli'
//   }
//
//   getWeight() {
//     console.log(`${this.weight}`)
//   }
// }
//
// let xiaoming = new Student('xiaoming', 20, 'No2')
//
// xiaoming.getWeight()
// console.log(xiaoming.weight) // 无法访问保护属性，只能子类访问
// console.log(xiaoming.girlfriend()) // 无法访问私有属性，只能自己访问


/***
 * 面向对象DEMO - 多态
 * - 保持子类的开发性和灵活性
 * - 面向接口编程
 * - JS引用极少，了解即可
 */

// class People {
//   constructor(name) {
//     this.name = name
//   }
//   saySomething() {
//     console.log(`I am People, My name is ${this.name}`)
//   }
// }
// class A extends People {
//   constructor(name) {
//     super(name)
//   }
//   saySomething() {
//     console.log('I am A')
//   }
// }
// class B extends People {
//   constructor(name) {
//     super(name)
//   }
//   saySomething() {
//     console.log('I am B')
//   }
// }
// let a = new A('A')
// a.saySomething()
//
// let b = new B('B')
// b.saySomething()