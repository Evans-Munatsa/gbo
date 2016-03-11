function random(min, max) {
  var maths = Math.floor(Math.random() * max - min);
  return maths;
}

function elements() {
  var numbers = document.querySelectorAll('.number');
  //clears every highlight
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].classList.remove("highlight")
  }
  //matches and highlights
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = random(0, 9);
  }

  // same row matching
  function matchWholeRow(start) {
    var start = 0;
    if (numbers[start].innerHTML === numbers[start + 1].innerHTML && numbers[
        start].innerHTML === numbers[start + 2].innerHTML && numbers[start + 1]
      .innerHTML ===
      numbers[start + 2].innerHTML) {
      document.getElementsByClassName("number")[start].classList.add(
        "highlight");
      document.getElementsByClassName("number")[start + 1].classList.add(
        "highlight");
      document.getElementsByClassName("number")[start + 2].classList.add(
        "highlight");
    }
  }
  matchWholeRow(0);
  matchWholeRow(3);
  matchWholeRow(6);

  //first row
  if (numbers[0].innerHTML === numbers[1].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[1].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[1].innerHTML +
      " match");
  } else if (numbers[0].innerHTML === numbers[2].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[2].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[2].innerHTML +
      " match");
  } else if (numbers[1].innerHTML === numbers[2].innerHTML) {
    document.getElementsByClassName("number")[1].classList.add("highlight");
    document.getElementsByClassName("number")[2].classList.add("highlight");
    displayMessage(numbers[1].innerHTML + " and " + numbers[2].innerHTML +
      " match");
  }

  //second row
  if (numbers[3].innerHTML === numbers[4].innerHTML) {
    document.getElementsByClassName("number")[3].classList.add("highlight");
    document.getElementsByClassName("number")[4].classList.add("highlight");
    displayMessage(numbers[3].innerHTML + " and " + numbers[4].innerHTML +
      " match");
  } else if (numbers[3].innerHTML === numbers[5].innerHTML) {
    document.getElementsByClassName("number")[3].classList.add("highlight");
    document.getElementsByClassName("number")[5].classList.add("highlight");
    displayMessage(numbers[3].innerHTML + " and " + numbers[5].innerHTML +
      " match");
  } else if (numbers[4].innerHTML === numbers[5].innerHTML) {
    document.getElementsByClassName("number")[4].classList.add("highlight");
    document.getElementsByClassName("number")[5].classList.add("highlight");
    displayMessage(numbers[4].innerHTML + " and " + numbers[5].innerHTML +
      " match");
  }

  //third
  if (numbers[6].innerHTML === numbers[7].innerHTML) {
    document.getElementsByClassName("number")[6].classList.add("highlight");
    document.getElementsByClassName("number")[7].classList.add("highlight");
    displayMessage(numbers[6].innerHTML + " and " + numbers[7].innerHTML +
      " match");
  } else if (numbers[6].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[6].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
    displayMessage(numbers[6].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  } else if (numbers[7].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[7].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
    displayMessage(numbers[7].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  }

  if (numbers[0].innerHTML === numbers[3].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[3].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[3].innerHTML +
      " match");
  } else if (numbers[0].innerHTML === numbers[6].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[6].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[6].innerHTML +
      " match");
  } else if (numbers[3].innerHTML === numbers[6].innerHTML) {
    document.getElementsByClassName("number")[3].classList.add("highlight");
    document.getElementsByClassName("number")[6].classList.add("highlight");
    displayMessage(numbers[3].innerHTML + " and " + numbers[6].innerHTML +
      " match");
  }

  if (numbers[2].innerHTML === numbers[5].innerHTML) {
    document.getElementsByClassName("number")[2].classList.add("highlight");
    document.getElementsByClassName("number")[5].classList.add("highlight");
    displayMessage(numbers[2].innerHTML + " and " + numbers[5].innerHTML +
      " match");
  } else if (numbers[2].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[2].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
    displayMessage(numbers[2].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  } else if (numbers[5].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[5].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
    displayMessage(numbers[5].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  }

  if (numbers[1].innerHTML === numbers[4].innerHTML) {
    document.getElementsByClassName("number")[1].classList.add("highlight");
    document.getElementsByClassName("number")[4].classList.add("highlight");
    displayMessage(numbers[1].innerHTML + " and " + numbers[4].innerHTML +
      " match");
  } else if (numbers[1].innerHTML === numbers[7].innerHTML) {
    document.getElementsByClassName("number")[1].classList.add("highlight");
    document.getElementsByClassName("number")[7].classList.add("highlight");
    displayMessage(numbers[1].innerHTML + " and " + numbers[7].innerHTML +
      " match");
  } else if (numbers[4].innerHTML === numbers[7].innerHTML) {
    document.getElementsByClassName("number")[4].classList.add("highlight");
    document.getElementsByClassName("number")[7].classList.add("highlight");
    displayMessage(numbers[4].innerHTML + " and " + numbers[7].innerHTML +
      " match");
  }

  if (numbers[0].innerHTML === numbers[4].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[4].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[4].innerHTML +
      " match");
  } else if (numbers[0].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  } else if (numbers[4].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[4].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
    displayMessage(numbers[4].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  }

  if (numbers[2].innerHTML === numbers[4].innerHTML) {
    document.getElementsByClassName("number")[2].classList.add("highlight");
    document.getElementsByClassName("number")[4].classList.add("highlight");
    displayMessage(numbers[2].innerHTML + " and " + numbers[4].innerHTML +
      " match");
  } else if (numbers[2].innerHTML === numbers[6].innerHTML) {
    document.getElementsByClassName("number")[2].classList.add("highlight");
    document.getElementsByClassName("number")[6].classList.add("highlight");
    displayMessage(numbers[2].innerHTML + " and " + numbers[6].innerHTML +
      " match");
  } else if (numbers[4].innerHTML === numbers[6].innerHTML) {
    document.getElementsByClassName("number")[4].classList.add("highlight");
    document.getElementsByClassName("number")[6].classList.add("highlight");
    displayMessage(numbers[4].innerHTML + " and " + numbers[6].innerHTML +
      " match");
  }

  if (numbers[0].innerHTML === numbers[5].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[5].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[5].innerHTML +
      " match");
  } else if (numbers[2].innerHTML === numbers[3].innerHTML) {
    document.getElementsByClassName("number")[2].classList.add("highlight");
    document.getElementsByClassName("number")[3].classList.add("highlight");
    displayMessage(numbers[2].innerHTML + " and " + numbers[3].innerHTML +
      " match");
  } else if (numbers[6].innerHTML === numbers[5].innerHTML) {
    document.getElementsByClassName("number")[6].classList.add("highlight");
    document.getElementsByClassName("number")[5].classList.add("highlight");
    displayMessage(numbers[6].innerHTML + " and " + numbers[5].innerHTML +
      " match");
  } else if (numbers[3].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[3].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
    displayMessage(numbers[3].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  }
}

var displayMessage = function(text) {
  var message = document.getElementById("message");
  message.innerHTML = text;
};

document.getElementById("button").addEventListener("click", elements);

elements();
