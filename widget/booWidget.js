﻿var wHTML = "";
wHTML += ('<h3>Search string generator</h3> \
		<p>\
		  Use this tool to generate a search string that you can paste into many databases.\
		  Type your individual keywords/phrases into each concept box, then add synonyms for each concept on separate lines underneath.\
		  You can use truncation (*) and wildcards (?) to find alternative spellings of those words.\
		  For example:\
		</p>\
		<ul>\
		  <li><strong>interven*</strong> will find <em>intervene, intervening, intervention</em>, etc.</li>\
		  <li><strong>colo?r</strong> will find <em>color</em> and <em>colour</em></li>\
		</ul>\
		<div id="container">\
		  <div class="booContainer">\
			<h4>Concept 1</h4>\
			<textarea class="concept"></textarea>\
		  </div>\
		  <div class="booContainer">\
			<h4>Concept 2</h4>\
			<textarea class="concept"></textarea>\
		  </div>\
		</div>\
		<button onclick="boo()">Create search string</button>\
		<button onclick="clearAll()">Clear all</button>\
		<button onclick="addConcept()">Add another concept</button>\
		<h4>Search string</h4>\
		<textarea id="search"></textarea>');
document.getElementById('booWidget').innerHTML = wHTML;