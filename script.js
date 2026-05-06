
const cartBtn = document.querySelector(".btn");
const colorOptions = document.querySelectorAll("input[name='color']");
const sizeOptions = document.querySelectorAll("input[name='size']");


cartBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let selectedColor = "";
  let selectedSize = "";

  // Get selected color
  colorOptions.forEach(option => {
    if (option.checked) selectedColor = option.value || option.nextSibling.textContent.trim();
  });
  sizeOptions.forEach(option => {
    if (option.checked) selectedSize = option.value || option.nextSibling.textContent.trim();
  });


  if (!selectedColor || !selectedSize) {
    alert("Please select color and size!");
    return;
  }

  
  localStorage.setItem("color", selectedColor);
  localStorage.setItem("size", selectedSize);
  cartBtn.innerText = "Added to Cart ✓";
  cartBtn.style.background = "green";
  cartBtn.style.transform = "scale(1.1)";


  setTimeout(() => {
    window.location.href = "shipping.html";
  }, 1200);
});


if (window.location.pathname.includes("shipping.html")) {

  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

   
    const inputs = document.querySelectorAll("input");
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        valid = false;
      }
    });

    if (!valid) {
      alert("Please fill all fields!");
      return;
    }

   
    localStorage.setItem("name", inputs[0].value);
    localStorage.setItem("address", inputs[1].value);

  
    window.location.href = "confirmation.html";
  });

}



if (window.location.pathname.includes("confirmation.html")) {

  const container = document.querySelector(".container");

  const color = localStorage.getItem("color");
  const size = localStorage.getItem("size");
  const name = localStorage.getItem("name");

  if (container) {
    const msg = document.createElement("p");
    msg.innerHTML = `
      <br>
      <b>Order Details:</b><br>
      Name: ${name} <br>
      Color: ${color} <br>
      Size: ${size}
    `;
    container.appendChild(msg);
  }
}