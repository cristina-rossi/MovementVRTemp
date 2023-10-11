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
