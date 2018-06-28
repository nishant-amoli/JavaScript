/*
 * Zombie text adventure game!		
 * @Nishant Amoli,BTech IT
 */

alert("There was a zombie apocalypse and only a few humans survive.Luckily you are one of them!");
alert("You are robbing a store and suddenly you heard a noise from the door.Its a Zombie!");
var ans=prompt("There is a back door in the store.Will you run or fight?");
if(ans){
  if(ans === "run"){
    alert("Crap!The door is jammed.Now its kill or get killed");
    var ch1=prompt("Will you fight or die?");
    if(ch1){
      if(ch1 === "fight"){
          var weapon=prompt("There is a rubber duck,an axe and a hammer.Pick up a weapon.");
          if(weapon){
            var number=Math.round(Math.random());
            if(number == 0)
              alert("You attacked the zombie with the "+weapon+" and Win!");
            else
              alert("You attacked the zombie with the "+weapon+" but it bit you!You Lost!");
          }
    else
      alert("You took a lot of time thinking.The zombie bit you.You Lost!");
        }
    else
      alert("You got scared and froze.The zombie bit you.You Lost!");
    }
    else
    alert("You got scared and froze.The zombie bit you.You Lost!");
  }
  else if(ans === "fight"){
    var weapon=prompt("There is a rubber duck,an axe and a hammer.Pick up a weapon.");
          if(weapon){
            var number=Math.round(Math.random());
            if(number == 0)
              alert("You attacked the zombie with the "+weapon+" and Win!");
            else
              alert("You attacked the zombie with the "+weapon+" but it bit you!You Lost!");
    }
  }
  else
    alert("You got scared and froze.The zombie bit you.You Lost!");
    
    }
  else
    alert("You got scared and froze.The zombie bit you.You Lost!");
    