// Event istener untuk tombol submit
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight-input').value);
    const height = parseFloat(document.getElementById('height-input').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Tolong inputkan data yang valid");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / Math.pow(heightInMeters, 2);
    const desc = interpretBMI(bmi);

    const bmiText = document.getElementById('bmi');
    const descText = document.getElementById('desc');

    bmiText.textContent = bmi.toFixed(2);
    descText.innerHTML = `You are <strong>${desc}</strong>`;

    // Event istener untuk tombol reset
    document.querySelector('button[type="reset"]').addEventListener('click', function () {
        const bmiText = document.getElementById('bmi');
        const descText = document.getElementById('desc');

        bmiText.textContent = "00.00";
        descText.textContent = "N/A";
    });

    // Menentukan kategori BMI
    function interpretBMI(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi < 25) {
            return "Healthy";
        } else if (bmi < 30) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }
});





