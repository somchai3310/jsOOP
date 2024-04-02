// การสร้าง method

class User{    
    name = 'Avatar'
    password = 1111
    constructor(n,p){
        this.name = n
        this.password = p
        this.showDetail(1) //ใช้ methodใน class
    }
    // method
    showDetail(inClass){
        console.log(`ชื่อผู้ใช้ ${this.name} รหัส ${this.password} --> ${inClass? 'ใน': 'นอก'}class`);
    }
}

// object
const user1 = new User('somchai',1234)
user1.showDetail() //ใช้ methodนอก class

const user2 = new User('mustofa',8888)