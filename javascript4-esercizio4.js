//esercizio split

let url= "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"

let split= url.split("?")

console.log(split)

let split2=split[1]

console.log(split2)

let split3=split2.split("&")
console.log(split3)

split3.forEach(element=>{
    let coppia=element.split("=")
    console.log(coppia[0] +":"+ coppia[1])
})