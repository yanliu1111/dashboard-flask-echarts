from flask import Flask, request, jsonify
from flask import render_template
import utils
app = Flask(__name__)

@app.route('/')
def dashboard():
    return render_template('main.html')

@app.route('/time')
def gettime():
    return utils.get_time()

@app.route('/c1')
def get_c1_data():
    with app.app_context():
        data = utils.get_c1_data()
        response = jsonify({"confirm": data[0], "suspect": data[1], "heal": data[2], "dead": data[3]})
        confirm = response.json["confirm"]
        suspect = response.json["suspect"]
        heal = response.json["heal"]
        dead = response.json["dead"]
        print("Confirm:", confirm)
        print("Suspect:", suspect)
        print("Heal:", heal)
        print("Dead:", dead)
        return response

@app.route('/c2')
def get_c2_data():
    with app.app_context():
        res = []
        for tup in utils.get_c2_data():  # tup is a tuple means a row with two columns
            res.append({"name": tup[0], "value": int(tup[1])})
        print(res)
        return jsonify({"data": res})

if __name__ == "__main__":
    app.run()
    