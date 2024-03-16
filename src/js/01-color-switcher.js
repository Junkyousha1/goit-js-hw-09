  const startButton = document.querySelector("[data-start]");
  const stopButton = document.querySelector("[data-stop]");
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  
  const changeBgColor = () => { document.body.style.backgroundColor = getRandomHexColor() }

  stopButton.disabled = true;
  let id = 0;
  startButton.addEventListener("click", () => {
    id = setInterval(changeBgColor, 1000)
    changeBgColor()
    startButton.disabled = true;
    stopButton.disabled = false;
  })
  
  stopButton.addEventListener("click", () => {
    clearInterval(id)
    startButton.disabled = false;
    stopButton.disabled = true;
  });