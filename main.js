let passengers = [];

let nameInput = document.getElementById("nameInput");
let addpassengerBtn = document.getElementById("addPassenger");
let fastTrackBtn = document.getElementById("fastTrack");
let passengerList = document.getElementById("passengerList");
let luggageBtn = document.getElementById("checkInLuggage");
let message = document.getElementById("empty");

addpassengerBtn.addEventListener("click", () => {
  passengers.push(nameInput.value);
  //console.log(passengers);
  addPassengersToList();
});

fastTrackBtn.addEventListener("click", () => {
  passengers.unshift(nameInput.value);
  //console.log(passengers);
  addPassengersToList();
});

function addPassengersToList() {
  passengerList.innerHTML = "";
  if (passengers.length === 0) {
    message.innerHTML =
      '<h4 style="color:red;">There are currently no people standing in line! </h4>';
  } else {
    message.innerHTML = "";
  }

  for (let i = 0; i < passengers.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = passengers[i];
    passengerList.appendChild(listItem);
    //passengerList.style.listStyle = "none";
  }
}

luggageBtn.addEventListener("click", () => {
  passengers.shift(nameInput.value);
  //console.log(passengers);
  addPassengersToList();
});
