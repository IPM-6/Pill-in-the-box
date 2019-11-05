var dt = new Date();

function renderDate() {
    //dt.setDate(1);
    var day = dt.getDay();
    var today = new Date();
    
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    var prevDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    
    document.getElementById("month").innerHTML = months[dt.getMonth()];
    document.getElementById("date_str").innerHTML = dt.toDateString();
    
    var cells = "";
    for(var x = day; x > 0; x--) {
        cells += "<div class='col s1 prev_date'>" + (prevDate - x + 1) + "</div>";
    }
    
    for(var i = 1; i <= endDate; i++) {
        if(i == today.getDate() && dt.getDate() == today.getMonth())
            cells += "<div class='col s1 today'>" + i + "</div>";
        else
            cells += "<div class='col s1'>" + i + "</div>";
    }
    document.getElementById("days").innerHTML = cells;
    
}