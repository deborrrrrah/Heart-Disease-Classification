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
<?php
    $output = 5;
?>
<body>
    <div class = "header">
        <div class="blank">
        </div>
        <div class="title">
            <p>HEART DISEASE PREDICTOR</p>
        </div>
        <div class="refresh">
            <button onclick="return clearData()"> <img src="assets/refresh.png" id="refresh"> </button>
        </div>
    </div>
    <div class = "body">
        <div class = "forms">
            <p>To know your heart disease diagnose, please fill the informations below.</p>
            <form class="form-container" onsubmit="return validateForm()" autocomplete="off" id="form">
                <div class="input-container">
                    <div class="label"><label for="age">Age</label></div>
                    <img class="check_img" src="exclamation.jpg" id="check1" style="display: none">
                    <div class="input"><input type="text" name="age" id="age" placeholder="21"><span class="unit">years</span></div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="sex">Sex</label></div>
                    <div class="radio">
                        <input type="radio" name="sex" value="1" checked>Male
                        <input type="radio" name="sex" value="0">Female
                    </div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="chest-pain-type">Chest-pain Type</label></div>
                    <div class="dropdown">
                        <select name ="chest-pain-type">
                            <option value="1">Typical Angina</option>
                            <option value="2">Atypical Angina</option>
                            <option value="3">Non-Anginal Pain</option>
                            <option value="4">Asymptotic</option>
                        </select>
                    </div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="resting-blood-pressure">Resting Blood Pressure</label></div>
                    <img class="check_img" src="exclamation.jpg" id="check2" style="display: none">
                    <div class="input">
                        <input type="text" name="rest-blood-pressure" id="rest-blood-pressure" placeholder="210">
                        <span class="unit">mmHg</span>
                    </div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="serum-cholestrol">Serum Cholestrol</label></div>
                    <img class="check_img" src="exclamation.jpg" id="check3" style="display: none">
                    <div class="input">
                        <input type="text" name="serum-cholestrol" id="serum-cholestrol" placeholder="200">
                        <span class="unit">mg/dl</span>
                    </div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="fasting">Fasting, Blood Sugar > 120 mg/dl?</label></div>
                    <div class="radio">
                        <input type="radio" name="fasting" value="1" checked>True
                        <input type="radio" name="fasting" value="0">False<br>
                    </div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="resting-ecg">Resting ECG</label></div>
                    <div class = "dropdown">
                        <select name ="resting-ecg">
                            <option value="0">Normal</option>
                            <option value="1">Having ST-T Wave Abnormality</option>
                            <option value="2">Left Ventricular Hyperthropy</option>
                        </select>
                    </div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="max-heart-rate">Max Heart Rate Achieved</label></div>
                    <img class="check_img" src="exclamation.jpg" id="check4" style="display: none">
                    <div class="input"><input type="text" name="max-heart-rate" id="max-heart-rate" placeholder="200"></div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="exercise-induced">Exercise Induced Angina</label></div>
                    <div class="radio">
                        <input type="radio" name="exercise-induced" value="1" checked>Yes
                        <input type="radio" name="exercise-induced" value="0">No
                    </div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="st-depression">ST Depression Induced by Exercise Relative to Rest</label></div>
                    <img class="check_img" src="exclamation.jpg" id="check5" style="display: none">
                    <div class="input"><input type="text" name="st-depression" id="st-depression" placeholder="200"></div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="peak-exercise">Peak Exercise ST Segment</label></div>
                    <div class = "dropdown">
                        <select name ="peak-exercise">
                            <option value="1">Upsloping</option>
                            <option value="2">Flat</option>
                            <option value="3">Downsloping</option>
                        </select>
                    </div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="major-vessels">Number of Major Vessels (0-3) Colored by Flourosopy</label></div>
                    <div class = "dropdown">
                        <select name ="major-vessels">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
                <div class="input-container">
                    <div class="label"><label for="thal">Thal</label></div>
                    <div class = "dropdown">
                        <select name ="thal">
                            <option value="3">Normal</option>
                            <option value="6">Fixed Defect</option>
                            <option value="9">Reversable Defect</option>
                        </select>
                    </div>
                </div>
                <div class="submit">
                    <button type="submit" name="submit" id="submit">SEE MY DIAGNOSIS</button>
                </div>
            </form>
        </div>
        <?php
            if(isset($_GET['submit'])) {
                $file = ("main.json");
                $json_string = json_encode($_GET, JSON_PRETTY_PRINT);
                file_put_contents($file,$json_string);
            }
        ?>
        <div class="results">
            <p>You are diagnose to be</p>
            <h1>
            <div id="result"> 5 </div>
            </h1>
        </div>
    </div>
    <div class="footer">
        <div class="authors">
            <p> AUTHOR :
            SEKAR - 13516044 |
            HANI - 13516053 |
            YORA - 13516067 |
            ALIF - 13516078 |
            DEBORAH - 13516152
            </p>
        </div>
    </div>
</body>
</html>
