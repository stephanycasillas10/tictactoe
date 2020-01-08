let currentPlayer =  "O"; 
let numturns = 0;
let gameover = false;
let tile1 = 1;
let tile2 = 2;
let tile3 = 3;
let tile4 = 4;
let tile5 = 5;
let tile6 = 6;
let tile7 = 7;
let tile8 = 8;
let tile9 = 9;
function performLogic(buttonId,tileId) {
    if(gameover){
        return
    }
    $(buttonId).hide();
    $(tileId).text(currentPlayer);
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }

    numturns++;
    checkWinner();
    checkTie();
   
}
function checkWinner(){
    if(tile1===tile2 && tile2===tile3) {
        $(".header").text(tile1 + "Wins")
        gameover=true
    }
    if(tile4===tile5 && tile5===tile6){
        $(".header").text(tile4 + " Wins")
        gameover=true
    }
    if(tile7===tile8 && tile8===tile9){
        $(".header").text(tile7 +" Wins")
        gameover=true
    }
    if(tile1===tile4 && tile4===tile7){
        $(".header").text(tile1 + " Wins")
        gameover=true
    }
    if(tile2===tile5 && tile5===tile8){
        $(".header").text(tile2 + " Wins")
        gameover=true
    }
    if(tile3===tile6 && tile6===tile9){
       $(".header").text(tile3 + " Wins")
       gameover=true
    }
    if(tile1===tile5 && tile5===tile9){
        $(".header").text(tile1 + " Wins")
        gameover=true
    }
    if(tile3===tile5 && tile5===tile7){
        $(".header").text(tile3 + " Wins")
        gameover=true
    }

}

function checkTie(){
    if (numturns===9){
        $(".header").text("It's a Draw!")
        gameover=true
    }

}


$("#button1").click(function() {
    tile1=currentPlayer
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    tile2=currentPlayer
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    tile3=currentPlayer
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    tile4=currentPlayer
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    tile5=currentPlayer
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    tile6=currentPlayer
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    tile7=currentPlayer
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    tile8=currentPlayer
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    tile9=currentPlayer
    performLogic("#button9","#tile9");
});

