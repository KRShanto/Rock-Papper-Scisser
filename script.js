$(document).ready(function(){
// DOM Variables -->    
let rock = $("#rock");
let papper = $("#papper");
let scissor = $("#scissor");
let mainScore = $("#mainScore");
let usrScore = $('#SusrScore');
let compScore = $('#ScompScore');
let drawScore = $('#SdrawScore');
let score1= 0;//user score 
let score2= 0;//Computer score 
let score3= 0;// Draw score 

// It will immediately call itself.
( function(){
    let name= prompt('Whats your name')
     // Taking User Name 
        while(name == '' || name == null){
           name = prompt("Whats you name? ")
        }
        $("#userName").html(`
            <h2>${name}</h2>
        `)
})();

// User Option Choice Display Functions //
    function userFunc(element, choice){
        // 'element' is which option user clicking
            element.css({
                'transition': 'background-color 0.5s linear',
                'background-color':'red'
            });
            setTimeout(function() {
                element.css({
                 'background-color':'#4a1eff'
                })
            }, 500);
      // Changing Choice Card's Property
            $("#choice1").html (`
              <h3>Your Choise : </h3>
                <h1>${choice}</h1> 
           `)
    }
    
// Computer Card Display Function
    function compFunc(element){
        $("#choice2").html(`
           <h3>Computer Choise : </h3>
                <h1>${element}</h1> 
        `)
    }
    
// It will select a random choice       ( r/ p/ s) for the Computer choice
    function compChoice() {
        choices = ['r','p', 's']
        randNum = Math.floor(Math.random() * 3)
        randChoice = choices[randNum]
        return(randChoice)
    }

    function userChoice(){
   /// when the user click any of the choice button, this function will call///
        rock.click(function(){
            game("r")
            userFunc(rock, "Rock")
        });
        papper.click(function(){
            game("p")
            userFunc(papper, "Papper")
        });
        scissor.click(function(){
            game("s")
            userFunc(scissor, "Scissor")
        });
    
    }
    
// It will make decision if Computer WINS
    function gameWins( choice, color){
        // increase the user score 
        score1++;
        usrScore.html(score1);
            
       // It will Display if user wins
          $('#decision').html(`
           <h1> ${choice}</h1>
        `)
        $('#decision').css({
            'color':`${color}`
        });

       // It will remove the decision after 2s        
        setTimeout(function() {
            $("#decision").html('');
        }, 2000);        
    }
    
// It will make decision if Computer LOSE
    function gameLoses( choice, color){
        // increase thr Computer score
        score2++;
        compScore.html(score2)
       // It will Display if user LOSE
          $('#decision').html(`
           <h1> ${choice}</h1>
        `)
        $('#decision').css({
            'color':`${color}`
        });
       // It will remove the decision after 2s
        setTimeout(function() {
            $("#decision").html('')
        }, 2000);
        
    }
      // It will Display if user Loses
    
    function gameDraws( choice, color){
       //increase the draw score
       score3++
        drawScore.html(score3);
      // It will Display if game Draws
          $('#decision').html(`
           <h1> ${choice}</h1>
        `)
        $('#decision').css({
            'color':`${color}`
        })
       // It will remove the decision after 2s        
        setTimeout(function() {
            $("#decision").html('')
        }, 2000);        
    }
    
    
    
    // Main Game Function
    function game(user) {
        let computer = compChoice()
        let comp = '';
        if (computer=='r'){
            comp = 'Rock';
        }
        else if(computer =='p'){
            comp = 'Papper';
        }
        else{
            comp = 'Scissor'
        }
        
    // Conditions -->
        switch (user + computer) {
        // User Wins
            case 'rs':
            case 'pr':
            case 'sp':
                compFunc(comp);
                gameWins("You Win", 'rgb(30,255,119)')
                break;
          //User Loses
            case 'rp':
            case 'ps':
            case 'sr':
                compFunc(comp);
                gameLoses("You Lose", 'rgb(223,66,88)');
                break;
           //User Draws
            case 'rr':
            case 'ss':
            case 'pp':
                compFunc(comp);
                gameDraws( "Draw",'rgb(199,84,183)');
                break;
         
        }
    }
    
    // Functions Calling -->
    userChoice();
    
    
});// Main Ready Ending