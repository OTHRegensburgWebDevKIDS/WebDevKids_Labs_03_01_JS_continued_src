const residentStore = require("./modules/residentStore.js");

let newResident = { name: "Lisa Simpson", age: 8, occupation: "student"};
residentStore.addResident(newResident);
let residents = residentStore.getAllResidents();

for (resident of residents) {
    console.log(resident.name);
}
