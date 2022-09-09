let countEl = document.getElementById("score")
let countF = document.getElementById("guest-score")
let resetBt = document.getElementById("reset-btn")
let count = 0
let countG = 0
function incrementOne() {
    count += 1
    countEl.textContent = count
}
function incrementTwo() {
    count +=2
    countEl.textContent = count
}
function incrementThree() {
    count +=3
    countEl.textContent = count
}
function incrementOneGuest() {
     countG += 1
    countF.textContent = countG
}
function incrementTwoGuest() {
     countG += 2
    countF.textContent = countG
}
function incrementThreeGuest() {
     countG += 3
    countF.textContent = countG
}
function reset() {
    count = 0
    countEl.textContent = count
    countG = 0
    countF.textContent = countG
}