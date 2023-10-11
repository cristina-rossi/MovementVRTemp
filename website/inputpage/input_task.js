document.querySelector('#INPUT_TASK').insertAdjacentHTML('beforeend', `                                 

    
		<form>

     		    <!-- SPATIAL VARIABLES -->
     		    <!-- plate position (wrt headset eye level) -->
      
		    <div class="form-control">        <!-- numbers  -->
			<name>Plate Position [meters] &ensp; </name>
   			<inputs>
   			<label for="PLATE_X">X:</label>
			<input id="PLATE_X" name="setupScript,platePositionX" type="number" value="0" />
			<label for="PLATE_Y">Y:</label>
			<input id="PLATE_Y" name="setupScript,platePositionY" type="number" value="-0.3" />
			<label for="PLATE_Z">Z:</label>
			<input id="PLATE_Z" name="setupScript,platePositionZ" type="number" value="0.4" />

   			</inputs>
   
   			<note>(a wrt headset position - eye level)</note> 
      
		    </div>

      
     		    <!-- target position (wrt plate start position)  -->
		    <div class="form-control">        <!-- numbers  -->
			<label for="TARGET_X">X:</label>
			<input id="TARGET_X" name="setupScript,targetLocalPositionX" type="number" value="0" />
			<label for="TARGET_Y">Y:</label>
			<input id="TARGET_Y" name="setupScript,targetLocalPositionY" type="number" value="0.3" />
			<label for="TARGET_Z">Z:</label>
			<input id="TARGET_Z" name="setupScript,targetLocalPositionZ" type="number" value="0" />
		    </div>
      
     		    <!-- target collider size  -->
		    <div class="form-control">        <!-- numbers  -->
			<label for="TARGETSIZE_X">X:</label>
			<input id="TARGETSIZE_X" name="setupScript,targetColliderSizeX" type="number" value="0.1" />
			<label for="TARGETSIZE_Y">Y:</label>
			<input id="TARGETSIZE_Y" name="setupScript,targetColliderSizeY" type="number" value="0.1" />
			<label for="TARGETSIZE_Z">Z:</label>
			<input id="TARGETSIZE_Z" name="setupScript,targetColliderSizeZ" type="number" value="0.1" />   
		    </div>
      
     		    <!-- max plate tilt for success (deg), in Z -->
		    <div class="form-control">        <!-- numbers  -->
			<strong>Max plate tilt at target [deg] &ensp </strong>
			<label for="MAXTILT_Z">Z:</label>
			<input id="MAXTILT_Z" name="plateScript,maxTiltForSuccess" type="number" value="10" />
		    </div>
      
     		    <!--size of game area beyond which plate falls (from plate initial position) -->
		    <div class="form-control">        <!-- numbers  -->
			<label for="GAMEBOUNDS_POS">Position (distance from plate/target):</label>
			<input id="GAMEBOUNDS_POS" name="setupScript,gameareaSize" type="number" value="0.5" />
			<label for="GAMEBOUNDS_THICK">Thickness:</label>
			<input id="GAMEBOUNDS_THICK" name="setupScript,gameareaBoundThickness" type="number" value="0.01" />
		    </div>

      
     		    <!--min amount that hands need to be below bottom of plate to begin trial -->
		    <div class="form-control">        <!-- numbers  -->
			<label for="HAND_POS_THRESH">Hand below plate threshold: [meters]</label>
			<input id="HAND_POS_THRESH" name="setupScript,minHandPlateYDistanceTrialStart" type="number" value="0.01" />
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

