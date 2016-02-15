<img width="100px" src="http://www.alexandraberke.com/static/favicon-big.gif" alt="logo" align="right" />

my-site
=======

- hello world
	- http://alexandraberke.com


Running Locally
---

* Clone/fork repo

```
$ git clone https://github.com/aberke/my-site.git
$ cd my-site
```

* Create a virutual environment so that the following installations do not cause conflicts.  Make sure to reactivate this virtual environment each time you want to run the server locally.  All the following installations will be isolated in this environment.

```
$ pip install virtualenv
$ virtualenv venv
$ source venv/bin/activate
```

* Install dependencies: ```$ pip install -r requirements.txt``` (may need to run with sudo)
* Run server ```$ python main.py``` and visit <http://127.0.0.1:5000>

