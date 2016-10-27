Chess Board
------------------
As a user, I want to play chess online with an 8x8 chess board and two different colored pieces so that I don't have to worry about losing the pieces.

 - Priority: 1
 - Estimate: 3 week
 - Confirmation:
	 1. Go to website.
	 2. A board with pieces should be generated.
	 
Board
-------
As a programmer, I want to implement an 8x8 board  so that I can have a starting point for my chess games.
	-Priority: 1.1
	-Estimate: 1 week.
	-Confirmation:
		1. Go to the website.
		2. Make sure a board with two checkered colors pops up.
		
Pieces
-------
As a programmer, I want to implement the different pieces to a chess game so that we can play chess.
	-Priority: 1.2
	-Estimate: 1 week
	-Confirmation:
		1. Go to the website.
		2. The board should be filled with the correct pieces.
		
Chess Rules
------------
As a programmer, I want to implement the rules to a game of chess so that the game is fair to everyone.
	-Priority: 1.3
	-Estimate: 1 week
	-Dependency: 1.1 and 1.2
	-Confirmation:
		1. Go to the website.
		2. A board filled with pieces will be visible.
		3. Pieces will move correctly.
		4. Game is completeled when one person wins through the specified conditions.


Player ID
--------------
As a programmer, I want to be able to give them a temporary player ID so that they can interact on our server.
	- Priority: 2
	- Estimate: 1 week
	- Confirmation: 
		1. Player accesses the website.
		2. Generate a temporary player ID.
		3. Deletes player ID upon leaving the website.

Playing With People
-----------------------------
As a player, I want to play with random people so that I can improve my skills.

	- Priority: 3
	- Estimate: 2 weeks
	-Dependency: Depends on 2
	- Confirmation:
	    1. Click "Search for New Game".
	    2. Randomly select two players, giving each a random color.
	    3. Set up a board with pieces.
	    4. Players can start playing the game.

Rematch Diplomacy
------------------------
As a player, I want to send a rematch invitation and accept a rematch invitation so that I can play with the same player again.
	- Priority: 4
	- Estimate: 1 week
	-Dependency: Depends on 1.
	- Confirmation: 
		1. Click "Rematch".
		2. Opposing player can choose to click "Accept" or "Decline".
			1. If accepted, players are put into another match with reversed colors.
			2. If declined, players are returned to the main screen.

Draw Diplomacy
-----------------------
As a player, I want to be able to send a draw request and accept a draw request so that I don't have to continue the game.
	- Priority: 5
	- Estimate: 1 week
	-Dependency: Depends on 1.
	- Confirmation:
		1. Click "Draw Request".
		2. Opponent receives draw request on their screen, which then they can accept, decline, or ignore.
			1. If accepted, match terminates, resulting in draw and players can still send rematch requests.
			2. If declined or ignored, match continues.
	

Disconnection Diplomacy
--------------------------------
As a player, I want to be able to claim a win if the opponent is disconnected for too long so that I don't have to wait.
	- Priority: 6
	- Estimate: 1 week
	-Dependency: Depends on 1.
	- Confirmation: 
		1. A notification will pop up if the opposing player disconnects.
		2. Player can click "Claim Victory on Disconnect".
		3. Player wins the match after a minute.
		4. Player is returned to home screen.

Concede Diplomacy
----------------------------
As a player, I want my opponent to be able to surrender the match so that he doesn't have to play a losing game.
	- Priority: 7
	- Estimate: 1 week
	-Dependency: Depends on 1.
	- Confirmation: 
		1. Opponent clicks "Surrender".
		2. Match terminates, and rematch is still able to be sent.

Chat
--------
As a player, I want to chat so that I can communicate with others.
	- Priority: 8
	- Estimate: 1 week
	-Dependency: Depends on 2.
	- Confirmation: 
		1. Users click into the text box.
		2. Users type anything they want and press Enter.
		3. Message will be displayed in a communal dialog box.

