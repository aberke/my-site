""" Simply serves the files

Mimics fashion in which github pages serves files.
"""

from flask import Flask, send_file

app = Flask(__name__)


@app.route('/')
def index():
	return send_file('index.html')

@app.route('/resume.json')
def resume_json():
	return send_file('resume.json')


@app.route('/resume-json')
def api_resume():
	return send_file('resume-json.html')

@app.route('/past-creative-projects')
def past_creative_projects():
	return send_file('past-creative-projects.html')

if __name__ == '__main__':
	app.run()
