let score = 0;

function bounceButton() {
    const button = document.querySelector('.rock');
    button.classList.add('bounce');

    // Remove the bounce class after animation to reset
    button.addEventListener('animationend', () => {
        button.classList.remove('bounce');
    }, { once: true });
}

function bounceButtonP() {
    //const button = document.querySelector('.rock');
    button.classList.add('bounce');
    const buttonP = document.querySelector('.paper');
    buttonP.classList.add('bounce');

    // Remove the bounce class after animation to reset
    button.addEventListener('animationend', () => {
        button.classList.remove('bounce');
    }, { once: true });
}

function rockPress() {
    alert("Rock");
}

function compChoice() {
    return Math.floor(Math.random() * 3);
    
}


function results(WL) {
    const textElement = document.getElementById("score");
    if(WL == 1) {
        score++;
        textElement.textContent = score;
    }
    else {
        if(score === 0){
        textElement.textContent = 0;
        }else {
            score--;
            textElement.textContent = score;
        }
    }

}

function resultAnnouncement(answer) {
    const resultText = document.getElementById("results");

    if(answer === 'win'){
        resultText.textContent = "You WIN";
    }
    else if (answer === 'loss') {
        resultText.textContent = "You LOSS";
    }
    else {
        resultText.textContent = "It's a TIE";
    }

}

function rock() {
    let computer = compChoice();
    if(computer < 1) {
        resultAnnouncement('tie');
        animateButtonBounce();
    }
    else if(computer < 2 && computer > 1){
        results(1);
        resultAnnouncement('win');
        animateButtonBounce();
    }
    else {
        results(0);
        resultAnnouncement('loss');
        animateButtonShake();
    }
}

function paper() {
    let computer = compChoice();
    if(computer < 1) {
        results(1);
        resultAnnouncement('win');
        animateButtonBounce();
    }
    else if(computer < 2 && computer > 1){
        resultAnnouncement('tie');
        animateButtonBounce();
    }
    else {
        results(0);
        resultAnnouncement('loss');
        animateButtonShake();
    }
}


function scissors() {
    let computer = compChoice();
    if(computer < 1) {
        results(0);
        resultAnnouncement('loss');
        animateButtonShake();
    }
    else if(computer < 2 && computer > 1){
        results(1);
        resultAnnouncement('win');
        animateButtonBounce();
    }
    else {
        resultAnnouncement('tie');
        animateButtonBounce();
    }
}


function animateButtonBounce() {
    const button = event.target;
    button.classList.add("bounce");

    button.addEventListener('animationend', () => {
        button.classList.remove("bounce");}), {once: true}
}


function animateButtonShake() {
    const button = event.target;
    button.classList.add("shake");

    button.addEventListener('animationend', () => {
        button.classList.remove("shake");}, {once: true})
}
