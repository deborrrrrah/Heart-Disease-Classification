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
    print(data, file=sys.stdout)

    data_json = json.dumps(data);

    df = pd.read_json(data_json)
    print(df, file=sys.stdout)

    # df = clean_df(df)
    # prediction = model.predict(df)

    # app.logger.info(prediction)

    # return jsonify({'prediction': list(prediction)})
    return Response("FINAL", status=200);

def clean_df(df) :
    df = df.drop(columns=['Column12', 'Column13'])

    return df

if __name__ == '__main__':
    model = joblib.load('model/gnb_model.sav', mmap_mode='r')
    app.run(port=4000)
