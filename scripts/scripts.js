const footer1 = document.querySelectorAll("p")[0];
const footer2 = document.querySelectorAll("p")[1];

const year = new Date().getFullYear();
const lastUpdate = document.lastModified;
footer1.innerHTML = `&copy; ${year} .:|:. Ki McAllister .:|:. UTAH`;
footer2.innerHTML = `Last Updated: ${lastUpdate}`;