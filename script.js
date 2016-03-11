function random(min, max) {
  var maths = Math.floor(Math.random() * max - min);
  return maths;
}

var displayMessage = function(text) {
  var message = document.getElementById("message");
  message.innerHTML = text;
};

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
      number[start].classList.add("highlight");
      number[start + 1].classList.add("highlight");
      number[start + 2].classList.add("highlight");
    }
  }
  matchWholeRow(0);
  matchWholeRow(3);
  matchWholeRow(6);

  //first colun
  if (numbers[0].innerHTML === numbers[1].innerHTML) {
    numbers[0].classList.add("highlight");
    numbers[1].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[1].innerHTML +
      " match");
  } else if (numbers[0].innerHTML === numbers[2].innerHTML) {
    numbers[0].classList.add("highlight");
    numbers[2].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[2].innerHTML +
      " match");
  } else if (numbers[1].innerHTML === numbers[2].innerHTML) {
    numbers[1].classList.add("highlight");
    numbers[2].classList.add("highlight");
    displayMessage(numbers[1].innerHTML + " and " + numbers[2].innerHTML +
      " match");
  }

  //second column
  if (numbers[3].innerHTML === numbers[4].innerHTML) {
    numbers[3].classList.add("highlight");
    numbers[4].classList.add("highlight");
    displayMessage(numbers[3].innerHTML + " and " + numbers[4].innerHTML +
      " match");
  } else if (numbers[3].innerHTML === numbers[5].innerHTML) {
    numbers[3].classList.add("highlight");
    numbers[5].classList.add("highlight");
    displayMessage(numbers[3].innerHTML + " and " + numbers[5].innerHTML +
      " match");
  } else if (numbers[4].innerHTML === numbers[5].innerHTML) {
    numbers[4].classList.add("highlight");
    numbers[5].classList.add("highlight");
    displayMessage(numbers[4].innerHTML + " and " + numbers[5].innerHTML +
      " match");
  }

  //third colum
  if (numbers[6].innerHTML === numbers[7].innerHTML) {
    numbers[6].classList.add("highlight");
    numbers[7].classList.add("highlight");
    displayMessage(numbers[6].innerHTML + " and " + numbers[7].innerHTML +
      " match");
  } else if (numbers[6].innerHTML === numbers[8].innerHTML) {
    numbers[6].classList.add("highlight");
    numbers[8].classList.add("highlight");
    displayMessage(numbers[6].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  } else if (numbers[7].innerHTML === numbers[8].innerHTML) {
    numbers[7].classList.add("highlight");
    numbers[8].classList.add("highlight");
    displayMessage(numbers[7].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  }

  //rows
  if (numbers[0].innerHTML === numbers[3].innerHTML) {
    numbers[0].classList.add("highlight");
    numbers[3].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[3].innerHTML +
      " match");
  } else if (numbers[0].innerHTML === numbers[6].innerHTML) {
    numbers[0].classList.add("highlight");
    numbers[6].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[6].innerHTML +
      " match");
  } else if (numbers[3].innerHTML === numbers[6].innerHTML) {
    numbers[3].classList.add("highlight");
    numbers[6].classList.add("highlight");
    displayMessage(numbers[3].innerHTML + " and " + numbers[6].innerHTML +
      " match");
  }

  if (numbers[2].innerHTML === numbers[5].innerHTML) {
    numbers[2].classList.add("highlight");
    numbers[5].classList.add("highlight");
    displayMessage(numbers[2].innerHTML + " and " + numbers[5].innerHTML +
      " match");
  } else if (numbers[2].innerHTML === numbers[8].innerHTML) {
    numbers[2].classList.add("highlight");
    numbers[8].classList.add("highlight");
    displayMessage(numbers[2].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  } else if (numbers[5].innerHTML === numbers[8].innerHTML) {
    numbers[5].classList.add("highlight");
    numbers[8].classList.add("highlight");
    displayMessage(numbers[5].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  }

  if (numbers[1].innerHTML === numbers[4].innerHTML) {
    numbers[1].classList.add("highlight");
    numbers[4].classList.add("highlight");
    displayMessage(numbers[1].innerHTML + " and " + numbers[4].innerHTML +
      " match");
  } else if (numbers[1].innerHTML === numbers[7].innerHTML) {
    numbers[1].classList.add("highlight");
    numbers[7].classList.add("highlight");
    displayMessage(numbers[1].innerHTML + " and " + numbers[7].innerHTML +
      " match");
  } else if (numbers[4].innerHTML === numbers[7].innerHTML) {
    numbers[4].classList.add("highlight");
    numbers[7].classList.add("highlight");
    displayMessage(numbers[4].innerHTML + " and " + numbers[7].innerHTML +
      " match");
  }

  //criss cross
  if (numbers[0].innerHTML === numbers[4].innerHTML) {
    numbers[0].classList.add("highlight");
    numbers[4].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[4].innerHTML +
      " match");
  } else if (numbers[0].innerHTML === numbers[8].innerHTML) {
    numbers[0].classList.add("highlight");
    numbers[8].classList.add("highlight");
    displayMessage(numbers[0].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  } else if (numbers[4].innerHTML === numbers[8].innerHTML) {
    numbers[4].classList.add("highlight");
    numbers[8].classList.add("highlight");
    displayMessage(numbers[4].innerHTML + " and " + numbers[8].innerHTML +
      " match");
  }

  if (numbers[2].innerHTML === numbers[4].innerHTML) {
    numbers[2].classList.add("highlight");
    numbers[4].classList.add("highlight");
    displayMessage(numbers[2].innerHTML + " and " + numbers[4].innerHTML +
      " match");
  } else if (numbers[2].innerHTML === numbers[6].innerHTML) {
    numbers[2].classList.add("highlight");
    numbers[6].classList.add("highlight");
    displayMessage(numbers[2].innerHTML + " and " + numbers[6].innerHTML +
      " match");
  } else if (numbers[4].innerHTML === numbers[6].innerHTML) {
    numbers[4].classList.add("highlight");
    numbers[6].classList.add("highlight");
    displayMessage(numbers[4].innerHTML + " and " + numbers[6].innerHTML +
      " match");
  }
}

document.getElementById("button").addEventListener("click", elements);
elements();
