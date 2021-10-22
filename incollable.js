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


// ---------- lenght of all questions in JSON --------
let max = allQuestions.length;

//time for game INCOLLABLE -------------
let time = 20;

// -------------------------------------------------------

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
//------------------------------------------------------------

// ------------ ALL add EventListener for function in GAME INCOLLABLE ----------------------
pUn.addEventListener("click" , nextQuestionB1);
pDeux.addEventListener("click", nextQuestionB2);
pTrois.addEventListener("click", nextQuestionB3);
pQuatre.addEventListener("click" , nextQuestionB4);

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

    console.log("bonjour");
    // ---- remove ------
    supprRules.remove();
    supprTime.remove();
    // ----------------
    
    afficherFunction(); // function for game 


    document.body.appendChild(buttonPause); // button Pause
    document.body.appendChild(buttonGiveUp);
    countDown(); // call the function countDown
    setInterval(countDown , 120);
    // timerElement.appendChild(space); 
    
}

function pause(){
    window.alert("vous avez fais une pause");

    time = 20;
    afficherFunction();

}
function giveUp(){
    time = 0;
    countDown();

}




function countDown(){ // function timer for the game INCOLLABLE
    let minutes = parseInt(time / 60, 10);
    let secondes = parseInt(time % 60 , 10);
    minutes = minutes < 10 ? "0" + minutes : minutes; // à expliquer
    secondes = secondes < 10 ? "0" + secondes : secondes; // à expliquer 
    timerElement.innerHTML = minutes + " : " + secondes; //à expliquer 
    // time --; 
    if (time <= 0){
        window.location.reload();

        window.alert("vous avez perdu ");
      
    }
    else{
        time = time- 0.1;
    }
    // time = time <= 0 ? 0 : time - 1;
   
}




// -------------- random value ---------------------------
function randomValue(){
    resultat = Math.floor(Math.random()*max);
    return; 
}
//---------------------------------------------------------








function incrGood(){
    incrementationBonneRep.innerHTML = "bonne réponse " + i++;
}
function incrBad(){
    
    if (j == 5){
        time = 0;
        countDown()
    }
    else{
        incrementationMauvaiseRep.innerHTML = "mauvaise réponse " + j++;
    }
}


// ---------------- attributeValuesJson la valeur pour questioons ----------
function attributeValuesJson(){
    // randomValue();
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


// ------------------------- afficher function -----------------
function afficherFunction(){
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
// -----------------------------------------------------------------


// --------------------- AFFICHER SI ANSWER ------------------------------
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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
