const toggleBtns = document.querySelectorAll(".toggle-btn");
const contents = document.querySelectorAll(".toogle-content");

for (let i = 0; i < toggleBtns.length; i++) {
  const toggleBtn = toggleBtns[i];
  const content = contents[i];
  let isContentVisible = true;

  toggleBtn.addEventListener("click", function() {
    if (isContentVisible) {
      content.style.visibility = "hidden";
      toggleBtn.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
    } else {
      content.style.visibility = "visible";
      toggleBtn.innerHTML = '<i class="bi bi-arrow-down-short"></i>';
    }
    isContentVisible = !isContentVisible;
  });
}


const footer = document.getElementsByTagName("footer");
const travel = document.querySelectorAll("div.card");


// creazione del nuovo elemento per visualizzare i voli e per cancellare le card
const newCount = document.createElement("h2");
newCount.style.textAlign= "center";
newCount.classList.add("text-info");
newCount.innerHTML = `Voli: ${travel.length} <i id="easer" class="bi bi-eraser-fill"></i>`;

// selezionare il genitore dell'elemento prima del quale si vuole inserire il nuovo elemento
const genitore = document.querySelector("body");

// selezionare l'elemento di riferimento (in questo caso il footer)
const elementoRiferimento = document.querySelector("#footer");

// inserire il nuovo elemento prima del footer
genitore.insertBefore(newCount, elementoRiferimento);



//rimuoviamo gli elementi
function removeCard(targets){
    for (const target of targets) {
        target.style.visibility = "hidden";
    }
}
newCount.querySelector("#easer").addEventListener("click", () => {
    removeCard(travel);
});

