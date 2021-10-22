document.body.style.background =  "#545349" ; 

// -------------------------- VARIABLES GLOBALES -------------------


// --------------------------- get type of game -------------------

let buttonIncollable = document.querySelector("#button2"); //get incollab
// ------------------------------------------------------------------

// --------------------  suppr for go in game INCOLLABLE -------------------
let supprRules = document.querySelector("#regles"); //get the all rules 
let supprTime = document.querySelector("#tmp"); //get the div "time"
//-----------------------------------------------------------------

let timerElement = document.querySelector("#div1"); // for the clock



// ----------------------- button ABANDONNER -------------------
let buttonGiveUp = document.createElement("button");
buttonGiveUp.setAttribute("class" , "giveUp");
buttonGiveUp.innerHTML = "ABANDONNER";
//-----------------------------------------------------------------
// ------------------------------ Button PAUSE ----------------------
let buttonPause = document.createElement("button");
buttonPause.setAttribute("class" , "pause");
buttonPause.innerHTML = "PAUSE" ; 
// -------------------------------------------------------------------

// ------------------------------ Button REPRENDRE ----------------------
let buttonReprendre = document.createElement("button");
buttonReprendre.setAttribute("class" , "reprendre");
buttonReprendre.innerHTML = "REPRENDRE";
// -------------------------------------------------------------------
// ------------------------------ Button NEW GAME ----------------------
let buttonNewGame = document.createElement("button");
buttonNewGame.setAttribute("class" , "newgame");
buttonNewGame.innerHTML = "NEW GAME";
// -------------------------------------------------------------------
// ------------------------------ Button CONTINUErR ----------------------
let buttonContinuer = document.createElement("button");
buttonContinuer.setAttribute("class" , "continuer");
buttonContinuer.innerHTML = "CONTINUER";
// -------------------------------------------------------------------

// ---------- lenght of all questions in JSON --------
let max = allQuestions.length;

//time for game INCOLLABLE -------------
let time = 20;

let timerIncollable = true;

//---------------------VARIABLES JSON -------------------------

// --------- variable for random result ---------
let resultat;

// ------------- variables assigned thanks to resultat get in a randomFunction ---------
let allQuizz; 
let answerOne; 
let answerTwo ;
let answerThree; 
let answerFour;


// --------------- variables for count ++ or -- --------------------
let i = 1;
let j = 1;


//-----------------------------------------------------------
// ------------------ creating COUNT for good ANSWER or BAD ANSWER -------------------------

let incrementationBonneRep = document.createElement("div");
document.body.appendChild(incrementationBonneRep);

let incrementationMauvaiseRep = document.createElement("div");
document.body.appendChild(incrementationMauvaiseRep);



let divQuestions = document.querySelector("#div2"); // questions
//divQuestions.setAttribute("style", "bold");


let divAnswer = document.querySelector("#div3");

let divBreak = document.createElement("div");

//---------------- CREATE PARAGRAPH FOR ANSWERS ---------------------

let pUn = document.createElement("p");
let pDeux = document.createElement("p");
let pTrois = document.createElement("p");
let pQuatre = document.createElement("p");

// ------------------------------------------------------------



// ------------------ FUNCTION FOR GOING IN GAME INCOLLABLE  --------

buttonIncollable.addEventListener("click" , startingGame);


// ------ if user wants to give up or take a break -------------------

buttonPause.addEventListener("click" , pause);

buttonGiveUp.addEventListener("click" , giveUp);

buttonReprendre.addEventListener("click", reprendre)

buttonNewGame.addEventListener("click", newGame);

buttonContinuer.addEventListener("click", continuer);
//------------------------------------------------------------

// ------------ ALL add EventListener for function in GAME INCOLLABLE ----------------------

// Call for the next question
pUn.addEventListener("click" , nextQuestionB1);
pDeux.addEventListener("click", nextQuestionB2);
pTrois.addEventListener("click", nextQuestionB3);
pQuatre.addEventListener("click" , nextQuestionB4);


// --------------- call for changing colour of ANSWERS --------------
pUn.addEventListener("mouseover" , changeColour );
pDeux.addEventListener("mouseover", changeColour );
pTrois.addEventListener("mouseover", changeColour );
pQuatre.addEventListener("mouseover" , changeColour );

pUn.addEventListener("mouseout" , changeColourBack );
pDeux.addEventListener("mouseout", changeColourBack );
pTrois.addEventListener("mouseout", changeColourBack );
pQuatre.addEventListener("mouseout" , changeColourBack );

// -----------------------------------------------------

//------------------- FUNCTION CHANGE COLOR OF ANSWERS ---------------------
function changeColour(){
    this.style.color = "red"; 
}
function changeColourBack(){
    this.style.color = "black"; 
}
//-----------------------------------------------------








 
// ------------------ FUNCTION FOR GOING IN GAME INCOLLABLE --------

