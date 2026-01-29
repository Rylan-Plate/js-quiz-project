let questionArray = [
    "In welk seizoen van welk chapter is de Havoc Pump Shotgun uitgekomen?", 
    "Welke kerstskin zat in Winterfest 2022? (Dit is de Winterfest in het begin van Chapter 4)", 
    "Hoe heet de shotgun die exact dezelfde model heeft als de Sharp Tooth Shotgun?", 
    "Welk chapter heeft de meeste updates gehad?", 
    "Hoeveel Peely varianten zijn er? (tot en met chapter 7 season 1)"
]
let answerArray = [
    ["Chapter 2 Season 5", "Chapter 4 Season 2", "Chapter 3 Season 3", "Chapter 5 Season 2"], 
    ["Arctic Adeline", "Polar Peely", "Winterfest Bushranger", "Santa Dogg"], 
    ["Pump Shotgun", "Ranger Shotgun","Frenzy Auto Shotgun", "Heavy Shotgun"],
    ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"], 
    ["14", "15", "16" ,"17"]
]
let correctAnswers = [1, 0, 0, 0, 2]

let currentQuestion = 0
let score = 0

function showQuestionsAndAnswers(questionArray, currentQuestion, answerArray){
    document.getElementById("question").innerHTML = questionArray[currentQuestion]
    document.getElementById("a1").innerHTML = answerArray[currentQuestion][0]
    document.getElementById("a2").innerHTML = answerArray[currentQuestion][1]
    document.getElementById("a3").innerHTML = answerArray[currentQuestion][2]
    document.getElementById("a4").innerHTML = answerArray[currentQuestion][3]
    return currentQuestion + 1
}
document.getElementById("nextQuestion").addEventListener("click", () =>{
    currentQuestion = showQuestionsAndAnswers(questionArray, currentQuestion, answerArray)
})