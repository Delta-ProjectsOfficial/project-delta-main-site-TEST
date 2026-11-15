function changeMessage() {
            document.getElementById("Welcome message").innerHTML = "You tested it!!! Good job!";
        }

        function squareNumber() {
    let number = document.getElementById("number").value;

    let result = number * number;

    document.getElementById("result").textContent = result;
}
function resetCalculator() {
    document.getElementById("number").value = "";

    document.getElementById("result").textContent = "Result will appear here";
}
function cubeNumberCalculate() {
    let number = document.getElementById("cubeNumber").value;

    let result = number * number * number;

    document.getElementById("cubeResult").textContent = result;
}

function resetCube() {
    document.getElementById("cubeNumber").value = "";

    document.getElementById("cubeResult").textContent = "Result will appear here";
}