



const exercisesData = [
    { prix: 49425, pourcentage: 0.04 },
    { ob1: 104, ob2: 1977, ob3: 49425 * (1 + 0.04) },


    { ob4: 104},

    { ob5: 1977},

    { ob6: 51402},



    { ob7: 104},

    { ob8: 51402},


    { ob9: 51402},




   
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



function verifyExercise(exerciseIndex) {
    const prixValue = parseFloat(document.getElementById(`prixInput${exerciseIndex}`).value);
    const pourcentageValue = parseFloat(document.getElementById(`pourcentageInput${exerciseIndex}`).value);

  

    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);

    const tolerance = 0.0001;

    if (Math.abs(prixValue - exercisesData[exerciseIndex - 1].prix) < tolerance &&
        Math.abs(pourcentageValue - exercisesData[exerciseIndex - 1].pourcentage) < tolerance
    ) {
        validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
        validationResult.className = "validation-success";
        correctAnswersCount++;


        // Fill the progress bar chunk with green color
    } else {
        validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
        validationResult.className = "validation-error";
    }

    // Always scroll to the next exercise
    if (exerciseIndex < exercisesData.length) {
        setTimeout(() => {
            validationResult.style.display = "none";
            scrollToExercise(exerciseIndex + 1);
        }, 2000);
    }


    if (exerciseIndex === exercisesData.length) {
        scrollToExercise(1);

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
        ob1Value === exercisesData[1].ob1 &&
        ob2Value === exercisesData[1].ob2 &&
        ob3Value === exercisesData[1].ob3
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
(ob4Value === exercisesData[2].ob4)
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
(ob5Value === exercisesData[3].ob5 )
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
(ob6Value === exercisesData[4].ob6)
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


    console.log(exerciseIndex, "exerciseIndex of exercice 6");




    const ob7Value = parseFloat(document.getElementById('ob7Value1').value);




    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);


 


    if (
(ob7Value === exercisesData[5].ob7)
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
(ob8Value === exercisesData[6].ob8)
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


    console.log(exerciseIndex, "exerciseIndex of exercice 8");


    const ob9Value = parseFloat(document.getElementById('ob9Value1').value);



    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);


 


    if (
(ob9Value === exercisesData[7].ob9)
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









