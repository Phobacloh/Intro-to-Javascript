function plusOne() {
    console.log("wazzup")
    let number = document.getElementById("myNumber").innerHTML;
    console.log("number", number)
    let add = parseInt(number) + 1;
    document.getElementById("myNumber").innerHTML = add
  } 

  function takeOne() {
    console.log("wazzup")
    let number = document.getElementById("myNumber").innerHTML;
    console.log("number", number)
    let take = parseInt(number) - 1;
    document.getElementById("myNumber").innerHTML = take
  } 