const tempInput = document.getElementById('temp-input');
const unitSelect = document.getElementById('unit-select');
const convertBtn = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');

convertBtn.addEventListener('click', convertTemperature);

function convertTemperature() {
    const tempValue = parseFloat(tempInput.value);
    const unitValue = unitSelect.value;

    if (isNaN(tempValue)) {
        alert('Please enter a valid temperature value');
        return;
    }

    let convertedTemp = 0;
    let convertedUnit = '';

    switch (unitValue) {
        case 'celsius':
            if (tempValue < -273.15) {
                alert('Temperature cannot be lower than absolute zero (-273.15°C)');
                return;
            }
            convertedTemp = tempValue * 9/5 + 32;
            convertedUnit = 'Fahrenheit';
            break;
        case 'fahrenheit':
            if (tempValue < -459.67) {
                alert('Temperature cannot be lower than absolute zero (-459.67°F)');
                return;
            }
            convertedTemp = (tempValue - 32) * 5/9;
            convertedUnit = 'Celsius';
            break;
        case 'kelvin':
            if (tempValue < 0) {
                alert('Temperature cannot be lower than absolute zero (0K)');
                return;
            }
            convertedTemp = tempValue - 273.15;
            convertedUnit = 'Celsius';
            break;
    }

    resultElement.textContent = `Converted temperature: ${convertedTemp.toFixed(2)} ${convertedUnit}`;
}