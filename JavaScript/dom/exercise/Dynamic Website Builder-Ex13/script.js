/* 

First Function Name - formatViews(views)
Main Function - createCard(title, cName, views, monthsOld, duration, thumbnail)
Var Views in string - viewStr
Var Html for Card - cardHTML

*/

console.log("JS in Executing");

function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000) {
    return Math.floor(views / 1000) + "K";
  } else {
    return views;
  }
}

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewStr = formatViews(views);

  let cardHTML = `
    <div class="card">
        <div class="thumbnail">
            <img src="${thumbnail}">
            <span class="duration">${duration}</span>
        </div>

        <div class="content">
            <h3>${title}</h3>
            <p class="meta">
                ${cName} • ${viewStr} views • ${monthsOld} months ago
            </p>
        </div>
        
    </div>

    `;

  document.querySelector(".container").innerHTML += cardHTML;
}

createCard(
  "Abra ka Dabra Gili Gili Chuu",
  "Abhiii10",
  100000,
  10,
  "33:15",
  "https://img.youtube.com/vi/HxKUkvC2-bU/maxresdefault.jpg",
);
