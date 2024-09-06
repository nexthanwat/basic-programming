//for loop

// for (let i = 0; i <= 5; i++) { //let i = 0; คือ เริ่มจากเลข 0 ใส่ไว้ใน i จบด้วย ; i <= 5; คือ ถ้า i น้อยกว่าหรือเท่ากับ 5 ให้มัน i++ คือ i บวกเพิ่มไปจนกว่าจะ === 5
//     console.log(i)
// }


// let sum: number = 0 // สร้าง sum เพื่อรอรับเลขที่บวก

//i++ = i บวกเพิ่มทีละ 1
// for (let i = 1; i <= 365; i++) { // สร้าง loop ในการบวกเลขไปเรื่อยๆ จนถึง 1000 ครั้ง 
//     sum = sum + i // เอาตัวเองมาบวก 1
// }


// console.log('total : ' , sum)

//while loop

// let sum: number = 1

// for (let i = 1; i <= 365; i++) {
//     sum = sum * i
// }
//  console.log(sum)


// let i: number = 1
// let sum: number = 0 

// while (i <= 365) {
//     sum = sum + i
//     i++
// }

// console.log(sum)


// let i: number = 1
// let sum: number = 0 

// do {
//     sum = sum + i
//     i++
// }  while (i <= 365)

// console.log(sum)

// let sum: number = 0
// for (let i = 1; i <= 365; i++) (
//     sum = sum + i
// )

// console.log (sum)


// let i: number = 1
// let sum: number = 0
// //for (let j = 1; j < 10; j++) { loop ที่โดนกวนจากข้างนอกได้
// //     i = i * 5
// // }


// while (i <= 365) {
//     sum = sum + i
//     i++
// }

// console.log(sum)

// let sum: number = 0  infinity Loop ห้ามทำเครื่องเอ๋อได้
// let isBeark: boolean = false 

// while (true){  
//     console.log('โสด')
//     if (isBeark) {
//         break
//     }

// }

// let sum: number = 0    กำหนดLoop 3 รอบ 
// let isBeark: boolean = false 
// let row: number = 0

// while (true){
//     console.log('โสด')
//     row++
//     if (row === 3) {
//         break
//     }
// }


// let car1: string = 'Honda'
// let car2: string = 'Yamaha'
// let car3: string = 'Toyota'
// let car4: String = 'Suzuki'

// const car: string[] = ['Honda', 'Yamaha', 'Toyota', 'Suzuki']

// // const num: number[] = [1,2,3,4,5]
// // const bool: boolean[] = [true,false,false,true]

// // car[1] = 'Mazda' const แบบนี้สามารถเปลี่ยนได้เพราะเป็น Array
// console.log(car[1])
// // car = ['Honda', 'Mazda', 'Toyota', 'Suzuki'] เปลี่ยนโครงสร้างแบบนี้ไม่ได้

// const car: string[] = ['Honda', 'Yamaha', 'Toyota', 'Suzuki']
// for (let i = 0; i < 4; i++){
//     console.log(car[i])
// }
// let i: number = 0
// while (i < 4){
//     console.log(car[i])
//     i++
// }
// for (let i = 0; i < car.length; i++){
//     console.log(car[i])
// }

// const car: string[] = ['Honda', 'Yamaha', 'Toyota', 'Suzuki', 'Mazda']
// for (let i = 0; i < car.length; i++) {
//     if (car[i] === 'Yamaha') {
//         console.log('รถซื้อแกง จะแรงได้ไง')
//     }
// }

// const car: string[] = ['Honda', 'Yamaha', 'Toyota', 'Suzuki', 'Mazda']

// car.forEach(function(c){
//     console.log(c)
// })

const car: string[] = ['Honda', 'Yamaha', 'Toyota', 'Suzuki', 'Mazda']
for (let i = 0; i < car.length; i++) {
    if (car[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ไง')
    }
}

const car: string[] = ['Honda', 'Yamaha', 'Toyota', 'Suzuki', 'Mazda']

car.forEach(function(c){
    console.log(c)
})