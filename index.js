var readlineSync = require("readline-sync");
var news = readlineSync.question("Pleas write the news. \n");
var newsSource = readlineSync.question("what is the source of above news? \n")

var userAnswer = newsSource.toLowerCase()
var realAnswer = userAnswer

if(realAnswer ==="whatsapp" || realAnswer==="facebook"){
  console.log("Dont believe in fake news ")  
}else  {
  console.log("yes!it is right")
}
