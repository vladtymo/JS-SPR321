// get elements
const form = document.forms.createItemForm;
const nameIn = form.elements.title;

let items = [];

form.onsubmit = (e) => {

    e.preventDefault();

    // add item to the list
    const title = nameIn.value;
    items.push(title);

    addItemToList(title);

    console.log("Created!");
}

saveBtn.onclick = () => save();
loadBtn.onclick = () => load();

function save() {
    // JSON.stringify() - convert object to json string
    // JSON.parse()     - convert json string to js object
    localStorage.setItem("items-key", JSON.stringify(items));
}
function load() {
    // clear list
    itemList.innerHTML = "";
    // load items from storage
    items = JSON.parse(localStorage.getItem("items-key"));

    // add items to the page
    for (const i of items) {
        addItemToList(i);
    }
}

function addItemToList(title) {
    itemList.innerHTML += `<li>${title}</li>`;
}