let delay = -0.4;
function createCard(date, day, game) {
   delay = delay + 0.4;
   return `
      <div class="card" style="animation-delay: ${delay}s">
         <h2>${date} <span>${day}</span></h2>
         <ul>
            ${game}
         </ul>
      </div>
   `
}

function createGame(team1, time, team2) {
   return `
      <li>
         <img src="./assets/icon-${team1}.svg" alt="Bandeira do ${team1}">
         <strong>${time}</strong>
         <img src="./assets/icon-${team2}.svg" alt="Bandeira da ${team2}">
      </li>
   `
}

document.querySelector("#cards").innerHTML = 
   createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia") + createGame("brazil", "16:00", "serbia")) +
   createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland")) +
   createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
