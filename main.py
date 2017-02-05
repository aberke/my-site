from flask import Flask, send_file

app = Flask(__name__)


@app.route('/')
def index():
	return send_file('static/html/index.html')

@app.route('/resume.json')
def resume_json():
	return send_file('static/resume.json')


@app.route('/api/resume')
def api_resume():
	return send_file('static/html/api-resume.html')


if __name__ == '__main__':
	app.run()
