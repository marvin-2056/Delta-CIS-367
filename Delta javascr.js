



function calculateNameValue(name) {
    let totalValue = 0;
    for (let i = 0; i < name.length; i++) {
        totalValue += name.charCodeAt(i);
    }
    return totalValue;
}

function getAnimal(nameValue) {
    const animals = ['Lion', 'Eagle', 'Dolphin', 'Ant', 'Tiger', 'Cheetah', 'Bear', 'Elephant', 'Fox', 'Owl'];
    const index = nameValue % animals.length;
    return animals[index];
}

function showNameFacts() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    const nameValue = calculateNameValue(name);
    const spiritAnimal = getAnimal(nameValue);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your name value is $${nameValue} and your spirit animal is ${spiritAnimal}.`;
}
