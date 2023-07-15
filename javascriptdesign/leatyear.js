/* **************Leap year funsun start************ */
document.getElementById("leapYearButton").addEventListener("click", isLeap);

function isLeap() {  
    var year = document.getElementById("year").value;
 if (year % 4 === 0){
     if(year % 100 === 0){
         if(year % 400 === 0){
            // return "Leap year."
           return document.getElementById("showLeatresult").innerHTML =  year + " is a Leap year. 366 Day's";
         } else {
             // return "Not leap year.";
           return document.getElementById("showLeatresult").innerHTML = year + " is a Not leap year. 365 Day's";
         }
     } else {
         // return "Leap year."
        return document.getElementById("showLeatresult").innerHTML = year + " is a Leap year. 366 Day's";
     }
     
 } else {
     // return "Not leap year.";
    return document.getElementById("showLeatresult").innerHTML = year + " is a Not leap year. 365 Day's";
}

}

/* **************Leap year funsun End************ */


