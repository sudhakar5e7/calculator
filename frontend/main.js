window.addEventListener("load", function () {
    var firstNumberElement = document.getElementById('firstNumber')
    var secondNumberElement = document.getElementById('secondNumber')
    var sumButtonElement = document.getElementById('addButton')
    var subButtonElement = document.getElementById('subButton')
    var mulButtonElement = document.getElementById('mulButton')
    var divButtonElement = document.getElementById('divButton')
    var resultElement = document.getElementById('result')
    var answer
    sumButtonElement.addEventListener("click", function () {
        var first = firstNumberElement.value
        var second = secondNumberElement.value
        answer = parseInt(first)+parseInt(second);
        resultElement.innerHTML = answer
    })
    subButtonElement.addEventListener("click", function () {
        var first = firstNumberElement.value
        var second = secondNumberElement.value
        answer = parseInt(first)-parseInt(second);
        resultElement.innerHTML = answer
    })
    mulButtonElement.addEventListener("click", function () {
        var first = firstNumberElement.value
        var second = secondNumberElement.value
        answer = parseInt(first)*parseInt(second);
        resultElement.innerHTML = answer
    })
    divButtonElement.addEventListener("click", function () {
        var first = firstNumberElement.value
        var second = secondNumberElement.value
        answer = parseInt(first)/parseInt(second);
        resultElement.innerText = answer
    })

});