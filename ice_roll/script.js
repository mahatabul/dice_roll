function diceRoll() {
  let input = document.getElementById("input").value;
  let output_text = document.getElementById("output_text")
  let output_images = document.getElementById("output_images")
  if (input > 7) {
    input = 7;
  }
  if (input < 1) {
    input = 1;
  }

  const text = [];
  const images = [];
  for (let index = 1; index <= input; index++) {
    const random = Math.floor(Math.random() * 6 )+1;

    text.push(random);
    images.push(`<img src="assets/${random}_red.png">`);
  }

  output_text.textContent=`Dice: ${text.join(", ")}`;
  output_images.innerHTML = images.join("");
}
