function random(min, max) {
  var maths = Math.floor(Math.random() * max - min);
  return maths;
}

function clear() {
  document.getElementsByClassName("number")[0].classList.remove("highlight");
  document.getElementsByClassName("number")[1].classList.remove("highlight");
  document.getElementsByClassName("number")[2].classList.remove("highlight");
  document.getElementsByClassName("number")[3].classList.remove("highlight");
  document.getElementsByClassName("number")[4].classList.remove("highlight");
  document.getElementsByClassName("number")[5].classList.remove("highlight");
  document.getElementsByClassName("number")[6].classList.remove("highlight");
  document.getElementsByClassName("number")[7].classList.remove("highlight");
  document.getElementsByClassName("number")[8].classList.remove("highlight");
}

// var matched = document.querySelectorAll('.number').classList.add("highlight");
// for (var j = 0; j < matched.length; j++) {
//   matched[j]
// }

function elements() {
  var numbers = document.querySelectorAll('.number');


  // give random number to all the elements
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = random(0, 9);
  }

  // make everything green
  clear();


  // for (var j = 0; j < numbers.length; j++) {
  //   numbers[j].innerHTML =
  // }
  // same row matching
  if (numbers[0].innerHTML === numbers[1].innerHTML && numbers[0].innerHTML ===
    numbers[2].innerHTML && numbers[1].innerHTML === numbers[2].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[1].classList.add("highlight");
    document.getElementsByClassName("number")[2].classList.add("highlight");
  }

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


  if (numbers[3].innerHTML === numbers[4].innerHTML && numbers[3].innerHTML ===
    numbers[5].innerHTML && numbers[4].innerHTML === numbers[5].innerHTML) {
    document.getElementsByClassName("number")[3].classList.add("highlight");
    document.getElementsByClassName("number")[4].classList.add("highlight");
    document.getElementsByClassName("number")[5].classList.add("highlight");
  }

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

  if (numbers[6].innerHTML === numbers[7].innerHTML && numbers[6].innerHTML ===
    numbers[8].innerHTML && numbers[7].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[6].classList.add("highlight");
    document.getElementsByClassName("number")[7].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
  }

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

  // vertical matching
  if (numbers[0].innerHTML === numbers[3].innerHTML && numbers[0].innerHTML ===
    numbers[6].innerHTML && numbers[3].innerHTML === numbers[6].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[3].classList.add("highlight");
    document.getElementsByClassName("number")[6].classList.add("highlight");
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

  if (numbers[2].innerHTML === numbers[5].innerHTML && numbers[2].innerHTML ===
    numbers[8].innerHTML && numbers[5].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[2].classList.add("highlight");
    document.getElementsByClassName("number")[5].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
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

  if (numbers[1].innerHTML === numbers[4].innerHTML && numbers[1].innerHTML ===
    numbers[7].innerHTML && numbers[4].innerHTML === numbers[7].innerHTML) {
    document.getElementsByClassName("number")[1].classList.add("highlight");
    document.getElementsByClassName("number")[4].classList.add("highlight");
    document.getElementsByClassName("number")[7].classList.add("highlight");
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

  // across matching numbers
  if (numbers[0].innerHTML === numbers[4].innerHTML && numbers[0].innerHTML ===
    numbers[8].innerHTML && numbers[4].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[4].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
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

  if (numbers[2].innerHTML === numbers[4].innerHTML && numbers[2].innerHTML ===
    numbers[6].innerHTML && numbers[4].innerHTML === numbers[6].innerHTML) {
    document.getElementsByClassName("number")[2].classList.add("highlight");
    document.getElementsByClassName("number")[4].classList.add("highlight");
    document.getElementsByClassName("number")[6].classList.add("highlight");
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

  // match little
  if (numbers[0].innerHTML === numbers[5].innerHTML && numbers[2].innerHTML ===
    numbers[3].innerHTML && numbers[6].innerHTML === numbers[5].innerHTML &&
    numbers[3].innerHTML === numbers[8].innerHTML) {
    document.getElementsByClassName("number")[0].classList.add("highlight");
    document.getElementsByClassName("number")[2].classList.add("highlight");
    document.getElementsByClassName("number")[3].classList.add("highlight");
    document.getElementsByClassName("number")[5].classList.add("highlight");
    document.getElementsByClassName("number")[6].classList.add("highlight");
    document.getElementsByClassName("number")[8].classList.add("highlight");
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

elements();
