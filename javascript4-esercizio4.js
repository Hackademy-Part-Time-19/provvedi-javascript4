//esercizio split

let url= "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"

let split= url.split("?")

console.log(split)

let split2=split[1]

console.log(split2)