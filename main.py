from sklearn.naive_bayes import GaussianNB
import numpy as np
import joblib
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
result = 1#pred[0]
print (result)
