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

function elements() {
  var numbers = document.querySelectorAll('.number');

  // give random number to all the elements
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = random(0, 9);

    // make everything green
    clear();

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
    } else if (numbers[0].innerHTML === numbers[2].innerHTML) {
      document.getElementsByClassName("number")[0].classList.add("highlight");
      document.getElementsByClassName("number")[2].classList.add("highlight");
    } else if (numbers[1].innerHTML === numbers[2].innerHTML) {
      document.getElementsByClassName("number")[1].classList.add("highlight");
      document.getElementsByClassName("number")[2].classList.add("highlight");
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
    } else if (numbers[3].innerHTML === numbers[5].innerHTML) {
      document.getElementsByClassName("number")[3].classList.add("highlight");
      document.getElementsByClassName("number")[5].classList.add("highlight");
    } else if (numbers[4].innerHTML === numbers[5].innerHTML) {
      document.getElementsByClassName("number")[4].classList.add("highlight");
      document.getElementsByClassName("number")[5].classList.add("highlight");
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
    } else if (numbers[6].innerHTML === numbers[8].innerHTML) {
      document.getElementsByClassName("number")[6].classList.add("highlight");
      document.getElementsByClassName("number")[8].classList.add("highlight");
    } else if (numbers[7].innerHTML === numbers[8].innerHTML) {
      document.getElementsByClassName("number")[7].classList.add("highlight");
      document.getElementsByClassName("number")[8].classList.add("highlight");
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
    } else if (numbers[0].innerHTML === numbers[6].innerHTML) {
      document.getElementsByClassName("number")[0].classList.add("highlight");
      document.getElementsByClassName("number")[6].classList.add("highlight");
    } else if (numbers[3].innerHTML === numbers[6].innerHTML) {
      document.getElementsByClassName("number")[3].classList.add("highlight");
      document.getElementsByClassName("number")[6].classList.add("highlight");
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
    } else if (numbers[2].innerHTML === numbers[8].innerHTML) {
      document.getElementsByClassName("number")[2].classList.add("highlight");
      document.getElementsByClassName("number")[8].classList.add("highlight");
    } else if (numbers[5].innerHTML === numbers[8].innerHTML) {
      document.getElementsByClassName("number")[5].classList.add("highlight");
      document.getElementsByClassName("number")[8].classList.add("highlight");
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
    } else if (numbers[1].innerHTML === numbers[7].innerHTML) {
      document.getElementsByClassName("number")[1].classList.add("highlight");
      document.getElementsByClassName("number")[7].classList.add("highlight");
    } else if (numbers[4].innerHTML === numbers[7].innerHTML) {
      document.getElementsByClassName("number")[4].classList.add("highlight");
      document.getElementsByClassName("number")[7].classList.add("highlight");
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
    } else if (numbers[0].innerHTML === numbers[8].innerHTML) {
      document.getElementsByClassName("number")[0].classList.add("highlight");
      document.getElementsByClassName("number")[8].classList.add("highlight");
    } else if (numbers[4].innerHTML === numbers[8].innerHTML) {
      document.getElementsByClassName("number")[4].classList.add("highlight");
      document.getElementsByClassName("number")[8].classList.add("highlight");
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
    } else if (numbers[2].innerHTML === numbers[6].innerHTML) {
      document.getElementsByClassName("number")[2].classList.add("highlight");
      document.getElementsByClassName("number")[6].classList.add("highlight");
    } else if (numbers[4].innerHTML === numbers[6].innerHTML) {
      document.getElementsByClassName("number")[4].classList.add("highlight");
      document.getElementsByClassName("number")[6].classList.add("highlight");
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
    } else if (numbers[2].innerHTML === numbers[3].innerHTML) {
      document.getElementsByClassName("number")[2].classList.add("highlight");
      document.getElementsByClassName("number")[3].classList.add("highlight");
    } else if (numbers[6].innerHTML === numbers[5].innerHTML) {
      document.getElementsByClassName("number")[6].classList.add("highlight");
      document.getElementsByClassName("number")[5].classList.add("highlight");
    } else if (numbers[3].innerHTML === numbers[8].innerHTML) {
      document.getElementsByClassName("number")[3].classList.add("highlight");
      document.getElementsByClassName("number")[8].classList.add("highlight");
    }
  }
}
elements();
