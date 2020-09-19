// computer choice
// makes random number up to 3, floor rounds it down do nearest int the +1 at the end makes the range 1-3 (i.e 0.33 rounds down to 0, +1 to make it 1)
document.getElementById('rock').onclick = user;

let randomNumber = Math.floor(Math.random() *3) +1;

if (randomNumber === 1) {
    console.log("CPU chose Rock!");
} else if (randomNumber === 2) {
    console.log("CPU chose Paper!");
} else if (randomNumber ===3){
    console.log("CPU chose Scissors!");
}