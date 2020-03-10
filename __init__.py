import json

from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def chess_board():
    return render_template('chess.html')


@app.route('/flip', methods=["POST"])
def flip_colors():
    call_json = json.loads(request.data)
    first_color = str(call_json.get('color1'))
    second_color = str(call_json.get('color2'))
    my_dict = {
        'color1': first_color,
        'color2': second_color
    }
    return my_dict



if __name__ == '__main__':
    app.run()

