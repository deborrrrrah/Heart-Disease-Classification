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
        <div class = "author">
            <p><span class ="hani-sendiri">Hani Sendiri</span></p>
        </div>
    </div>
    <div class = "forms">
        <form id = "patient-form">
            <p>Age:</p>
            <input type="text" name="age"> years
            <br>
            <p>Sex:</p>
            <input type="radio" name="sex" value="1" checked>Male<br>
            <input type="radio" name="sex" value="0">Female<br>
            <br>
            <p>Chest-pain Type:</p>
            <span class = "dropdown">
                <select name ="chest-pain-type">
                    <option value="1">Typical Angina</option>
                    <option value="2">Atypical Angina</option>
                    <option value="3">Non-Anginal Pain</option>
                    <option value="4">Asymptotic</option>
                </select>
            </span>
            <br>
            <p>Resting blood pressure:</p>
                <input type="text" name="rest-blood-pressure"> mmHg
            <br>
            <p>Serum cholestrol:</p>
                <input type="text" name="serum-cholestrol"> mg/dl
            <br>
            <p>Have you fasting blood sugar > 120 mg/dl?</p>
                <input type="radio" name="fasting" value="1" checked>True<br>
                <input type="radio" name="fasting" value="0">False<br>
            <br>
            <p>Resting ECG</p>
            <span class = "dropdown">
                <select name ="resting-ecg">
                    <option value="0">Normal</option>
                    <option value="1">Having ST-T Wave Abnormality</option>
                    <option value="2">Left Ventricular Hyperthropy</option>
                </select>
            </span>
            <br>
            <p>Max Heart Rate Achieved:</p>
                <input type="text" name="max-heart-rate">
            <br>
            <p>Exercise Induced Angina:</p>
                <input type="radio" name="exercise-induced" value="1" checked>Yes<br>
                <input type="radio" name="exercise-induced" value="0">No<br>
            <br>
            <p>ST depression induced by exercise relative to rest:</p>
                <input type="text" name="st-depression">
            <br>
            <p>Peak Exercise ST Segment</p>
            <span class = "dropdown">
                <select name ="peak-exercise">
                    <option value="1">Upsloping</option>
                    <option value="2">Flat</option>
                    <option value="3">Downsloping</option>
                </select>
            </span>
            <br>
            <p>Number of Major Vessels (0-3) Colored by Flourosopy :</p>
                <input type="text" name="major-vessels">
                <br>
            <p>Thal: </p>
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
        Annisa Sekar Ayuningtyas - 13516044 |
        Hani'ah Wafa - 13516053 |
        Dinda Yora Islami - 13516067 |
        Muhammad Alif Arifin - 13516078 |
        Deborah Aprilia Josephine - 13516152
        </p>
    </div>
</body>
</html>