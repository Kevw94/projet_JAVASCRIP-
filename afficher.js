
// json 

// div1  == key question +class 
// div2 == réponses
// div3 == 
// good  == bonne réponse 

// let myJson = allQuestions.value;

let max = allQuestions.length;
let resultat;

let allQuizz; 
let answerOne; 
let answerTwo ;
let answerThree; 
let answerFour;

let i = 1;
let j = 1;


let incrementationBonneRep = document.createElement("div");
document.body.appendChild(incrementationBonneRep);

let incrementationMauvaiseRep = document.createElement("div");
document.body.appendChild(incrementationMauvaiseRep);



let divQuestions = document.querySelector("#div2"); // questions
//divQuestions.setAttribute("style", "bold");


let divAnswer = document.querySelector("#div3");

let divBreak = document.createElement("div");

let pUn = document.createElement("p");
let pDeux = document.createElement("p");
let pTrois = document.createElement("p");
let pQuatre = document.createElement("p");



// ------------ add EventListener ----------------------
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
    // afficherSiAnswer();
    if (time == 0){
        countDown()
    } 
    else{
        time = 20 ;

    }
    
    randomValue();
    attribuer();
    afficherSiAnswer();  
    //console.log(goodRep + " nfjnsdjnfjdsn")

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

//---------------------------------------------------------------------------

// ---------------- attribuer la valeur pour questioons ----------
function attribuer(){
    //randomValue();
    
    // max = allQuestions.length;
    // let resultat = Math.floor(Math.random()*max);
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
//  ------------------------------------------------------------

//------------------- CHANGE COLOR ---------------------
function changeColour(){
    this.style.color = "red"; 
}
function changeColourBack(){
    this.style.color = "black"; 
}
//-----------------------------------------------------



// --------------------------------- test ---------------------------------------------------


