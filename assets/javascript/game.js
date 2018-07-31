$( document ).ready(function(){
    // randomly select number between 19 and 120 for the player to get to
    var Random=Math.floor(Math.random()*101+19)
   
    $("#randomNumber").text(Random);

    // generate random number for each crystal
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    // win/loss variables
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;

  // scores
  $("#totalWins").text(wins);
  $("#totalLosses").text(losses);

  //reset
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $("#randomNumber").text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        playerTotal= 0;
        $("#total").text(playerTotal);
        } 

  //add the wins
  function winner(){
  alert("Winner!");
    wins++; 
    $("#totalWins").text(wins);
    reset();
  }

  //add the losses
  function loser(){
  alert ("You lost! Better luck next time!");
    losses++;
    $("#totalLosses").text(losses);
    reset()
  }

  //sets up clicks for crystals
    $("#purple").on ("click", function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $("#total").text(playerTotal); 
          //set win/lose conditions
          if (playerTotal == Random){
            winner();
          }
          else if (playerTotal > Random){
            loser();
          }   
    })  
    $("#yellow").on ("click", function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $("#total").text(playerTotal); 
          //set win/lose conditions
          if (playerTotal == Random){
            winner();
          }
          else if (playerTotal > Random){
            loser();
          } 
    })  
    $("#green").on ("click", function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $("#total").text(playerTotal);

            //set win/lose conditions
            if (playerTotal == Random){
            winner();
          }
          else if (playerTotal > Random){
            loser();
          } 
    })  
    $("#red").on ("click", function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $("#total").text(playerTotal); 
        
            if (playerTotal == Random){
            winner();
          }
          else if (playerTotal > Random){
            loser();
          }
    });   
  }); 