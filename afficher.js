
// json 

// div1  == key question +class 
// div2 == réponses
// div3 == 
// good  == bonne réponse 

// let myJson = allQuestions.value;



//console.log(question);


let max = allQuestions.length;

resultat = Math.floor(Math.random()*max);


// let allQuizz = allQuestions[resultat]["quizz"];


let allQuizz = allQuestions[resultat]["quizz"];
let answerOne = allQuestions[resultat]["rep1"];
let answerTwo = allQuestions[resultat]["rep2"];
let answerThree = allQuestions[resultat]["rep3"];
let answerFour = allQuestions[resultat]["rep4"];
let goodRep = allQuestions[resultat]["goodrep"];

// console.log(goodRep);


// let allQuizz; 
// let answerOne; 
// let answerTwo ;
// let answerThree; 
// let answerFour;






function attribuer(){

    max = allQuestions.length;
    let resultat = Math.floor(Math.random()*max);


    allQuizz = allQuestions[resultat]["quizz"];
    answerOne = allQuestions[resultat]["rep1"];
    answerTwo = allQuestions[resultat]["rep2"];
    answerThree = allQuestions[resultat]["rep3"];
    answerFour = allQuestions[resultat]["rep4"];
    goodRep = allQuestions[resultat]["goodrep"];
    console.log(goodRep);
    console.log(answerFour);
    console.log(answerThree);
    console.log(answerTwo);
    console.log(answerOne);
    // afficher();





}







// // let i = 1; 
// let AllQuizz = allValues[i]["quizz"];



// function afficher(){
//     for (let i  in  allValues ){
//     let allQuizz =  allValues[i]["quizz"];
//     console.log(allQuizz);
    
    
// }

// }
// afficher();
let divQuestions = document.querySelector("#div2"); // questions
//divQuestions.setAttribute("style", "bold");


let divAnswer = document.querySelector("#div3");

let divBreak = document.createElement("div");

let pUn = document.createElement("p");
let pDeux = document.createElement("p");
let pTrois = document.createElement("p");
let pQuatre = document.createElement("p");



pUn.addEventListener("click" , nextQuestion);
pDeux.addEventListener("click", nextQuestion);
pTrois.addEventListener("click", nextQuestion);
pQuatre.addEventListener("click" , nextQuestion);

pUn.addEventListener("click" , buttonOne);
pDeux.addEventListener("click", buttonTwo);
pTrois.addEventListener("click", buttonThree);
pQuatre.addEventListener("click" , buttonFour);

pUn.addEventListener("mouseover" , changeClr );
pDeux.addEventListener("mouseover", changeClr );
pTrois.addEventListener("mouseover", changeClr );
pQuatre.addEventListener("mouseover" , changeClr );

pUn.addEventListener("mouseout" , changeBack );
pDeux.addEventListener("mouseout", changeBack );
pTrois.addEventListener("mouseout", changeBack );
pQuatre.addEventListener("mouseout" , changeBack );


function buttonOne(){
    if (goodRep == 1){
        console.log("+1")
    }
    else{
        console.log("button1");
    }
}

function buttonTwo(){
    if (goodRep == 2 ){
        console.log("+2");
    }
    else{
        console.log("button2");
    }
}


function buttonThree(){
    if (goodRep == 3){
        console.log("+3");
    }
    else{
        console.log("button3");
    }
}


function buttonFour(){
    if (goodRep == 4){
        console.log("+4");
    }
    else{
        console.log("button4");
    }
}




function nextQuestion(){
    
    // resultats();
    // divAnswer.remove(divBreak);
    // divAnswer.appendChild(divBreak);
    // attribuer();
    afficher();

    
    
}
// function resultats(){
    
// }


function changeClr(){
    this.style.color = "red"; 
}
function changeBack(){
    this.style.color = "black"; 
}




function afficher(){
    attribuer();

    divQuestions.innerHTML = allQuizz;
    
    


    divAnswer.appendChild(divBreak);

    

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
    }
    else {
        pUn.innerHTML = answerOne; 
        divBreak.appendChild(pUn);
        pDeux.innerHTML = answerTwo;
        divBreak.appendChild(pDeux);
    }
   

}


    


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
