let randomNumber1 = Math.floor(Math.random()*6+1);
let randomNumber2 = Math.floor(Math.random()*6+1);

//Generating random images.
let randomDiceImage1 = "dice" + randomNumber1 +".png"; //Very smart way to create file number HAtts off.
console.log(randomDiceImage1);
let randomDiceImage2 = "dice" + randomNumber2 +".png"; //Very smart way to create file number HAtts off.

//Generat   ing image sources
let randomImageSource1="images/"+randomDiceImage1; //Generating image directory.
console.log(randomImageSource1);
let randomImageSource2="images/"+randomDiceImage2; //Generating image directory.


//Accessing the images using DOM
let image1=document.getElementsByClassName("img1")[0];
console.log(image1);

let image2=document.getElementsByClassName("img2")[0];
console.log(image2);

//Accesssing the image attribute using DOM and changing it.
image1.setAttribute("src",randomImageSource1);
image2.setAttribute("src",randomImageSource2);

if (randomNumber1>randomNumber2) {
    document.getElementById("result").innerHTML="Player 1 WON!!!!!"
}
else if (randomNumber2>randomNumber1) {
    document.getElementById("result").innerHTML="Player 2 WON!!!!!"

}