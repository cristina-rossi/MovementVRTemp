document.querySelector('#INPUT_TASK').insertAdjacentHTML('beforeend', `                                 

    
		<form>

		<inputcolumn>
  
  		<!-- Stage 0 -->
    		  <inputdivider> Stage 0: between trials </inputdivider>
		  <div class="form-control">        
			<name>Time between trials [seconds]:</name>
   			<inputs>
   			<label for="STAGE0_TIME"></label>
			<input id="STAGE0_TIME" name="trialScript,stage0_baseDelay" type="number" value="0.35" />
   			</inputs>      
		   </div>
     
  		<!-- Stage 1 -->
    		  <inputdivider> Stage 1: "place hands in hand-target" phase </inputdivider>
   		  <note>Only present in selected trials - defined in "Phases" tab </note> 
    		
  		<!-- Stage 2 -->
    		  <inputdivider> Stage 2: reposition hands </inputdivider>
   		  <note>No plate yet. Waits for hands to outside of off-limits region (where plate will appear) to proceed.</note> 
		  <div class="form-control">        
			<name>Off-limits region center [meters]</name>
   			<inputs>
   			<label for="OFFLIMITS_POS_X">X:</label>
			<input id="OFFLIMITS_POS_X" name="setupScript,stage2_offlimitsPositionX" type="number" value="0" />
			<label for="OFFLIMITS_POS_Y">Y:</label>
			<input id="OFFLIMITS_POS_Y" name="setupScript,stage2_offlimitsPositionY" type="number" value="0" />
			<label for="OFFLIMITS_POS_Z">Z:</label>
			<input id="OFFLIMITS_POS_Z" name="setupScript,stage2_offlimitsPositionZ" type="number" value="0.4" />
   			</inputs>       
			<name>Off-limits region size [meters]</name>
   			<inputs>
   			<label for="OFFLIMITS_SIZE_X">X:</label>
			<input id="OFFLIMITS_SIZE_X" name="setupScript,tage2_offlimitsPositionX" type="number" value="2" />
			<label for="OFFLIMITS_SIZE_Y">Y:</label>
			<input id="OFFLIMITS_SIZE_Y" name="setupScript,tage2_offlimitsPositionY" type="number" value="0.62" />
			<label for="OFFLIMITS_SIZE_Z">Z:</label>
			<input id="OFFLIMITS_SIZE_Z" name="setupScript,tage2_offlimitsPositionZ" type="number" value="2" />
   			</inputs>     
			<name>Time (outside of region)... [seconds]</name>
   			<inputs>
   			<label for="OFFLIMITS_TIME_ACTIVATEPLATE">to activate plate (invisible):</label>
			<input id="OFFLIMITS_TIME_ACTIVATEPLATE" name="trialScript,stage2_handsRepositionedActivateTime" type="number" value="0.05" />
   			<label for="OFFLIMITS_TIME_TOT">to proceed to next stage (plate visible):</label>
			<input id="OFFLIMITS_TIME_TOT" name="trialScript,stage2_handsRepositionedTotalTime" type="number" value="0.1" />
   			</inputs>
		   </div>

     
  		<!-- Stage 3 -->
    		  <inputdivider> Stage 3: make contact with plate </inputdivider>
   		  <note>Plate active and visible - waits & detects contact between hands and plate</note> 
		  <div class="form-control">        
			<name>Time limit (past which trial is skipped) [seconds]:</name>
   			<inputs>
   			<label for="STAGE3_TIME"></label>
			<input id="STAGE3_TIME" name="trialScript,stage3_maxTime" type="number" value="30" />
   			</inputs>      
		   </div>

     
  		<!-- Stage 4 -->
    		  <inputdivider> Stage 4: moving the plate to the target </inputdivider>	
		  <name>Success criteria:</name><br>
      
     		    <!-- target position (wrt headset eye center)  -->
		    <div class="form-control">        <!-- numbers  -->
			<label for="TARGET_X">X:</label>
			<input id="TARGET_X" name="setupScript,targetPositionX" type="number" value="0" />
			<label for="TARGET_Y">Y:</label>
			<input id="TARGET_Y" name="setupScript,targetPositionY" type="number" value="0" />
			<label for="TARGET_Z">Z:</label>
			<input id="TARGET_Z" name="setupScript,targetPositionZ" type="number" value="0.4" />
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
      

    
		  <div class="form-control">        
			<name>Off-limits region center [meters]</name>
   			<inputs>
   			<label for="OFFLIMITS_POS_X">X:</label>
			<input id="OFFLIMITS_POS_X" name="setupScript,stage2_offlimitsPositionX" type="number" value="0" />
			<label for="OFFLIMITS_POS_Y">Y:</label>
			<input id="OFFLIMITS_POS_Y" name="setupScript,stage2_offlimitsPositionY" type="number" value="0" />
			<label for="OFFLIMITS_POS_Z">Z:</label>
			<input id="OFFLIMITS_POS_Z" name="setupScript,stage2_offlimitsPositionZ" type="number" value="0.4" />
   			</inputs>       
			<name>Off-limits region size [meters]</name>
   			<inputs>
   			<label for="OFFLIMITS_SIZE_X">X:</label>
			<input id="OFFLIMITS_SIZE_X" name="setupScript,tage2_offlimitsPositionX" type="number" value="2" />
			<label for="OFFLIMITS_SIZE_Y">Y:</label>
			<input id="OFFLIMITS_SIZE_Y" name="setupScript,tage2_offlimitsPositionY" type="number" value="0.62" />
			<label for="OFFLIMITS_SIZE_Z">Z:</label>
			<input id="OFFLIMITS_SIZE_Z" name="setupScript,tage2_offlimitsPositionZ" type="number" value="2" />
   			</inputs>     
			<name>Time (outside of region)... [seconds]</name>
   			<inputs>
   			<label for="OFFLIMITS_TIME_ACTIVATEPLATE">to activate plate (invisible):</label>
			<input id="OFFLIMITS_TIME_ACTIVATEPLATE" name="trialScript,stage2_handsRepositionedActivateTime" type="number" value="0.05" />
   			<label for="OFFLIMITS_TIME_TOT">to proceed to next stage (plate visible):</label>
			<input id="OFFLIMITS_TIME_TOT" name="trialScript,stage2_handsRepositionedTotalTime" type="number" value="0.1" />
   			</inputs>
		   </div>

		  <div class="form-control">        
			<name>Time limit (past which trial is skipped) [seconds]:</name>
   			<inputs>
   			<label for="STAGE4_TIME"></label>
			<input id="STAGE4_TIME" name="trialScript,stage4_maxTime" type="number" value="35" />
   			</inputs>      
		   </div>



     
  
     		    <!-- SPATIAL VARIABLES -->
     		    <!-- plate position (wrt headset eye level) -->
      
		    <div class="form-control">        <!-- numbers  -->
			<name>Plate Position [meters]</name>
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

