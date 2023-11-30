var userPoint = 0;
var computerPoint = 0;
var name = prompt("Будь ласка, введіть ваше ім'я:");
if (!name) {
    alert("Будь ласка, введіть ім'я!");
}
document.getElementById('userLabel').innerText = name;
function generate() {
    var userNumber = Math.floor(Math.random() * 10) + 1;
    var computerNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById('userNumber').innerText = 'Ваше число: ' + userNumber;
    document.getElementById('computerNumber').innerText = 'Число комп\'ютера: ' + computerNumber;
    if (userNumber > computerNumber) {
        userPoint++;
    } else if (userNumber < computerNumber) {
        computerPoint++;
    }
    upgrade();
    if (userPoint+computerPoint === 3) {
        endGame();
    }
}
function upgrade() {
    document.getElementById('userPoint').innerText = 'Рахунок гравця: ' + userPoint;
    document.getElementById('computerPoint').innerText = 'Рахунок комп\'ютера: ' + computerPoint;
}
function endGame() {
    var result = document.getElementById('result');
    if (userPoint > computerPoint) {
        result.innerText = name+' переміг гру';
    } else {
        result.innerText = 'Комп\'ютер переміг гру';
    }
}
