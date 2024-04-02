// protected access modifier

class User {
    _name; //protected
    #password;
    constructor(n, p) {
      this._name = n;
      this.#password = p;
    }
    showDetail() {
      console.log(`ชื่อผู้ใช้ ${this._name} รหัส ${this.#password}`);
    }
    // setter
    set Name(newName) {
      this._name = newName;
    }
    set Password(newPassword) {
      this.#password = newPassword;
    }
    // getter
    get Name() {
      return this._name;
    }
    get Password() {
      return this.#password;
    }
  }
  
  class Teacher extends User {
    #course
    constructor(name,password,course){
        super(name,password) //ใช้ constructor แม่
        this.#course = course
    }
    showDetail(){
        console.log(`Teacher ${this._name} teac ${this.#course}`);
    }
  }
  class Student extends User {
    #score
    constructor(name,password,score){
        super(name,password) //ใช้ constructor แม่
        this.#score = score
    }
    showDetail(){
        console.log(`Student ${this._name} teac ${this.#score}`);
    }
  }
  
  const user0 = new User('user001',10203)
  const user1 = new Teacher('somsri',1111,'Coding')
  const user11 = new Teacher('soso',1111,'Coding')
  const user2 = new Student('somchai',2222,100)
  const user22 = new Student('mustofa',2222,98)

  user0.showDetail()
  user1.showDetail()
  user11.showDetail()
  user2.showDetail()
  user22.showDetail()
