class SuperClass {
  constructor(name, parent) {
    this.parent = parent || false;
    this.name = name;
  }
  add(folderObject) {
    this.contents.push(folderObject);
  }
  delete() {
    if (this.parent === false) {
      return false;
    }
    this.parent.contents = this.parent.contents.filter(folder => {
      return folder.name !== this.name;
    });
  }
  get() {
    return this;
  }
}

class File extends SuperClass {
  constructor(name, parent) {
    super(name, parent);
  }
}

class Folder extends SuperClass {
  constructor(name, parent) {
    super(name, parent);
    this.contents = [];
  }
}

var base = new Folder("base");
var child = new Folder("child", base);
var child2 = new Folder("child2", child);
base.add(child);
child.add(child2);
// console.log(child.get());
child2.delete();

console.log(base.get());
console.log(child.get());
console.log(child2.get());
console.log(base.contents);
