const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

// add event to submitButton for click
// quando clicar em Submit, a classe hidden vai ser removida e volta a aparecer o thank-you container.
submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
  // na ultima linha da funcao do click, o mainContainer vai sumir e fica so o thank-you.
});

rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden");
  mainContainer.style.display = "block";
  // agora, ao contrario, ao clicar no "Rate Again", adicionamos de novo a classe hidden pro thank you ser escondido e voltar pra tela mainContainer, tendo display block agora.
});

// passando nota selecionada para o span criado. pra aparecer a nota que for clicada
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    console.log(rate.innerHTML);
    rating.innerHTML = rate.innerHTML;
  });
});
