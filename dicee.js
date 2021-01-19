


function randomNumberForPlayerOne(){
    var num1 = Math.random()*6
    console.log("Player 1 = dice" + (Math.floor(num1)+1) + ".png")
    document.querySelector(".img1").setAttribute("src", "images/dice" + (Math.floor(num1)+1) + ".png")
    return (Math.floor(num1)+1) 
}

function randomNumberForPlayerTwo(){
    var num2 = Math.random()*6
    console.log("Player 2 = dice" + (Math.floor(num2)+1) + ".png")
    document.querySelector(".img2").setAttribute("src", "images/dice" + (Math.floor(num2)+1) + ".png")
    return(Math.floor(num2)+1)
    
}


function whoIsWinner(){
    num1=randomNumberForPlayerOne()
    num2=randomNumberForPlayerTwo()
    if (num1===num2){
        document.querySelector("h1").innerHTML="Draw";
    } else if (num1>num2){
        document.querySelector("h1").innerHTML="Player 1 won!";
    } else if (num2>num1){
        document.querySelector("h1").innerHTML="Player 2 won!";
    }
}

