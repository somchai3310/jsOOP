// static 
// static จะทำงานได้กับ static ได้เท่านั้น
class User{ 
    #name 
    #password 
    static type = 'ผู้ใช้งานระบบ'
    static database=[]
    database1=[]
    constructor(n,p){
        this.#name = n
        this.#password = p
    }
    showDetail(){
        console.log(`ชื่อผู้ใช้ ${this.#name} รหัส ${this.#password}`);
    }
    // setter
    set Name(newName){
        this.#name = newName
    }
    set Password(newPassword){
        this.#password = newPassword
    }
    // getter
    get Name(){
        return this.#name
    }
    get Password(){
        return this.#password
    }
    static showType(){
        console.log('ฉันเป็นผู้ใช้งานระบบ');
    }
    static addUser(newUser){
        this.database.push(newUser)
    }
    static addUser1(newUser){
        this.database.push(newUser)
    }
}

const user1 = new User('somchai',1234)
const user2 = new User('mustofa',9999)

console.log(User.type);
User.showType()

// Math
// ค่า pi เก็บไว้ใน class Math
console.log(Math.PI);
console.log(Math.random());
console.log(Math.max(10,20,30));

// เก็บข้อมูล user
User.addUser(user1)
User.addUser(user2)

// แสดงข้อมูล
console.log(User.database);
User.database.forEach(e => {
    e.showDetail()
});

for(user of User.database){
    user.showDetail()
}