function startingGame() {
    supprRules.remove();
    supprTime.remove();
    center.appendChild(buttonNewGame);
    center.appendChild(buttonContinuer);
}

function goInGameIncollable(){ 
    // console.log("bonjour"); // test if worth 

    afficherFunction(); // function for game 

    //----- create button break and giveup ----
    document.body.appendChild(buttonGiveUp); // button Give Up
    document.body.appendChild(buttonPause); // button Pause
    countDown(); // call the function countDown
    setInterval(countDown , 1000);
}

//-----------------Fonction pour les boutons---------------------
function giveUp(){
    window.location.reload();
    window.alert("Vous avez abandonné");
    
    window.localStorage.clear();
}


function pause(){
    timerIncollable = false;
    buttonPause.remove();
    document.body.appendChild(buttonReprendre);

    // window.alert("vous avez fais une pause");
    time = 20;
    // afficherFunction();

}
function newGame(){
    buttonContinuer.remove();
    buttonNewGame.remove();
    localStorage.clear();
    goInGameIncollable();
}

function reprendre(){
    timerIncollable = true;
    buttonReprendre.remove();
    document.body.appendChild(buttonPause);
    time = 20;
    afficherFunction();

}
function continuer(){
    if (getFromLocalStorage("Time (incollable)") == undefined){
       
        i++;
        j++;
        window.alert("Il n'y a pas de sauvegarde");
    }
    else{
        buttonContinuer.remove();
        buttonNewGame.remove();
        localStorageData();
        goInGameIncollable();
    }
}



//--------------------Fonction LOCALSTORAGE--------------------
function getFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}
function localStorageData(){
    if (getFromLocalStorage("Time (incollable)") != undefined){
        time = getFromLocalStorage("Time (incollable)");
        i = getFromLocalStorage("Bonnes réponses (incollable)");
        j = getFromLocalStorage("Mauvaises réponses (incollable)");
       
    }
}




