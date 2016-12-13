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
from werkzeug.security import generate_password_hash, \
     check_password_hash

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

#Class from FLASK that stores as hash, not a password.
class User(object):

    def __init__(self, username, password):
        self.username = username
        self.set_password(password)

    def set_password(self, password):
        self.pw_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.pw_hash, password)



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
		cur = db.execute('SELECT password FROM accounts WHERE username = ?', [request.form['username']])
		cur_password = cur.fetchall()
		
		#Checks to see if the username is used.
		if not cur_password:
			flash('Invalid username!')
			return render_template('login.html')
			
		#Makes sure that you typed in information.
		elif not request.form['username'] or not request.form['password']:
			flash('Enter the missing information')

		#Checks password.
		else:
			#Selects the information from the SQL statement. Fetches the first item in the tuple.
			#Turns the first item into a string. 
			cur1 = db.execute('SELECT password FROM accounts WHERE username = ?', [request.form['username']])
			cur_password_str = str(cur1.fetchone()[0])
			
			#Uses the check_password_hash from werkzeug.security which checks the hash of the password.
			check = check_password_hash(cur_password_str, request.form['password'])

			#Logs in if passwords match
			if check:
				session['logged_in'] = True
				flash('You were logged in')
				return redirect(url_for('show_entries'))
				
			#Otherwise, returns an invalid password statement and makes you attempt to log in again.	
			else:
				flash('Invalid password!')
				
		
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
		#Checks to see if the database has any information saved to the given username.
		cur = db.execute('SELECT username FROM accounts WHERE username = ?', [request.form['username']])
		check_existing_username = cur.fetchall()
		
		#Creates a password using a hash
		new_account_password = User(request.form['username'], request.form['password'])
		hash = new_account_password.pw_hash
		
		#If you don't type something into a box, then you get returned to the create account screen.
		if not request.form['username'] or not request.form['password']	:
			flash('Enter the missing information!')
			return redirect(url_for('createAccount'))
			
		#If the username doesn't exist yet, it saves the username and a hash of the password input
		#by the user.
		elif not check_existing_username:
			error = None
			db.execute('INSERT INTO accounts (username, password) VALUES (?, ?)', [request.form['username'], hash])
			db.commit()
			flash('New account was successfully created. Please log in!')
			return redirect(url_for('login'))
			return render_template('login.html', error=error)
		
		#Prevents someone from making an account with a similar username.
		else:
			flash('Username already exists! Please log in.')
			return redirect(url_for('createAccount'))
	
	
#This directs you to the create account HTML page.
@app.route('/createAccount')	
def createAccount():
	return render_template('createAccount.html')
	
	
#Submit data to server for every drop (not drag) event.
@app.route('/action1', methods=['POST'])
def action1():
	db1 = get_db()
	db1.execute('Insert into action1 (input1, input2) values (?, ?)', [request.form['textInput1'], request.form['textInput2']])
	
	
	cur = db1.execute('SELECT input1, input2 FROM action1 order by id desc')
	action1 = cur.fetchall()
	#db`
	flash('Javascript sends successfully') #Happens when loads new page.
	flash(request.form['textInput1'])
	flash(request.form['textInput2'])
#	return redirect(url_for('show_entries'))
	return render_template('chessBoard.html', action1=action1)

	
	


if __name__ == '__main__':
    app.run()