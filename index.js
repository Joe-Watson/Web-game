// Choose Player Name

var randomNumber1 = Math.floor((Math.random() * 6)) + 1
var randNumberOfImageDice1 = "Dice" + randomNumber1 + ".png"
var imageSource1 = "Image/" + randNumberOfImageDice1
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", imageSource1)
console.log(randomNumber1)
    // Second Random image
var randomNumber2 = Math.floor((Math.random() * 6)) + 1
var randNumberOfImageDice2 = "Dice" + randomNumber2 + ".png"
var imageSource2 = "Image/" + randNumberOfImageDice2
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", imageSource2)
console.log(randomNumber2)
    // condition


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player1 wins 🥳"

} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " 🥳 player2 wins 🚩"
} else {
    document.querySelector("h1").innerHTML = " Dwar!"

}