var display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    var result = eval(display.value);
    if (!isFinite(result)) {
      display.value = 'Error';
    } else {
      display.value = result;
    }
  } catch (e) {
    display.value = 'Error';
  }
}