function insertarFila() {
    let tblDatos = document.getElementById('tblDatos').insertRow(0);
    let col1 = tblDatos.insertCell(0);
    let col2 = tblDatos.insertCell(1);

    col1.innerHTML = 'Nueva celda';
    col2.innerHTML = 'Nueva celda';
}