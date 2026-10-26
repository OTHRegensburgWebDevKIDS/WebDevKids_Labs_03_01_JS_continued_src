let homer = {
    name: "Homer Simpson",
    age: 39,
    occupation: "low-level safety inspector",
    
    say: function hello() {
        console.log("Hello from " + this.name);
    }
};

homer.say();

