/*
Jive - Accordion Widget

Copyright (c) 2015-2016 Fidelity Investments
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

FILE DESCRIPTION
This is the javascript library that is included by the HTML Widget code generated by the
Accordion Widget Builder app.  This library drives the widget functionality.

WIDGET DESCRIPTION
This Jive HTML widget loads in a Jive setup document with a two column table.
The table content is parsed into a Bootstrap accordion.  This allows users to 
expand and contract the panels to show and hide the contained information.
*/
var fidosreg_id = 'b764a0a9536448345dc227af95e192521d337b5e4c3560c859b89ecd0407004a';

//Enables console.log messages in Firefox 
function log(msg){
	if (typeof console === "undefined" || typeof console.log === "undefined") return false;
	console.log(msg);
}

// Loads in the setup document and parses the table information into the accordion.
function init(){
	if(!sourceURL) {
		log("No setup document given");
		return false;
	}

	// Load the setup document
	$j.ajax({
		type: 'GET',
		url: sourceURL,
		dataType: 'html',
		success: function (data) { 
			// Point to the table in the setup document
			var table = $j('#jive-body-main div.jive-rendered-content > table', data);

			if(table.length < 1) {
				alert('No table found in the setup document.  Please make sure the setup document is correctly formatted.');
				return false;
			}
			// Check to make sure there are at least two table rows
			var rows = $j('#jive-body-main div.jive-rendered-content > table > tbody > tr', data);
			if(rows.length < 1) {
				alert('The table does not have at least 1 row.  Please properly create the table in the setup document.');
				return false;
			} 
			// set variables for temporarily storing table data
			var tmpHTML = '';
			var collapseIncrementer = 1;

			// Loop over the remaining rows and place them in the accordion.
			for (var i = 0; i < rows.length; i++) {
				//Grabs the content in the table row.
				titleHtml = $j('td:eq(0)', rows[i]).html();
				bodyHtml = $j('td:eq(1)', rows[i]).html();
				
				tmpHTML += "<div class='panel " + colorStyle + "'> <h4 class='panel-heading panel-title' data-toggle='collapse' data-parent='#accordion' href='#collapse" + collapseIncrementer + "' onclick='resizeWidget()'> " + titleHtml + " </h4> <div id='collapse" + collapseIncrementer + "' class='panel-collapse collapse";
				if (typeof initState !== 'undefined') {
					if ( initState == 'Expanded' || ( i == 0 && ( initState == 'First' || initState == 'undefined' ) ) ) {
						tmpHTML += " in";
					}
				} else if ( i == 0 ) {
					tmpHTML += " in";
				}
				tmpHTML += " panel-body'> " + bodyHtml + " </div> </div>";

				collapseIncrementer++;
			} // end for loop
			
			// Append the loop HTML to the resultArea
			$j('#accordion').html(tmpHTML);

			//Removes lightbox effect from images and links that are served by the jive servlet.  Passes through non-jive servlet links.
			$j('#accordion').find('img').attr('onclick','if ($j(this).parent().prop("nodeName")=="A" && $j(this).parent().attr("href").indexOf("JiveServlet") >= 0){return false;}');
			$j('#accordion').find('a').attr('target','_blank');

			resizeWidget();
		},
		error: function (xhr, ajaxOptions, thrownError){ 
			alert("There was an error: Most likely reason is your sourceURL variable is not pointing to a valid document");
			return false;
		},
		complete: function(){
		}
	});

} // end init function

function resizeWidget() {
	setTimeout( resizeMe, 500 );
}