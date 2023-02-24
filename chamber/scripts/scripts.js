const footer1 = document.getElementById("page_info");

const year = new Date().getFullYear();
const lastUpdate = document.lastModified;
footer1.innerHTML = footer1.innerHTML + `<p>&copy; ${year} Nebo Chamber</p><p>Ki McAllister</p><p>WDD 230 Project</p><p>Last Updated: ${lastUpdate}</p>`;

const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(new Date());
document.querySelector(".date").innerHTML = fulldate;

document.getElementById("menu_btn").onclick = menu_toggle;
function menu_toggle(){
    console.log("working");
    document.getElementById("header_nav").classList.toggle("open");
}

const currentDay = new Date().getDay();

if(currentDay === 1 || currentDay === 2){
    document.getElementById("announcement").innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

function initMap() {

    const location = { lat: 39.710317425128416, lng: -111.83563368897097 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  
  window.initMap = initMap;