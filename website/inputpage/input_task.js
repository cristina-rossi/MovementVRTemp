document.querySelector('#INPUT_TASK').insertAdjacentHTML('beforeend', `                                 

    
		<form>

     		    <!-- plate position  -->
		    <div class="form-control">        <!-- numbers  -->
			<strong>Plate Position [meters] &ensp </strong>
   			<label for="PLATE_X">X:</label>
			<input id="PLATE_X" name="setupScript,platePositionX" type="number" value="0" />
			<label for="PLATE_Y">Y:</label>
			<input id="PLATE_Y" name="setupScript,platePositionY" type="number" value="-0.3" />
			<label for="PLATE_Z">Z:</label>
			<input id="PLATE_Z" name="setupScript,platePositionZ" type="number" value="0.4" />
   			<note>(a wrt headset position - eye level)</note> 
   			<br>
      			<i>(wrt headset position - eye level)</i> 
		    </div>
      
     		    <!-- target position  -->
		    <div class="form-control">        <!-- numbers  -->
			<label for="TARGET_X">X:</label>
			<input id="TARGET_X" name="setupScript,targetLocalPositionX" type="number" value="0" />
			<label for="TARGET_Y">Y:</label>
			<input id="TARGET_Y" name="setupScript,targetLocalPositionY" type="number" value="0.3" />
			<label for="TARGET_Z">Z:</label>
			<input id="TARGET_Z" name="setupScript,targetLocalPositionZ" type="number" value="0" />
   			<br>
      			<i>(wrt headset position - eye level)</i> 
		    </div>
    
		    <div class="form-control">        <!-- strings  -->
			<label for="STRING_0">Insert A String:</label>
			<input id="STRING_0" name="csvString" type="text" value="ciao some string" />
		    </div>
		
		    <div class="form-control">        <!-- numbers  -->
			<label for="NUMBER_0">Insert A Number:</label>
			<input id="NUMBER_0" name="csvNumber" type="number" value="-4.56" />
		    </div>
		
		    <div class="form-control">        <!-- longer strings???  -->
			<label for="LONGTEXT_0">Enter a Message</label>
			<textarea id="LONGTEXT_0" name="csvLongText" rows="6" cols="65"></textarea>
		    </div>
		
		    <div class="form-control">        <!-- logical  -->
			<label for="LOGICAL_0">Check the logical box:</label>			    
			<input id="LOGICAL_0H" name="csvLogical" type="hidden" value="wasNotChecked">
			<input id="LOGICAL_0" name="csvLogical" type="checkbox" value="wasChecked" checked>
		    </div>

		    <div class="form-control">        <!-- multiple choice, radio buttons  -->
			Language Choice: &nbsp;&nbsp;
			<input id="MULTIPLECHOICE_0_A" name="csvMultiplechoice0" type="radio" value="selectedA">
			<label for="MULTIPLECHOICE_0_A">Choice A</label> &nbsp;&nbsp;&nbsp;&nbsp; 
			<input id="MULTIPLECHOICE_0_B" name="csvMultiplechoice0" type="radio" value="selectedB"  checked>
			<label for="MULTIPLECHOICE_0_B">Choice B   </label> &nbsp;&nbsp;&nbsp;&nbsp; 
			<input id="MULTIPLECHOICE_0_C" name="csvMultiplechoice0" type="radio" value="selectedC">
			<label for="MULTIPLECHOICE_0_C">Choice C   </label>
		    </div>		
		 
		
		</form> 

  `);