Account Registration
-----------------------------
As a user, I want to make an account so that I can log into my personal account.
	- Priority: 9
	- Estimate: 1 week
	-Dependency: Depends on 2
	- Confirmation:
		1. On the home page, player can click "Create an Account".
		2. Player is redirected to a new page where they can fill in their name, email, and password.
			1. Check to see if the email is already in the database.
				1. If True, an alert will pop up, notifying them that the email already exists.

Login
--------
As a user, I want to be able to log into my existing account so that I can access my records.
	- Priority: 10
	- Estimate: 1 week
	-Dependency: Depends on 9.
	- Confirmation:
		1. Players can fill in their email and password at the home page.
		2. Click "Login" to access their account.
			1. If email and password do not match, then send an error message asking them to type in their information again.
		3. Players are authenticated.


Match History
--------------------
As a user, I want to view my past match history so that I can learn from my mistakes.
	- Priority: 11
	- Estimate: 2 weeks
	-Dependency: Depends on 1 and 9
	- Confirmation: 
		1. Players will click "Match History".
		2. A list of their previous game results will be listed.

Ranked Games
------------------------
As a player, I want to be able to play ranked games so that I can play competitively with those of similar skills.
	- Priority: 12
	- Estimate: 1 week
	-Dependency: Depends on 1, 2, and 9.
	- Confirmation: 
		1. Player will click "Play Ranked Game".
		2. Randomly select two players with similar ranks, giving each a random color.
	    3. Fully set up a board with pieces.
	    4. Players can start playing the game.

Move Highlights
--------------------------
As a programmer, I want to display potential moves using a highlighting feature for selected pieces so that players know where that piece can move.
	- Priority: 13
	- Estimate: 1 week
	-Dependency: Depends on 1.
	- Confirmation: 
		1. Select a piece on the board.
		2. Potential moves will be displayed.

Spectating
----------------
As a player, I want to be able to watch other people playing games so that I can learn from them.
	- Priority: 14
	- Estimate: 1 week
	-Dependency: Depends on 1 and 2.
	- Confirmation:
		1. Click "Spectate Game".
		2. Redirect to a new page showing high ranked games in progress.

Singleplayer Analysis Board
---------------------------------------
As a player, I want to be able to set up a board to analyze my games or to solve tactical exercises so that I can become a better player.
	- Priority: 15
	- Estimate: 1 week
	-Dependency: Depends on 1.
	- Confirmation: 
		1. Click "Singleplayer Analysis Board".
		2. Generate a fully set up board.
		3. Player can manually add pieces to or remove pieces from the board.

Report Player
--------------------
As a user, I want to be able to report a player for bad language or spam so that it doesn't happen again to anyone else.
	- Priority: 16
	- Estimate: 1 week
	-Dependency: Depends on 2 and 8.
	- Confirmation: 
		1. Click "Report Player" icon next to player's name.
		2. Confirmation panel will pop up.
			1. Report will be sent to administrators if confirmation is True. Pop up will disappear afterwards.
			2. Pop up will disappear if confirmation is False.

Handling Reports
-------------------------
As an administrator, I want to be able to judge and delete reported accounts so that the community will stay healthy.
	- Priority: 17
	- Estimate: 1 week
	-Dependency: Depends on 16.
	- Confirmation: 
		1. Administrators can view reports in the database.
		2. Administrators can see relevant information to that player.
		3. Administrators can choose whether to ban, delete, or suspend accounts.

Customization
--------------------
As a player, I want to be able to customize the board color and/or pieces so that my board can look better.
	- Priority: 18
	- Estimate: 1 week
	-Dependency: Depends on 1.
	- Confirmation: 
		1. Click "Settings" on the home page.
			1. Click "Board Color".
				1. User is able to change the color of the board.
			2. Click "Piece Color".
				1. User is able to change the color of the pieces.
		2. Colors of pieces/board will be updated.

> 
> Written with [StackEdit](https://stackedit.io/).