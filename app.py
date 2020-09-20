

import pandas as pd
import json
from flask import jsonify
import tweepy
import csv
import pandas as pd

from flask import Flask
from flask import request
from flask_cors import CORS
from flask_ngrok import run_with_ngrok


app = Flask(__name__)
CORS(app)
run_with_ngrok(app)


@app.route('/runmodel',methods=['GET'])

def hello_world():
    
####input your credentials here
    consumer_key = 'bOwisTLbtnJl1yjpdpn4rTiRa'
    consumer_secret = 'dL1CASyWgojTePL5MrvRPY1xGRouPqMJOMtWCQkUH0ebZXb3QC'
    access_token = '3230786000-tUAq9cp0b8iru0wu7HlqDRG5pH1BdFabCk7v6Lq'
    access_token_secret = 'JUe1r6b25cpmbTUFX5KMKtZXxDlJHXKfrNKvS0iLtS6lG'

    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth,wait_on_rate_limit=True)
    #####United Airlines
    # Open/Create a file to append data
    csvFile = open('ua.csv', 'a')
    #Use csv Writer
    csvWriter = csv.writer(csvFile)

    tweet1=[]
    json_arr={}
    for tweet in tweepy.Cursor(api.search,q="#teamkalm",count=100,
                            lang="en",
                            since="2020-01-01").items():
        print (tweet.created_at, tweet.text)
        csvWriter.writerow([tweet.created_at, tweet.text.encode('utf-8')])

        # tweet.append([tweet.created_at, tweet.text.encode('utf-8')])
        # json_arr.update({'tweet': tweet})
        tweet1.append([str(tweet.created_at),tweet.text])
        
        json_arr.update({'tweet':tweet1})
        print(json_arr)



   
   


    return jsonify(json_arr)

if __name__ == '__main__':
   app.run()
