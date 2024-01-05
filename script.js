document.addEventListener('DOMContentLoaded', function () {
    const resultElement = document.getElementById('result');
    const buttons = document.querySelectorAll('#buttons button');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent;

            if (buttonText === '=') {
                try {
                    resultElement.textContent = eval(currentInput);
                } catch (error) {
                    resultElement.textContent = 'Error';
                }
                currentInput = '';
            } else {
                currentInput += buttonText;
                resultElement.textContent = currentInput;
            }
        });
    });
});
