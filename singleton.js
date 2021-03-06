/*created by 夏君
 *2016-8-23
 *单例实现类
 */
var Singleton = function(name) {
  // name 属性
  this.name = name;
  // instance 实例
  this.instance = null;
}

Singleton.prototype.getName = function(name) {
  console.log(this.name);
}

Singleton.getInstance = function(name) {
  if(!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
a.getName();            //  sven1 
b.getName();            //  sven1
console.log(a === b);   //  true
