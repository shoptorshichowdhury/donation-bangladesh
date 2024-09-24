// Blog Button -> to show blog page
const blogBtn = document.getElementById("blog");
if (blogBtn) {
    blogBtn.addEventListener("click", function () {
        window.location.href = "./blog.html";
    });
}

// home button -> to show home page
const homeBtn = document.getElementById("home");
if (homeBtn) {
    homeBtn.addEventListener("click", function () {
        window.location.href = "./index.html";
    });
}

//function of sticky navbar
window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        document.querySelector("nav").classList.add("bg-opacity-60");
        document.querySelector("header").classList.add("bg-white", "bg-opacity-10", "backdrop-blur-lg", "sticky", "top-0", "z-10");
    } else {
        document.querySelector("nav").classList.remove("bg-opacity-60");
        document.querySelector("header").classList.remove("bg-white", "bg-opacity-10", "backdrop-blur-lg", "sticky", "top-0", "z-10");
    }
});


//donation toggle button
document.getElementById("donation-toggle-btn").addEventListener("click", function () {
    toggleBtn("donation-section");
    toggleButtonStyle("donation-toggle-btn");
});

//history toggle button
document.getElementById("history-toggle-btn").addEventListener("click", function () {
    toggleBtn("history-section");
    toggleButtonStyle("history-toggle-btn");
});


/*------------------------ function for noakhali flood donation ---------------------*/
document.getElementById("noakhali-donation-btn").addEventListener("click", function () {


    //get the donation amount
    const donationAmount = getInputValueById("noakhali-donation-input");

    //current total balance
    const TotalBalance = getInnerTextById("total-balance");

    if (!donationAmount || typeof donationAmount !== "number" || donationAmount <= 0 || donationAmount > TotalBalance) {
        alert("Please input valid amount");
        return;
    };

    //add the amount with the current donation balance
    const currentDonationBalance = getInnerTextById("noakhali-donation-balance");
    const newDonationBalance = currentDonationBalance + donationAmount;

    //show the new noakhali donation balance
    document.getElementById("noakhali-donation-balance").innerText = newDonationBalance.toFixed(2);

    //cut the donation amount from total balance
    const currentTotalBalance = TotalBalance - donationAmount;

    //show the current total balance
    document.getElementById("total-balance").innerText = currentTotalBalance.toFixed(2);
    document.getElementById("my_modal_5").showModal();

    //show transaction in history section
    const d = new Date();

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="gap-8 p-4 md:p-8 border border-border-color rounded-xl space-y-2 md:space-y-4">
        <h3 class="text-base md:text-xl font-bold text-title-color">${donationAmount.toFixed(2)} Taka is Donated for Flood Relief in Noakhali, Bangladesh</h3>
        <p class="text-sm md:text-base text-text-color">Date: ${d}</p>
    </div>
    `;

    document.getElementById("history-section").appendChild(div);
});

/*------------------------ function for feni flood donation ---------------------*/
document.getElementById("feni-donation-btn").addEventListener("click", function () {


    //get the donation amount
    const donationAmount = getInputValueById("feni-donation-input");

    //current total balance
    const TotalBalance = getInnerTextById("total-balance");

    if (!donationAmount || typeof donationAmount !== "number" || donationAmount <= 0 || donationAmount > TotalBalance) {
        alert("Please input valid amount");
        return;
    };

    //add the amount with the current donation balance
    const currentDonationBalance = getInnerTextById("feni-donation-balance");
    const newDonationBalance = currentDonationBalance + donationAmount;

    //show the new noakhali donation balance
    document.getElementById("feni-donation-balance").innerText = newDonationBalance.toFixed(2);

    //cut the donation amount from total balance
    const currentTotalBalance = TotalBalance - donationAmount;

    //show the current total balance
    document.getElementById("total-balance").innerText = currentTotalBalance.toFixed(2);
    document.getElementById("my_modal_5").showModal();

    //show transaction in history section
    const d = new Date();

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="gap-8 p-4 md:p-8 border border-border-color rounded-xl md:space-y-4">
        <h3 class="text-base md:text-xl font-bold text-title-color">${donationAmount.toFixed(2)} Taka is Donated for Flood Relief in Feni, Bangladesh</h3>
        <p class="text-sm md:text-base text-text-color">Date: ${d}</p>
    </div>
    `;

    document.getElementById("history-section").appendChild(div);
});


/*------------------------ function for quota movement donation ---------------------*/
document.getElementById("quota-donation-btn").addEventListener("click", function () {


    //get the donation amount
    const donationAmount = getInputValueById("quota-donation-input");

    //current total balance
    const TotalBalance = getInnerTextById("total-balance");

    if (!donationAmount || typeof donationAmount !== "number" || donationAmount <= 0 || donationAmount > TotalBalance) {
        alert("Please input valid amount");
        return;
    };

    //add the amount with the current donation balance
    const currentDonationBalance = getInnerTextById("quota-donation-balance");
    const newDonationBalance = currentDonationBalance + donationAmount;

    //show the new noakhali donation balance
    document.getElementById("quota-donation-balance").innerText = newDonationBalance.toFixed(2);

    //cut the donation amount from total balance
    const currentTotalBalance = TotalBalance - donationAmount;

    //show the current total balance
    document.getElementById("total-balance").innerText = currentTotalBalance.toFixed(2);
    document.getElementById("my_modal_5").showModal();

    //show transaction in history section
    const d = new Date();

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="gap-8 p-4 md:p-8 border border-border-color rounded-xl md:space-y-4">
        <h3 class="text-base md:text-xl font-bold text-title-color">${donationAmount.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
        <p class="text-sm md:text-base text-text-color">Date: ${d}</p>
    </div>
    `;

    document.getElementById("history-section").appendChild(div);
});