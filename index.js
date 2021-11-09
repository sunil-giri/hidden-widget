const search = document.getElementById("search");
const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  container.classList.toggle("active");
  search.focus();
});