//------ function timer for the game INCOLLABLE -------
function countDown(){ 
    let minutes = parseInt(time / 60, 10); // renvois entier calcul base 10
    let secondes = parseInt(time % 60 , 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes; 
    timerElement.innerHTML = minutes + " : " + secondes; 
    // time --; 


    // LOCALSTORAGE----------------------------------------------
    window.localStorage.setItem("Time (incollable)", time);
    window.localStorage.setItem("Bonnes réponses (incollable)", i);
    window.localStorage.setItem("Mauvaises réponses (incollable)", j);
    window.localStorage.setItem("Question (incollable) " + (i+j), allQuizz);
    //-----------------------------------------------------------






    if (time == 0){
        incrementationMauvaiseRep.innerHTML = "Mauvaises réponses " + j++;
        afficherFunction();
      
    }

    if (timerIncollable == true){
        time = time- 1;
    }
    else {
        time = time ; 
    }
    // time = time <= 0 ? 0 : time - 1;
   
}




// -------------- random value ---------------------------
function randomValue(){
    resultat = Math.floor(Math.random()*max);
    return; 
}
//---------------------------------------------------------




// ------------- Function count for INCR GOOD OR BAD ANSWER ----------------

function incrGood(){
    if(timerIncollable == true){
        incrementationBonneRep.innerHTML = "Bonnes réponses / " + i++;
    }

}
function incrBad(){
    if(timerIncollable == true){
         
        if (j == 5){
            reloadPage();
            localStorage.clear();
        } 
        else{
            incrementationMauvaiseRep.innerHTML = "Mauvaises réponses / " + j++;
        }
        
    }
}
   
let noRepeat = [];


// ---------------- VALUES OF QUESTIONS AND ANSWERS FROM JSON  ----------
function attributeValuesJson(){
    
    noRepeat.push(resultat);
    console.log(noRepeat);
    for (let i = 1 ; i <= noRepeat.length  ; i ++){
        if (noRepeat[i] == resultat){
            allQuizz = allQuestions[resultat + 1]["quizz"];
            answerOne = allQuestions[resultat+1]["rep1"];
            answerTwo = allQuestions[resultat+1]["rep2"];
            answerThree = allQuestions[resultat+1]["rep3"];
            answerFour = allQuestions[resultat+1]["rep4"];
            goodRep = allQuestions[resultat+1]["goodrep"];
        }
        else {
            allQuizz = allQuestions[resultat]["quizz"];
            answerOne = allQuestions[resultat]["rep1"];
            answerTwo = allQuestions[resultat]["rep2"];
            answerThree = allQuestions[resultat]["rep3"];
            answerFour = allQuestions[resultat]["rep4"];
            goodRep = allQuestions[resultat]["goodrep"];
            
        }
        
    }
    console.log(answerOne);
    console.log(answerTwo);
    console.log(answerThree);
    console.log(answerFour);
    console.log(goodRep);
    console.log(noRepeat);
}
//  

// ----------------------- next question + INCREMENTATION -----------------------
function nextQuestionB1(){
    if (goodRep == 1){
        incrGood();
        afficherFunction(); 
    }
    else {
        incrBad()
        afficherFunction(); 
    }      
}
function nextQuestionB2(){
    if (goodRep == 2){
        incrGood();
        afficherFunction(); 
    }
    else {
        incrBad()
        afficherFunction(); 
    }      
}
function nextQuestionB3(){
    if (goodRep == 3){
        incrGood();
        afficherFunction(); 
    }
    else {
        incrBad()
        afficherFunction(); 
    }      
}
function nextQuestionB4(){
    if (goodRep == 4){
        incrGood();
        afficherFunction(); 
    }
    else {
        incrBad()
        afficherFunction(); 
    }      
}


// ------------------------- function print game of Incollable called FOR EACH NEXT QUESTIONS AND FOR FIRST ENTERING IN GAME   -----------------
function afficherFunction(){
    if(timerIncollable == true){
        randomValue();
        time = 20 ;


        attributeValuesJson();
        afficherSiAnswer();  
        divQuestions.innerHTML = allQuizz;
        divQuestions.style.fontSize =  "1.5em";
    

        divAnswer.appendChild(divBreak);

        }
        else{
    
            window.alert("Le jeu est en pause");

        }
    
    
}
// -----------------------------------------------------------------


// --------------------- AFFICHER if 4 ANSWERS or 3 ANSWERS or 2 + ALEATORY OF ANSWERS -----


function afficherSiAnswer(){
    let repAlea= new Array()
    if (answerOne != undefined && answerTwo != undefined && answerThree != undefined && answerFour != undefined ){
        //on définit la longueur du tableau en fonction du nombre de réponses
        repAlea.length = 4;
        let i=0;
        let random;
        //position des paragraphes dans le tableau
        repAlea[0]=pUn;
        repAlea[1]=pDeux;
        repAlea[2]=pTrois;
        repAlea[3]=pQuatre;
        //on attribut la réponse aux paragraphes
        pUn.innerHTML = answerOne; 
        pDeux.innerHTML = answerTwo;
        pTrois.innerHTML = answerThree;
        pQuatre.innerHTML = answerFour;
        // shuffle de la postion des paragraphes + appendChild à la div
        while( i<repAlea.length){
            random =Math.floor(Math.random()*repAlea.length)
            if (repAlea[random]!= "selected"){
               divBreak.appendChild(repAlea[random])
               repAlea[random]="selected"
               i++
            }
        }
    }
    else if (answerOne != undefined && answerTwo != undefined && answerThree != undefined && answerFour == undefined ){
        //on définit la longueur du tableau en fonction du nombre de réponses
        repAlea.length = 3
        let i=0
        let random
        //position des paragraphes dans le tableau
        repAlea[0]=pUn
        repAlea[1]=pDeux
        repAlea[2]=pTrois
        //on attribut la réponse aux paragraphes
        pUn.innerHTML = answerOne; 
        pDeux.innerHTML = answerTwo;
        pTrois.innerHTML = answerThree;
        //on remove les potentielles réponses en trop
        pQuatre.remove();
        // shuffle de la position des paragraphes + appendChild à la div
        while( i<repAlea.length){
            random =Math.floor(Math.random()*repAlea.length)
            if (repAlea[random]!= "selected"){
                divBreak.appendChild(repAlea[random])
                repAlea[random]="selected"
                i++
            }
        }
        
    }
    else {
        //on définit la longueur du tableau en fonction du nombre de réponses
        let i=0
        let random
        repAlea.length = 2
        //position des paragraphes dans le tableau
        repAlea[0]=pUn
        repAlea[1]=pDeux
        //on attribut la réponse aux paragraphes
        pUn.innerHTML = answerOne;
        pDeux.innerHTML = answerTwo;
        //on remove les potentielles réponses en trop
        pTrois.remove();
        pQuatre.remove();
        // shuffle de la position des paragraphes + appendChild à la div
        while( i<repAlea.length){
                random =Math.floor(Math.random()*repAlea.length)
            if (repAlea[random]!= "selected"){
                divBreak.appendChild(repAlea[random])
                repAlea[random]="selected"
                i++
           }
        }
    } 
}

//---------- RELOAD PAGE FOR NEW GAME ----------------

function reloadPage(){
    window.location.reload();
    window.alert("Vous avez perdu");
}

// --------------------------------- END :) ---------------------------------------------------

