from flask import Flask, request
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/ajax', methods=['GET','POST'])
def test():
    data = request.values.get('name')
    print(f"data: {data}")
    return '10000'

@app.route('/template')
def template():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()