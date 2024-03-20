/*
Descrizione:
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
Buon pomeriggio e buon lavoro !!!! :muscolo:
*/


/*
creo un array 
stampo 5 numeri casuali non duplicati 
e li inserisco in un box per 30 secondi
prendi i numeri dell' utente 
li metto in un array 
stampo i numeri uguali nell' array dell' utente e nel primo array
in un altro  e a seconda della lunghezza di esso uscirà lo score
*/


const button=document.querySelector('.btn-success');
button.addEventListener('click', function(){
    // let number=randomnumber()
    setInterval(randomnumber(),{
        
    }
    ,30000);
},{once:true});  
 


function randomnumber(){
    let number=[]
    let boxes
    const stcontainer=document.querySelector('.st-concatiner')
    while(number.length<5){ 
        let random=getRndInteger(1,100)
        if(!number.includes(random)){
            number.push(random)
            boxes=document.createElement('div')
            boxes.classList.add('box')
            boxes.innerHTML=`${random}`
            stcontainer.append(boxes)
        }
    }

    return stcontainer
}














function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
