// --------------------------- get type of game -------------------
let buttonChrono = document.querySelector("#button1"); //get Chrono
// ------------------------------------------------------------------


// --------------------  suppr for go in game CHRONO -------------------
let supprRulesChrono = document.querySelector("#regles"); //get the all rules 
let supprTimeChrono = document.querySelector("#tmp"); //get the div "time"
//-----------------------------------------------------------------


let timerElementChrono = document.querySelector("#div1"); // for the clock



//-----------------------Button ABANDONNER------------------
let buttonGiveUpChrono = document.createElement("button");
buttonGiveUpChrono.setAttribute("class" , "abandonner");
buttonGiveUpChrono.innerHTML = "ABANDONNER" ;
//----------------------------------------------------------------
// ------------------------------ Button PAUSE ----------------------
let buttonPauseChrono = document.createElement("button");
buttonPauseChrono.setAttribute("class" , "pauseChrono");
buttonPauseChrono.innerHTML = "PAUSE" ;
// -------------------------------------------------------------------
// ------------------------------ Button REPRENDRE ----------------------
let buttonReprendreChrono = document.createElement("button");
buttonReprendreChrono.setAttribute("class" , "reprendreChrono");
buttonReprendreChrono.innerHTML = "REPRENDRE";
// -------------------------------------------------------------------


// ---------- lenght of all questions in JSON --------
let maxChrono = allQuestions.length;

//time for game CHRONO ----------
let timeChrono = 180;

let timerChrono = true;
// ------------ VARIABLES JSON -------------------
// --------- variable for random result ---------
let resultatChrono;

// ------------- variables assigned thanks to resultatChrono get in a randomFunction ---------
let allQuizzChrono; 
let answerOneChrono; 
let answerTwoChrono ;
let answerThreeChrono; 
let answerFourChrono;

// --------------- variables for count ++ or -- --------------------
let iChrono = 1;
let jChrono = 1;



// ------------------ creating COUNT for good ANSWER or BAD ANSWER -------------------------

let incrementationBonneRepChrono = document.createElement("div");
document.body.appendChild(incrementationBonneRepChrono);

let incrementationMauvaiseRepChrono = document.createElement("div");
document.body.appendChild(incrementationMauvaiseRepChrono);



let divQuestionsChrono = document.querySelector("#div2"); // questions
//divQuestionsChrono.setAttribute("style", "bold");


let divAnswerChrono = document.querySelector("#div3");

let divBreakChrono = document.createElement("div");

//---------------- CREATE PARAGRAPH FOR ANSWERS ---------------------

let pUnChrono = document.createElement("p");
let pDeuxChrono = document.createElement("p");
let pTroisChrono = document.createElement("p");
let pQuatreChrono = document.createElement("p");



// ------------------------------------------------------------




// ----------- go in CHRONO game on click ----------------
buttonChrono.addEventListener("click" , goInGameChrono);



// ------ if user wants to give up or take a break -------------------

buttonGiveUpChrono.addEventListener("click", giveUpChrono);

buttonPauseChrono.addEventListener("click", pauseChrono);

buttonReprendreChrono.addEventListener("click", reprendreChrono)



// ------------ ALL add EventListener for function in GAME CHRONO ----------------------

// Call for the next question
pUnChrono.addEventListener("click" , nextQuestionB1Chrono);
pDeuxChrono.addEventListener("click", nextQuestionB2Chrono);
pTroisChrono.addEventListener("click", nextQuestionB3Chrono);
pQuatreChrono.addEventListener("click" , nextQuestionB4Chrono);

// --------------- call for changing colour of ANSWERS --------------
pUnChrono.addEventListener("mouseover" , changeColourChrono );
pDeuxChrono.addEventListener("mouseover", changeColourChrono );
pTroisChrono.addEventListener("mouseover", changeColourChrono );
pQuatreChrono.addEventListener("mouseover" , changeColourChrono );

pUnChrono.addEventListener("mouseout" , changeColourBackChrono );
pDeuxChrono.addEventListener("mouseout", changeColourBackChrono );
pTroisChrono.addEventListener("mouseout", changeColourBackChrono );
pQuatreChrono.addEventListener("mouseout" , changeColourBackChrono );

// -----------------------------------------------------


