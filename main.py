from sklearn.externals import joblib
import numpy as np
import json

def main() :
    filename = 'main.json'
    data =[]

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

if __name__ == '__main__':
    main()
