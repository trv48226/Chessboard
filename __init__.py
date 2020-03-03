from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def chess_board():
    return render_template('chess.html')


if __name__ == '__main__':
    app.run()