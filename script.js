const input = document.querySelector("input");
const icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
  input.type === "password" ? (input.type = "text") : (input.type = "password");
});
