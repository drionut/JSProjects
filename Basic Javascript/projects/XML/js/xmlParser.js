var XML_Parser, XML_Document;
var title = document.getElementById("movie");
var list = document.getElementById("actor");

// creates a text string
var Movie =
    "<movie>" +
    "<title>Schindler`s List</title>" +
    "<director>Steven Spielberg</director>" +
    "<actors>" +
    "<name>Liam Neeson</name>" +
    "<name>Ben Kingsley</name>" +
    "<name>Ralph Fiennes</name>" +
    "</actors>" +
    "<year>1993</year>" +
    "</movie>";

// creates an XML DOM Parser
XML_Parser = new DOMParser();

// creates a new XML DOM object using the above string
XML_Document = XML_Parser.parseFromString(Movie, "text/xml");

var MovieTitle = XML_Document.getElementsByTagName("title")[0].childNodes[0].nodeValue;
var Actors = XML_Document.getElementsByTagName("actors")[0];
var Names = Actors.childNodes;

// change the content of the .movie title
title.innerHTML = MovieTitle;

// looping trough actors names and create list items with each of them
for (var i = 0; i < Names.length; i++) {
    var actorName = Names[i].textContent;
    var listElement = document.createElement("li");
    listElement.textContent = actorName;
    list.appendChild(listElement);
}
