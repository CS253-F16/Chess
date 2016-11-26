# -*- coding: utf-8 -*-
"""
    Flaskr Plus
    ~~~~~~

    A microblog example application written as Flask tutorial with
    Flask and sqlite3.

    :copyright: (c) 2015 by Armin Ronacher.
    :license: BSD, see LICENSE for more details.
"""

import os
from sqlite3 import dbapi2 as sqlite3
from flask import Flask, request, session, g, redirect, url_for, abort, \
    render_template, flash

# create our little application :)
app = Flask(__name__)

# Load default config and override config from an environment variable
app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'flaskr.db'),
    DEBUG=True,
    SECRET_KEY='development key',
    USERNAME='admin',
    PASSWORD='default'
))
app.config.from_envvar('FLASKR_SETTINGS', silent=True)


def connect_db():
    """Connects to the specific database."""
    rv = sqlite3.connect(app.config['DATABASE'])
    rv.row_factory = sqlite3.Row
    return rv


def init_db():
    """Initializes the database."""
    db = get_db()
    with app.open_resource('schema.sql', mode='r') as f:
        db.cursor().executescript(f.read())
    db.commit()


@app.cli.command('initdb')
def initdb_command():
    """Creates the database tables."""
    init_db()
    print('Initialized the database.')


def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db()
    return g.sqlite_db


@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()


@app.route('/main')
def show_entries():

    return render_template('chessBoard.html')



@app.route('/', methods=['GET', 'POST'])
def login():
	db = get_db()
	if request.method == 'POST':
		cur_password = db.execute('SELECT password FROM accounts WHERE username = ?', [request.form['username']])
		
		if request.form['username'] == "admin" and request.form['password'] == "default":
			session['logged_in'] = True
			flash('You were logged in as the administrator')
			return redirect(url_for('show_entries'))
		
		elif not cur_password:
			flash('Invalid username!')
			
		elif not request.form['username'] or not request.form['password']:
			flash('Enter the missing information')

		
		elif request.form['password'] != cur_password:
			flash('Invalid username!')
		
			
		else:
			session['logged_in'] = True
			flash('You were logged in')
			return redirect(url_for('show_entries'))
	return render_template('login.html')


@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    flash('You were logged out')
    return redirect(url_for('login'))


#This code takes the information you give to the site and stores it into the databse.
@app.route('/addAccount', methods=['POST'])
def addAccount():
	if request.method == 'POST':
		db = get_db()
		new_username = db.execute('SELECT username FROM accounts WHERE username = ?', [request.form['username']])
		if not request.form['username'] or not request.form['password']	:
			flash('Enter the missing information!')
			return redirect(url_for('createAccount'))
		
		elif not new_username:
			error = None
			db.execute('INSERT INTO accounts (username, password) VALUES (?, ?)', [request.form['username'], request.form['password']])
			db.commit()
			#Above code will create your account for you, and then commit it to the database.
			#It will prevent multiple accounts with the same username being created.
			
		
			flash('New account was successfully created. Please log in!')
			return redirect(url_for('login'))
			return render_template('login.html', error=error)
		
		else:
			flash('Username already exists! Please log in.')
			return redirect(url_for('createAccount'))
	
	
#This directs you to the create account HTML page.
@app.route('/createAccount')	
def createAccount():
	return render_template('createAccount.html')
	
	


if __name__ == '__main__':
    app.run()
