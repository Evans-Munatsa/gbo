function random() {
  var maths = Math.floor(Math.random() * 9);
  return maths;
}

function random2() {
  var maths = Math.floor(Math.random() * 3);
  return maths;
}

function random3() {
  var maths = Math.floor(Math.random() * 6);
  return maths;
}


function elements() {
  var number1 = random();
  var number2 = random();
  var number3 = random();
  var number4 = random2();
  var number5 = random2();
  var number6 = random2();
  var number7 = random3();
  var number8 = random3();
  var number9 = random3();

  document.getElementsByClassName('number1')[0].innerHTML = number1;
  document.getElementsByClassName('number2')[0].innerHTML = number2;
  document.getElementsByClassName('number3')[0].innerHTML = number3;
  document.getElementsByClassName('number4')[0].innerHTML = number4;
  document.getElementsByClassName('number5')[0].innerHTML = number5;
  document.getElementsByClassName('number6')[0].innerHTML = number6;
  document.getElementsByClassName('number7')[0].innerHTML = number7;
  document.getElementsByClassName('number8')[0].innerHTML = number8;
  document.getElementsByClassName('number9')[0].innerHTML = number9;

  if (number1 === number2) {
    document.getElementsByClassName("number1")[0].classList.add("highlight");
    document.getElementsByClassName("number2")[0].classList.add("highlight");
  }

  if (number1 === number3) {
    document.getElementsByClassName("number1")[0].classList.add("highlight");
    document.getElementsByClassName("number3")[0].classList.add("highlight");
  }

  if (number1 === number4) {
    document.getElementsByClassName("number1")[0].classList.add("highlight");
    document.getElementsByClassName("number4")[0].classList.add("highlight");
  }

  if (number1 === number5) {
    document.getElementsByClassName("number1")[0].classList.add("highlight");
    document.getElementsByClassName("number5")[0].classList.add("highlight");
  }

  if (number1 === number6) {
    document.getElementsByClassName("number1")[0].classList.add("highlight");
    document.getElementsByClassName("number6")[0].classList.add("highlight");
  }

  if (number1 === number7) {
    document.getElementsByClassName("number1")[0].classList.add("highlight");
    document.getElementsByClassName("number7")[0].classList.add("highlight");
  }

  if (number1 === number8) {
    document.getElementsByClassName("number1")[0].classList.add("highlight");
    document.getElementsByClassName("number8")[0].classList.add("highlight");
  }

  if (number1 === number9) {
    document.getElementsByClassName("number1")[0].classList.add("highlight");
    document.getElementsByClassName("number9")[0].classList.add("highlight");
  }

  if (number2 === number3) {
    document.getElementsByClassName("number2")[0].classList.add("highlight");
    document.getElementsByClassName("number3")[0].classList.add("highlight");
  }

  if (number2 === number4) {
    document.getElementsByClassName("number2")[0].classList.add("highlight");
    document.getElementsByClassName("number4")[0].classList.add("highlight");
  }

  if (number2 === number5) {
    document.getElementsByClassName("number2")[0].classList.add("highlight");
    document.getElementsByClassName("number5")[0].classList.add("highlight");
  }

  if (number2 === number6) {
    document.getElementsByClassName("number2")[0].classList.add("highlight");
    document.getElementsByClassName("number6")[0].classList.add("highlight");
  }

  if (number2 === number7) {
    document.getElementsByClassName("number2")[0].classList.add("highlight");
    document.getElementsByClassName("number7")[0].classList.add("highlight");
  }

  if (number2 === number8) {
    document.getElementsByClassName("number2")[0].classList.add("highlight");
    document.getElementsByClassName("number8")[0].classList.add("highlight");
  }

  if (number2 === number9) {
    document.getElementsByClassName("number2")[0].classList.add("highlight");
    document.getElementsByClassName("number9")[0].classList.add("highlight");
  }

  if (number3 === number4) {
    document.getElementsByClassName("number3")[0].classList.add("highlight");
    document.getElementsByClassName("number4")[0].classList.add("highlight");
  }

  if (number3 === number5) {
    document.getElementsByClassName("number3")[0].classList.add("highlight");
    document.getElementsByClassName("number5")[0].classList.add("highlight");
  }

  if (number3 === number6) {
    document.getElementsByClassName("number3")[0].classList.add("highlight");
    document.getElementsByClassName("number6")[0].classList.add("highlight");
  }

  if (number3 === number7) {
    document.getElementsByClassName("number3")[0].classList.add("highlight");
    document.getElementsByClassName("number7")[0].classList.add("highlight");
  }

  if (number3 === number8) {
    document.getElementsByClassName("number3")[0].classList.add("highlight");
    document.getElementsByClassName("number8")[0].classList.add("highlight");
  }

  if (number3 === number9) {
    document.getElementsByClassName("number3")[0].classList.add("highlight");
    document.getElementsByClassName("number9")[0].classList.add("highlight");
  }

  if (number4 === number5) {
    document.getElementsByClassName("number4")[0].classList.add("highlight");
    document.getElementsByClassName("number5")[0].classList.add("highlight");
  }

  if (number4 === number6) {
    document.getElementsByClassName("number4")[0].classList.add("highlight");
    document.getElementsByClassName("number6")[0].classList.add("highlight");
  }

  if (number4 === number7) {
    document.getElementsByClassName("number4")[0].classList.add("highlight");
    document.getElementsByClassName("number7")[0].classList.add("highlight");
  }

  if (number4 === number8) {
    document.getElementsByClassName("number4")[0].classList.add("highlight");
    document.getElementsByClassName("number8")[0].classList.add("highlight");
  }

  if (number4 === number9) {
    document.getElementsByClassName("number4")[0].classList.add("highlight");
    document.getElementsByClassName("number9")[0].classList.add("highlight");
  }

  if (number5 === number6) {
    document.getElementsByClassName("number5")[0].classList.add("highlight");
    document.getElementsByClassName("number6")[0].classList.add("highlight");
  }

  if (number5 === number7) {
    document.getElementsByClassName("number5")[0].classList.add("highlight");
    document.getElementsByClassName("number7")[0].classList.add("highlight");
  }

  if (number5 === number8) {
    document.getElementsByClassName("number5")[0].classList.add("highlight");
    document.getElementsByClassName("number8")[0].classList.add("highlight");
  }

  if (number5 === number9) {
    document.getElementsByClassName("number5")[0].classList.add("highlight");
    document.getElementsByClassName("number9")[0].classList.add("highlight");
  }

  if (number6 === number7) {
    document.getElementsByClassName("number6")[0].classList.add("highlight");
    document.getElementsByClassName("number7")[0].classList.add("highlight");
  }

  if (number6 === number8) {
    document.getElementsByClassName("number6")[0].classList.add("highlight");
    document.getElementsByClassName("number8")[0].classList.add("highlight");
  }

  if (number6 === number9) {
    document.getElementsByClassName("number6")[0].classList.add("highlight");
    document.getElementsByClassName("number9")[0].classList.add("highlight");
  }

  if (number7 === number8) {
    document.getElementsByClassName("number7")[0].classList.add("highlight");
    document.getElementsByClassName("number8")[0].classList.add("highlight");
  }

  if (number7 === number9) {
    document.getElementsByClassName("number7")[0].classList.add("highlight");
    document.getElementsByClassName("number9")[0].classList.add("highlight");
  }

  if (number8 === number9) {
    document.getElementsByClassName("number8")[0].classList.add("highlight");
    document.getElementsByClassName("number9")[0].classList.add("highlight");
  }
}
elements();
