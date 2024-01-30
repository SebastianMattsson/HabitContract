let menuItemLogOut = document.getElementById("menuItemLogOut");
let menuItemProfile = document.getElementById("menuItemProfile");
let menuItemDashboard = document.getElementById("menuItemDashboard");
let menuItemContracts = document.getElementById("menuItemContracts");
let menuItemHabits = document.getElementById("menuItemHabits");
let menuItemAchievements = document.getElementById("menuItemAchievements");

//buttons for contract section
let btnAddPunishment = document.getElementById("btnAddPunishment");
let btnAddContract = document.getElementById("btnAddContract");
let btnSubmitContract = document.getElementById("btnSubmitContract");
let btnCancelContract = document.getElementById("btnCancelContract");

menuItemProfile.addEventListener("click", function () {
  window.location.replace("profile.html");
});
menuItemDashboard.addEventListener("click", function () {
  window.location.replace("dashboard.html");
});

menuItemContracts.addEventListener("click", function () {
  window.location.replace("contracts.html");
});

menuItemHabits.addEventListener("click", function () {
  window.location.replace("habits.html");
});

menuItemAchievements.addEventListener("click", function () {
  window.location.replace("achievements.html");
});
menuItemLogOut.addEventListener("click", function () {
  window.location.replace("../index.html");
});

try {
  btnAddContract.addEventListener("click", function () {
    document.getElementById("noContract").style.display = "none";
    document.getElementById("createContractContainer").style.display = "flex";
  });

  btnCancelContract.addEventListener("click", function () {
    document.getElementById("noContract").style.display = "flex";
    document.getElementById("createContractContainer").style.display = "none";
  });

  btnAddPunishment.addEventListener("click", function () {
    let div = document.createElement("div");
    let inputField = document.createElement("input");
    let selectField = document.createElement("select");
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let deleteButton = document.createElement("button");
    div.classList.add("punishment");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Description");
    option1.text = "BasseBasooka";
    option2.text = "BernieBadboll";
    selectField.add(option1);
    selectField.add(option2);

    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteButton.setAttribute("type", "button");
    deleteButton.addEventListener("click", () => {
      $(div).remove();
    });

    div.appendChild(inputField);
    div.appendChild(selectField);
    div.appendChild(deleteButton);

    let addedPunishmentContainer = document.getElementById(
      "addedPunishmentContainer"
    );

    addedPunishmentContainer.appendChild(div);
  });
} catch (error) {}

$(".punishment :button").click(function () {
  $(this).closest("div").remove();
});

$(".habitsContainer li").click(function () {
  if (!$(this).hasClass("selected")) {
    $(this).removeClass("notSelected");
    $(this).addClass("selected");
  } else {
    $(this).addClass("notSelected");
    $(this).removeClass("selected");
  }
});
