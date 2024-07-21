const links = document.links;
const main = document.getElementById("mainn");
const btnn = document.getElementById("btnn");
const pre = document.getElementById("pree");
console.log(links);

btnn.addEventListener("click", () => {
  main.style.display = "block";
  pre.style.display = "none";
  console.log("hide am");
});

for (let i = 0; i < links.length; i++) {
  const element = links[i];
  element.setAttribute("href", "javascript:void()");
  element.classList.add("connectButton");
}
