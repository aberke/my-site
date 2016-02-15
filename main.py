from flask import Flask, send_file

app = Flask(__name__)


@app.route('/')
def index():
	return send_file('static/html/index.html')

@app.route('/resume')
def resume():
	return send_file('static/resume.pdf')


if __name__ == '__main__':
	app.run()
