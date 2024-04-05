var number1 = Math.floor(Math.random() * 6) + 1;
var diceImage = "dice" + number1 + ".png";
var imageSource = "image/" + diceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);


var number2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "dice" + number2 + ".png";
var imageSource2 = "image/" + diceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);


if(number1==number2){
    document.querySelector(".winner").innerHTML = "Its a draw 🥱";
}
else if(number1<number2){
    document.querySelector(".winner").innerHTML = "Player 2 wins 🎉";
}
else{
    document.querySelector(".winner").innerHTML = "Player 1 wins 🎉";
}