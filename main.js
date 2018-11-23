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

/*function validateForm() {
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
}*/

function validateForm() {
    var age = document.getElementById("age");
    var age_img = document.getElementById('check1');
    var restbloodpressure = document.getElementById("rest-blood-pressure");
    var restbloodpressure_img = document.getElementById('check2');
    var serumcholestrol = document.getElementById("serum-cholestrol");
    var serumcholestrol_img = document.getElementById('check3');
    var maxheartrate = document.getElementById("max-heart-rate");
    var maxheartrate_img = document.getElementById('check4');
    var stdepression = document.getElementById("st-depression");
    var stdepression_img = document.getElementById('check5');
    var empty=0;
    var isnan=0;

    // All fields must be filled out
    if(!age.value) {
        age_img.style.display = 'inline-block';
        empty=1;
    }
    else age_img.style.display = 'none';
    
    if(!restbloodpressure.value) {
        restbloodpressure_img.style.display = 'inline-block';
        empty=1;
    }
    else restbloodpressure_img.style.display = 'none';
    
    if(!serumcholestrol.value) {
        serumcholestrol_img.style.display = 'inline-block';
        empty=1;
    }
    else serumcholestrol_img.style.display = 'none';
    
    if(!maxheartrate.value) {
        maxheartrate_img.style.display = 'inline-block';
        empty=1;
    }
    else maxheartrate_img.style.display = 'none';
    
    if(!stdepression.value) {
        stdepression_img.style.display = 'inline-block';
        empty=1;
    }
    else stdepression_img.style.display = 'none';

    if(empty==1) {
        alert("All fields must be filled out");
        return false;
    }
    
    // All text input must be a number
    if(isNaN(age.value)) {
        age_img.style.display = 'inline-block';
        isnan=1;
    }
    else age_img.style.display = 'none';
    
    if(isNaN(restbloodpressure.value)) {
        restbloodpressure_img.style.display = 'inline-block';
        isnan=1;
    }
    else restbloodpressure_img.style.display = 'none';
    
    if(isNaN(serumcholestrol.value)) {
        serumcholestrol_img.style.display = 'inline-block';
        isnan=1;
    }
    else serumcholestrol_img.style.display = 'none';
    
    if(isNaN(maxheartrate.value)) {
        maxheartrate_img.style.display = 'inline-block';
        isnan=1;
    }
    else maxheartrate_img.style.display = 'none';
    
    if(isNaN(stdepression.value)) {
        stdepression_img.style.display = 'inline-block';
        isnan=1;
    }
    else stdepression_img.style.display = 'none';

    if(isnan==1){
        alert("All text input must be a number");
        return false;
    }
    else return true;
}