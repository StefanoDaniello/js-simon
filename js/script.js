// 
// Descrizione:
// Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il un input ( o meglio caselle di input).
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Buon pomeriggio e buon lavoro !!!! :muscolo:
// 


// 
// creo un array 
// stampo 5 numeri casuali non duplicati 
// e li inserisco in un box per 30 secondi
// prendi i numeri dell' utente 
// li metto in un array 
// stampo i numeri uguali nell' array dell' utente e nel primo array
// in un altro  e a seconda della lunghezza di esso uscirà lo score
// */




/* da rifare sabato  o domanica cose da fare:
*/

const userNumber=document.getElementById('userNumber').value


const button=document.querySelector('.btn-success');
button.addEventListener('click', function(){  
    randomnumber()
    avvia()
},{once:true});  
 

const verifica=document.querySelector('.btn-info');
verifica.addEventListener('click', function(){  
    user()       
}); 




function randomnumber(){
    let number=[]
    const stcontainer=document.querySelector('.st-concatiner')
    while(number.length<5){ 
        let random=getRndInteger(1,100)
        if(!number.includes(random)){
            number.push(random)
            let boxes=document.createElement('div')
            boxes.classList.add('box')
            boxes.innerHTML=`${random}`
            stcontainer.append(boxes)     
            setTimeout(function() {   
                boxes.style.display = "none";         
            }, 30000); // Nasconde i numeri dopo 30 secondi    
        }
    } 
    return number

}

function user(){
    const userNumber=parseInt(document.getElementById('userNumber').value);
    document.getElementById('userNumber').value=''
    let number=randomnumber()
    let userarray=[]
    let correctNumber=[]
    userarray.push(userNumber)
    for(i=0;i<5;i++){
        if(number.includes(userarray)){
            correctNumber.push(userNumber)
        }
    }
    console.log(correctNumber)
}




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function avvia(){
    //prende, come intero, il numero inserito dall'utente nella casella
    let temporimasto = 30;
    // parseInt(document.getElementById("input1").value);
    //avvio una funzione mytimer che si esegue ogni 1000 millisecondi
    let mytimer = setInterval(function() {
    //decrementa il tempo rimasto di 1
    temporimasto--;
    //aggiorna il valore nella sezione HTML
    document.getElementById("contatore").innerHTML = temporimasto;
    //se il tempo è finito scrivo Fatto! e faccio terminare la funzione
    if (temporimasto <= 0) {
    document.getElementById("contatore").innerHTML = "Indovina!";
    clearInterval(mytimer);
    }
    //altrimenti quando saranno passati 1000 ms, sarà fatta una nuova esecuzione della funzione
    //e si otterrà in questo modo l'effetto countdown
},1000);
}




