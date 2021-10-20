let buttonIncollable = document.querySelector("#button2");

let suppr = document.querySelector("#regles");
let supprTime = document.querySelector("#tmp");
//console.log(buttonIncollable);
let timerElement = document.querySelector("#div1");
// let monProjet = document.querySelector('b');
// let space = document.createElement('br');

// timerElement.appendChild(space); 
let buttonPause = document.createElement("button");
buttonPause.setAttribute("class" , "pause");

buttonPause.innerHTML = "PAUSE" ; 








let time = 120;



buttonIncollable.addEventListener("click" , goInGame);










function goInGame(){ // func delete rules
    console.log("bonjour");
    suppr.remove();
    supprTime.remove();
    
    afficher();
    document.body.appendChild(buttonPause);
    countDown(); // call the function countDown
    setInterval(countDown , 1000);
    // timerElement.appendChild(space); 
    
}

function countDown(){ // timer for the game 
    let minutes = parseInt(time / 60, 10);
    let secondes = parseInt(time % 60 , 10);
    minutes = minutes < 10 ? "0" + minutes : minutes; // à expliquer
    secondes = secondes < 10 ? "0" + secondes : secondes; // à expliquer 
    timerElement.innerHTML = minutes + " : " + secondes; //à expliquer 
    // time --; 
    time = time <= 0 ? 0 : time - 1;
   
}

