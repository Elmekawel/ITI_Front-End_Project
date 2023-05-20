var x =   document.getElementsByClassName('btn')[0]
  var counter = 0; // must be global or else it will reset to 1 everytime i call the function
  var lose_counter =6;
    function answerselect (event) {
        //instead of giving them a value
        
        if(event.target.textContent === 'Fear of Dogs' || event.target.textContent === "Saturn" ||  event.target.textContent === "Uncle Bob" || event.target.textContent === "Clean Code" || event.target.textContent === "Kevin Mitnick" || event.target.textContent === "Brendan Fraser")
        {
            document.getElementById("next-btn").style.display="block";
            event.target.style.background = 'green';
            for (let index = 0; index <= 3; index++) {
                document.getElementsByClassName('btn')[index].disabled = true; //to make all buttons disabled after choice
            } 
            
        }
        else
            {
               // document.getElementById("End-screen").innerHTML=`you got the score of ${counter} out of 20`
                document.getElementById("reset-btn").style.display="block";
                event.target.style.background = 'red';
                document.getElementById("next-btn").style.display="block";
                for (let index = 0; index <= 3; index++) {
                document.getElementsByClassName('btn')[index].disabled = true; //to make all buttons disabled after choice
                
                
            } 
            
            lose_counter = lose_counter - 1 
            
           
            
            
            }
    }

    
    function changequestions()
    {
        for (let index = 0; index <= 3; index++) {
                document.getElementsByClassName('btn')[index].style.background = '' //to make the color disappear
            }  


            
            // we need something to undisable the buttons
            for (let index = 0; index <= 3; index++) {
                document.getElementsByClassName('btn')[index].disabled = false;
            } 

            document.getElementById("next-btn").style.display="none";
            document.getElementById("reset-btn").style.display="none";
            document.getElementById("rules-card").innerHTML="";
            // the above is the pre question start
        if(counter == 0)
        {
            
       
        document.getElementById('question').innerHTML="Which Planet has the Most Moons ?"
        document.getElementsByClassName('btn')[0].innerHTML="Mercury";
        document.getElementsByClassName('btn')[1].innerHTML="Venus";
        document.getElementsByClassName('btn')[2].innerHTML="Saturn";
        document.getElementsByClassName('btn')[3].innerHTML="Neptune";

        }
        else if(counter == 1 )
        {
            
            document.getElementById('question').innerHTML="What is the Neckname of the Famous Software Engineer Robert Cecil Martin ?"
        document.getElementsByClassName('btn')[0].innerHTML="Uncle Bob";
        document.getElementsByClassName('btn')[1].innerHTML="Papa Jones";
        document.getElementsByClassName('btn')[2].innerHTML="Uncle Sam";
        document.getElementsByClassName('btn')[3].innerHTML="Uncle Josh";
        
        }else if(counter == 2 )
        {
           
       document.getElementById('question').innerHTML="The Most Famous Software Engineering Book Ever ?"
        document.getElementsByClassName('btn')[0].innerHTML="Refactoring";
        document.getElementsByClassName('btn')[1].innerHTML="Design Patterns";
        document.getElementsByClassName('btn')[2].innerHTML="Code Complete";
        document.getElementsByClassName('btn')[3].innerHTML="Clean Code";
        
        }else if(counter == 3 )
        {
          
        document.getElementById('question').innerHTML="The Most Notorious Hackers of all Time ?"
        document.getElementsByClassName('btn')[0].innerHTML="Albert Gonzalez";
        document.getElementsByClassName('btn')[1].innerHTML="Kevin Mitnick";
        document.getElementsByClassName('btn')[2].innerHTML="Anonymous";
        document.getElementsByClassName('btn')[3].innerHTML="Adrian Lamo";
        }else if(counter == 4 )
        {
          
        document.getElementById('question').innerHTML="Who won best actor Oscar 2023 ?"
        document.getElementsByClassName('btn')[0].innerHTML="Brendan Fraser";
        document.getElementsByClassName('btn')[1].innerHTML="Joaquin Phoenix";
        document.getElementsByClassName('btn')[2].innerHTML="Leonardo Dicaprio";
        document.getElementsByClassName('btn')[3].innerHTML="Samuel L. Jackson";
        }
        else{
            if(counter > lose_counter && counter == 5)
                {
                    
                    document.getElementById("next-btn").style.display="none";
                    document.getElementById("welcome").innerHTML="THE QUIZ HAS CONQURED YOU !!!"
                    document.getElementById("question").innerHTML="YOU WEREN'T UP FOR THE CHALLENGE !!!!!!"
                    document.getElementById("answer-buttons").innerHTML=`<br> You have got ${lose_counter} Questions Right out of 6`
                    document.getElementById("reset-btn").style.display="block";
                    document.getElementById("next-btn").style.display="none";
                }
                else{
                    
                    document.getElementById("welcome").innerHTML="YOU HAVE SUCCESSFULLY CONQURED THE QUIZ !!!"
                    document.getElementById("question").innerHTML="Congratulations !!!!!!"
                    document.getElementById("answer-buttons").innerHTML=`<br> You have Successfully Answered 6 Questions out of 6`
                    document.getElementById("reset-btn").style.display="block";

                }
            
           
            
       
        }
        counter++; 

        
       

    }

    function resetgame()
    {
        counter = 0;
        lose_counter =6;
        // counter reset above
        document.getElementById("rules-card").innerHTML=` <h2>RULES</h2>
        <ul>
            <li>You have a choice if you select a wrong answer to reset the game or continue.</li>
            <li>The best score you can get is 6 out of 6.</li>
            <li>There is no time limit.</li>
            <li>Have Fun :)</li>
        </ul>`;
        
          // making everything re-appear for the player. the order matters
            document.getElementById("welcome").innerHTML="Welcome to the Quiz !!!!"
            document.getElementById("question").innerHTML='What is "Cynophobia"'
            document.getElementById("answer-buttons").innerHTML=`<button class="btn" onclick="answerselect(event)">Fear of Dogs</button>
            <button class="btn" onclick="answerselect(event)">Fear of Heights</button>
            <button class="btn" onclick="answerselect(event)">Fear of Spiders</button>
            <button class="btn" onclick="answerselect(event)">Fear of Socializing</button>`
        for (let index = 0; index <= 3; index++) {
                document.getElementsByClassName('btn')[index].style.background = '' //to make the color disappear
            }  
            for (let index = 0; index <= 3; index++) {
                document.getElementsByClassName('btn')[index].disabled = false;
            }  
       document.getElementById("next-btn").style.display="none";
        document.getElementById("reset-btn").style.display="none";
        
    }
    
    document.querySelector('#btn-back').addEventListener('click', () => {
        window.location.replace("..\\Main_Menu.html")
    });