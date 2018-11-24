from sklearn.naive_bayes import GaussianNB
from sklearn.externals import joblib
import numpy as np
import json

filename = 'main.json'

data =[]
data_test=[]

with open(filename) as json_file:
    x = json.load(json_file)
    for value in x:
        if(x[value]!=""):
            data.append([int(x[value])])
            
data =  np.array(data)
model = joblib.load('Model/gnb_model.sav')
pred = model.predict(data)
result = pred[0]
print (result)
