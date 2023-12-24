var btn = document.getElementById("btn");
var nav = document.getElementById("navbar");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");

btn.addEventListener("click", function () {
  if (nav.style.display == "block") {
    nav.style.display = "none";
    span1.classList.remove("span1-open");
    span2.classList.remove("span2-open");
    span3.classList.remove("span3-open");
  } else {
    nav.style.display = "block";
    span1.classList.add("span1-open");
    span2.classList.add("span2-open");
    span3.classList.add("span3-open");
  }
});
