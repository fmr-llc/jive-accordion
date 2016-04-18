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
This is the Javascript library that drives the Accordion Widget Builder app.

WIDGET DESCRIPTION
This Jive HTML widget loads in a Jive setup document with a two column table.
The table content is parsed into a Bootstrap accordion.  This allows users to 
expand and contract the panels to show and hide the contained information.
*/
var fidosreg_id = 'b764a0a9536448345dc227af95e192521d337b5e4c3560c859b89ecd0407004a';
var sourceURL = '';
var URLCheck = '/docs/';
var panelColor = '';
var initState = '';

$j(document).ready(function() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf('MSIE ');
	var IEVersion = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)));
	if(IEVersion <= 8){
		$j('#docURLInput').attr('onpropertychange', 'toggleNextButton()');
	} else {
		$j('#docURLInput').bind('input', function() {
			toggleNextButton();
		});
	}
});

function toggleNextButton() {
	if($j('#docURLInput').val().length > 0 ) {
		$j('#nextButton').attr('disabled', false);
		$j('#URLStatus').html('');
	} else {
		$j('#nextButton').attr('disabled', true);
	}
}

function nextButton() {
	if($j('#docURLInput').val().indexOf(URLCheck) == -1){
		$j('#URLStatus').html('Invalid URL');
		$j('#docURLInput').val('');
		$j('#nextButton').attr('disabled', true);
		resize();
	} else {
		$j('#search_layout').hide();
		$j('#previewDiv').show();
		sourceURL = $j('#docURLInput').val();
		resize();
	}
}

function backButton() {
	$j('#search_layout').show();
	$j('#previewDiv').hide();
	sourceURL = '';
	$j('#URLStatus').html('');
	$j('#docURLInput').val('');
	toggleNextButton();
	resize();
}

function backButtonCodeDiv() {
	$j('#search_layout').hide();
	$j('#generatedCodeDiv').hide();
	$j('#initStateDiv').show();
	$j('#URLStatus').html('');
	resize();
}

function setColor(color){
	panelColor = color;
	$j('#previewDiv').hide();
	$j('#initStateDiv').show();
	resize();
}

function initStateBack() {
	$j('#initStateDiv').hide();
	$j('#previewDiv').show();
	resize();
}

function finish(){
	$j('#initStateDiv').hide();
	initState = $j('#initStateDiv input:radio:checked').val(); 

	$j('#generatedCodeBox').text("<scr"+"ipt src='/api/core/v3/attachments/file/" + jquery_content_id + "/data'></scr"+"ipt>\n" 
								+ "<scr"+"ipt src='/api/core/v3/attachments/file/" + library_loader_content_id + "/data'></scr"+"ipt>\n"
								+ "<scr"+"ipt>\n"
								+ "$j.load_library('bootstrap.css');\n"
								+ "$j.load_library('bootstrap-theme.css');\n"
								+ "$j.load_library('accordion_widget.css');\n"
								+ "$j.load_library('bootstrap.js');\n"
								+ "$j.load_library('accordion_widget.js');\n"
								+ "var colorStyle='"+ panelColor + "';\n"
								+ "var sourceURL='" + sourceURL + "';\n"
								+ "var initState='" + initState + "';\n"
								+ "init();\n"
								+ "</scr"+"ipt>\n"
								+ "<div id='AccordionContainer'>\n"
								+ "<div class='panel-group' id='accordion'>\n"
								+ "</div>\n"
								+ "</div>\n");
	$j('#generatedCodeDiv').show( function() {
		$j('#generatedCodeBox').select();
		resize();
	});
}

function startOver(){
	$j('#search_layout').show();
	$j('#previewDiv').hide();
	$j('#initStateDiv').hide();
	$j('#generatedCodeDiv').hide();
	$j('#URLStatus').html('');
	$j('#docURLInput').val('');
	sourceURL = '';
	resize();
}

function resize(){
	setTimeout(resizeMe,300);
}