function seeResult() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByTagName('result').innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

$('#refresh').click(function() {
    alert("it is working");
})

function validateForm() {
    filled = true;
    var x = [];
    x.push(document.forms["form-container"]["age"].value,
    document.forms["form-container"]["sex"].value,
    document.forms["form-container"]["chest-pain-type"].value,
    document.forms["form-container"]["resting-blood-pressure"].value,
    document.forms["form-container"]["serum-cholestrol"].value,
    document.forms["form-container"]["fasting"].value,
    document.forms["form-container"]["resting-ecg"].value,
    document.forms["form-container"]["max-heart-rate"].value,
    document.forms["form-container"]["exercise-induced"].value,
    document.forms["form-container"]["st-depression"].value,
    document.forms["form-container"]["peak-exercise"].value,
    document.forms["form-container"]["major-vessels"].value,
    document.forms["form-container"]["thal"].value);
    
    for (var i = 0; i < x.length; i++) {
        if (x[i] == "") {
            filled = false;
        }
    }
    
    if(!filled){
        alert("All fields must be filled out");
        return filled;
    }
    
    var col = [0, 3, 4, 7, 9]
    for (var i in col){
        if (isNaN(x[i])){
            alert("All text input must be a number");
            filled = false;
            return filled;
        }
    }
    return filled;
}