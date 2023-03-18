async function getBusinessData() {
    const response = await fetch('json/directory.json');
    const data = await response.json();
    const silverGoldCompanies = data.companies.filter((company) => {
        return company.membership === "Silver Membership" || company.membership === "Gold Membership";
    });
    const randomCompanies = shuffleArray(silverGoldCompanies).slice(0, 3);
    displaySpotlights(randomCompanies);
}

const displaySpotlights = (companies) => {
    const spotlight1 = document.getElementById("spotlight1");
    const spotlight2 = document.getElementById("spotlight2");
    const spotlight3 = document.getElementById("spotlight3");
    const spotlights = [spotlight1, spotlight2, spotlight3];

    companies.forEach((company, index) => {
        let h3 = spotlights[index].querySelector('h3');
        let img = spotlights[index].querySelector('img');
        let p1 = spotlights[index].querySelectorAll('p')[0];
        let p2 = spotlights[index].querySelectorAll('p')[1];

        h3.textContent = company.name;
        img.setAttribute('src', "images/directory/" + company.image);
        img.setAttribute('alt', `${company.name} image`);
        p1.textContent = company.description;
        p2.textContent = `Address: ${company.address}`;
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

getBusinessData();
