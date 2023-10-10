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
