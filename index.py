from flask import Flask, request, jsonify, Response, send_from_directory, render_template
from sklearn.externals import joblib
import pandas as pd
import json
import os.path
from sklearn.naive_bayes import GaussianNB
import sys

app = Flask(__name__)

app.root_path = os.path.dirname(os.path.abspath(__file__))

@app.route("/", methods=['GET'])
def index():
    return render_template("index.html", title="HEART DISEASE PREDICTOR")

@app.route('/predict', methods=['POST'])
def predict() :
    data = request.json

    data_json = json.dumps(data)
    # print(data_json, file=sys.stdout)

    df = pd.read_json(data_json, orient="split")
    # print(df, file=sys.stdout)

    df = clean_df(df)
    prediction = model.predict(df)

    # print(prediction, file=sys.stdout)

    return Response(str(prediction[0]), status=200);

def clean_df(df) :
    df = df.drop(columns=['Column12', 'Column13'])

    return df

if __name__ == '__main__':
    model = joblib.load('model/gnb_model.sav', mmap_mode='r')
    # print(model.__dict__)
    app.run(port=4000)
