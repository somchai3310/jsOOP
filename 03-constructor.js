// สร้าง class 
class User{
    //property
    name = 'Avatar'
    password = 1111
    // default constructor
    // constructor(){
    //     console.log('เรียกใช้งาน constructor')
    // }
    // parameter constructor
    constructor(n,p){
        console.log('เรียกใช้งาน parameter constructor')
        this.name = n
        this.password = p
    }
}

// สร้าง object
const user1 = new User()
const user2 = new User('somchi',123)  //ใช้กับ parameter constructor
// const user3 = new User()

 console.log('user1 ',user1.name);
 console.log('user2 ',user2.name);