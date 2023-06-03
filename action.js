const keys = document.querySelector('.keyboard');
const guessDisplay = document.querySelector('.guessDisplay');
let riddlesDisplay = document.querySelector('.riddle');

let answer = [];
let guessWord ;
let trys = 3;
let alGuess = [];


const riddles = [
    {
      question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
      answer: "Echo"
    },
    {
      question: "What has keys but can't open locks?",
      answer: "Piano"
    },
    {
      question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
      answer: "Pencil"
    },
    {
      question: "I am the beginning of the end, and the end of time and space. I am essential to creation, and I surround every place. What am I?",
      answer: "E"
    },
    {
      question: "I am always hungry, I must always be fed, the finger I touch will soon turn red. What am I?",
      answer: "Fire"
    },
    {
      question: "I have keys but no locks. I have space but no room. You can enter, but can't go outside. What am I?",
      answer: "Keyboard"
    },
    {
      question: "I am the ultimate killing machine, used not once but a hundred times. What am I?",
      answer: "Gun"
    },
    {
      question: "What runs but never walks, has a mouth but never talks, has a bed but never sleeps, and has a head but never weeps?",
      answer: "River"
    },
    {
      question: "I'm as light as a feather, yet the strongest person can't hold me for much longer than a minute. What am I?",
      answer: "Breath"
    },
    {
      question: "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
      answer: "Fire"
    },
    {
      question: "The more you take, the more you leave behind. What am I?",
      answer: "Footsteps"
    },
    {
      question: "I am a word of letters three; add two and fewer there will be. What word am I?",
      answer: "Few"
    },
    {
      question: "I am full of holes but can still hold water. What am I?",
      answer: "Sponge"
    },
    {
      question: "I can be cracked, made, told, and played. What am I?",
      answer: "Joke"
    },
    {
      question: "You see me once in June, twice in November, and not at all in May. What am I?",
      answer: "e"
    },
    {
      question: "I can be long or short. I can be grown or bought. I can be painted or left bare. I can be round or square. What am I?",
      answer: "Fingernail"
    },
    {
      question: "I can be cracked, made, told, and played. What am I?",
      answer: "Joke"
    },
    {
      question: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
      answer: "Candle"
    },
    {
      question: "I can fly without wings, cry without eyes, and run without legs. What am I?",
      answer: "Cloud"
    },
   
    {
      question: "I am black when you buy me, red when you use me, and gray when you throw me away. What am I?",
      answer: "Charcoal"
    },
    {
      question: "What is so fragile that saying its name breaks it?",
      answer: "Silence"
    },
    {
      question: "I'm always in front and never behind. What am I?",
      answer: "Future"
    },
    {
      question: "What can be caught but never thrown?",
      answer: "Cold"
    },
    {
      question: "I am an odd number. Take away one letter and I become even. What number am I?",
      answer: "Seven"
    },
    {
      question: "I am a box that holds keys without locks, yet they can unlock your soul. What am I?",
      answer: "Piano"
    },
    {
      question: "I can be cracked, made, told, and played. What am I?",
      answer: "Joke"
    },
    {
      question: "I'm not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
      answer: "Fire"
    },
    {
      question: "I am always hungry, I must always be fed, the finger I touch will soon turn red. What am I?",
      answer: "Fire"
    },
    {
      question: "What has many keys but can't open any locks?",
      answer: "Piano"
    },
    {
      question: "I am a word of letters three; add two and fewer there will be. What word am I?",
      answer: "Few"
    },
    {
      question: "I can be cracked, made, told, and played. What am I?",
      answer: "Joke"
    },
    {
      question: "I am full of holes but can still hold water. What am I?",
      answer: "Sponge"
    },
    {
      question: "I can be long or short. I can be grown or bought. I can be painted or left bare. I can be round or square. What am I?",
      answer: "Fingernail"
    },
    {
      question: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
      answer: "Candle"
    },
    {
      question: "I can fly without wings, cry without eyes, and run without legs. What am I?",
      answer: "Cloud"
    },
    {
      question: "I'm always in front and never behind. What am I?",
      answer: "Future"
    },
    {
      question: "What can be caught but never thrown?",
      answer: "Cold"
    },
    {
      question: "I am an odd number. Take away one letter and I become even. What number am I?",
      answer: "Seven"
    },
    {
      question: "I am a box that holds keys without locks, yet they can unlock your soul. What am I?",
      answer: "Piano"
    },
    {
      question: "I am a word that is spelled the same backward and forward. What am I?",
      answer: "Palindrome"
    },
    {
      question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
      answer: "Pencil"
    },
    {
      question: "I am a ship that can be made to ride the greatest waves. I am not built by objects, but by minds. What am I?",
      answer: "Friendship"
    },
    {
      question: "I'm not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
      answer: "Fire"
    },
    {
      question: "I'm as light as a feather, yet the strongest person can't hold me for much longer than a minute. What am I?",
      answer: "Breath"
    },
    {
      question: "I am the beginning of the end, and the end of time and space. I am essential to creation, and I surround every place. What am I?",
      answer: "E"
    },
    {
      question: "I am always hungry, I must always be fed, the finger I touch will soon turn red. What am I?",
      answer: "Fire"
    },
    {
      question: "I have keys but no locks. I have space but no room. You can enter, but can't go outside. What am I?",
      answer: "Keyboard"
    },
    {
      question: "I am full of holes, but still holds water. What am I?",
      answer: "Sponge"
    },
    {
      question: "I am the ultimate killing machine, used not once but a hundred times. What am I?",
      answer: "Gun"
    },
    {
      question: "What runs but never walks, has a mouth but never talks, has a bed but never sleeps, and has a head but never weeps?",
      answer: "River"
    },
    {
      question: "I have a heart that doesn't beat. I have a home but I never sleep. I can take a man's house and build another's. And I love to play games with my many brothers. I am a king among fools. Who am I?",
      answer: "Ace of Spades"
    },
    {
      question: "I'm as light as a feather, yet the strongest person can't hold me for much longer than a minute. What am I?",
      answer: "Breath"
    },
    {
      question: "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
      answer: "Fire"
    },
    {
      question: "I am a word of letters three; add two and fewer there will be. What word am I?",
      answer: "Few"
    },
    {
      question: "I am full of holes but can still hold water. What am I?",
      answer: "Sponge"
    },
    {
      question: "I can be cracked, made, told, and played. What am I?",
      answer: "Joke"
    },
    {
      question: "You see me once in June, twice in November, and not at all in May. What am I?",
      answer: "e"
    },
    {
      question: "I can be long or short. I can be grown or bought. I can be painted or left bare. I can be round or square. What am I?",
      answer: "Fingernail"
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