// JavaScript Document

function marksold(mynode){
	var myparent = mynode.parentNode;
	var newnode = document.createTextNode("Sold on March 30th, 2016");
	myparent.replaceChild(newnode,mynode);
	var resume = myparent.nextElementSibling;
	var newlink = document.createElement("a");
	newlink.innerHTML = "Resume";
	newlink.href = "#";
	newlink.onclick = function(){
		resumebook(this);
	}
	resume.appendChild(newlink);
}

function resumebook(mynode){
	var myparent = mynode.parentNode;
	myparent.removeChild(mynode);
	var prevparent = myparent.previousElementSibling;
	var newlink = document.createElement("a");
	newlink.innerHTML = "Mark as Sold";
	newlink.href = "#";
	newlink.onclick = function(){
		marksold(this);
	}
	var oldtext = prevparent.firstChild;
	prevparent.replaceChild(newlink,oldtext);
}