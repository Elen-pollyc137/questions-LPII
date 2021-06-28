
var button = document.getElementById('button');
var questionButton = document.getElementById('questionbutton')
var questionButton2 = document.getElementById('questionbutton-2')

function calcularhipotenusa() {
    var cateto1 = document.getElementById('factors').value;
    var cateto2 = document.getElementById('factors-2').value;
    var hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    return hipotenusa;

}

button.addEventListener('click', () => {
    var principalElement = document.getElementById("principal-element");
    var element = document.createElement('div');


    element.innerHTML = calcularhipotenusa()
    principalElement.appendChild(element)

})

questionButton.addEventListener('click', () => {
    var question1 = document.getElementById('question1');
    var optionA = document.getElementById('optionA');
    var optionB = document.getElementById('optionB');
    var optionC = document.getElementById('optionC');
    var optionD = document.getElementById('optionD');

    optionB.className = 'resposta'
    question1.removeChild(optionA)
    question1.removeChild(optionC)
    question1.removeChild(optionD)
})


questionButton2.addEventListener('click', () => {
    var question2 = document.getElementById('question2');
    var option2A = document.getElementById('option2A');
    var option2B = document.getElementById('option2B');
    var option2C = document.getElementById('option2C');
    var option2D = document.getElementById('option2D');

    option2D.className = 'resposta'
    question2.removeChild(option2A)
    question2.removeChild(option2B)
    question2.removeChild(option2C)
})
window.location = "#wall-1";