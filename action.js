const keys = document.querySelector('.keyboard');
const guessDisplay = document.querySelector('.guessDisplay');
let riddlesDisplay = document.querySelector('.riddle');

let answer = [];
let guessWord ;
let trys = 3;
let alGuess = [];


const riddles = [
    {
        question: "What has keys but can't open locks?",
        answer: "Piano"
    },
    {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answer: "Echo"
    },
    {
        question: "What has hands but cannot clap?",
        answer: "Clock"
    },
    {
        question: "I have branches, but no fruit, trunk, or leaves. What am I?",
        answer: "Bank"
    },
    {
        question: "What is full of holes but still holds water?",
        answer: "Sponge"
    },
    {
        question: "What can you catch but not throw?",
        answer: "A cold"
    },
    {
        question: "I have keys, but no locks. I have space, but no room. You can enter, but can't go outside. What am I?",
        answer: "Keyboard"
    },
    {
        question: "What has a heart that doesn't beat?",
        answer: "Artichoke"
    },
    {
        question: "What has a neck but no head?",
        answer: "Bottle"
    },
    {
        question: "I have cities but no houses, forests but no trees, and rivers but no water. What am I?",
        answer: "Map"
    },
    {
        question: "What has one eye but cannot see?",
        answer: "Needle"
    },
    {
        question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
        answer: "Pencil"
    },
    {
        question: "I am always hungry, I must always be fed. The finger I touch will soon turn red. What am I?",
        answer: "Fire"
    },
    {
        question: "I can fly without wings, cry without eyes. Wherever I go, darkness follows me. What am I?",
        answer: "Cloud"
    },
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answer: "Letter 'M'"
    },
    {
        question: "I am the beginning of everything, the end of time and space, the beginning of every end, and the end of every place. What am I?",
        answer: "Letter 'E'"
    },
    {
        question: "I am an odd number. Take away a letter and I become even. What number am I?",
        answer: "Seven"
    },
    {
        question: "I am a word of six; my first three letters refer to an automobile; my last three letters refer to a household animal; my first four letters is a fish; my whole is found in your room. What am I?",
        answer: "Carpet"
    },
    {
        question: "I am always on the dinner table, but you can't eat me. What am I?",
        answer: "Plate"
    },
    {
        question: "What can be broken but is never held?",
        answer: "Promise"
    },
    {
        question: "What has a heart that doesn't beat and a bed that doesn't sleep?",
        answer: "Hospital"
    },
    {
        question: "I have keys but no locks. I have space but no room. You can enter, but can't go outside. What am I?",
        answer: "Keyboard"
    },
    {
        question: "I am an insect, and the first part of my name is the name of another insect. What am I?",
        answer: "Beetle"
    },
    {
        question: "What has a face that doesn't frown, a bed but never sleeps, and runs but never walks?",
        answer: "River"
    },
    {
        question: "I am taken from a mine and shut in a wooden case. When you need me, you throw me away. What am I?",
        answer: "Matchstick"
    },
    {
        question: "What gets wet while drying?",
        answer: "Towel"
    },
    {
        question: "I am always in front of you but can never be seen. What am I?",
        answer: "Future"
    },
    {
        question: "What has many teeth but can't bite?",
        answer: "Comb"
    },
    {
        question: "What has a head and a tail but no body?",
        answer: "Coin"
    },
    {
        question: "What has a thumb and four fingers but is not a hand?",
        answer: "Glove"
    }
];

const updateRiddle = () => {
    let index = Math.floor(Math.random() * riddles.length);
    if (alGuess.includes(`${index}`)) {
        updateRiddle();
    }
    alGuess.push(`${index}`);

    guessWord = riddles[index].answer;
    riddlesDisplay.innerHTML = `${riddles[index].question}`;
}; 
updateRiddle();
// Functions
const endGame = () => {
    let imgDisplay = document.querySelector('.imageDisplay');
    if (trys === 0){
        riddlesDisplay.innerHTML = `
        <fieldset class = "answerDisplay">
    <legend>The Answer is</legend>
    <p class="showAnswer">${guessWord}</p>
    <div class = "slug">Let it sink in.</div>
</fieldset>`;
        // alert("alert win");
    }
}
const evaluate = () => {
    if(answer.length != guessWord.length) return;
    let tile = document.querySelector('.guessDisplay');

    let guess = answer.reduce((one, two) =>  one + two).toLowerCase();
    guessWord = guessWord.toLowerCase();
    if(trys === 0) return;
    

    if (guessWord === guess){
        
        tile.classList.toggle('correct');
        trys++;
        lifeBar();
        setTimeout(() => {
        guessDisplay.innerHTML = "";
        answer = [];
        tile.classList.toggle('correct');
        updateRiddle();
        }, 2000);
        
    } 
    
    if (guessWord !== guess){

        tile.classList.add('wrong');
        trys--;
        lifeBar();
        setTimeout(() => {
        guessDisplay.innerHTML = "";
        answer = [];
        tile.classList.remove('wrong');

    }, 2000);

        console.log('try again');
    }

    let finishGuess = trys === 0;
    if(finishGuess){
    endGame();

    }

    
    // lifeBar();
};
const purge = () => {
    answer.pop();
    renderLetter(guessDisplay);

}
const lifeBar = () => {
    const lifeLine = document.querySelector('.lifeLine');
    if(trys === 2){
        lifeLine.style.background = 'linear-gradient(180deg, white, white, yellow, yellow, red, red)';

    } else if (trys === 1){
        lifeLine.style.background = 'linear-gradient(180deg, white, white, white, red)';

    } else if (trys === 0){
        lifeLine.style.background = 'linear-gradient(180deg, white, white)';

    }
};
const isALetter = (key) => {
    return key.length === 1 && key.match(/[a-z]/i);
};
const addInput = (key) => {
    if(!isALetter(key)) return;
    if(trys === 0) return;
    if (answer.length === guessWord.length) return;
    answer.push(key);
    renderLetter(guessDisplay);
};
const renderLetter = (parent) => {
    parent.innerHTML = "";

    for (let i = 0; i < answer.length; i++) {
        let tile = document.createElement('div');
        tile.setAttribute('class', 'guess-tile');
        tile.innerHTML = `${answer[i]}`;
        parent.appendChild(tile);
    }

};

// Events

keys.addEventListener('click', (e) => {
    let key = e.target.getAttribute('data-key');
    if (!e.target.classList.contains('alphabet')) return;

    if (e.target.classList.contains('enter')) {
        if (answer.length != guessWord.length) return;
        evaluate();
    } else if (e.target.classList.contains('delete')) {
        purge();
    } else if (e.target.getAttribute('data-key')) {
        addInput(key);
    }

});
document.addEventListener('keydown', (e) => {
    let key = e.key;
    if (key === 'Enter') {
        evaluate();
    } else if (key === 'Backspace') {
        purge();
    } else if (isALetter(key)) {
        addInput(key);
    }
});