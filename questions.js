



const exercisesData = [
    {     exerciseIndex: 1,
        description: "Voici les réponses correctes:", prix: 49425, pourcentage: 0.04 },
    {exerciseIndex: 2,description:"Voici les réponses correctes:"

    , pourcentage_question_2: 104, prix_de_gain_question_2: 1977, prix_totale_question_2: 49425 * (1 + 0.04) },


    {   exerciseIndex: 3,description:"Voici les réponses correctes:",pourcentage_totale_question_3: 104},

    { exerciseIndex: 4,description:"Voici les réponses correctes:",prix_de_gain_question_4: 1977},

    {exerciseIndex: 5,description:"Voici les réponses correctes:", prix_totale_question_5: 51402},



    {exerciseIndex: 6,description:"Voici les réponses correctes:", pourcentage_totale_question_6: 104},

    { exerciseIndex: 7,description:"Voici les réponses correctes:",prix_totale_question_7: 51402},


    {exerciseIndex: 8,description:"Voici les réponses correctes:", prix_totale_question_8: 51402},




   
    // Define data for other exercises here
];

let currentExercise = 1;
let correctAnswersCount = 0;

let  wrongAnswerCount = 0;


// Initialize progress bar elements
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');



function drag(event, source) {
    event.dataTransfer.setData("text", source.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event, target) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedValue = document.getElementById(data);
    
    if (target.tagName === 'INPUT') {
        let numericValue;
        const numericPart = draggedValue.textContent.match(/[\d.,]+/);

        
        if (numericPart) {
            numericValue = parseFloat(numericPart[0].replace(',', '.'));
        } else {
            numericValue = NaN;
        }

        if (draggedValue.textContent.includes('%')) {
            numericValue /= 100;
        }

        if (!isNaN(numericValue)) {
            target.value = numericValue;
        }
    } else {
        target.appendChild(draggedValue);
    }

    draggedValue.classList.remove("dragged");
}



