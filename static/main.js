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

    if (isnan != 1 && empty != 1) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (xhr.responseText == 0) {
                    document.getElementById('result').innerHTML = `Normal (${xhr.responseText})`;
                } else {
                    document.getElementById('result').innerHTML = `Berpenyakit jantung dengan kategori ${xhr.responseText}`;
                }
                // console.log(xhr.responseText);
            }
        };
        xhr.open('POST', 'http://localhost:4000/predict');
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        let Column1 = document.getElementById("age").value;
        let Column2 = document.querySelector('input[name="sex"]:checked').value;
        let Column3Inp = document.getElementById("select-column3");
        let Column3 = Column3Inp.options[Column3Inp.selectedIndex].value;
        let Column4 = document.getElementById("rest-blood-pressure").value;
        let Column5 = document.getElementById("serum-cholestrol").value;
        let Column6 = document.querySelector('input[name="fasting"]:checked').value;
        let Column7Inp = document.getElementById("select-column7");
        let Column7 = Column7Inp.options[Column7Inp.selectedIndex].value;
        let Column8 = document.getElementById("max-heart-rate").value;
        let Column9 = document.querySelector('input[name="exercise-induced"]:checked').value;
        let Column10 = document.getElementById("st-depression").value;
        let Column11Inp = document.getElementById("select-column11");
        let Column11 = Column11Inp.options[Column11Inp.selectedIndex].value;
        let Column12Inp = document.getElementById("select-column12");
        let Column12 = Column12Inp.options[Column12Inp.selectedIndex].value;
        let Column13Inp = document.getElementById("select-column13");
        let Column13 = Column13Inp.options[Column13Inp.selectedIndex].value; 

        let data = {
            "data" : [
                [
                    Number(Column1), Number(Column2), Number(Column3), Number(Column4), Number(Column5), Number(Column6), Number(Column7), Number(Column8), Number(Column9), Number(Column10), Number(Column11), Number(Column12), Number(Column13)
                ]
            ],
            "columns" : [
                "Column1", "Column2", "Column3", "Column4", "Column5", "Column6", "Column7", "Column8", "Column9", "Column10", "Column11", "Column12", "Column13"
            ],
            "index" : [0]
        }
        xhr.send(JSON.stringify(data));
    }

    return false;
}

function clearData() {
    var age = document.getElementById("age");
    var restbloodpressure = document.getElementById("rest-blood-pressure");
    var serumcholestrol = document.getElementById("serum-cholestrol");
    var maxheartrate = document.getElementById("max-heart-rate");
    var stdepression = document.getElementById("st-depression");
    
    age.value = "";
    restbloodpressure.value = "";
    serumcholestrol.value = "";
    maxheartrate.value = "";
    stdepression.value = "";
    window.location.href = "/";
}

/*
function seeResult() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("result").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "getResult.php", false);
  //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send();
}
*/
