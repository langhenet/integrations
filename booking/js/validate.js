window.onload = function () { showDate(); }

function showDate() {
    var today = new Date(); var dd = today.getDate(); var mm = today.getMonth() + 1; var yyyy = today.getFullYear(); if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm }
    document.getElementById("Text1").value = dd + '/' + mm + '/' + yyyy;
    var today1 = new Date();
    today1.setDate(today1.getDate() + 1); var dd1 = today1.getDate(); var mm1 = today1.getMonth() + 1; var yyyy1 = today1.getFullYear(); if (dd1 < 10) { dd1 = '0' + dd1 } if (mm1 < 10) { mm1 = '0' + mm1 }
    document.getElementById("Text2").value = dd1 + '/' + mm1 + '/' + yyyy1;
}
