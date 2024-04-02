// inheritance
// การสืบทอด
// เอาระบบเดิมที่มีอยู่แล้วมาพัฒนาต่อ

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
//   constructor(){
//     console.log('I am a teacher');
//   }
}
class Student extends User {
  
}

const user1 = new User("somchai", 1234);
const user2 = new Teacher()
user2.Name = 'teacher1'
user2.Password = '!1234$'

user2.showDetail()

const user3 = new Student('s.Mustofa',2244)
user3.showDetail()