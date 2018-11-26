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
          document.getElementById('result').innerHTML = xhr.responseText;
        }
      };
      xhr.open('GET', 'getResult.php', false);
      xhr.send();
    }
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
