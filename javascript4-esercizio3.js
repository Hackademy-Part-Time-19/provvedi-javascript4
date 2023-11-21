
// esercizio filtro prezzo



let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
    
]




let p=250

function filtraPrezzo(listaProdotti){
    let listafiltrata=[]

    for(let i=0;i<listaProdotti.lenght;i++){
        if(listaProdotti[i].prezzo>p){
            listafiltrata.push(listaProdotti[i])
        }
    }
  return listafiltrata
}



console.log(listafiltrata)

//abbreviazione filter


let listafilter=listaProdotti.filter((listaProdotti)=>listaProdotti.prezzo>250)

console.log(listafilter)