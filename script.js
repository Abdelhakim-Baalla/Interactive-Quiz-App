var questions = [
    {
      question: "1 + 1",
      choices: ["1", "8", "2" ],
      correctAnswerIndex: 2
    },
    {
      question: "5 * 2",
      choices: ["6", "10", "3"],
      correctAnswerIndex: 1
    },
    {
      question: "4 * 3",
      choices: ["1", "12", "7"],
      correctAnswerIndex: 1
    }
  ];
  
  var questionText = document.getElementById('question-text');
  var nextBtn = document.getElementById('next-btn');
  var precedentBtn = document.getElementById('precedent-btn');
  var scoreContainer = document.getElementById('score-container');
  var recommencer = document.getElementById('recommencer');
  var block_rep = document.getElementById('block_rep');

//   console.log(questionText);
//   console.log(reponse1);
//   console.log(reponse2);
//   console.log(questions.length);


  var counter = -1;

  


  nextBtn.addEventListener('click', function(){
    if (counter == (questions.length) - 1) {
        nextBtn.style = "display:none;";
        precedentBtn.style = "display:hidden;";
        questionText.style = "display:none;";
        block_rep.style = "display:none;";

        scoreContainer.style = "display:block; justify-items:center";
    }else{
    let reponse = document.getElementById('reponse').value;
    console.log(reponse);
        
    block_rep.style = "display:block;";
    counter++;
    let nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = 'Next';

    nextBtn.style = 'background-color: oklch(0.558 0.288 302.321);';
    precedentBtn.style = "display:flex;";


    questionText.innerHTML = questions[counter]['question']; 
    document.getElementById('reponse').value = '';
    }

    



    
  });

  precedentBtn.addEventListener('click', function(){
    if (counter == 0) {
     precedentBtn.style = "display:hidden;";
    }
    counter--;
    questionText.innerHTML = questions[counter]['question'];
  });
 

  recommencer.addEventListener('click', function(){
    location.reload();
  });


//   for (let i = 0; i < questions.length; i++) {
//     console.table(questions[i]['correctAnswerIndex']);
    
//   }

