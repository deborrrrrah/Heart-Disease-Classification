<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Tubes Heart Disease</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    <div class = "header">
        <div class="blank">
        </div>
        <div class="title">
            <p>HEART DISEASE PREDICTOR</p>
        </div>
        <div class="refresh">
            <img src="assets/refresh.png">
            </img>
        </div>    
    </div>
    <div class = "body">
        <div class = "forms">
            <p>To know your heart disease diagnose, please fill the informations below.</p>
            <form id = "patient-form">
                <label>Age</label>
                <input type="text" name="age"> years
                <br>
                <label>Sex</label> <br>
                <input type="radio" name="sex" value="1" checked>Male<br>
                <input type="radio" name="sex" value="0">Female<br>
                <br>
                <label>Chest-pain Type</label>
                <span class = "dropdown">
                    <select name ="chest-pain-type">
                        <option value="1">Typical Angina</option>
                        <option value="2">Atypical Angina</option>
                        <option value="3">Non-Anginal Pain</option>
                        <option value="4">Asymptotic</option>
                    </select>
                </span>
                <br>
                <label>Resting Blood Pressure</label>
                    <input type="text" name="rest-blood-pressure"> mmHg
                <br>
                <label>Serum Cholestrol</label>
                    <input type="text" name="serum-cholestrol"> mg/dl
                <br>
                <label>Fasting, Blood Sugar > 120 mg/dl?</label><br>
                    <input type="radio" name="fasting" value="1" checked>True<br>
                    <input type="radio" name="fasting" value="0">False<br>
                <br>
                <label>Resting ECG</label>
                <span class = "dropdown">
                    <select name ="resting-ecg">
                        <option value="0">Normal</option>
                        <option value="1">Having ST-T Wave Abnormality</option>
                        <option value="2">Left Ventricular Hyperthropy</option>
                    </select>
                </span>
                <br>
                <label>Max Heart Rate Achieved</label>
                    <input type="text" name="max-heart-rate">
                <br>
                <label>Exercise Induced Angina</label><br>
                    <input type="radio" name="exercise-induced" value="1" checked>Yes<br>
                    <input type="radio" name="exercise-induced" value="0">No<br>
                <br>
                <label>ST Depression Induced by Exercise Relative to Rest</label>
                    <input type="text" name="st-depression">
                <br>
                <label>Peak Exercise ST Segment</label>
                <span class = "dropdown">
                    <select name ="peak-exercise">
                        <option value="1">Upsloping</option>
                        <option value="2">Flat</option>
                        <option value="3">Downsloping</option>
                    </select>
                </span>
                <br>
                <label>Number of Major Vessels (0-3) Colored by Flourosopy</label>
                    <input type="text" name="major-vessels">
                    <br>
                <label>Thal</label>
                <span class = "dropdown">
                    <select name ="thal">
                        <option value="3">Normal</option>
                        <option value="6">Fixed Defect</option>
                        <option value="9">Reversable Defect</option>
                    </select>
                </span>
                <br>
                <br>
                <input type="submit" value="See My Diagnosis">
            </form>
        </div>
        <div class = "authors">
            <p> Author : 
            Sekar - 13516044 |
            Hani - 13516053 |
            Yora - 13516067 |
            Alif - 13516078 |
            Deborah - 13516152
            </p>
        </div>
    </div>
</body>
</html>