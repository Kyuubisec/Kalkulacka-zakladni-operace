// kalkulacka
function calculate() {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;
  
    if (isNaN(a) || isNaN(b)) {
      document.getElementById('calcResult').textContent = "Zadejte platná čísla.";
      return;
    }
  
    switch (operation) {
      case 'add':
        result = a + b;
        break;
      case 'subtract':
        result = a - b;
        break;
      case 'multiply':
        result = a * b;
        break;
      case 'divide':
        if (b === 0) {
          document.getElementById('calcResult').textContent = "Dělení nulou není možné!";
          return;
        }
        result = a / b;
        break;
      default:
        result = "Neplatná operace.";
    }
  
    document.getElementById('calcResult').textContent = "Výsledek: " + result;
  }
  
  // generator náhodného čísla
  let randomNumber, attempts;
  
  function startGuessingGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessSection').style.display = 'block';
    document.getElementById('guessFeedback').textContent = "Hra začala! Hádejte číslo.";
  }
  
  function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    if (isNaN(guess)) {
      document.getElementById('guessFeedback').textContent = "Zadejte platné číslo.";
      return;
    }
    if (guess < randomNumber) {
      document.getElementById('guessFeedback').textContent = "Zkus větší číslo.";
    } else if (guess > randomNumber) {
      document.getElementById('guessFeedback').textContent = "Zkus menší číslo.";
    } else {
      document.getElementById('guessFeedback').textContent = `Správně! Číslo bylo ${randomNumber}. Počet pokusů: ${attempts}.`;
      document.getElementById('guessSection').style.display = 'none';
    }
  }
  
  // prevodnik men
  function convertCurrency() {
    let amount = parseFloat(document.getElementById('czkAmount').value);
    let currency = document.getElementById('currency').value;
  
    if (amount < 0) {
      document.getElementById('conversionResult').textContent = "Částka nemůže být záporná!";
      return;
    }
  
    let rate;
    switch (currency) {
      case 'EUR':
        rate = 25;
        break;
      case 'USD':
        rate = 22;
        break;
      case 'GBP':
        rate = 30;
        break;
      default:
        rate = 0;
    }
  
    let result = (amount / rate).toFixed(2);
    document.getElementById('conversionResult').textContent = `Výsledek: ${result} ${currency}`;
  }
  