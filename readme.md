JS OOP

องค์ประกอบ
class ต้นแบบของวัตถุ
object สิ่งที่ถูกสร้างจาก class

class animal -> obj = ['สิงโต', 'ช้าง' ,'วัว']

class car -> obj = รถเก๋ง รถบบรทุก รถสปอร์ต

องค์ประกอบของวัตถุ (Object)
คุณลักษณะ (Property) คือ สิ่งที่บ่งบอกลักษณะทั่วไปของวัตถุ หรือข้อมูลประจำตัวของวัตถุ
พฤติกรรม (Method) คือ พฤติกรรมทั่วไปของวัตถุที่สามารถ
กระทำได้

ทำให้ 2 obj สื่อสารกันได้

procedural programming

สรุปการเขียนโปรแกรมเชิงวัตถุ
Class - ต้นแบบของวัตถุ
Object - สิ่งที่ถูกสร้างขึ้นมาจาก Class ประกอบด้วย
- คุณลักษณะ (Property)
- พฤติกรรม (Method)
คุณสมบัติของการเขียนโปรแกรมเชิงวัตถุ
- การห่อหุ้ม (Encapsulation)
- การสืบทอด (Inheritance)
- การพ้องรูป (POLYMORPHISM)

การสร้าง class 
class class_name {
    property & Method
}
class User{
    property & Method
}

การสร้าง object
Eg.
const obj_name = new class_name();

การเรียกใช้งาน
เรียกใน class
this.propertyName
เรียกนอก class
obj_name.propertyName

การตั้งชื่อ
1. ชื่อ class ตัวแรก พิมใหญ่ MyClass , User
2. ชื่อ object เป็นพิมเล็กทั้งหมด
3. Property กำหนดเป็นพิมเล็ก name, age


Constructor
เป็นฟังก์ชั่นพิเศษที่จะถูกเรียกใช้งาน เมื่อสร้างวัตถุขึ้นมาและ
จะทำงานอัตโนมัติในตอนเริ่มต้นเพียงครั้งเดียว
โครงสร้าง Constructor
constructor([parameter]){
}

ประเภทของ Constructor
Default Constructor คือ Constructor เริ่มต้นที่มี
อยู่ในทุกคลาส
Parameterized Constructor คือ Constructor ที่
สามารถส่งพารามิเตอร์เข้าไปทํางานได้

keyword  this

การสร้าง method

การห่อหุ้ม Encapsulation
ซ่อนรายละเอียดการทำงาน และข้อมูลภายใน
ไม่ให้ข้างนอกมองเห็นได้
เปลี่ยนแปลงแก้ไขข้อมูลภายในไม่ได้
สร้างความปลอดภัยให้แก่ข้อมูล
จะเข้าถึงได้จากผู้มีสิทธิ์เท่านั้น
เช่น บัตรปชช

Access Modifier
Pubic
protected -> _
private -> #
Eg. facbook 
post pubic
protected friend
private onlyme

โครงสร้าง
class className{
    modifier property
}

getter setter method

accessor(get,set)
setName -> set Name
getName -> get Name
ตอนเรียกใช้ get หรือ set ให้ใช้ตัวแรกเป็นพิมใหญ่
ใช้get -> user1.Name
ใช้set -> user1.Name = "name"

static
static property
เรียกใช้โดยตรงไม่ต้องผ่าน obj
โครงสร้าง
static property = value
การเรียกใช้
className.property

static method
โครงสร้าง
static mehod_name (parameter){
    //statement
}
การเรียกใช้
className.method()

การสืบทอดคุณสมบัติ inheritance
ทำให้ reuse code ได้ง่าย

superclass -> subclass
user -> teacher,student

class SuperClass{
    //property & method
}

class SubClass extends SuperClass{
    //property & method
}
Eg.
class User{

}
class Thecher extends User{
    
}
class Student extends User{

}

keyword super
class แม่มาใช้ใน class ลูก

การพ้อนรูป polymorphism
การตอบสนองต่อสิ่งเดียวกันด้วยวิธีต่างกัน

Overriding Method
คือ เมธอดของคลาสลูก ที่มีชื่อเหมือนกับเมธอดของ
คลาสแม่ (เป็นผลมาจากคุณสมบัติ 00 คือ inheritance)
แต่มีกระบวนการทํางานด้านในแตกต่างกัน

protected
ทำให้ใช้งานระหว่าง class แม่ ลูก ได้