function person(name) {
    // this.name = name
}

person.prototype.greet = function() {
    console.log(`Hello my name is ${name}`);
}

let hitesh = new person("Hitesh")
hitesh.greet()