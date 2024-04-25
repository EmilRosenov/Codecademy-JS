let userName = "";

userName === "Jane" ? console.log("Hello, Jane!") : console.log("Hello");

let userQuestion = "Am I going to be happy?";
//console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
//console.log(randomNumber)
eightBall = randomNumber + 1;
//console.log(eightBall, typeof eightBall);

switch (eightBall) {
  case 1:
    console.log(userQuestion, "It is certain");
    break;
  case 2:
    console.log(userQuestion, "It is decidedly so");
    break;
  case 3:
    console.log(userQuestion, "Reply hazy try again");
    break;
  case 4:
    console.log(userQuestion, "Cannot predict now");
    break;
  case 5:
    console.log(userQuestion, "Do not count on it");
    break;
  case 6:
    console.log(userQuestion, "My sources say no");
    break;
  case 7:
    console.log(userQuestion, "Outlook not so good");
    break;
  case 8:
    console.log(userQuestion, "Signs point to yes");
    break;
}
