function updateScore()
{
score = score + 1;
document.getElementById("score").innerHTML = "Score: " + score;
}

function saveScore()
{
localStorage.setItem("score", score);
}

function nextPage() {
    window.location = "activity_2.html"
}

function send() {
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check></button>"




}