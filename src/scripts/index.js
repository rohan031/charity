const selectElement = (identifier, type) => {
    return document.querySelector(`${type === "id" ? "#" : "."}${identifier}`)
}

const toggleSwitch = selectElement("toggle", "id");
const label = selectElement("label", "class");
const wrapper = selectElement("wrapper", "class");

label.innerHTML = '<i class="fa-solid fa-bars"></i>';

toggleSwitch.addEventListener("change", (e) => {
    if(e.target.checked) {
        label.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        wrapper.classList.add("open")
        return;
    }

    wrapper.classList.remove("open");
    label.innerHTML = '<i class="fa-solid fa-bars"></i>';
});

window.addEventListener("click", (e) => {
    console.log(e.target);
})