//------------------- FUNCTION CHANGE COLOR OF ANSWERS  ---------------------
function changeColourChrono(){
    this.style.color = "red"; 
}
function changeColourBackChrono(){
    this.style.color = "black"; 
}
//-----------------------------------------------------








// ------------------ FUNCTION FOR GOING IN GAME CHRONO --------

function goInGameChrono(){ 
    // console.log("bonjour"); // test if worth 

    // ---- remove rules  ------
    supprRulesChrono.remove();
    supprTimeChrono.remove();
    // ----------------

    afficherFunctionChrono(); // function for game 

    //----- create button break and giveup ----
    document.body.appendChild(buttonGiveUpChrono); // button Give Up
    document.body.appendChild(buttonPauseChrono); // button Pause
    countDownChrono(); // call the function countDownChrono
    setInterval(countDownChrono , 1000);    
}

//-----------------Fonction pour les boutons---------------------
function giveUpChrono(){
    window.location.reload();
    window.alert("Vous avez abandonné");
    
    // timeChrono = 0;
    // countDownChrono();
    window.localStorage.clear();
}
function pauseChrono(){
    timerChrono = false;
    buttonPauseChrono.remove();
    document.body.appendChild(buttonReprendreChrono);
}
function reprendreChrono(){
    timerChrono = true;
    buttonReprendreChrono.remove();
    document.body.appendChild(buttonPauseChrono);
    afficherFunctionChrono();
}
//---------------------------------------------------------------
//--------------------Fonction LOCALSTORAGE--------------------
function getFromLocalStorageChrono(key){
    return JSON.parse(localStorage.getItem(key));
}
function localStorageDataChrono(){
    if (getFromLocalStorageChrono("Time Chrono") != undefined){
        timeChrono = getFromLocalStorageChrono("Time Chrono");
        iChrono = getFromLocalStorageChrono("Bonnes réponses(Chrono)");
        jChrono = getFromLocalStorageChrono("Mauvaises réponses(Chrono)");
        // for (let count = 0; count < (j+i); count++){
        //     if (getFromLocalStorage("") == allQuizz)
        // }
    }
}

//-----------------------------------------------------------------
//  ------- function timer for the game CHRONO ----------
function countDownChrono(){ 
    let minutes = parseInt(timeChrono / 60, 10);
    let secondes = parseInt(timeChrono % 60 , 10);
    minutes = minutes < 10 ? "0" + minutes : minutes; 
    secondes = secondes < 10 ? "0" + secondes : secondes; 
    timerElementChrono.innerHTML = minutes + " : " + secondes; 
    // LOCALSTORAGE----------------------------------------------
    window.localStorage.setItem("Time (Chrono) ", timeChrono);
    window.localStorage.setItem("Bonnes réponses (Chrono) ", (iChrono - 1));
    window.localStorage.setItem("Mauvaises réponses (Chrono) ", (jChrono - 1));
    window.localStorage.setItem("Question (Chrono) " + ((iChrono+jChrono) - 1), allQuizzChrono);
    //-----------------------------------------------------------
    // timeChrono --; 
    if (timeChrono <= 0){
        window.location.reload();
        window.alert("Vous avez perdu");
        window.localStorage.clear();
    }
    else if(timeChrono > 180){
        timeChrono = 180;
    }
//---------------Pour stopper le timer---------------------------
    else if (timerChrono == true){
        timeChrono--;
    }
    else{
        timeChrono = timeChrono;
    }
    // timeChrono = timeChrono <= 0 ? 0 : timeChrono - 1;  TERNAIRE 
   
}
//----------------------------------------------------------------




// -------------- random value ---------------------------
function randomValueChrono(){
    resultatChrono = Math.floor(Math.random()*maxChrono);
    return; 
}
//---------------------------------------------------------




// ------------- Function count for INCR GOOD OR BAD ANSWER ----------------

function incrGoodChrono(){
    if (timerChrono == true){
        incrementationBonneRepChrono.innerHTML = "bonne réponse " + iChrono++;
        timeChrono += 4;
    }
    
}
function incrBadChrono(){
    if (timerChrono == true){
        incrementationMauvaiseRepChrono.innerHTML = "mauvaise réponse " + jChrono++;
        timeChrono -= 2;
    }
}







