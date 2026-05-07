function showTab(tabId) {
  let tabs = document.querySelectorAll(".tab");
  tabs.forEach(t => t.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

function predict() {
  let teamA = document.getElementById("teamA").value;
  let teamB = document.getElementById("teamB").value;
  let mode = document.getElementById("mode").value;

  let scoreA = Math.floor(Math.random() * 5);
  let scoreB = Math.floor(Math.random() * 5);

  document.getElementById("result").innerHTML =
    `<h3>${teamA} ${scoreA} - ${scoreB} ${teamB}</h3>
     <p>Mode: ${mode}</p>`;
}
