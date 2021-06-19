// Write your JavaScript code here!
// window.addEventListener('load', function(){
//    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
//       return response.json();
//    }).then(function(json){
//       console.log(json);
//       const missionTarget = document.querySelector('#missionTarget');
//       let pilots = '';
//       for (pilot of json){
//          pilots += `
//          <div class="pilot">
//             <div class ="details">
//             <h2>Mission Destination</h2>
//             <ol>
//                <li>Name: ${pilot.name}</li>
//                <li>Diameter: ${pilot.diameter}</li>
//                <li>Star: ${pilot.star}</li>
//                <li>Distance from Earth: ${pilot.distance}</li>
//                <li>Number of Moons: ${pilot.moons}</li>
//             </ol>
//             </div>
//             <img src="${pilot.image}">
//             </div>`;
//       }
//       missionTarget.innerHTML = pilots;
//    });
// });
/* This block of code shows how to format the HTML once you fetch some planetary JSON!*/



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

   // validation passed

   // update shuttle requirements..

   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");

   // add pilot name
   console.log(pilotStatus.innerHTML);
   pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
   copilotStatus.innerHTML = `Co-pilot ${coPilotNameInput.value} is ready for launch`;

   let isReady = true;

   if (fuelLevelInput.value < 10000) {
      //alert("There's not enough fuel for the journey!");
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      fuelStatus.innerHTML = "There's not enough fuel for the journey!";
      document.getElementById("launchStatusCheck").style.backgroundcolor = "red";
      isReady = false;
   } 

   if (cargoMassInput.value > 10000) {
      //alert("There's too much mass for the shuttle to take off!");
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      cargoStatus.innerHTML = "There's too much mass for the shuttle to take off!";
      document.getElementById("launchStatusCheck").style.backgroundcolor = "red";
      isReady = false;
   } 

   if (isReady){
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
      document.getElementById("launchStatusCheck").style.backgroundcolor = "green"; 
   }
   
   document.getElementById("faultyItems").style.visibility = "visible";
   event.preventDefault();
}


 const form = document.getElementById('launchChecklistForm');
 form.addEventListener('submit', onFormSubmit);

