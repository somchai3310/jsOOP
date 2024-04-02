// Encapsulation

class User{ 
    // privete  #  
    name 
    #password 
    constructor(n,p){
        this.name = n
        this.#password = p
    }
    // method
    // #showDetail() private function
    showDetail(){
        // this.#password = 9999
        console.log(`ชื่อผู้ใช้ ${this.name} รหัส ${this.#password}`);
    }
}

// object
const user1 = new User('somchai',1234)

user1.name= 'hacker'
user1.password = 55555
user1.showDetail() 
