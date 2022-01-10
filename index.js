function calculateTotal(row) {
    var table = document.getElementById("main");
    var _row = row.parentElement.parentElement;
    var tableRowPrice = document.getElementById(row.id).value;
    var tableRowQuantity = table.rows[_row.rowIndex - 1].cells[3].innerHTML;
    console.log(tableRowQuantity);

    var tableRowTotal = parseFloat(parseFloat(tableRowPrice) * parseFloat(tableRowQuantity)).toFixed(2);
    table.rows[_row.rowIndex - 1].cells[4].innerHTML = tableRowTotal;

    var Total = 0;
    for (var i = 0; i < table.rows.length; i++) {
        var tableRowTotal = table.rows[i].cells[4].innerHTML;
        if (tableRowTotal != '--')
            Total = parseFloat(Total) + parseFloat(tableRowTotal);
    }
    document.getElementById("Total").innerHTML = parseFloat(Total).toFixed(2);
}
