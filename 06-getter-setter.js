// getter setter

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
    setName(newName){
        this.#name = newName
    }
    setPassword(newPassword){
        this.#password = newPassword
    }
    // getter
    getName(){
        return this.#name
    }
    getPassword(){
        return this.#password
    }
}

const user1 = new User('somchai',1234)

user1.setName('mustofa')
user1.setPassword('!asdf*&df889')

console.log(user1.getName());
console.log(user1.getPassword());