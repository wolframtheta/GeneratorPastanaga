var json;

function random() {
	clear();
	json = JSON.parse(document.getElementById('text').value);
	putId(json);
	shuffleArray(json);
	addRow(json);
}

function putId(array) {
	for (var i = 0; i < array.length; i++) {
		array[i].Id = i+1;
	}
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
}
function addRow(json) {
	var table = document.getElementById("tableResults");
	var row;
	for (var x in json) {
		var row = table.insertRow(parseInt(x) + 1);
		row.insertCell(0).innerHTML = json[x].Id;
		row.insertCell(1).innerHTML = json[x].Nom;
		row.insertCell(2).innerHTML = json[x].Cognoms;
		row.insertCell(3).innerHTML = json[x].Telefon;
		row.insertCell(4).innerHTML = json[x].Email;
		row.insertCell(5).innerHTML = json[x].Edat;
		row.firstElementChild.className = 'hide-default';
	}
}

function clear() {
	document.getElementById("tableResults").innerHTML = "";
	var row = document.getElementById("tableResults").insertRow(0);
	row.insertCell(0).outerHTML = '<th class="hide-default">Numero</th>';
	row.insertCell(1).outerHTML = '<th>Nom</th>';
	row.insertCell(2).outerHTML = '<th>Cognoms</th>';
	row.insertCell(3).outerHTML = '<th>Telefon</th>';
	row.insertCell(4).outerHTML = '<th>Email</th>';
	row.insertCell(5).outerHTML = '<th>Edad</th>';
}

function showNumber() {
	var table = document.getElementById("tableResults");

	for (var i = 0; i < table.firstElementChild.children.length; i++) {
		table.firstElementChild.children[i].children[0].className = "";
	}

	document.getElementById("showHideNum").value = 'Amagar numeros';
	document.getElementById("showHideNum").onclick = hideNumber;
}

function hideNumber() {
	var table = document.getElementById("tableResults");

	for (var i = 0; i < table.firstElementChild.children.length; i++) {
		table.firstElementChild.children[i].children[0].className = "hide-default";
	}

	document.getElementById("showHideNum").value = 'Mostrar numeros';
	document.getElementById("showHideNum").onclick = showNumber;

}

function createList() {
	var table = document.getElementById("tableResults2");
	var row;
	row = table.insertRow(parseInt(x) + 1);
	row.insertCell(0).innerHTML = json[0].Id;
	row.insertCell(1).innerHTML = json[json.length-1];
	for (var x = 1; x < json.length; x++) {
		row = table.insertRow(parseInt(x) + 1);
		row.insertCell(0).innerHTML = json[x].Id;
		row.insertCell(1).innerHTML = json[x-1].Id;
	}
	showKillTable();
}

function showKillTable() {
	document.getElementById("tableResults").className = 'hide-default';
	document.getElementById("tableResults2").className = '';
	document.getElementById("killers").value = 'Mostrar taula noms';
	document.getElementById("killers").onclick = showAllTable;
}

function showAllTable() {
	document.getElementById("tableResults").className = '';
	document.getElementById("tableResults2").className = 'hide-default';
	document.getElementById("killers").value = 'Mostrar llista assassins';
	document.getElementById("killers").onclick = createList;
}