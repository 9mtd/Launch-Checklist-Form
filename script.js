// Planetary data
window.addEventListener('submit', function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      return response.json();
   }).then(function(json){
      console.log(json);
      const missionTarget = document.querySelector('#missionTarget');
      let planet = json[3];
      let planetDiv =  `<div class="planet">
      <div class ="details">
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${planet.name}</li>
         <li>Diameter: ${planet.diameter}</li>
         <li>Star: ${planet.star}</li>
         <li>Distance from Earth: ${planet.distance}</li>
         <li>Number of Moons: ${planet.moons}</li>
      </ol>
      </div>
      <img src="${planet.image}">
      </div>`;
      missionTarget.innerHTML = planetDiv;
   });
});


// add validation

function onFormSubmit(event) {

   let pilotNameInput = document.querySelector("input[name=pilotName]");
   if (pilotNameInput.value.trim() === "") {
   alert("pilotName is invalid!");
   event.preventDefault();
   return;
   }

   let coPilotNameInput = document.querySelector("input[name=copilotName]");
   if (coPilotNameInput.value.trim() === "") {
   alert("coPilotName is invalid!");
   event.preventDefault();
   return;
   }

   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   if (fuelLevelInput.value.trim() === "" || isNaN(fuelLevelInput.value.trim())) {
   alert("fuelLevel is invalid!");
   event.preventDefault();
   return;
   }

   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   if (cargoMassInput.value.trim() === "" || isNaN(cargoMassInput.value.trim())) {
   alert("cargoMass is invalid!");
   event.preventDefault();
   return;
   }


   // update shuttle requirements..

   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");

   console.log(pilotStatus.innerHTML);
   pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
   copilotStatus.innerHTML = `Co-pilot ${coPilotNameInput.value} is ready for launch`;

   let isReady = true;

   if (fuelLevelInput.value < 10000) {
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      fuelStatus.innerHTML = "Fuel level too low for launch";
      document.getElementById("launchStatus").style.color = "red";
      isReady = false;
   } 

   if (cargoMassInput.value > 10000) {
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      cargoStatus.innerHTML = "Cargo mass too high for launch";
      document.getElementById("launchStatus").style.color = "red";
      isReady = false;
   } 

   if (isReady){
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
      fuelStatus.innerHTML = "Fuel is enough for launch";
      cargoStatus.innerHTML = "Cargo mass is low enough for launch";
      document.getElementById("launchStatus").style.color = "green"; 
   }
   
   document.getElementById("faultyItems").style.visibility = "visible";
   event.preventDefault();
}


 const form = document.getElementById('launchChecklistForm');
 form.addEventListener('submit', onFormSubmit);

