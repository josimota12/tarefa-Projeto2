function addContact() {
    var name = document.getElementById("name").value;
    var telefone = document.getElementById("telefone").value;

    var table = document.getElementById("contactsTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = telefone;
}