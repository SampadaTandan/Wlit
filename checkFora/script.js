const animals = ['dogs', 'cats', 'rabbits', 'mice'];

// Function to check if the animal name contains the letter 'a'
function checkForA(name) {
    return name.includes('a');
}

// Log whether each animal contains the letter 'a'
animals.forEach(animal => {
    console.log(`${animal}: ${checkForA(animal)}`);
});

// Filter animals that contain the letter 'a' into a new array
const animalsWithA = animals.filter(checkForA);

// Display the new array of animals that contain 'a'
animalsWithA.forEach(animal => {
    const animalsWithAListItem = document.createElement('li');
    animalsWithAListItem.textContent = animal;
    document.getElementById('animalsWithA').appendChild(animalsWithAListItem);
});
