// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${pilot.name}</li>
   <li>Diameter: ${pilot.diameter}</li>
   <li>Star: ${pilot.star}</li>
   <li>Distance from Earth: ${pilot.distance}</li>
   <li>Number of Moons: ${pilot.moons}</li>
</ol>
<img src="${pilot.image}">
*/


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
}


 const form = document.getElementById('launchChecklistForm');
 form.addEventListener('submit', onFormSubmit);



// Do not allow form submission if input value is invalid
//isNaN function that determine if a value does not convert to a number

      // var x=document.forms["launchChecklistForm"]["pilotName"].value;
      // var regex=/^[a-zA-Z]+$/;
      // if (!x.match(regex)) 
      // {
      //    alert("pilot name must be letters");
      //    return false;
      // }
      // var x=document.forms["launchChecklistForm"]["fuelLevel"].value;
      // if (isNaN(x)) 
      // {
      //    alert("Fuel Level must be numbers");
      //    return false;
      // }
      // var x=document.forms["launchChecklistForm"]["cargoMass"].value;
      // if (isNaN(x)) 
      // {
      //    alert("Cargo mass must be numbers");
      //    return false;
      // }