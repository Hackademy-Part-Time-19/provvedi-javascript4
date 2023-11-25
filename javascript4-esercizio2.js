let listaProdotti = [
    {
        id: 1,
        Nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        Nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        Nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        Nome: "Lampadari",
        prezzo: 600,
    },
    
]

//lista ordinata secondo il nome

 function ordinealfabetico(prodotto1,prodotto2){
   
    let nome1=prodotto1.Nome.toLowerCase()
    let nome2=prodotto2.Nome.toLowerCase()
    if(nome1>nome2){
        return 1
    }else if(nome1<nome2){
        return -1
    }else{
        return 0
    }
    
    
    
    

}

let listaordinata=listaProdotti.sort(ordinealfabetico)
console.log(listaordinata)




   
