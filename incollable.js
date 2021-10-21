document.body.style.background =  "#545349" ; 


// --------------------------- get type of game -------------------
let buttonIncollable = document.querySelector("#button2"); //get incollab
// ------------------------------------------------------------------


// --------------------  suppr for go in game -------------------
let supprRules = document.querySelector("#regles"); //get the all rules 
let supprTime = document.querySelector("#tmp"); //get the div "time"
//-----------------------------------------------------------------
let getB = document.querySelector("b");
let reglesClone = supprRules.cloneNode(true);

let newGame = document.createElement("div")
newGame.setAttribute("id" , "regles");


//console.log(buttonIncollable);


let timerElement = document.querySelector("#div1"); // for the clock





// let monProjet = document.querySelector('b');
// let space = document.createElement('br');

// timerElement.appendChild(space); 




// ------------------------------ Button PAUSE ----------------------
let buttonPause = document.createElement("button");
buttonPause.setAttribute("class" , "pause");
buttonPause.innerHTML = "PAUSE" ; 
// -------------------------------------------------------------------


let time = 20;


// ----------- go in incollable game on click ----------------
buttonIncollable.addEventListener("click" , goInGame);









function goInGame(){ // func delete rules


    console.log("bonjour");

    // ---- remove ------
    supprRules.remove();
    supprTime.remove();
    // ----------------


    afficherFunction(); // function for game 


    document.body.appendChild(buttonPause); // button Pause

    countDown(); // call the function countDown
    setInterval(countDown , 120);
    // timerElement.appendChild(space); 
    
}




function countDown(){ // timer for the game 
    let minutes = parseInt(time / 60, 10);
    let secondes = parseInt(time % 60 , 10);
    minutes = minutes < 10 ? "0" + minutes : minutes; // à expliquer
    secondes = secondes < 10 ? "0" + secondes : secondes; // à expliquer 
    timerElement.innerHTML = minutes + " : " + secondes; //à expliquer 
    // time --; 
    if (time <= 0){
        time == 0;
        
        //allQuizz.remove();
        divQuestions.remove();
        timerElement.remove();
        pUn.remove();
        pDeux.remove();
        pTrois.remove();
        pQuatre.remove();
        incrementationBonneRep.remove();
        incrementationMauvaiseRep.remove();
        getB.appendChild(reglesClone);
        
        
    }
    else{
        time = time- 0.1;
    }
    // time = time <= 0 ? 0 : time - 1;
   
}

