
var dictionary1 =   //map BOARDVALUE2 to boardValue, as we can't assign number to tiles' ids 
{
	a8:1, b8:2, c8:3, d8:4, e8:5, f8:6, g8:7, h8:8,
	a7:9, b7:10,c7:11, d7:12, e7:13, f7:14, g7:15, h7:16,
	a6:17, b6:18, c6:19, d6:20, e6:21, f6:22, g6:23, h6:24,
	a5:25, b5:26, c5:27, d5:28, e5:29, f5:30, g5:31, h5:32,
	a4:33, b4:34, c4:35, d4:36, e4:37, f4:38, g4:39, h4:40,
	a3:41, b3:42, c3:43, d3:44, e3:45, f3:46, g3:47, h3:48,
	a2:49, b2:50, c2:51, d2:52, e2:53, f2:54, g2:55, h2:56,
	a1:57, b1:58, c1:59, d1:60, e1:61, f1:62, g1:63, h1:64
};
var BOARDVALUE2 = [   //capitalized CONSTANT - a convention never used??
	[0, 1, 2, 3, 4, 5, 6, 7, 8],
	["x0", "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
	["x0", "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
	["x0", "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
	["x0", "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
	["x0", "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
	["x0", "a3", "a3", "c3", "d3", "e3", "f3", "g3", "h3"],
	["x0", "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
	["x0", "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

var startPosition1 = "";
var dropPosition1 = "";
var pieceName1="";
var pieceValue1 = 0;


function allowDrop(ev)
{
    ev.preventDefault();
}


var startNumber1 = 0;
var endNumber1 = 0;


function rookRow(startNumber1, endNumber1) //check if white rook moves in the horizontal rows or not  
{
	if (startNumber1 >=1 && startNumber1 <=8 && endNumber1 >= 1 && endNumber1 <= 8 )
	{
		return true;
	}
	
	if (startNumber1 >=9 && startNumber1 <=16 && endNumber1 >= 9 && endNumber1 <= 16)
	{
		return true;
	}
	
	if (startNumber1 >=17&& startNumber1 <=24&& endNumber1 >= 17&& endNumber1 <= 24)
	{
		return true;
	}
	
	if (startNumber1 >=25 && startNumber1 <=32&& endNumber1 >=25 && endNumber1 <=32 )
	{
		return true;
	}
	
	if (startNumber1 >=33&& startNumber1 <=40&& endNumber1 >=33 && endNumber1 <=40 )
	{
		return true;
	}
	
	if (startNumber1 >=41&& startNumber1 <=48&& endNumber1 >=41 && endNumber1 <=48 )
	{
		return true;
	}
	
	if (startNumber1 >=49&& startNumber1 <=56&& endNumber1 >=49 && endNumber1 <=56 )
	{
		return true;
	}
	
	if (startNumber1 >=57&& startNumber1 <=64&& endNumber1 >=57 && endNumber1 <=64 )
	{
		return true;
	}
	
	else
	{
		return false;
	}	
}



function validMove(pieceName1, dropPosition1, startPosition1)
{
		var startNumber1 = dictionary1[startPosition1];	//convert startPosition1 to an unique number in dictionary1
		var endNumber1 = dictionary1[dropPosition1];    //convert dropPosition1 to an unique number in dictionary1

	if (pieceName1 == "whiteRook" || pieceName1=="blackRook")
	{	
		var module1 = startNumber1 % 8;
		var module2 = endNumber1 % 8;
		
		if (module1 == module2) //if the white  rook moves vertically
		{
			alert("rook valid file(vertical) move");
		}
		
		if (module1 != module2)  // if white Rook doesn't move on the vertical lines (files).
		{
			var dummyVar1 = rookRow(startNumber1, endNumber1);
			if (dummyVar1 == true)
			{
				alert("rook valid row move");
			}
			//if (rookRow(startPosition1, dropPosition1)==false)
			if (dummyVar1 == false)
			{
				alert("INVALID ROOK MOVE. NOOB");
			}
		}

	}
	if (pieceName1 == "whiteBishop" || pieceName1=="blackBishop") 
	{	
		if ((startNumber1 - endNumber1)%7==0 || (startNumber1 - endNumber1)%9 ==0)
		{
			alert("Valid move");
		}
		else
		{
			alert("Invalid bishop move");
		}
	}
	
	if (pieceName1 == "whiteQueen" || pieceName1=="blackQueen") //queen is a merge of bishop and rook
	{
		if ((startNumber1 - endNumber1)%7==0 || (startNumber1 - endNumber1)%9 ==0) //if queen moves like a bishop
		{
			alert("Valid move");
		}
		
		else //if queen moves like a rook
		{
			var module1 = startNumber1 % 8;
			var module2 = endNumber1 % 8;
		
			if (module1 == module2) //if the   rook moves vertically
			{
				alert("Queen valid file(vertical) move");
			}
		
			if (module1 != module2)  // if  Rook doesn't move on the vertical lines (files).
			{
				var dummyVar1 = rookRow(startNumber1, endNumber1);
				if (dummyVar1 == true)
				{
					alert("Queen valid row move");
				}
				if (dummyVar1 == false)
				{
					alert("INVALID QUEEN MOVE. NOOB");
				}
			}
		}
	}
	
	if (pieceName1 == "whiteKnight" || pieceName1 == "blackKnight")
	{
		if ((endNumber1 == startNumber1 - 16 - 1) || (endNumber1 == startNumber1 - 16 + 1) || (endNumber1 == startNumber1 + 16 + 1) || (endNumber1 == startNumber1 + 16 - 1))
		{
			alert("Valid Knight move");
		}
		else if ( (endNumber1 == startNumber1 - 2 + 8) || (endNumber1 == startNumber1 - 2 - 8) ||(endNumber1 == startNumber1 +2 + 8) ||(endNumber1 == startNumber1 + 2 - 8) )
		{
			alert("Valid Knight Move");
		}
		else
		{	
			alert("Invalid Knight move");
		}
	}
	
	if (pieceName1 == "whiteKing" || pieceName1 == "blackKing") //NOTE: castle rule has not been established.
	{
		if ((endNumber1 == startNumber1 - 1)|| (endNumber1 == startNumber1 + 1) || (endNumber1 == startNumber1 - 8) || (endNumber1 == startNumber1+ 8) || (endNumber1 == startNumber1 -8) ||(endNumber1 == startNumber1 + 9) || (endNumber1 == startNumber1 - 9) || (endNumber1 == startNumber1 + 7) || (endNumber1 == startNumber1 -7))                        
		//I'm lazy so it's a long line of code to keep the code short
		{
			alert("Valid King move");
		}
		else
		{		
			alert("Invalid King Move");
		}
	}
	
	if (pieceName1 == "whitePawn") //rules for white pawn is different from black pawn's
	//NOTE: No capture and promotion rule have been set up for white pawn
	{
		if (startNumber1 >= 49 && startNumber1 <= 56)
		{
			if ( (endNumber1 == startNumber1 - 8) || (endNumber1 == startNumber1 - 16) )
			{
				alert("Valid Pawn move");
			}
			else
			{
				alert("Invalid Pawn Jump");
			}
		}
		
		else
		{	
			if (endNumber1 == startNumber1 - 8 )
			{
				alert("valid pawn move");
			}
			else //COME BACK HERE and edit the code when capture rule has been setup for white pawn
			{
				alert("invalid pawn jump");
			}
		}
	}
	
	if (pieceName1 == "blackPawn") //rules for white pawn is different from black pawn's
	//NOTE: No capture and promotion rule have been set up for black pawn
	{
		if (startNumber1 >= 9 && startNumber1 <= 16)
		{
			if ( (endNumber1 == startNumber1 + 8) || (endNumber1 == startNumber1 + 16) )
			{
				alert("Valid Pawn move");
			}
			else
			{
				alert("Invalid Pawn Jump");
			}
		}
		
		else
		{	
			if (endNumber1 == startNumber1 + 8 )
			{
				alert("valid pawn move");
			}
			else //COME BACK HERE and edit the code when capture rule has been setup for white pawn
			{
				alert("invalid pawn jump");
			}
		}
	}
	
	
	
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.className.split(" ")[1]);
	ev.target.className = ev.target.className.split(" ")[0];
	ev.target.draggable = false;
	document.getElementById("textInput3").value = document.getElementById(ev.target.id).id;	
}


function drop(ev) 
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	ev.target.className = ev.target.className.split(" ")[0];
	ev.target.className += " " + data;
	ev.target.draggable = true;

	pieceName1 = ev.target.className;

	pieceName1= pieceName1.slice(5);
	startPosition1 = document.getElementById("textInput3").value; //store Starting position to a variable startPosition1
	
	
	document.getElementById("textInput1").value = pieceName1;
	document.getElementById("textInput2").value = document.getElementById(ev.target.id).id;
	dropPosition1 = document.getElementById("textInput2").value; //store drop position to dropPosition1
	
	validMove(pieceName1, dropPosition1, startPosition1); //check if the move is valid
	
	
	fn1(pieceName1, dropPosition1);
//	alert(boardValue[2][3] + boardValue[3][4]);
}

function fn1(var1, var2)
{
	$.ajax
	({
		type:"post",
		url:"/action1",
		data: {textInput1: var1, textInput2: var2},
		cache: true,
		
		success: function fn2(var1, var2)
		{
			document.getElementById("p1").innerHTML = var1;
			document.getElementById("p2").innerHTML = var2;
		}
	});
	return false;
}