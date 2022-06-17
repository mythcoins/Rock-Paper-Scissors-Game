//const selectionButtons = document.querySelectorAll('[data-selection]');

/*selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection);
}
*/


let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const result_div = document.querySelector('.result');

function getComputerChoice() {
    const choice = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber]
}

function convetToWord(letter) {
    if(letter === "r")
    return "Rock";
    if(letter === "p") 
    return "Paper";
    else return "Scissors"
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    result_div.innerHTML = `${convetToWord(userChoice)} ${smallUserWord} beats ${convetToWord(computerChoice)} ${smallCompWord} . You WIN!"`
}

function lose(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    result_div.innerHTML = `${convetToWord(userChoice)} ${smallUserWord} loses to ${convetToWord(computerChoice)} ${smallCompWord} . You LOST!"`
}

function tie(userChoice, computerChoice) {
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    result_div.innerHTML = `${convetToWord(userChoice)} ${smallUserWord} and ${convetToWord(computerChoice)} ${smallCompWord} . Its a TIE!"`
} 

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', e => {
        game('r');
    })

    paper_div.addEventListener('click', e => {
        game('p');
    })

    scissors_div.addEventListener('click', e => {
        game('s');
    })
}

main();

