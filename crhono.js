// --------------------------- get type of game -------------------
let buttonChrono = document.querySelector("#button1"); //get Chrono
// ------------------------------------------------------------------


// --------------------  suppr for go in game CHRONO -------------------
let supprRulesChrono = document.querySelector("#regles"); //get the all rules 
let supprTimeChrono = document.querySelector("#tmp"); //get the div "time"
//-----------------------------------------------------------------

let center = document.querySelector("center");

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
// ------------------------------ Button NEW GAME ----------------------
let buttonNewGameChrono = document.createElement("button");
buttonNewGameChrono.setAttribute("class" , "newgameChrono");
buttonNewGameChrono.innerHTML = "NEW GAME";
// -------------------------------------------------------------------
// ------------------------------ Button CONTINUER ----------------------
let buttonContinueChrono = document.createElement("button");
buttonContinueChrono.setAttribute("class" , "continueChrono");
buttonContinueChrono.innerHTML = "CONTINUER";
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
buttonChrono.addEventListener("click" , startingGame);



// ------ if user wants to give up or take a break -------------------

buttonGiveUpChrono.addEventListener("click", giveUpChrono);

buttonPauseChrono.addEventListener("click", pauseChrono);

buttonReprendreChrono.addEventListener("click", reprendreChrono);

buttonNewGameChrono.addEventListener("click", newGameChrono);

buttonContinueChrono.addEventListener("click", continueChrono);

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

function startingGame() {
    supprRulesChrono.remove();
    supprTimeChrono.remove();
    center.appendChild(buttonNewGameChrono);
    center.appendChild(buttonContinueChrono);
}

