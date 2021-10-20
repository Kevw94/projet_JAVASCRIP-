
// json 

// div1  == key question +class 
// div2 == réponses
// div3 == 
// good  == bonne réponse 

// let myJson = allQuestions.value;



//console.log(question);


let max = allQuestions.length;
resultat = Math.floor(Math.random()*max);


let allQuizz = allQuestions[resultat]["quizz"];


let answerOne = allQuestions[resultat]["rep1"];
let answerTwo = allQuestions[resultat]["rep2"];
let answerThree = allQuestions[resultat]["rep3"];
let answerFour = allQuestions[resultat]["rep4"];

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
let divQuestions = document.querySelector("#div2");
//divQuestions.setAttribute("style", "bold");


let divAnswer = document.querySelector("#div3");

let divBreak = document.createElement("div");

let pUn = document.createElement("p");
let pDeux = document.createElement("p");
let pTrois = document.createElement("p");
let pQuatre = document.createElement("p");



pUn.addEventListener("click" , nextQuestion );
pDeux.addEventListener("click", nextQuestion);
pTrois.addEventListener("click", nextQuestion);
pQuatre.addEventListener("click" , nextQuestion);

pUn.addEventListener("mouseover" , changeClr );
pDeux.addEventListener("mouseover", changeClr );
pTrois.addEventListener("mouseover", changeClr );
pQuatre.addEventListener("mouseover" , changeClr );

pUn.addEventListener("mouseout" , changeBack );
pDeux.addEventListener("mouseout", changeBack );
pTrois.addEventListener("mouseout", changeBack );
pQuatre.addEventListener("mouseout" , changeBack );





function nextQuestion(){
    
    
    // divAnswer.remove(divBreak);
    // divAnswer.appendChild(divBreak);
    attribuer()
    afficher()

    
    
}

function changeClr(){
    this.style.color = "red"; 
}
function changeBack(){
    this.style.color = "black"; 
}




function afficher(){

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
