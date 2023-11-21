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

let listaordinatanome= listaProdotti.sort(function(prodotto1, prodotto2){
    return prodotto1.Nome - prodotto2.Nome
})


    console.log(listaordinatanome)
