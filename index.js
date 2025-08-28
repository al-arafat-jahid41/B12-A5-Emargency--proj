function getElementId(id) {
  return document.getElementById(id);
}

// Get initial value from main heart container
let lifeCount = Number(getElementId("life-btn-container").innerText);
let ultLifeCount = 0;

// Event delegation: listen for clicks on any heart button
document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("life-btn")) {
    ultLifeCount++; // increment on each click
    let totalLife = lifeCount + ultLifeCount; // calculate running total
    getElementId("life-btn-container").innerText = totalLife; // update display
  }
});

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("call-btn")) {
    let card = e.target.parentElement.parentElement; // goes up two levels
    let service = card.querySelector(".pic-service").innerText;
    let number = card.querySelector(".pic-service-num").innerText;

    // Handle coins first
    let starElement = getElementId("star-btn"); // Make sure you have an element with id="star-btn"
    let currentCoins = Number(starElement.innerText);

    if (currentCoins >= 20) {
      alert(`📞 Calling ${service}: ${number}...`);
      currentCoins -= 20; // subtract 20 coins per call
      starElement.innerText = currentCoins; // update display
      const cartHistoryContainer = getElementId('cart-history-container');
      const newCart = document.createElement('div');
      newCart.innerHTML = 
    } else {
      alert("❌ You have no enough coins");
    }
  }
});
