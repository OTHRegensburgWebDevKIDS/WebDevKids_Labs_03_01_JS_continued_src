const residentStore = {

residents: [
    {
        name: "Homer Simpson",
        age: 39,
        occupation: "low-level safety inspector"
    },
    {
        name: "Marge Simpson",
        age: 36,
        occupation: "housewife"
    },
    ],

    addResident(resident) {
        this.residents.push(resident);
    },
    getAllResidents() {
        return this.residents;
    }
}

let newResident = { name: "Lisa Simpson", age: 8, occupation: "student"};
residentStore.addResident(newResident);
let residents = residentStore.getAllResidents();

for (resident of residents) {
    console.log(resident.name);
}


