console.clear();

const qn1 = document.getElementById("qn1")
const qn2 = document.getElementById("qn2")
const qn3 = document.getElementById("qn3")
const qn4 = document.getElementById("qn4")
const qn5 = document.getElementById("qn5")

const choices1 = Array.from(document.getElementsByClassName("choices1"))
const choices2 = Array.from(document.getElementsByClassName("choices2"))
const choices3 = Array.from(document.getElementsByClassName("choices3"))
const choices4 = Array.from(document.getElementsByClassName("choices4"))
const choices5 = Array.from(document.getElementsByClassName("choices5"))

const btn = document.getElementById('btn');
const resulttext = document.getElementById('result-text') 
const resultsdiv = document.getElementById('results-div') 
const loader = document.getElementById("loader")
const main = document.getElementById("main")

const backbtn = document.getElementById('back');

let score = 0;
let currentQuestion = {};
let result;
let selectedChoice;
let selectedAnswer;
var arr = [];

let questions = [];

// fetch("https://8a1feddc-efa6-483b-9ef8-e3ef314346df.mock.pstmn.io/finalquiz").then(res => {
//     return res.json();
// }).then(loadedQuestions => {
//     questions = loadedQuestions;
//     startGame();
// }).catch(err => {
//     console.log(err);
// })

fetch("/jsProject/quiz-app.json").then(res => {
    return res.json();
}).then(loadedQuestions => {
    questions = loadedQuestions;
    startGame();
}).catch(err => {
    console.log(err);
})

// CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 5;

function optionMaker(choice, i) {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];

    // choice.addEventListener("click", e => {
    //     selectedChoice = e.target;
    //     selectedAnswer = selectedChoice.dataset["number"];
    //     const result = selectedAnswer == availableQuestions[i].answer ? 'correct' : 'incorrect';
    //     console.log(result)
    //     if(result === 'correct'){
    //         incrementScore(CORRECT_BONUS);
    //     }
    // })
}

startGame = () => {
    score = 0;
    availableQuestions = [ ... questions];

    main.classList.remove('hidden');
    loader.classList.add('hidden');
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    for(var i=0; i<availableQuestions.length; i++)
    {
        arr[i] = availableQuestions[i].answer;
    }

    for(var i=0; i<availableQuestions.length; i++)
    {
        switch(i)
        {
            case 0: qn1.innerText = `Q1. ${availableQuestions[i].question}`;
            
            currentQuestion = availableQuestions[i];
            choices1.forEach(choice => {
                optionMaker(choice, i);
            })
            break;
            case 1: qn2.innerText = `Q2. ${availableQuestions[i].question}`;
            currentQuestion = availableQuestions[i];
            choices2.forEach(choice => {
                optionMaker(choice, i);
            })
            break;
            case 2: qn3.innerText = `Q3. ${availableQuestions[i].question}`;
            currentQuestion = availableQuestions[i];
            choices3.forEach(choice => {
                optionMaker(choice, i);
            })
            break;
            case 3: qn4.innerText = `Q4. ${availableQuestions[i].question}`;
            currentQuestion = availableQuestions[i];
            choices4.forEach(choice => {
                optionMaker(choice, i);
            })
            break;
            case 4: qn5.innerText = `Q5. ${availableQuestions[i].question}`;
            currentQuestion = availableQuestions[i];
            choices5.forEach(choice => {
                optionMaker(choice, i);
            })
            break;
        }
    }
}

btn.addEventListener('click', function() {
    resulttext.innerText = `${score}/${MAX_QUESTIONS}`;
    resultsdiv.style.display = "flex";
})

backbtn.addEventListener('click', function() {
    resultsdiv.style.display = "none";
})

incrementScore = num => {
    score += num;
}

for(var i=1; i<=5; i++)
{
    var radios = document.forms["form"+i].elements["q"+i];
    switch(i)
    {
        case 1:     for(var j=0, max=radios.length; j < max; j++) {
                    radios[j].onclick = function() {
                        if(this.value == arr[0])
                        {
                            incrementScore(CORRECT_BONUS);
                        }}}
                        break;
        case 2:     for(var j=0, max=radios.length; j < max; j++) {
                    radios[j].onclick = function() {
                        if(this.value == arr[1])
                        {
                            incrementScore(CORRECT_BONUS);
                        }}}
                        break;
        case 3:     for(var j=0, max=radios.length; j < max; j++) {
                    radios[j].onclick = function() {
                        if(this.value == arr[2])
                        {
                            incrementScore(CORRECT_BONUS);
                        }}}
                        break;
        case 4:     for(var j=0, max=radios.length; j < max; j++) {
                    radios[j].onclick = function() {
                        if(this.value == arr[3])
                        {
                            incrementScore(CORRECT_BONUS);
                        }}}
                        break;
        case 5:     for(var j=0, max=radios.length; j < max; j++) {
                    radios[j].onclick = function() {
                        if(this.value == arr[4])
                        {
                            incrementScore(CORRECT_BONUS);
                        }}}
                        break;
    }
}