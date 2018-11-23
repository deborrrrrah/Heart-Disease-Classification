import joblib
import json
import sys

filename = sys.argv[1]

data = []

with open(filename) as json_file:
    x = json.load(json_file)
    for key, value in x.iteritems():
        data.append(value)

model = joblib.load('model/gnb_model.sav')
pred = model.predict(data)
result = pred[0]
return result
