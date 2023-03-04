async function getBusinessData() {
    const response = await fetch('../chamber/json/directory.json');
    const data = await response.json();
    console.table(data.companies);
    displayBusinesses(data.companies);
    var script = document.createElement('script');
    script.src = 'scripts/lazy_load.js';
    document.body.appendChild(script);
}

const displayBusinesses = (companies) => {
    const cards = document.querySelector('div.cards');
    companies.forEach((company) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let div = document.createElement('div'); // add div to group elements
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let img = document.createElement('img');
        let website = document.createElement('a');
        let storeHours = document.createElement('ul');
        let membership = document.createElement('input');
        let toggleButton = document.createElement('button');
        let pictureContainer = document.createElement('picture');

        h2.textContent = company.name;
        p1.textContent = `Address: ${company.address}`;
        p2.textContent = `Phone: ${company.phone}`;
        website.textContent = company.website;
        website.setAttribute('href', company.website);
        website.setAttribute('target', '_blank');
        storeHours.setAttribute('hidden', true);
        for (let day in company.open_hours) {
            let li = document.createElement('li');
            li.textContent = `${day}: ${company.open_hours[day]}`;
            storeHours.appendChild(li);
        }
        membership.setAttribute('type', 'hidden');
        membership.setAttribute('value', company.membership);

        img.setAttribute('src', "images/placeholder.webp");
        img.setAttribute('data-src', "images/directory/" + company.image);
        img.setAttribute('alt', `${company.name} logo`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '340');
        img.setAttribute('height', '240');

        div.appendChild(p1); // add elements to the div
        div.appendChild(p2);
        if(company.website != ""){
            div.appendChild(website);
        }
        
        pictureContainer.appendChild(img);
        div.appendChild(pictureContainer);
        

        toggleButton.textContent = "View store hours";
        toggleButton.addEventListener('click', () => {
            if (storeHours.getAttribute('hidden') == 'true') {
                storeHours.removeAttribute('hidden');
                div.setAttribute('hidden', true); // hide the div
                toggleButton.textContent = "Hide store hours";
            } else {
                storeHours.setAttribute('hidden', true);
                div.removeAttribute('hidden'); // show the div
                toggleButton.textContent = "View store hours";
            }
        });

        card.appendChild(h2);
        card.appendChild(div); // add the div to the card        
        card.appendChild(storeHours);
        card.appendChild(membership);
        card.appendChild(toggleButton);

        cards.appendChild(card);
    })
}

getBusinessData();

function changeView() {
    const viewSelect = document.getElementById("view-select");
    const view = viewSelect.value;
  
    const businessesContainer = document.getElementById("businesses-container");
  
    if (view === "card") {
      businessesContainer.classList.remove("list-view");
    } else if (view === "list") {
      businessesContainer.classList.add("list-view");
    }
}


