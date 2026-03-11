let countRemoved= 0;

function updateColors() {
  let items = document.querySelectorAll("#list li");
  items.forEach((item, i) => {
    item.style.backgroundColor = i % 2 === 0 ? "white" : "yellow";
  });
}

function addItems() {
  //let input = document.getElementById("addItem");
  let input = document.getElementById("item");
  let words = input.value.trim().split(" ");
  let list = document.getElementById("list");
  words.forEach(word => {
    //if (word == "") {
    if (word !== "") {
      let li = document.createElement("li");
      li.textContent = word;
      list.appendChild(li);
    }
  });
  input.value = "";
  updateColors();
}

function removeItem() {
  let Iteminput = document.getElementById("item");
  let text = input.value.trim().toLowerCase();
  let items = document.querySelectorAll("#list li");
  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.toLowerCase() === text) {
      items[i].remove();
      removedCount++;
      let div = document.getElementById("removed");
      div.innerHTML = "<b style='color:red'>" + input.value.trim() + "</b>";
      document.getElementById("count").innerHTML = 
        "<span style='color:green'>(" + removedCount + ") item" + (removedCount > 1 ? "s" : "") + " removed</span>";
      break;
    }
  }
  input.value = "";
  updateColors();
}