// ---------------- VALUES OF QUESTIONS AND ANSWERS FROM JSON  ----------
function attributeValuesJsonChrono(){ 
    allQuizzChrono = allQuestions[resultatChrono]["quizz"];
    answerOneChrono = allQuestions[resultatChrono]["rep1"];
    answerTwoChrono = allQuestions[resultatChrono]["rep2"];
    answerThreeChrono = allQuestions[resultatChrono]["rep3"];
    answerFourChrono = allQuestions[resultatChrono]["rep4"];
    goodRepChrono = allQuestions[resultatChrono]["goodrep"];

    console.log(answerOneChrono);
    console.log(answerTwoChrono);
    console.log(answerThreeChrono);
    console.log(answerFourChrono);
    console.log(goodRepChrono);
}
//  ------------------------------------------------------------



// ----------------------- Function  next question + INCREMENTATION -----------------------
function nextQuestionB1Chrono(){
    if (goodRepChrono == 1){
        incrGoodChrono();
        afficherFunctionChrono(); 
    }
    else {
        incrBadChrono()
        afficherFunctionChrono(); 
    }      
}
function nextQuestionB2Chrono(){
    if (goodRepChrono == 2){
        incrGoodChrono();
        afficherFunctionChrono(); 
    }
    else {
        incrBadChrono()
        afficherFunctionChrono(); 
    }      
}
function nextQuestionB3Chrono(){
    if (goodRepChrono == 3){
        incrGoodChrono();
        afficherFunctionChrono(); 
    }
    else {
        incrBadChrono()
        afficherFunctionChrono(); 
    }      
}
function nextQuestionB4Chrono(){
    if (goodRepChrono == 4){
        incrGoodChrono();
        afficherFunctionChrono(); 
    }
    else {
        incrBadChrono()
        afficherFunctionChrono(); 
    }      
}


// ------------------------- function print game of Chrono -----------------
function afficherFunctionChrono(){
    if (timerChrono == true){
        randomValueChrono();
    
    
        attributeValuesJsonChrono();
        afficherSiAnswerChrono();
      
    
        divQuestionsChrono.innerHTML = allQuizzChrono;
        divQuestionsChrono.style.fontSize =  "1.5em";
        
    
        divAnswerChrono.appendChild(divBreakChrono);
    }
    else {
        window.alert("Le jeu est en pause");
    }
 
    
}
// -----------------------------------------------------------------


// --------------------- AFFICHER if 4 ANSWERS or 3 ANSWERS or 2 ANSWERS  ------------------------------
function afficherSiAnswerChrono(){
    if (answerOneChrono != undefined && answerTwoChrono != undefined && answerThreeChrono != undefined && answerFourChrono != undefined ){

        pUnChrono.innerHTML = answerOneChrono; 
        divBreakChrono.appendChild(pUnChrono);
        pDeuxChrono.innerHTML = answerTwoChrono;
        divBreakChrono.appendChild(pDeuxChrono);
        pTroisChrono.innerHTML = answerThreeChrono;
        divBreakChrono.appendChild(pTroisChrono);
        pQuatreChrono.innerHTML = answerFourChrono;
        divBreakChrono.appendChild(pQuatreChrono);
        
    }
    else if (answerOneChrono != undefined && answerTwoChrono != undefined && answerThreeChrono != undefined && answerFourChrono == undefined ){
        pUnChrono.innerHTML = answerOneChrono; 
        divBreakChrono.appendChild(pUnChrono);
        pDeuxChrono.innerHTML = answerTwoChrono;
        divBreakChrono.appendChild(pDeuxChrono);
        pTroisChrono.innerHTML = answerThreeChrono;
        divBreakChrono.appendChild(pTroisChrono);
        pQuatreChrono.remove();
    }
    else {
        pUnChrono.innerHTML = answerOneChrono; 
        divBreakChrono.appendChild(pUnChrono);
        pDeuxChrono.innerHTML = answerTwoChrono;
        divBreakChrono.appendChild(pDeuxChrono);
        pTroisChrono.remove();
        pQuatreChrono.remove();
    }
   


}

//---------------------------------------------------------------------------


//---------- RELOAD PAGE FOR NEW GAME ----------------

function reloadPageChrono(){
    window.location.reload();
    window.alert("Vous avez perdu");
}

// --------------------------------- END :) ---------------------------------------------------

