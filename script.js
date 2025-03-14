function convert() {
    const input = parseFloat(document.getElementById('input').value);

    if (isNaN(input)) {
        alert('Please enter a valid number');
        return;
    }

    // Length conversion (Meter to Feet and vice versa)
    const metersToFeet = (input * 3.28084).toFixed(2);
    const feetToMeters = (input / 3.28084).toFixed(2);

    // Volume conversion (Liters to Gallons and vice versa)
    const litersToGallons = (input * 0.264172).toFixed(2);
    const gallonsToLiters = (input / 0.264172).toFixed(2);

    // Mass conversion (Kilograms to Pounds and vice versa)
    const kilogramsToPounds = (input * 2.20462).toFixed(2);
    const poundsToKilograms = (input / 2.20462).toFixed(2);

    // Display results
    document.getElementById('length-result').innerText = `${input} meters = ${metersToFeet} feet | ${input} feet = ${feetToMeters} meters`;
    document.getElementById('volume-result').innerText = `${input} liters = ${litersToGallons} gallons | ${input} gallons = ${gallonsToLiters} liters`;
    document.getElementById('mass-result').innerText = `${input} kilograms = ${kilogramsToPounds} pounds | ${input} pounds = ${poundsToKilograms} kilograms`;
}