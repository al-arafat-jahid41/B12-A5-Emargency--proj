function getElementId(id) {
  return document.getElementById(id);
}

let lifeCount = Number(getElementId("life-btn-container").innerText);
let ultLifeCount = 0;

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("life-btn")) {
    ultLifeCount++;
    let totalLife = lifeCount + ultLifeCount;
    getElementId("life-btn-container").innerText = totalLife;
  }
});

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("call-btn")) {
    let card = e.target.parentElement.parentElement;
    let service = card.querySelector(".pic-service").innerText;
    let number = card.querySelector(".pic-service-num").innerText;

    let starElement = getElementId("star-btn");
    let currentCoins = Number(starElement.innerText);

    if (currentCoins >= 20) {
      alert(`📞 Calling ${service}: ${number}...`);
      currentCoins -= 20;
      starElement.innerText = currentCoins;

      const cartHistoryContainer = getElementId("cart-history-container");
      let picMainService = card.querySelector(".pic-service-main").innerText;
      const newCart = document.createElement("div");
      newCart.innerHTML = `
        <div class="mx-auto p-4 rounded-xl shadow-sm bg-gray-50">
          <!-- Top row -->
          <div class="flex justify-between items-center">
            <h2 class="font-semibold text-gray-800">${picMainService}</h2>
            <span class="text-sm text-gray-500">${new Date().toLocaleTimeString()}</span>
          </div>
          <!-- Bottom row -->
          <p class="mt-2 text-lg font-bold text-gray-700">${number}</p>
        </div> 
      `;

      cartHistoryContainer.appendChild(newCart);
    } else {
      alert("❌ You have no enough coins");
    }
  }
});
getElementId("clear-btn").addEventListener("click", function () {
  const cartHistoryContainer = getElementId("cart-history-container");
  cartHistoryContainer.innerHTML = "";
});

let copyCount = Number(getElementId("copy-btn-container").innerText);
let ultCopyCount = 0;
document.body.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("copy-btn") ||
    e.target.closest(".copy-btn")
  ) {
    const button = e.target.closest(".copy-btn");

    const card = button.parentElement.parentElement;

    const numberToCopy = card.querySelector(".pic-service-num").innerText;

    navigator.clipboard
      .writeText(numberToCopy)
      .then(() => {
        alert(`✅ Copied: ${numberToCopy}`);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });

    ultCopyCount++;
    let totalCopyCount = copyCount + ultCopyCount;
    getElementId("copy-btn-container").innerText = totalCopyCount;
  }
});
