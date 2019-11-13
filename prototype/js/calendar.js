var dt = new Date();

function renderDate() {
    dt.setDate(1);
    var day = dt.getDay();
    var today = new Date();

    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

    var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    document.getElementById("month_str").innerHTML = months[dt.getMonth()] + " " + dt.getFullYear();
    //document.getElementById("date_str").innerHTML = dt.toDateString();

    var cells = "<tr>";
    for (var x = day; x > 0; x--) {
        cells += "<td class='prev_date'>" + (prevDate - x + 1) + "</td>";
    }
    var weekday = day;
    for (var i = 1; i <= endDate; i++) {
        if (weekday === 7) {
            cells += "</tr><tr>";
            weekday = 0;
        }
        cells += "<td class='";

        if (i === today.getDate() && dt.getMonth() === today.getMonth() && dt.getYear() === today.getYear())
            cells += " today";
        cells += "'>" + i + "</td>";
        weekday++;
    }

    for (var x = 0; x < 7 - weekday; x++) {
        cells += "<td class='next_date'>" + x + "</td>";
    }

    cells += "</tr>";
    document.getElementById("days").innerHTML = cells;
}

function prevMonth() {
    dt.setMonth(dt.getMonth() - 1);
    renderDate();
}

function nextMonth() {
    dt.setMonth(dt.getMonth() + 1);
    renderDate();
}