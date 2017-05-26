

(function (){

  window.onload = function(){

    var teamoneshoot = document.querySelector("#teamone-shoot");
    var teamonenumshots = document.querySelector("#teamone-numshots");
    var teamoneHits = document.querySelector("#teamone-numhits");


    teamoneshoot.addEventListener("click", function(){
      console.log("+ button clicked");

    var teamoneShotsTaken = parseInt(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = teamoneShotsTaken;
  })


    teamoneshoot.addEventListener("click", function getRandomInt(min, max) {
        var teamoneGoals = parseInt(teamoneHits.innerHTML) + (1 * Math.floor(Math.random() * 2));
        teamoneHits.innerHTML = teamoneGoals;
      })

//  team two

var teamtwoshoot = document.querySelector("#teamtwo-shoot");
var teamtwonumshots = document.querySelector("#teamtwo-numshots");
var teamtwoHits = document.querySelector("#teamtwo-numhits");


teamtwoshoot.addEventListener("click", function(){
  console.log("+ button 2 clicked");

var teamtwoShotsTaken = parseInt(teamtwonumshots.innerHTML) + 1;
teamtwonumshots.innerHTML = teamtwoShotsTaken;
})


teamtwoshoot.addEventListener("click", function getRandomInt(min, max) {
    var teamtwoGoals = parseInt(teamtwoHits.innerHTML) + (1 * Math.floor(Math.random() * 2));
    teamtwoHits.innerHTML = teamtwoGoals;
  })


  // <button id="reset">RESET</button><br>
  // NUMBER OF RESETS: <span id="num-resets">0</span>

var reset= document.querySelector("#reset");
var resetcount = document.querySelector("#num-resets");

reset.addEventListener("click", function(){
  console.log("reset clicked");

var scoreResets = parseInt(resetcount.innerHTML) + 1;
resetcount.innerHTML = scoreResets;
})

reset.addEventListener("click", function(){

  var goals2reset = parseInt(teamtwoHits.innerHTML) * 0;
  teamtwoHits.innerHTML = goals2reset;
  var shots2reset = parseInt(teamtwonumshots.innerHTML) * 0;
  teamtwonumshots.innerHTML = shots2reset;

  var goals1reset = parseInt(teamoneHits.innerHTML) * 0;
  teamoneHits.innerHTML = goals1reset;
  var shots1reset = parseInt(teamonenumshots.innerHTML) * 0;
  teamonenumshots.innerHTML = shots1reset;

})

var audio = new Audio("/Users/n0251107/Desktop/js_sports_game/assets/images/button-7.wav");

teamtwoshoot.addEventListener("click", function(){
  audio.play();
})
teamoneshoot.addEventListener("click", function(){
  audio.play();
})



  }

})();