function goInGameChrono(){ 
    // console.log("bonjour"); // test if worth 

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

function newGameChrono(){
    buttonContinueChrono.remove();
    buttonNewGameChrono.remove();
    localStorage.clear();
    goInGameChrono();
}

function continueChrono(){
    if (getFromLocalStorage("Time (Chrono)" == undefined)){
        // buttonContinueChrono.remove();
        // buttonNewGameChrono.remove();
        // goInGameChrono();
        iChrono++;
        jChrono++;
        windows.alert("Il n'y a pas de sauvegarde");
    }
    else{
        buttonContinueChrono.remove();
        buttonNewGameChrono.remove();
        localStorageDataChrono();
        goInGameChrono();
    }
}
//---------------------------------------------------------------
//--------------------Fonction LOCALSTORAGE--------------------
function getFromLocalStorageChrono(key){
    return JSON.parse(localStorage.getItem(key));
}
function localStorageDataChrono(){
    if (getFromLocalStorageChrono("Time (Chrono) ") != undefined){
        timeChrono = getFromLocalStorageChrono("Time (Chrono) ");
        iChrono = getFromLocalStorageChrono("Bonnes réponses (Chrono) ");
        jChrono = getFromLocalStorageChrono("Mauvaises réponses (Chrono) ");
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
    window.localStorage.setItem("Bonnes réponses (Chrono) ", iChrono);
    window.localStorage.setItem("Mauvaises réponses (Chrono) ", jChrono);
    window.localStorage.setItem("Question (Chrono) " + (iChrono+jChrono), allQuizzChrono);
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
        incrementationBonneRepChrono.innerHTML = "Bonnes réponses / " + iChrono++;
        timeChrono += 4;
    }
    
}
function incrBadChrono(){
    if (timerChrono == true){
        incrementationMauvaiseRepChrono.innerHTML = "Mauvaises réponses / " + jChrono++;
        timeChrono -= 2;
    }
}




let noRepeatChrono = [];


// ---------------- VALUES OF QUESTIONS AND ANSWERS FROM JSON  ----------
function attributeValuesJsonChrono(){ 

    noRepeatChrono.push(resultatChrono);
    console.log(noRepeatChrono);
    for (let i = 1 ; i <= noRepeatChrono.length ; i++){
        if (noRepeatChrono[i] == resultatChrono){
            allQuizzChrono = allQuestions[resultatChrono + 1]["quizz"];
            answerOneChrono = allQuestions[resultatChrono+1]["rep1"];
            answerTwoChrono = allQuestions[resultatChrono+1]["rep2"];
            answerThreeChrono = allQuestions[resultatChrono+1]["rep3"];
            answerFourChrono = allQuestions[resultatChrono+1]["rep4"];
            goodRepChrono = allQuestions[resultatChrono+1]["goodrep"];

        }
        else {
            allQuizzChrono = allQuestions[resultatChrono]["quizz"];
            answerOneChrono = allQuestions[resultatChrono]["rep1"];
            answerTwoChrono = allQuestions[resultatChrono]["rep2"];
            answerThreeChrono = allQuestions[resultatChrono]["rep3"];
            answerFourChrono = allQuestions[resultatChrono]["rep4"];
            goodRepChrono = allQuestions[resultatChrono]["goodrep"];
        }
    }
    

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


// ------------------------- function print game of Chrono called FOR EACH NEXT QUESTIONS AND FOR FIRST ENTERING IN GAME  -----------------
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


// --------------------- AFFICHER if 4 ANSWERS or 3 ANSWERS or 2 ANSWERS + ALEATORY OF ANSWERS ------------------------------

function afficherSiAnswerChrono(){
    let repAlea= new Array()
    if (answerOneChrono != undefined && answerTwoChrono != undefined && answerThreeChrono != undefined && answerFourChrono != undefined ){
        //on définit la longueur du tableau en fonction du nombre de réponses
        repAlea.length = 4
        let i=0
        let random
        //position des paragraphes dans le tableau
        repAlea[0]=pUnChrono
        repAlea[1]=pDeuxChrono
        repAlea[2]=pTroisChrono
        repAlea[3]=pQuatreChrono
        //on attribut les réponses aux paragraphes
        pUnChrono.innerHTML = answerOneChrono; 
        pDeuxChrono.innerHTML = answerTwoChrono;
        pTroisChrono.innerHTML = answerThreeChrono;
        pQuatreChrono.innerHTML = answerFourChrono;
        //shuffle de la postion des paragraphes + appendChild à la div
        while( i<repAlea.length){
            random =Math.floor(Math.random()*repAlea.length)
            if (repAlea[random]!= "selected"){
               divBreakChrono.appendChild(repAlea[random])
               repAlea[random]="selected"
               i++
            }
        }
    }
    else if (answerOneChrono != undefined && answerTwoChrono != undefined && answerThreeChrono != undefined && answerFourChrono == undefined ){
        //on définit la longueur du tableau en fonction du nombre de réponses
        repAlea.length = 3;
        let i=0;
        let random;
        //position des paragraphes dans le tableau
        repAlea[0]=pUnChrono;
        repAlea[1]=pDeuxChrono;
        repAlea[2]=pTroisChrono;
        //on attribut les réponses aux paragraphes
        pUnChrono.innerHTML = answerOneChrono; 
        pDeuxChrono.innerHTML = answerTwoChrono;
        pTroisChrono.innerHTML = answerThreeChrono;
        //on enlève les potentielles réponses en trop
        pQuatreChrono.remove();
        //shuffle de la postion des paragraphes + appendChild à la div
        while( i<repAlea.length){
            random =Math.floor(Math.random()*repAlea.length)
            if (repAlea[random]!= "selected"){
                divBreakChrono.appendChild(repAlea[random])
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
        repAlea[0]=pUnChrono
        repAlea[1]=pDeuxChrono
        //on attribut les réponses aux paragraphes
        pUnChrono.innerHTML = answerOneChrono;
        pDeuxChrono.innerHTML = answerTwoChrono;
        //on enlève les potentielles réponses en trop
        pTrois.remove();
        pQuatre.remove();
        //shuffle de la postion des paragraphes + appendChild à la div
        while( i<repAlea.length){
                random =Math.floor(Math.random()*repAlea.length)
            if (repAlea[random]!= "selected"){
                divBreakChrono.appendChild(repAlea[random])
                repAlea[random]="selected"
                i++
           }
        }
    } 
}

//---------------------------------------------------------------------------


//---------- RELOAD PAGE FOR NEW GAME ----------------

function reloadPageChrono(){
    window.location.reload();
    window.alert("Vous avez perdu");
}

// --------------------------------- END :) ---------------------------------------------------

