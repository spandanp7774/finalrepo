const cartBtn = document.getElementById("cartBtn");
const productPage = document.getElementById("productPage");
const shippingPage = document.getElementById("shippingPage");
const confirmationPage = document.getElementById("confirmationPage");


cartBtn.addEventListener("click", () => {

  let color = document.querySelector("input[name='color']:checked");
  let size = document.querySelector("input[name='size']:checked");

  if (!color || !size) {
    alert("Please select color and size!");
    return;
  }

  
  localStorage.setItem("color", color.value);
  localStorage.setItem("size", size.value);

 
  cartBtn.innerText = "Added ✓";
  cartBtn.style.background = "green";

  
  setTimeout(() => {
    productPage.style.display = "none";
    shippingPage.style.display = "block";
  }, 1000);
});



const form = document.getElementById("shippingForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = form.querySelectorAll("input");
  let valid = true;

  inputs.forEach(input => {
    if (input.value === "") valid = false;
  });

  if (!valid) {
    alert("Fill all fields!");
    return;
  }


  localStorage.setItem("name", inputs[0].value);
  localStorage.setItem("address", inputs[1].value);

 
  shippingPage.style.display = "none";
  confirmationPage.style.display = "block";


  document.getElementById("orderDetails").innerHTML = `
    <h3>Order Details</h3>
    Name: ${localStorage.getItem("name")} <br>
    Color: ${localStorage.getItem("color")} <br>
    Size: ${localStorage.getItem("size")}
  `;
});
