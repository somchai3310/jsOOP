// accessor(get,set)
// setName -> set Name
// getName -> get Name
// ตอนเรียกใช้ get หรือ set ให้ใช้ตัวแรกเป็นพิมใหญ่
// ใช้get -> user1.Name
// ใช้set -> user1.Name = "name"
class User{ 
    #name 
    #password 
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
}

const user1 = new User('somchai',1234)
console.log('get before set ->',user1.Name);

// การเรียกใช้ set Name
user1.Name = 'mustofa'

// การเรียกใช้ get Name
console.log(user1.Name);