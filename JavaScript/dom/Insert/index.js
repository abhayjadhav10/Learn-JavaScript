console.log("JS is Executing");

let insertDiv = document.createElement("div")
insertDiv.setAttribute("class", "inserted")
insertDiv.innerHTML = "I have been Inserted"

document.querySelector(".container").append(insertDiv)