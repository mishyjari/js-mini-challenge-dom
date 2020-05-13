/***** Deliverable 1 *****/

const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "#FF0000"


/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)
const playerContainer = document.getElementsByClassName('player-container')[0];
PLAYERS.forEach(player => {
	// Create div
	const playerDiv = document.createElement('div');
	playerDiv.className = "player";
	playerDiv.setAttribute("data-number", player.number);
	
	// Create the inner content for the div using template literals
	const playerDetails = `
		<h3>
			${player.name} (<em>${player.nickname}</em>)
		</h3>
		<img src="${player.photo}" alt="${player.name}" />
		`;
	playerDiv.innerHTML = playerDetails;
	playerContainer.appendChild(playerDiv);
})


/***** Deliverable 4 *****/
const raz = document.querySelector("div.player[data-number='7']");
raz.remove();

