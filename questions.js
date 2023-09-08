// questions.js

const exercisesData = [
    { prix: 49425, pourcentage: 0.04 },
    { prix: 49426, pourcentage: 0.05 },
    { prix: 49427, pourcentage: 0.06 },
    { prix: 49428, pourcentage: 0.07 },
    // Define data for other exercises here
];

let currentExercise = 1;

let correctAnswersCount = 0; // Variable to keep track of correct answers



function startVerification() {
    currentExercise = 1;
    correctAnswersCount = 0;
    updateProgressBar(0);
    verifyExercise(currentExercise);
  }

// Define the drag function for draggable elements
function drag(event, source) {
    event.dataTransfer.setData("text", source.id);
}

// Define the allowDrop function for drop targets
function allowDrop(event) {
    event.preventDefault();
}

function drop(event, target) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedValue = document.getElementById(data);
    
    if (target.tagName === 'INPUT') {
        let numericValue;

        // Extract the numerical part of the dragged text
        const numericPart = draggedValue.textContent.match(/[\d.,]+/);
        
        if (numericPart) {
            // Replace commas with dots if necessary
            numericValue = parseFloat(numericPart[0].replace(',', '.'));
        } else {
            numericValue = NaN; // Handle cases where there is no numeric part
        }

        // Check if it's a percentage value
        if (draggedValue.textContent.includes('%')) {
            // Convert the percentage to a decimal value
            numericValue /= 100;
        }

        if (!isNaN(numericValue)) {
            // Set the input field value with the extracted numeric value
            target.value = numericValue;
        }
    } else {
        // If the drop target is not an input, append the dragged element
        target.appendChild(draggedValue);
    }

    // Remove the dragged class from the draggedValue element
    draggedValue.classList.remove("dragged");
}





function verifyExercise(exerciseIndex) {
    console.log(exerciseIndex, "exerciseIndex");

    const prixValue = parseFloat(document.getElementById(`prixInput${exerciseIndex}`).value);
    const pourcentageValue = parseFloat(document.getElementById(`pourcentageInput${exerciseIndex}`).value);
    const validationResult = document.getElementById(`validationResult${exerciseIndex}`);
    const tolerance = 0.0001; // Define a tolerance level for comparisons

    if (
        Math.abs(prixValue - exercisesData[exerciseIndex - 1].prix) < tolerance &&
        Math.abs(pourcentageValue - exercisesData[exerciseIndex - 1].pourcentage) < tolerance
    ) {
        validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
        validationResult.className = "validation-success";

        correctAnswersCount++; // Increment correct answers count

        // Check if all exercises are answered correctly
        if (correctAnswersCount === exercisesData.length) {
            // Reset currentExercise to 1 when all exercises are completed
            currentExercise = 1;
        }

        // Check if there's a next exercise
        if (exerciseIndex < exercisesData.length) {
            // Move to the next exercise after a delay
            setTimeout(() => {
                validationResult.style.display = "none"; // Hide the current validation message
                scrollToExercise(exerciseIndex + 1);
            }, 2000); // Delay of 2 seconds (adjust as needed)
        } else {
            // Handle the case when all exercises are completed
            validationResult.textContent = "Félicitations ! 🎉 Vous avez terminé toutes les exercices !";
            validationResult.className = "validation-success";
            validationResult.style.display = "block";
        }
    } else {
        validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
        validationResult.className = "validation-error";
        validationResult.style.display = "block";
    }


 
      correctAnswersCount++;


      const progress = (correctAnswersCount / 6) * 100;

     console.log(progress,"progress");

      updateProgressBar(progress);
  


    if (exerciseNumber < 3) {
        currentExercise++;
        verifyExercise(currentExercise);
      } else {
        alert("Verification completed!");
      }
    
}



function updateProgressBar(progress) {
    console.log(progress,"progress");
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = `${progress}%`;
  }


  



function scrollToExercise(exerciseIndex) {
    const nextExercise = document.getElementById(`exercise${exerciseIndex}`);
    if (nextExercise) {
        nextExercise.scrollIntoView({ behavior: 'smooth' });
    }
}


// Get references to the progress container and progress bar elements
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');

// Add a global mousemove event listener to update the position
// Remove this line

  
// Function to show the progress container and progress bar
// Function to show the progress container and position it at the current screen position
function showProgressBar() {
    progressContainer.style.display = 'block';
  
    // Calculate the current scroll position
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
  
    // Set the position of the progress container
    progressContainer.style.left = scrollX + 'px';
    progressContainer.style.top = scrollY + 'px';
  }
  

// Function to hide the progress container and progress bar
function hideProgressBar() {
  progressContainer.style.display = 'none';
}




function resetValues(currentExercise) {
    // Reset the dragged values
    const draggedValue1 = document.getElementById('draggedValue1');
    const draggedValue2 = document.getElementById('draggedValue2');
    draggedValue1.style.left = '0';
    draggedValue2.style.left = '0';

    // Reset the input fields
    const prixInput1 = document.getElementById('prixInput1');
    const pourcentageInput1 = document.getElementById('pourcentageInput1');
    prixInput1.value = '';
    pourcentageInput1.value = '';

    // Clear the validation result
    const validationResult1 = document.getElementById('validationResult1');
    validationResult1.textContent = '';
}
