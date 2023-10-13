document.querySelector('#INPUT_HANDS').insertAdjacentHTML('beforeend', `                                 
            

    
		<form>

		<inputcolumn>
  
  		<!-- Tracking -->
    		  <inputdivider> Hand Tracking </inputdivider>
		  <div class="form-control">        
			<name>Tracking system:</name>
   			<inputs>
			<input id="MULTIPLECHOICE_QUEST" name="setupScript,rigSystem" type="radio" value="Quest" checked>
			<label for="MULTIPLECHOICE_QUEST">Quest</label> 
			<input id="MULTIPLECHOICE_LEAP" name="setupScript,rigSystem" type="radio" value="Leap" >
			<label for="MULTIPLECHOICE_LEAP">Leap</label>		    
   			</inputs>            
			<name>Active hands:</name>
   			<inputs>	    	  	    
			<input id="ACTIVE_L_H" name="handsAndSaveScript,leftHandActiveFlag" type="hidden" value="FALSE">
			<input id="ACTIVE_L" name="handsAndSaveScript,leftHandActiveFlag" type="checkbox" value="TRUE" checked>	
			<label for="ACTIVE_L">Left</label>	
			<input id="ACTIVE_R_H" name="handsAndSaveScript,rightHandActiveFlag" type="hidden" value="FALSE">
			<input id="ACTIVE_R" name="handsAndSaveScript,rightHandActiveFlag" type="checkbox" value="TRUE" checked>	
			<label for="ACTIVE_R">Right</label>	  
   			</inputs>             
			<name>Required to be tracked:</name>
   			<inputs>	    	  	    
			<input id="TRACKED_L_H" name="handsAndSaveScript,leftHandTrackingFlag" type="hidden" value="FALSE">
			<input id="TRACKED_L" name="handsAndSaveScript,leftHandTrackingFlag" type="checkbox" value="TRUE" checked>	
			<label for="TRACKED_L">Left</label>	
			<input id="TRACKEDE_R_H" name="handsAndSaveScript,rightHandTrackingFlag" type="hidden" value="FALSE">
			<input id="TRACKED_R" name="handsAndSaveScript,rightHandTrackingFlag" type="checkbox" value="TRUE" checked>	
			<label for="TRACKED_R">Right</label>	  
   			</inputs> 
   		        <note>Plate freezes if checked hands are not tracked by cameras</note>   
		   </div>
         		
  		<!-- adaptation gain -->
    		  <inputdivider> Hand perturbation </inputdivider>
		  <div class="form-control">           
			<name>Left hand gain [%]</name>
   			<inputs>
   			<label for="L_GAIN_X">X:</label>
			<input id="L_GAIN_X" name="trialScript,stage4_leftHandGainX" type="number" value="0" />
			<label for="L_GAIN_Y">Y:</label>
			<input id="L_GAIN_Y" name="trialScript,stage4_leftHandGainY" type="number" value="0" />
			<label for="L_GAIN_Z">Z:</label>
			<input id="L_GAIN_Z" name="trialScript,stage4_leftHandGainZ" type="number" value="0" />
   			</inputs>      
			<name>Right hand gain [%]</name>
   			<inputs>
   			<label for="R_GAIN_X">X:</label>
			<input id="R_GAIN_X" name="trialScript,stage4_rightHandGainX" type="number" value="0" />
			<label for="R_GAIN_Y">Y:</label>
			<input id="R_GAIN_Y" name="trialScript,stage4_rightHandGainY" type="number" value="0" />
			<label for="R_GAIN_Z">Z:</label>
			<input id="R_GAIN_Z" name="trialScript,stage4_rightHandGainZ" type="number" value="0" />
   			</inputs> 
   		        <note>-100% means hand will not move at all, 100% means not perturbed, 200% means it will move twice as fast</note>              
   		        <note>Hand gain will be applied wrt to "hand origin" position (no shift when hand is at 0,0,0).</note>           
   		        <note>"Hand origin" position is the position where hand makes contact with plate,</note>        
   		        <note>Computed as the median of selected (e.g., baseline) trials:</note>   
			<name>Trials to compute gain origin:</name>
   			<inputs>
   			<label for="GAIN_TRIAL_I">From trial:</label>
			<input id="GAIN_TRIAL_I" name="trialScript,stage4_handOriginMedianInitialTrial" type="number" value="1" />
   			<label for="GAIN_TRIAL_F">To trial:</label>
			<input id="GAIN_TRIAL_F" name="trialScript,stage4_handOriginMedianFinalTrial" type="number" value="50" />
   			</inputs>   
      
			<name>Off-limits region size [meters]</name>
   			<inputs>
   			<label for="OFFLIMITS_SIZE_X">X:</label>
			<input id="OFFLIMITS_SIZE_X" name="setupScript,stage2_offlimitsPositionX" type="number" value="2" />
			<label for="OFFLIMITS_SIZE_Y">Y:</label>
			<input id="OFFLIMITS_SIZE_Y" name="setupScript,stage2_offlimitsPositionY" type="number" value="0.62" />
			<label for="OFFLIMITS_SIZE_Z">Z:</label>
			<input id="OFFLIMITS_SIZE_Z" name="setupScript,stage2_offlimitsPositionZ" type="number" value="2" />
   			</inputs>           
   		  	<note>Proceeds after hands are outside of region for a certain time delay: </note> 
			<name>Time to plate activation [seconds]:</name>
   			<inputs>
   			<label for="OFFLIMITS_TIME_ACTIVATEPLATE">to activate plate (invisible):</label>
			<input id="OFFLIMITS_TIME_ACTIVATEPLATE" name="trialScript,stage2_handsRepositionedActivateTime" type="number" value="0.05" />
   			</inputs>
			<name>Time to next stage [seconds]:</name>
   			<inputs>
   			<label for="OFFLIMITS_TIME_TOT">to proceed to next stage (plate visible):</label>
			<input id="OFFLIMITS_TIME_TOT" name="trialScript,stage2_handsRepositionedTotalTime" type="number" value="0.1" />
   			</inputs>
		   </div>
     
   		  <note>Plate appears at this position:</note> 
     		    <!-- plate position (wrt headset eye level) -->      
		    <div class="form-control">        <!-- numbers  -->
			<name>Plate position [meters]</name>
   			<inputs>
   			<label for="PLATE_X">X:</label>
			<input id="PLATE_X" name="setupScript,platePositionX" type="number" value="0" />
			<label for="PLATE_Y">Y:</label>
			<input id="PLATE_Y" name="setupScript,platePositionY" type="number" value="-0.3" />
			<label for="PLATE_Z">Z:</label>
			<input id="PLATE_Z" name="setupScript,platePositionZ" type="number" value="0.4" />
   			</inputs>
		    </div>
     
  		<!-- Stage 3 -->
    		  <inputdivider> Stage 3: make contact with plate </inputdivider>
   		  <note>Plate active and visible - waits & detects contact between hands and plate.</note> 
   		  <note>Skips to next trial (failure) if nothing happens after time limit: </note> 
		  <div class="form-control">        
			<name>Time limit [seconds]:</name>
   			<inputs>
   			<label for="STAGE3_TIME"></label>
			<input id="STAGE3_TIME" name="trialScript,stage3_maxTime" type="number" value="30" />
   			</inputs>      
		   </div>

     
  		<!-- Stage 4 SUCCESS-->
    		  <inputdivider> Stage 4: moving the plate to the target - Success criteria</inputdivider>	
   		  <note>For a success, plate must reach "target position":</note> 
      
     		    <!-- target position (wrt headset eye center)  -->
		    <div class="form-control">        <!-- numbers  -->
			<name>Target position [meters]</name>
   			<inputs>
			<label for="TARGET_X">X:</label>
			<input id="TARGET_X" name="setupScript,targetPositionX" type="number" value="0" />
			<label for="TARGET_Y">Y:</label>
			<input id="TARGET_Y" name="setupScript,targetPositionY" type="number" value="0" />
			<label for="TARGET_Z">Z:</label>
			<input id="TARGET_Z" name="setupScript,targetPositionZ" type="number" value="0.4" />
   			</inputs>
		    </div>
      
   		    <note>Specifically, the distance between plate center and target position must be less than "target size":</note> 
     		    <!-- target collider size  -->
		    <div class="form-control">        <!-- numbers  -->     
			<name>Target size [meters]</name>
   			<inputs> 
			<label for="TARGETSIZE_X">X:</label>
			<input id="TARGETSIZE_X" name="setupScript,targetColliderSizeX" type="number" value="0.1" />
			<label for="TARGETSIZE_Y">Y:</label>
			<input id="TARGETSIZE_Y" name="setupScript,targetColliderSizeY" type="number" value="0.1" />
			<label for="TARGETSIZE_Z">Z:</label>
			<input id="TARGETSIZE_Z" name="setupScript,targetColliderSizeZ" type="number" value="0.1" />   
   			</inputs>
		    </div>
      
      
   		    <note>The plate tilt/rotation must also be less than:</note> 
     		    <!-- max plate tilt for success -->
		    <div class="form-control">        <!-- numbers  -->
			<name>Max plate tilt at target [deg]</name>
   			<inputs> 
			<label for="MAXTILT_X">X (front-back):</label>
			<input id="MAXTILT_X" name="plateScript,maxTiltForSuccessX" type="number" value="180" />
			<label for="MAXTILT_Y">Y (flat rotation):</label>
			<input id="MAXTILT_Y" name="plateScript,maxTiltForSuccessY" type="number" value="180" />
			<label for="MAXTILT_Z">Z (left-right):</label>
			<input id="MAXTILT_Z" name="plateScript,maxTiltForSuccessZ" type="number" value="10" />
   			</inputs>
		    </div>
      
   		    <note>For a success, these conditions must remain true for:</note> 
		    <div class="form-control">    
			<name>Time in target for success [seconds]</name>
			<inputs>
			<label for="TIME_IN_TARGET"></label>
			<input id="TIME_IN_TARGET" name="plateScript,timeInTargetForSuccess" type="number" value="0.01" />
			</inputs>
		    </div>
	 
    		  <inputdivider> Stage 4: moving the plate to the target - Failure criteria</inputdivider>	
   		  <note>Trial fails for any of the following conditions:</note> 
      		  <note>If plate reaches target position and it is too tilted. </note> 
      		  <note>If plate reaches target position with acceptable tilt, but exits target region or becomes too titled before the "time in target for success"</note> 
      		  <note>If plate reaches target position with acceptable tilt, but exits target region or becomes too titled before the "time in target for success"</note> 	  
      		  <note>If plate exits the game area (falls/thrown...):</note> 
    
    		    <div class="form-control">        
			<name>Game area center [meters]</name>
   			<inputs>
   			<label for="GAMEAREA_POS_X">X:</label>
			<input id="GAMEAREA_POS_X" name="setupScript,gameareaPositionX" type="number" value="0" />
			<label for="GAMEAREA_POS_Y">Y:</label>
			<input id="GAMEAREA_POS_Y" name="setupScript,gameareaPositionY" type="number" value="0" />
			<label for="GAMEAREA_POS_Z">Z:</label>
			<input id="GAMEAREA_POS_Z" name="setupScript,gameareaPositionZ" type="number" value="0.4" />
   			</inputs>       
			<name>Game area size [meters]</name>
   			<inputs>
   			<label for="GAMEAREA_SIZE_X">X:</label>
			<input id="GAMEAREA_SIZE_X" name="setupScript,gameareaSizeX" type="number" value="1" />
			<label for="GAMEAREA_SIZE_Y">Y:</label>
			<input id="GAMEAREA_SIZE_Y" name="setupScript,gameareaSizeX" type="number" value="1" />
			<label for="GAMEAREA_SIZE_Z">Z:</label>
			<input id="GAMEAREA_SIZE_Z" name="setupScript,gameareaSizeX" type="number" value="1" />
   			</inputs>     

			<name> </name>  
   			<inputs>	    
			<input id="GAMEAREA_BOTTOMAUTO_H" name="setupScript,gameareaBottomIsGround" type="hidden" value="FALSE">
			<input id="GAMEAREA_BOTTOMAUTO" name="setupScript,gameareaBottomIsGround" type="checkbox" value="TRUE" checked>
			<label for="GAMEAREA_BOTTOMAUTO">Make gamearea bottom equal to ground</label>		
   			</inputs>   
		   </div>  
     
      		  <note>After time limit, past which trial is skipped:</note> 
		  <div class="form-control">            
			<name>Time limit [seconds]:</name>
   			<inputs>
			<input id="STAGE4_TIME" name="trialScript,stage4_maxTime" type="number" value="35" />
   			<label for="STAGE4_TIME"></label>
   			</inputs>      
		   </div>


	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);



