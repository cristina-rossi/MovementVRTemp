

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


document.querySelector('#INPUT_STYLE').insertAdjacentHTML('beforeend', `     
	/*  here */
		
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
  `);

document.querySelector('#INPUT_PAGE').insertAdjacentHTML('beforeend', `     


<div class="tab">
		<button class="tablink" onclick="openTab('INPUT_TASK',this)">      <!-- Menu to open tabs  -->
			Task
		</button>
		<button class="tablink" onclick="openTab('INPUT_HANDS',this)">
			Hands
		</button>
	</div>

	<div id="INPUT_TASK" class="tabcontent"></div>
	<div id="INPUT_HANDS" class="tabcontent"></div>


	<br><br>

	<div class="buttoncontainer">
		<button class="btn" onclick="downloadCsv()">     <!-- GENERAL DOWNLOAD BUTTON:  -->
			Download
		</button>
	</div>

  `);


document.getElementsByClassName("tablink")[0].click();

/* allTabL = document.getElementsByClassName("tablink");  
allTabL[0].click(); */