function updateProgressBar(progress) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progress}%`;

    const progressText = document.getElementById('progress-text');
    progressText.textContent = `${progress.toFixed(2)}%`;
}



let incorrectAttempts = 0;

function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function displayCorrection(exerciseIndex) {
    const correctionText = document.getElementById("correctionText");
  
    // Find the exercise data based on exerciseIndex
    const exerciseData = exercisesData.find((exercise) => exercise.exerciseIndex === exerciseIndex);
  
    if (exerciseData) {
      correctionText.textContent = `${exerciseData.description}\n\n\n`;
      
      // Add specific properties for the exercise (e.g., prix, pourcentage, ob1, ob2, etc.) with formatted names
      for (const prop in exerciseData) {
        if (prop !== "exerciseIndex" && prop !== "description") {
          // Format property name for better readability
          const formattedPropName = prop
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          
          correctionText.textContent += `${formattedPropName}: ${exerciseData[prop]}\n\n`;
        }
      }
  
      openModal();
    } else {
      correctionText.textContent = "Exercise not found.";
    }
}


  

function verifyExercise(exerciseIndex) {
    const prixValue = parseFloat(document.getElementById(`prixInput${exerciseIndex}`).value);
    const pourcentageValue = parseFloat(document.getElementById(`pourcentageInput${exerciseIndex}`).value);
  
    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);
    const tolerance = 0.0001;
  
    if (Math.abs(prixValue - exercisesData[exerciseIndex - 1].prix) < tolerance &&
        Math.abs(pourcentageValue - exercisesData[exerciseIndex - 1].pourcentage) < tolerance) {
      validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
      validationResult.className = "validation-success";
      correctAnswersCount++;
      incorrectAttempts = 0; // Reset incorrectAttempts when the answer is correct
    
  
    if (exerciseIndex < exercisesData.length) {
      setTimeout(() => {
        validationResult.style.display = "none";
        scrollToExercise(exerciseIndex + 1);
      }, 2000);
    }
  
    if (exerciseIndex === exercisesData.length) {
      scrollToExercise(1);
    }
  


}     else {
    validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
    validationResult.className = "validation-error";

    incorrectAttempts++;

    if (incorrectAttempts >= 2) {
      // Display the question mark icon if the user answers incorrectly twice
      const questionMarkIcon = document.getElementById("questionMarkIcon");
      questionMarkIcon.style.display = "block";
      return; // Exit the function without scrolling
    }
  }
    const progress = (correctAnswersCount / exercisesData.length) * 100;
    updateProgressBar(progress);
  }
  






function verifyQuestion2(exerciseIndex) {
    console.log(exerciseIndex, "exerciseIndex of question 2");

    const ob1Value = parseFloat(document.getElementById('ob1Value1').value);
    const ob2Value = parseFloat(document.getElementById('ob2Value2').value);
    const ob3Value = parseFloat(document.getElementById('ob3Value3').value);

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);

    if (
        ob1Value === exercisesData[1].pourcentage_question_2 &&
        ob2Value === exercisesData[1].prix_de_gain_question_2 &&
        ob3Value === exercisesData[1].prix_totale_question_2
    ) {
        validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
        validationResult.className = "validation-success";
        correctAnswersCount++;

        // Check if there are more exercises
        if (exerciseIndex < exercisesData.length) {
            setTimeout(() => {
                validationResult.style.display = "none";
                scrollToExercise(exerciseIndex + 1); // Scroll to the next exercise
            }, 2000);
        }

        if (exerciseIndex === exercisesData.length) {
            scrollToExercise(1);
        }
    } else {
        validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
        validationResult.className = "validation-error";
    }

    const progress = (correctAnswersCount / exercisesData.length) * 100;
    updateProgressBar(progress);
}



function verifyQuestion3(exerciseIndex) {



    const ob4Value = parseFloat(document.getElementById('ob4Value1').value);

  



    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);


    console.log(validationResult, "validationResult");


 


    if (
(ob4Value === exercisesData[2].pourcentage_totale_question_3)
    ) {
        validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
        validationResult.className = "validation-success";
        correctAnswersCount++;

        // Check if there are more exercises
        if (exerciseIndex < exercisesData.length) {
            setTimeout(() => {
                validationResult.style.display = "none";
                scrollToExercise(exerciseIndex + 1); // Scroll to the next exercise
            }, 2000);
        }

        if (exerciseIndex === exercisesData.length) {
            scrollToExercise(1);
        }
    } else {
        validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
        validationResult.className = "validation-error";
    }

    const progress = (correctAnswersCount / exercisesData.length) * 100;
    updateProgressBar(progress);
}

function verifyQuestion4(exerciseIndex) {

    const ob5Value = parseFloat(document.getElementById('ob5Value1').value);

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);

    if (
(ob5Value === exercisesData[3].prix_de_gain_question_4 )
    ){
        validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
        validationResult.className = "validation-success";
        correctAnswersCount++;

        // Check if there are more exercises
        if (exerciseIndex < exercisesData.length) {
            setTimeout(() => {
                validationResult.style.display = "none";
                scrollToExercise(exerciseIndex + 1); // Scroll to the next exercise
            }, 2000);
        }

        if (exerciseIndex === exercisesData.length) {
            scrollToExercise(1);
        }
    } else {
        validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
        validationResult.className = "validation-error";
    }

    const progress = (correctAnswersCount / exercisesData.length) * 100;
    updateProgressBar(progress);
}

function verifyQuestion5(exerciseIndex) {

    const ob6Value = parseFloat(document.getElementById('ob6Value1').value);
 
    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);

    if (
(ob6Value === exercisesData[4].prix_totale_question_5)
    ) {
        validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
        validationResult.className = "validation-success";
        correctAnswersCount++;

        // Check if there are more exercises
        if (exerciseIndex < exercisesData.length) {
            setTimeout(() => {
                validationResult.style.display = "none";
                scrollToExercise(exerciseIndex + 1); // Scroll to the next exercise
            }, 2000);
        }

        if (exerciseIndex === exercisesData.length) {
            scrollToExercise(1);
        }
    } else {
        validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
        validationResult.className = "validation-error";
    }

    const progress = (correctAnswersCount / exercisesData.length) * 100;
    updateProgressBar(progress);
}

function verifyQuestion6(exerciseIndex) {


    const ob7Value = parseFloat(document.getElementById('ob7Value1').value);

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);


    if (
(ob7Value === exercisesData[5].pourcentage_totale_question_6)
    ) {
        validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
        validationResult.className = "validation-success";
        correctAnswersCount++;

        // Check if there are more exercises
        if (exerciseIndex < exercisesData.length) {
            setTimeout(() => {
                validationResult.style.display = "none";
                scrollToExercise(exerciseIndex + 1); // Scroll to the next exercise
            }, 2000);
        }

        if (exerciseIndex === exercisesData.length) {
            scrollToExercise(1);
        }
    } else {
        validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
        validationResult.className = "validation-error";
    }
    const progress = (correctAnswersCount / exercisesData.length) * 100;
    updateProgressBar(progress);
}

function verifyQuestion7(exerciseIndex) {

    const ob8Value = parseFloat(document.getElementById('ob8Value1').value);

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);

    if (
(ob8Value === exercisesData[6].prix_totale_question_7)
    ){
        validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
        validationResult.className = "validation-success";
        correctAnswersCount++;

        // Check if there are more exercises
        if (exerciseIndex < exercisesData.length) {
            setTimeout(() => {
                validationResult.style.display = "none";
                scrollToExercise(exerciseIndex + 1); // Scroll to the next exercise
            }, 2000);
        }

        if (exerciseIndex === exercisesData.length) {
            scrollToExercise(1);
        }
    } else {
        validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
        validationResult.className = "validation-error";
    }

    const progress = (correctAnswersCount / exercisesData.length) * 100;
    updateProgressBar(progress);
}

function verifyQuestion8(exerciseIndex) {

    const ob9Value = parseFloat(document.getElementById('ob9Value1').value);

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);

    if (
(ob9Value === exercisesData[7].prix_totale_question_8)
    ) {
        validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
        validationResult.className = "validation-success";
        correctAnswersCount++;

        // Check if there are more exercises
        if (exerciseIndex < exercisesData.length) {
            setTimeout(() => {
                validationResult.style.display = "none";
                scrollToExercise(exerciseIndex + 1); // Scroll to the next exercise
            }, 2000);
        }

        if (exerciseIndex === exercisesData.length) {
            scrollToExercise(1);
        }
    } else {
        validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
        validationResult.className = "validation-error";
    }

    const progress = (correctAnswersCount / exercisesData.length) * 100;
    updateProgressBar(progress);
}

function scrollToExercise(exerciseIndex) {
    const currentValidationResult = document.getElementById(`validationResult${currentExercise}`);

    if (currentValidationResult) {
        currentValidationResult.style.display = "none";
    }

    const exerciseElement = document.getElementById(`exercise${exerciseIndex}`);
    exerciseElement.scrollIntoView({ behavior: "smooth" });
}

function showProgressBar() {
    progressContainer.style.display = 'block';
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    progressContainer.style.left = scrollX + 'px';
    progressContainer.style.top = scrollY + 'px';
}

function hideProgressBar() {
    progressContainer.style.display = 'none';
}

function resetValues1(exerciseIndex) {
    const draggedValue1 = document.getElementById(`draggedValue${exerciseIndex}`);
    const draggedValue2 = document.getElementById(`draggedValue${exerciseIndex}`);
    draggedValue1.style.left = '0';
    draggedValue2.style.left = '0';

    const prixInput = document.getElementById(`prixInput${exerciseIndex}`);
    const pourcentageInput = document.getElementById(`pourcentageInput${exerciseIndex}`);
    prixInput.value = '';
    pourcentageInput.value = '';

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);
    validationResult.textContent = '';
}



function resetValues2(exerciseIndex) {
    const ob1Value1 = document.getElementById('ob1Value1');
    const ob2Value2 = document.getElementById('ob2Value2');
    const ob3Value3 = document.getElementById('ob3Value3');


    ob1Value1.value = '';
    ob2Value2.value = '';

    ob3Value3.value = '';


    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);
    validationResult.textContent = '';
}



function resetValues3(exerciseIndex) {
    const ob4Value1 = document.getElementById('ob4Value1');


    ob4Value1.value = '';

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);
    validationResult.textContent = '';
}




function resetValues4(exerciseIndex) {
    const ob5Value1 = document.getElementById('ob5Value1');


    ob5Value1.value = '';

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);
    validationResult.textContent = '';


}


function resetValues5(exerciseIndex) {
    const ob6Value1 = document.getElementById('ob6Value1');


    ob6Value1.value = '';

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);
    validationResult.textContent = '';
}



function resetValues6(exerciseIndex) {
    const ob7Value1 = document.getElementById('ob7Value1');


    ob7Value1.value = '';

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);
    validationResult.textContent = '';


}



function resetValues7(exerciseIndex) {
    const ob8Value1 = document.getElementById('ob8Value1');


    ob8Value1.value = '';

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);
    validationResult.textContent = '';
}



function resetValues8(exerciseIndex) {
    const ob9Value1 = document.getElementById('ob9Value1');


    ob9Value1.value = '';

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);
    validationResult.textContent = '';


}









