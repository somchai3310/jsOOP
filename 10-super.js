// keyword super

class User {
    #name;
    #password;
    constructor(n, p) {
      this.#name = n;
      this.#password = p;
    }
    showDetail() {
      console.log(`ชื่อผู้ใช้ ${this.#name} รหัส ${this.#password}`);
    }
    // setter
    set Name(newName) {
      this.#name = newName;
    }
    set Password(newPassword) {
      this.#password = newPassword;
    }
    // getter
    get Name() {
      return this.#name;
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
      console.log('I am a teacher');
    }
  }
  class Student extends User {
    #score
    constructor(name,password,score){
        super(name,password) //ใช้ constructor แม่
        this.#score = score
      console.log('I am a Student');
    }
  }
  
  const user1 = new Teacher('teacher1',1111,'coding')
  const user2 = new Student('student1',2222,100)

  user1.showDetail()
  user2.showDetail()
