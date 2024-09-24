//function of show-hide section by toggle button
function toggleBtn(id) {
    // hide all section
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");

    //show the section by id
    document.getElementById(id).classList.remove("hidden");
};


//function of toggle button style change
function toggleButtonStyle(id) {
    // hide style from other button
    document.getElementById("donation-toggle-btn").classList.add("bg-transparent", "border", "border-[#1111114d]", "hover:bg-primary-color");
    document.getElementById("donation-toggle-btn").classList.remove("bg-primary-color", "text-title-color", "hover:bg-transparent", "hover:text-text-color");
    document.getElementById("history-toggle-btn").classList.add("bg-transparent", "border", "border-[#1111114d]", "hover:bg-primary-color");
    document.getElementById("history-toggle-btn").classList.remove("bg-primary-color", "text-title-color", "hover:bg-transparent", "hover:text-text-color");

    //show style only the selected button
    document.getElementById(id).classList.remove("bg-transparent", "text-text-color", "border", "border-[#1111114d]");
    document.getElementById(id).classList.add("bg-primary-color", "text-title-color");
};

//get input value
function getInputValueById(id) {
    return Number(document.getElementById(id).value);
};

//get innerText value
function getInnerTextById(id) {
    return Number(document.getElementById(id).innerText);
};