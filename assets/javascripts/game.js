(function() {

  window.onload = function() {

    var teamoneshoot = document.querySelector("#teamone-shoot");
    var teamonenumshots = document.querySelector("#teamone-numshots");
    var teamoneHits = document.querySelector("#teamone-numhits");

    function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var audio = new Audio("../js_sports_game/assets/audio/button-7.wav");


    //team one
    teamoneshoot.addEventListener("click", function() {
      console.log("+ button clicked");

      var teamoneShotsTaken = parseInt(teamonenumshots.innerHTML) + 1;
      teamonenumshots.innerHTML = teamoneShotsTaken;

      let chance1 = getRandomIntInclusive(0, 1);
      var teamoneGoals = parseInt(teamoneHits.innerHTML) + chance1;
      teamoneHits.innerHTML = teamoneGoals;

      audio.play();

    })

    //  team two
    var teamtwoshoot = document.querySelector("#teamtwo-shoot");
    var teamtwonumshots = document.querySelector("#teamtwo-numshots");
    var teamtwoHits = document.querySelector("#teamtwo-numhits");


    teamtwoshoot.addEventListener("click", function() {
      console.log("+ button 2 clicked");

      var teamtwoShotsTaken = parseInt(teamtwonumshots.innerHTML) + 1;
      teamtwonumshots.innerHTML = teamtwoShotsTaken;

      let chance2 = getRandomIntInclusive(0, 1);
      var teamtwoGoals = parseInt(teamtwoHits.innerHTML) + chance2;
      teamtwoHits.innerHTML = teamtwoGoals;

      audio.play();

    })


    //reset
    var reset = document.querySelector("#reset");
    var resetcount = document.querySelector("#num-resets");

    reset.addEventListener("click", function() {
      console.log("reset clicked");

      var scoreResets = parseInt(resetcount.innerHTML) + 1;
      resetcount.innerHTML = scoreResets;

      teamtwoHits.innerHTML = 0;
      teamtwonumshots.innerHTML = 0;
      teamoneHits.innerHTML = 0;
      teamonenumshots.innerHTML = 0;

    })



  }

})();
