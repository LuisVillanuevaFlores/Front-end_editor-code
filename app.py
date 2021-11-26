from flask import Flask, request, render_template
from flask_cors import CORS
from io import StringIO
import sys
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def ping():
    return render_template('index.html')

@app.route('/test',methods=['GET', 'POST'])
def test():
    return "WORK CHEVERE"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=4000, debug=True)