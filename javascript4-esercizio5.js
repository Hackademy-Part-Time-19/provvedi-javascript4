

function checkPalindroma(stringadacontrollare){
    let palindroma= true;

    let stringasenzapunteggiatura = stringadacontrollare.replace(/\W/g, "")
    let stringasplit = stringasenzapunteggiatura.split("")
    let stringareverse = stringasplit.reverse()
    

    for(let i=0;i < stringareverse.length; i++){
        if(stringasenzapunteggiatura[i] != stringareverse[i]){
            palindroma = false
        }
        
    }
   
     return palindroma


    
}


console.log(checkPalindroma("i topi non avevano nipoti"))
console.log(checkPalindroma("ciao ragazzi"))
