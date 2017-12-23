const pcElem = document.getElementsByClassName("pc");

for (let i = pcElem.length - 1; i >=0; i--) {
  let price = Number(pcElem[i].textContent);
  if (price > 0) {
    pcElem[i].style.color = "#57f273";
  } else if (price < 0) {
    pcElem[i].style.color = "#ff8282";
  }
}
