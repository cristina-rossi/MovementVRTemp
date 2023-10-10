<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content=
		"width=device-width, initial-scale=1.0">


	<style>
		
		/* Style the main body  (utside of buttons, tabs, inputs, tabcontents etc..) */
		body {
			font-family: Arial;
			font-size: 15px;
		} 

		/* Style of the overall container for every page  */
		.pagecontainer{			
		  margin: auto;
	          width: 95%;		
    		  text-align: left;
		}

		/* Style the tab (top row with buttons) */
		.parenttab {
		  overflow: hidden;
		  border: none;
		  background-color: none;	
		  border-bottom: 3px solid #ccc;
		}
		
		/* Style the buttons inside the tab (buttons to toggle windows) */
		.parenttab button {
		  background-color: inherit;
		  float: right;
		  border: none;
		  outline: none;
		  cursor: default;
		  padding: 10px 30px;
		  font-family: Arial;
		  font-size: 12px;  
		}
		
		
		
		/* Style the tab (top row with buttons) */
		.tab {
		  overflow: hidden;
		  border: 1px solid #ccc;
		  background-color: #f1f1f1;
		}
		
		/* Style the buttons inside the tab (buttons to toggle windows) */
		.tab button {
		  background-color: inherit;
		  float: left;
		  border: 1px solid #ccc;
		  outline: none;
		  cursor: pointer;
		  padding: 14px 16px;
		  transition: 0.3s;
		  font-family: Arial;
		  font-size: 15px; /* this is the font size for the tob buttons to toggle between tabs */ 
		}
		
				
		/* Style the tab content - outside of the user inputs */
		.tabcontent {
		  display: none;
		  padding: 6px 12px;
		  border: 1px solid #ccc;
		  border-top: none;
		  font-family: Arial;
		  font-size: 15px; /* this is the font size for the non-input text within the form tabs */ 
		  line-height: 3;
    		  text-align: left;
		}
		
		/* Style for form inputs - text inputed by users in stirng or number places (not text areas) */
		input  { 
		  	font-family: Arial;
			font-size: 15px; 
		}
		
		/* Style for form "textarea" inputs - inputed by users */
		textarea{
		  	font-family: Arial;
			font-size: 15px;
		} 


		
		/* Style of the overall container for download button  */
		.buttoncontainer{	
    		  text-align: center;
		}
		
		/* Style of the "download" button underneath tabs */
		.btn{			
		  padding: 30px 30px;
		  font-family: Arial;
		  font-size: 20px;
  		  font-weight: bold;
		}
		
	</style>
	
</head> 

<body>

	<!-- OVERALL TOP NAVIGATION MENU -->
	<div class="parenttab">
		<img src="https://thumbs.dreamstime.com/b/watercolor-bird-blue-jay-flying-hand-drawn-illustration-isolated-white-background-hand-painted-bluejay-watercolor-bird-blue-jay-184528842.jpg" width="50" height="50">
		<button id="LINK_PAGE_INPUT" class="pagelink" onclick="openPage('INPUT_PAGE',this)">   
			Create Input Files
		</button>
		<button id="LINK_PAGE_HOME" class="pagelink" onclick="openPage('HOME_PAGE',this)">
			Home
		</button>
	</div>

	
	<!-- HOME PAGE -->
	<div id="HOME_PAGE" class="pagecontainer">
		<br><br>
		Welcome to VR Motor Learning !
	</div>
	

	<!-- PAGE FOR INPUT FILES CREATION -->
	<div id="INPUT_PAGE" class="pagecontainer">
	<div class="tab">
		<button id="LINK_TAB_0" class="tablink" onclick="openTab('INPUT_TAB_0',this)">      <!-- Menu to open tabs  -->
			Open Tab 0
		</button>
		<button id="LINK_TAB_1" class="tablink" onclick="openTab('INPUT_TAB_1',this)">
			Open Tab 1
		</button>
	</div>
	
	<div id="INPUT_TAB_0" class="tabcontent">     <!-- TAB 0:  -->
                                          
	    <div id='testzero-div'></div>                                                 
	    <script src='testzero.js'></script> 
	</div>
		
	<div id="INPUT_TAB_1" class="tabcontent">     <!-- TAB 1:  -->
	
		<form id="INPUT_FORM_1">
		
		    <div class="form-control">        <!-- strings  -->
			<label for="STRING_1">Insert A String #2:</label>
			<input id="STRING_1" name="csvString2" type="text" value="ciao some string v2" />
		    </div>		   
		
		</form>
	</div>
			
	<div id="INPUT_TAB_2" class="tabcontent">     <!-- TAB 2:  -->
	
		<form id="INPUT_FORM_2">
		
		    <div class="form-control">        <!-- strings  -->
			<label for="STRING_2">Insert A String #3:</label>
			<input id="STRING_2" name="csvString3" type="text" value="ciao some string v3" />
		    </div>		   
		
		</form>
	</div>


	<br><br>
		
	<div class="buttoncontainer">
		<button id="SUBMITBUTTON_0" class="btn" onclick="downloadCsv()">     <!-- GENERAL DOWNLOAD BUTTON:  -->
			Download
		</button>
	</div>
	</div>
	
		
	
	<script type="text/javascript">
	
		function openPage(selectedPageID,selectedPageLink) {
			
		  	allPages = document.getElementsByClassName("pagecontainer"); // initialized allPages variable			
		  	for (i = 0; i < allPages.length; i++) {   // "closes" all the pages
		    		allPages[i].style.display = "none";
		  	}
			document.getElementById(selectedPageID).style.display = "block";  // opens selected tab

		  	allPageLinks = document.getElementsByClassName("pagelink");  			
		  	for (i = 0; i < allPageLinks.length; i++) {   // resets page links font weight
		    		allPageLinks[i].style.fontWeight = "normal";
		  	}			
			selectedPageLink.style.fontWeight = "bolder";
			
		}
	
		function openTab(selectedTabID,selectedTabLink) {
			
		  	allTabs = document.getElementsByClassName("tabcontent"); // initialized allTabs variable			
		  	for (i = 0; i < allTabs.length; i++) {   // "closes" all the tabs
		    		allTabs[i].style.display = "none";
		  	}
			document.getElementById(selectedTabID).style.display = "block";  // opens selected tab

		  	allTabLinks = document.getElementsByClassName("tablink");  			
		  	for (i = 0; i < allTabLinks.length; i++) {   // resets tab link colors
		    		allTabLinks[i].style.backgroundColor = 'Azure';
		  	}			
			selectedTabLink.style.backgroundColor = 'LightBlue';
			
		}

		function downloadCsv(){


			csvRows = [];
		  	allFormPages = document.forms;
			for (i = 0; i < allFormPages.length; i++) { 
				myFormData = new FormData(allFormPages[i]);

			
			     	data = Object.fromEntries(myFormData.entries());
	
			
				headers = Object.keys(data);	
				values = Object.values(data);		
				
				for (j = 0; j < headers.length; j++) {
					line = [ headers[j], values[j] ];		
					csvRows.push(line.join(','));
				}
			}
			
			
			csvdata = csvRows.join('\n');
			blob = new Blob([csvdata], { type: 'text/csv' });
			url = window.URL.createObjectURL(blob)
			a = document.createElement('a')
			a.setAttribute('href', url)
			a.setAttribute('download', 'download.csv');
			a.click()	
		}
		
		
		document.getElementById("LINK_TAB_0").click();	
		
		document.getElementById("LINK_PAGE_HOME").click();	
		
	</script>
		
</body>
		
</html>
