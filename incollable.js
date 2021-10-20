let buttonIncollable = document.querySelector("#button2");

let suppr = document.querySelector("#regles");
//console.log(buttonIncollable);
let timerElement = document.querySelector("#tmp");

let time = 120;



buttonIncollable.addEventListener("click" , goInGame);










function goInGame(){ // func delete rules
    console.log("bonjour");
    suppr.remove();
    countDown(); // call the function countDown
    setInterval(countDown , 1000);

    
}

function countDown(){ // timer for the game 
    let minutes = parseInt(time / 60, 10);
    let secondes = parseInt(time % 60 , 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    timerElement.innerHTML = minutes + " : " + secondes;
    // time --; 
    time = time <= 0 ? 0 : time;
    

}

