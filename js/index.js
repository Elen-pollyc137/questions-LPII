

var button = document.getElementById('button');
var questionButton = document.getElementById('questionbutton')

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
window.location = "#wall-1";