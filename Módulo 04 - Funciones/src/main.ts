import "./style.css";

const turnNumber = document.getElementById("turn-number");

// Functions
function resetTurnNumber() {
    setNumber(0);
}

function setNumber(number : number) {    
    if (turnNumber) {
        turnNumber.innerHTML = `${number}`.padStart(2,'0');
    }
}

function followNumber() {
    if (turnNumber) {
        let newNumber = Number(turnNumber.innerHTML);
        newNumber++;
        setNumber(newNumber);
    }
}

function previousNumber() {
    if (turnNumber) {
        let newNumber = Number(turnNumber.innerHTML);

        if (newNumber > 0) {
            newNumber--;
            setNumber(newNumber);
        }
    }
}

function personalTurn() {
    const personalTurn = document.getElementById("personal-turn-number"); 
    if (personalTurn && personalTurn instanceof HTMLInputElement) {
        setNumber(Number(personalTurn.value));        
    }
}


// Events
document.getElementById("reset")?.addEventListener("click", resetTurnNumber);
document.getElementById("follow-button")?.addEventListener("click", followNumber);
document.getElementById("previous-button")?.addEventListener("click", previousNumber);
document.getElementById("insert-number")?.addEventListener("click", personalTurn);
