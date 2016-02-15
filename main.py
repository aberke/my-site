from flask import Flask, send_file

app = Flask(__name__)


@app.route('/old')
def old():
	return send_file('static/html/index.html')

# matches angularjs routes
@app.route('/')
@app.route('/resume-pdf')
@app.route('/resume-api')
def index():
	return base()

def base():
	return send_file('static/html/base.html')



if __name__ == '__main__':
	app.run()

