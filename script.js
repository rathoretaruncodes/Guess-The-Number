let number = Math.floor(Math.random() * 10 + 1);
let hintVal = document.getElementById("hint").value;
document.getElementById("submitBtn").onclick = function() {
    let choice = document.getElementById("guessField").value;
    if(choice == number) {
    document.getElementById("hint").value = "'Congratulations! You guessed it right'";
    } else if (choice > number) {
    document.getElementById("hint").value = "'Error! Choose a smaller number'";
    }else if (choice < number) {
    document.getElementById("hint").value = "'Error! Choose a larger number'";
    }else {
    document.getElementById("hint").value = "'Error! Choose a number'";
    }
}