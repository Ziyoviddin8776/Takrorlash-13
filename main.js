let html=`<h1>Salom Dunyo</h1>`

document.querySelector(".container").insertAdjacentHTML("afterbegin",html)

document.querySelector(".btn").addEventListener("click",function (e){
    e.preventDefault();
    console.log("Salom Dunyo")
})

document.querySelector(".container").innerHTML="Hello World"


let arr=[1,2,3,4,5,6,7,8]
let hisobla=arr.filter(function (val){
    return val>4
}).map(function (val){
    return val*2
}).reduce(function (yig,val){
    return yig+val
},0)

console.log(hisobla)


let array=[
    {
        firstName:"Jalol",
        age:21
    },
    {
        firstName: "Mijji",
        age:19
    },
    {
        firstName: "Komol",
        age:19
    }
]

let index=array.findIndex(function (val){
    return val.firstName==="Jalol"
})

console.log(index)

let arrSomeAndEvery=[10,20,30,40,50,60];
let atSome=arrSomeAndEvery.some(val=>
    val>40
)
console.log(atSome)

let atEvery=arrSomeAndEvery.every(val=>val>40)
console.log(atEvery)


let arr1=[10,20,[30,40],50,60]
let arr2=arr1.flat()
console.log(arr1)
console.log(arr2)

let arr3=[10,20,[30,40,[50,60],70],80,90]
let arr4=arr3.flat(2)
console.log(arr3)
console.log(arr4)

