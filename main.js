const fortuneCookie = document.querySelector(".fortuneCookie")
//Variables
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random()* 10 )
let openOtherCookie = document.querySelector("#openOther")

//Events
fortuneCookie.addEventListener('click', messageOfLuck)
openOtherCookie.addEventListener('click', openedAgain)
//Functions
function messageOfLuck() {
    toggleScreen ()
    
    switch(randomNumber) {
        case 1:
            document.querySelector(".screen2 .wrapper").innerText = `Don't eat the paper.`.
             break
        case 2:
            document.querySelector(".screen2 .wrapper").innerText = `A foolish man listens to his heart. A wise man listens to cookies. `
            break
        case 3:
            document.querySelector(".screen2 .wrapper").innerText = `A fanatic is one who can't change his mind, and won't change the subject.`
            break
        case 4:
            document.querySelector(".screen2 .wrapper").innerText = `Do not mistake temptation for opportunity.`
            break
        case 5:
            document.querySelector(".screen2 .wrapper").innerText = `He who laughs at himself never runs out of things to laugh at.`
            break
        case 6:
            document.querySelector(".screen2 .wrapper").innerText = `Some men dream of fortunes, others dream of cookies.`
            break
        case 7:
            document.querySelector(".screen2 .wrapper").innerText = `Actions speak louder than fortune cookies.`          
            break
        case 8:    
        document.querySelector(".screen2 .wrapper").innerText = `It is about time I got out of that cookie.`
            break
        case 9:
            document.querySelector(".screen2 .wrapper").innerText = `Only listen to the fortune cookie; disregard all other fortune telling units.`
            break
        case 10:
            document.querySelector(".screen2 .wrapper").innerText = `Avoid taking unnecessary gambles. Lucky numbers: 10, 12, 21, 28, 35`
            break
        default:
            break
    }
}
function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
   
} 
function openedAgain() {
    toggleScreen ()
    randomNumber = Math.round(Math.random()* 10 )
    
}
