// game.js

const words = ["CAT", "DOG", "FARM", "TREE", "HOUSE", "BOOK", "SHIP", "STAR", "GAME", "MOON"];
let currentWord = words[Math.floor(Math.random() * words.length)];
let currentIndex = 0;
let score = 0;

const grid = document.getElementById('alphabet-grid');
const city = document.getElementById('city');

function clearGrid() {
    while(grid.firstChild) grid.removeChild(grid.firstChild);
}

function spawnNextLetter() {
    clearGrid();
    if(currentIndex >= currentWord.length) return;

    const letter = currentWord[currentIndex];
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.innerText = letter;

    card.style.top = Math.random() * (grid.offsetHeight - 60) + 'px';
    card.style.left = Math.random() * (grid.offsetWidth - 60) + 'px';

    card.onclick = () => {
        speakLetter(letter);
        currentIndex++;
        score += 5;
        updateScore();
        card.classList.add('hit');
        setTimeout(() => {
            if(grid.contains(card)) grid.removeChild(card);
            if(currentIndex === currentWord.length) {
                addWordToCity(currentWord);
                currentWord = words[Math.floor(Math.random() * words.length)];
                currentIndex = 0;
            }
            spawnNextLetter();
        }, 300);
    };

    grid.appendChild(card);
}

function updateScore() {
    document.getElementById('scoreboard').innerText = `Score: ${score}`;
}

function speakLetter(l) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = l;
    window.speechSynthesis.speak(msg);
}

function addWordToCity(word) {
    const tower = document.createElement('div');
    tower.className = 'city-tower';

    const colors = ["#3498db","#e67e22","#9b59b6","#1abc9c","#e74c3c"];
    const color = colors[Math.floor(Math.random()*colors.length)];

    for(let letter of word) {
        const block = document.createElement('div');
        block.className = 'city-block';
        block.style.backgroundColor = color;
        block.innerText = letter;
        tower.appendChild(block);
    }

    city.appendChild(tower);
}

// Start the first letter
spawnNextLetter();
