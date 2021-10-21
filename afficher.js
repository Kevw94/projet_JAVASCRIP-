
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
pUn.addEventListener("click" , nextQuestionB1);//clickForTwoFun);
pDeux.addEventListener("click", nextQuestionB2);//clickForTwoFun);
pTrois.addEventListener("click", nextQuestionB3);//clickForTwoFun);
pQuatre.addEventListener("click" , nextQuestionB4);//clickForTwoFun);

// pUn.addEventListener("click" , findClick);
// pDeux.addEventListener("click", findClick);
// pTrois.addEventListener("click", findClick);
// pQuatre.addEventListener("click" , findClick);

pUn.addEventListener("mouseover" , changeClr );
pDeux.addEventListener("mouseover", changeClr );
pTrois.addEventListener("mouseover", changeClr );
pQuatre.addEventListener("mouseover" , changeClr );

pUn.addEventListener("mouseout" , changeBack );
pDeux.addEventListener("mouseout", changeBack );
pTrois.addEventListener("mouseout", changeBack );
pQuatre.addEventListener("mouseout" , changeBack );

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
    incrementationMauvaiseRep.innerHTML = "mauvaise réponse " + j++;
}


// ----------------------- next question -----------------------
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
function changeClr(){
    this.style.color = "red"; 
}
function changeBack(){
    this.style.color = "black"; 
}
//-----------------------------------------------------



// --------------------------------- test ---------------------------------------------------

// resultat = Math.floor(Math.random()*max);


// let allQuizz = allQuestions[resultat]["quizz"];


// let allQuizz = allQuestions[resultat]["quizz"]; //questions


// let answerOne = allQuestions[resultat]["rep1"];
// let answerTwo = allQuestions[resultat]["rep2"];
// let answerThree = allQuestions[resultat]["rep3"];
// let answerFour = allQuestions[resultat]["rep4"];
// let goodRep = allQuestions[resultat]["goodrep"];

// console.log(goodRep);










// function attribuer(){
   

//     // max = allQuestions.length;
//     let resultat = Math.floor(Math.random()*max);


//     allQuizz = allQuestions[resultat]["quizz"];
//     answerOne = allQuestions[resultat]["rep1"];
//     answerTwo = allQuestions[resultat]["rep2"];
//     answerThree = allQuestions[resultat]["rep3"];
//     answerFour = allQuestions[resultat]["rep4"];
//     goodRep = allQuestions[resultat]["goodrep"];

//     console.log(goodRep);
//     console.log(answerOne);

    
    
//     console.log(answerTwo);
//     console.log(answerThree);
    
//     console.log(answerFour);
//     afficherSiAnswer();
    
    
    
//     // afficher();





// }







// // let i = 1; 
// let AllQuizz = allValues[i]["quizz"];



// function afficher(){
//     for (let i  in  allValues ){
//     let allQuizz =  allValues[i]["quizz"];
//     console.log(allQuizz);
    
    
// }

// }
// afficher();

// function clickForTwoFun(){
//     nextQuestion();
//     buttonOne();
//     buttonTwo();
//     buttonThree();
//     buttonFour();
// }





// -------------------------------- test -------------------------------------------------------------







// function buttonOne(){
//     if (goodRep == 1){
//         //console.log("+1");
//         incrementationBonneRep.innerHTML = "bonne réponse " + i++;
        
//     }
//     else{
//         //console.log("button1");
//         incrementationMauvaiseRep.innerHTML = "mauvaise réponse " + j++;
//     }
// }

// function buttonTwo(){
//     if (goodRep == 2 ){
//         //console.log("+2");
//         incrementationBonneRep.innerHTML = "bonne réponse " + i++;

//     }
//     else{
//         //console.log("button2");
//         incrementationMauvaiseRep.innerHTML = "mauvaise réponse " + j++;
//     }
// }


// function buttonThree(){
//     if (goodRep == 3){
//         //console.log("+3");
//         incrementationBonneRep.innerHTML = "bonne réponse " + i++;
//     }
//     else{
//         //console.log("button3");
//         incrementationMauvaiseRep.innerHTML = "mauvaise réponse " + j++;
//     }
// }


// function buttonFour(){
//     if (goodRep == 4){
//         //console.log("+4");
//         incrementationBonneRep.innerHTML = "bonne réponse " + i++;
//     }
//     else{
//         //console.log("button4");
//         incrementationMauvaiseRep.innerHTML = "mauvaise réponse " + j++;

//     }
// }




// function findClick(){
    // if(goodRep == 1){
    //     pUn.addEventListener("click" , incrGood);
    //     pDeux.addEventListener("click" , incrBad);
    //     pTrois.addEventListener("click" , incrBad);
    //     pQuatre.addEventListener("click" , incrBad);
    // }
    // else if(goodRep == 2){
    //     pUn.addEventListener("click" , incrBad);
    //     pDeux.addEventListener("click" , incrGood);
    //     pTrois.addEventListener("click" , incrBad);
    //     pQuatre.addEventListener("click" , incrBad);
    // }
    // else if(goodRep == 3){
    //     pUn.addEventListener("click" , incrBad);
    //     pDeux.addEventListener("click" , incrBad);
    //     pTrois.addEventListener("click" , incrGood);
    //     pQuatre.addEventListener("click" , incrBad);
    // }
    // else {
    //     pUn.addEventListener("click" , incrBad);
    //     pDeux.addEventListener("click" , incrBad);
    //     pTrois.addEventListener("click" , incrBad);
    //     pQuatre.addEventListener("click" , incrGood);
    // }
//}
        
//     }
//     if (goodRep == 2){
//         pDeux.addEventListener("click", incrGood);
//     }
//     else {
//         pUn.addEventListener("click" , incrBad);
//         pTrois.addEventListener("click" , incrBad);
//         pQuatre.addEventListener("click" , incrBad);
//     }
//     if (goodRep == 3){
//         pTrois.addEventListener("click", incrGood);
//     }
//     else {
//         pUn.addEventListener("click" , incrBad);
//         pDeux.addEventListener("click" , incrBad);
//         pQuatre.addEventListener("click" , incrBad);
//     }
//     if (goodRep == 4){
//         pQuatre.addEventListener("click", incrGood);
//     }
//     else {
//         pDeux.addEventListener("click" , incrBad);
//         pTrois.addEventListener("click" , incrBad);
//         pUn.addEventListener("click" , incrBad);
//     }
// }





//         console.log(pUn);
//         buttonOne();
//         buttonTwo();
//         buttonThree();
//         buttonFour();
//     }
//     else if (answerThree != undefined){
//         buttonOne();
//         buttonTwo();
//         buttonThree();

//     }
//     else{
//         buttonOne();
//         buttonTwo();

//     }
// }







// function buttonAll(){
//     if (goodRep == 1){
//         incrementationBonneRep.innerHTML = "bonne réponse " + i++;
//     }
//     else if(goodRep == 2){
//         incrementationBonneRep.innerHTML = "bonne réponse " + i++;
//     }
//     else if 

// }








// function resultats(){
    
// }




















    


    // divAnswer.innerHTML = answerOne;
    // divAnswer.innerHTML = answerTwo;
    // divAnswer.innerHTML = answerThree;
    // divAnswer.innerHTML = answerFour;


    




// console.log(allQuizz + "    "+ resultat    + "   " + answerOne + "   " + answerTwo + "   " + answerThree + "    " + answerFour );

// let randomize = allValues["quizz"][Math.floor(Math.random()*max) ];
// console.log(randomize);
// function getRandomInt() {
//     return Math.floor(Math.random() * max);
//   }
// // console.log(AllQuizz);
