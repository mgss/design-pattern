class Parson {
  constructor(name) {
    this.name = name
  }
  getName(){
    return this.name
  }
}

let p = new Parson("测试代码")

alert(p.getName())