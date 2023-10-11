
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
