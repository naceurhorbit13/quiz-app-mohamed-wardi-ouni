// questions.js

const exercisesData = [
    { prix: 49425, pourcentage: 0.04 },
    // Define data for other exercises here
];

let currentExercise = 1;

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



function verifyValues() {
    const prixValue = parseFloat(document.getElementById(`prixInput`).value);
    const pourcentageValue = parseFloat(document.getElementById(`pourcentageInput`).value);
    const validationResult = document.getElementById(`validationResult${currentExercise}`);
    const tolerance = 0.0001; // Define a tolerance level for comparisons


 

    if (
        Math.abs(prixValue - exercisesData[currentExercise - 1].prix) < tolerance &&
        Math.abs(pourcentageValue - exercisesData[currentExercise - 1].pourcentage) < tolerance

    ) {




        validationResult.textContent = "Félicitations ! 🎉 Vous avez réussi à trouver les valeurs correctes !";
        validationResult.className = "validation-success";
        
        // Check if there's a next exercise
        if (currentExercise < exercisesData.length) {
            currentExercise++; // Move to the next exercise
            scrollToExercise(currentExercise);
        }
    } else {
        validationResult.textContent = "Oh là là ! 🙈 Essayez à nouveau, vous êtes sur la bonne voie !";
        validationResult.className = "validation-error";
    }

    validationResult.style.display = "block";
}


function scrollToExercise(exerciseIndex) {
    const nextExercise = document.getElementById(`exercise${exerciseIndex}`);
    if (nextExercise) {
        nextExercise.scrollIntoView({ behavior: 'smooth' });
    }
}
