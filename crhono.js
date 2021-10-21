// --------------------------- get type of game -------------------
let buttonChrono = document.querySelector("#button1"); //get Chrono
// ------------------------------------------------------------------


// --------------------  suppr for go in game -------------------
let supprRulesChrono = document.querySelector("#regles"); //get the all rules 
let  supprTimeChrono = document.querySelector("#tmp"); //get the div "timeChrono"
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
let maxChrono = allQuestions.length;//allQuestionsChrono.length;

let timeChrono = 180;

let resultatChrono;

let allQuizzChrono; 
let answerOneChrono; 
let answerTwoChrono ;
let answerThreeChrono; 
let answerFourChrono;
let iChrono = 1;
let jChrono = 1;

// ----------- go in incollable game on click ----------------
buttonChrono.addEventListener("click" , goInGameChrono);

buttonGiveUpChrono.addEventListener("click", giveUpChrono);

buttonPauseChrono.addEventListener("click", pauseChrono);







function goInGameChrono(){ // func delete rules
    console.log("bonjour");

    // ---- remove ------
    supprRulesChrono.remove();
    supprTimeChrono.remove();
    // ----------------


    afficherFunctionChrono(); // function for game 

    document.body.appendChild(buttonGiveUpChrono); // button Give Up
    document.body.appendChild(buttonPauseChrono); // button Pause

    countDownChrono(); // call the function countDownChrono
    setInterval(countDownChrono , 120);
    // timerElementChrono.appendChild(space); 
    
}

function giveUpChrono(){
    timeChrono = 0;
    countDownChrono();
}
function pauseChrono(){
    window.alert("Vous avez mis le jeu en pauseChrono");
    afficherFunctionChrono();
}


function countDownChrono(){ // timer for the game 
    let minutes = parseInt(timeChrono / 60, 10);
    let secondes = parseInt(timeChrono % 60 , 10);
    minutes = minutes < 10 ? "0" + minutes : minutes; // à expliquer
    secondes = secondes < 10 ? "0" + secondes : secondes; // à expliquer 
    timerElementChrono.innerHTML = minutes + " : " + secondes; //à expliquer 
    // timeChrono --; 
    if (timeChrono <= 0){
        window.location.reload();
        window.alert("Vous avez perdu");
    }
    else if(timeChrono > 180){
        timeChrono = 180;
    }
    else{
        timeChrono = timeChrono- 0.1;
    }
    // timeChrono = timeChrono <= 0 ? 0 : timeChrono - 1;
   
}







let incrementationBonneRepChrono = document.createElement("div");
document.body.appendChild(incrementationBonneRepChrono);

let incrementationMauvaiseRepChrono = document.createElement("div");
document.body.appendChild(incrementationMauvaiseRepChrono);



let divQuestionsChrono = document.querySelector("#div2"); // questions
//divQuestionsChrono.setAttribute("style", "bold");


let divAnswerChrono = document.querySelector("#div3");

let divBreakChrono = document.createElement("div");

let pUnChrono = document.createElement("p");
let pDeuxChrono = document.createElement("p");
let pTroisChrono = document.createElement("p");
let pQuatreChrono = document.createElement("p");



// ------------ add EventListener ----------------------
pUnChrono.addEventListener("click" , nextQuestionB1Chrono);
pDeuxChrono.addEventListener("click", nextQuestionB2Chrono);
pTroisChrono.addEventListener("click", nextQuestionB3Chrono);
pQuatreChrono.addEventListener("click" , nextQuestionB4Chrono);

pUnChrono.addEventListener("mouseover" , changeColourChrono );
pDeuxChrono.addEventListener("mouseover", changeColourChrono );
pTroisChrono.addEventListener("mouseover", changeColourChrono );
pQuatreChrono.addEventListener("mouseover" , changeColourChrono );

pUnChrono.addEventListener("mouseout" , changeColourBackChrono );
pDeuxChrono.addEventListener("mouseout", changeColourBackChrono );
pTroisChrono.addEventListener("mouseout", changeColourBackChrono );
pQuatreChrono.addEventListener("mouseout" , changeColourBackChrono );

// -----------------------------------------------------

// -------------- random value ---------------------------
function randomValueChrono(){
    resultatChrono = Math.floor(Math.random()*maxChrono);
    return; 
}
//---------------------------------------------------------


function incrGoodChrono(){
    incrementationBonneRepChrono.innerHTML = "bonne réponse " + iChrono++;
    timeChrono += 4;
}
function incrBadChrono(){
    incrementationMauvaiseRepChrono.innerHTML = "mauvaise réponse " + jChrono++;
    timeChrono -= 2;
}


// ----------------------- next question + INCREMENTATION -----------------------
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


// ------------------------- afficher function -----------------
function afficherFunctionChrono(){
    // afficherSiAnswerChrono();

    randomValueChrono();
    attribuerChrono();
    afficherSiAnswerChrono();
    //console.log(goodRepChrono + " nfjnsdjnfjdsn")

    divQuestionsChrono.innerHTML = allQuizzChrono;
    divQuestionsChrono.style.fontSize =  "1.5em";
    

    divAnswerChrono.appendChild(divBreakChrono);
    
}
// -----------------------------------------------------------------


// --------------------- AFFICHER SI ANSWER ------------------------------
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

// ---------------- attribuerChrono la valeur pour questioons ----------
function attribuerChrono(){ // va chercher les values JSON 
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

//------------------- CHANGE COLOR ---------------------
function changeColourChrono(){
    this.style.color = "red"; 
}
function changeColourBackChrono(){
    this.style.color = "black"; 
}
//-----------------------------------------------------

function reloadPageChrono(){
    window.location.reload();
    window.alert("Vous avez perdu");
}

// --------------------------------- test ---------------------------------------------------

