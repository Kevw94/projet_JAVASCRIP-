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
buttonReprendre.setAttribute("class" , "reprendreChrono");
buttonReprendre.innerHTML = "REPRENDRE";
// -------------------------------------------------------------------

// ---------- lenght of all questions in JSON --------
let max = allQuestions.length;

//time for game INCOLLABLE -------------
let time = 20;

let timerIncollable = true;

//---------------------VARIABLES JSON -------------------------

// --------- variable for random result ---------
let resultat;

// ------------- variables assigned thanks to resultatChrono get in a randomFunction ---------
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

buttonIncollable.addEventListener("click" , goInIncollableGame);


// ------ if user wants to give up or take a break -------------------

buttonPause.addEventListener("click" , pause);

buttonGiveUp.addEventListener("click" , giveUp);

buttonReprendre.addEventListener("click", reprendre)
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

function goInIncollableGame(){ 
    // console.log("bonjour"); // test if worth 


    // ---- remove rules ------
    supprRules.remove();
    supprTime.remove();
    // ----------------
    
    afficherFunction(); // function for game 


    //----- create button break and giveup ----
    
    document.body.appendChild(buttonGiveUp); // button Give up
    document.body.appendChild(buttonPause); // button Pause
    countDown(); // call the function countDown
    setInterval(countDown , 1000); 
}

//-----------------Fonction pour les boutons---------------------
function giveUp(){
    window.location.reload();
    window.alert("Vous avez abandonné");
    //time = 0;
    //abandon();
    //countDown();
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
function reprendre(){
    timerIncollable = true;
    buttonReprendre.remove();
    document.body.appendChild(buttonPause);
    time = 20;
    afficherFunction();

}



//--------------------Fonction LOCALSTORAGE--------------------
function getFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}
function localStorageData(){
    if (getFromLocalStorage("Time") != undefined){
        time = getFromLocalStorage("Time");
        i = getFromLocalStorage("Bonnes réponses");
        j = getFromLocalStorage("Mauvaises réponses");
        // for (let count = 0; count < (j+i); count++){
        //     if (getFromLocalStorage("") == allQuizz)
        // }
    }
}




//------ function timer for the game INCOLLABLE -------
function countDown(){ 
    let minutes = parseInt(time / 60, 10);
    let secondes = parseInt(time % 60 , 10);
    minutes = minutes < 10 ? "0" + minutes : minutes; // à expliquer
    secondes = secondes < 10 ? "0" + secondes : secondes; // à expliquer 
    timerElement.innerHTML = minutes + " : " + secondes; //à expliquer 
    // time --; 


    // LOCALSTORAGE----------------------------------------------
    window.localStorage.setItem("Time", time);
    window.localStorage.setItem("Bonnes réponses", (i - 1));
    window.localStorage.setItem("Mauvaises réponses", (jChrono - 1));
    window.localStorage.setItem("Question (Chrono) " + ((i+j) - 1), allQuizz);
    //-----------------------------------------------------------






    if (time <= 0){
        reloadPage();
        window.localStorage.clear();
      
    }

    else if (timerIncollable == true){
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
        incrementationBonneRep.innerHTML = "bonne réponse " + i++;
    }

}
function incrBad(){
    if(timerIncollable == true){
         
        if (j == 5){
            time = 0;
            countDown()
        }
        else{
            incrementationMauvaiseRep.innerHTML = "mauvaise réponse " + j++;
        }
        
    }
   
}


// ---------------- VALUES OF QUESTIONS AND ANSWERS FROM JSON  ----------
function attributeValuesJson(){
    allQuizz = allQuestions[resultat]["quizz"];
    answerOne = allQuestions[resultat]["rep1"];
    answerTwo = allQuestions[resultat]["rep2"];
    answerThree = allQuestions[resultat]["rep3"];
    answerFour = allQuestions[resultat]["rep4"];
    goodRep = allQuestions[resultat]["goodrep"];
    console.log(answerOne);
    console.log(answerTwo);
    console.log(answerThree);
    console.log(answerFour);
    console.log(goodRep);
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


// ------------------------- function print game of Incollable  -----------------
function afficherFunction(){
    if(timerIncollable == true){
        randomValue();
        if (time == 0){
            countDown()
        } 
        else{
            time = 20 ;

        }
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


// --------------------- AFFICHER if 4 ANSWERS or 3 ANSWERS or 2 ANSWERS  ------------------------------
function afficherSiAnswer(){
    if (answerOne != undefined && answerTwo != undefined && answerThree != undefined && answerFour != undefined ){

        pUn.innerHTML = answerOne; 
        divBreak.appendChild(pUn);
        pDeux.innerHTML = answerTwo;
        divBreak.appendChild(pDeux);
        pTrois.innerHTML = answerThree;
        divBreak.appendChild(pTrois);
        pQuatre.innerHTML = answerFour;
        divBreak.appendChild(pQuatre);
        
    }
    else if (answerOne != undefined && answerTwo != undefined && answerThree != undefined && answerFour == undefined ){
        pUn.innerHTML = answerOne; 
        divBreak.appendChild(pUn);
        pDeux.innerHTML = answerTwo;
        divBreak.appendChild(pDeux);
        pTrois.innerHTML = answerThree;
        divBreak.appendChild(pTrois);
        pQuatre.remove();
    }
    else {
        pUn.innerHTML = answerOne; 
        divBreak.appendChild(pUn);
        pDeux.innerHTML = answerTwo;
        divBreak.appendChild(pDeux);
        pTrois.remove();
        pQuatre.remove();
    }
   


}

//---------- RELOAD PAGE FOR NEW GAME ----------------

function reloadPage(){
    window.location.reload();
    window.alert("Vous avez perdu");
}

// function abandon(){
//     window.location.reload();
//     window.alert("Vous avez abandonné");

// }

// --------------------------------- END :) ---------------------------------------------------

