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
		   </div>


     		<!-- Data saving -->
    		  <inputdivider> Data saving </inputdivider>
		  <div class="form-control">        
			<name>Save for each frame:</name>
   			<inputs>	    	  	    
			<input id="SAVE_PERTURBATION" name="handsAndSaveScript,savePerturbationOffset" type="hidden" value="FALSE">
			<input id="SAVE_PERTURBATION" name="handsAndSaveScript,savePerturbationOffset" type="checkbox" value="TRUE" checked>	
			<label for="SAVE_PERTURBATION">Hand perturbation offsets</label>	
			<input id="SAVE_TRANSFORM" name="handsAndSaveScript,saveBoneTransforms" type="hidden" value="FALSE">
			<input id="SAVE_TRANSFORM" name="handsAndSaveScript,saveBoneTransforms" type="checkbox" value="TRUE" checked>	
			<label for="SAVE_TRANSFORM">All bone transforms</label>	  	
			<input id="SAVE_COLLIDER" name="handsAndSaveScript,saveBoneColliderShapes" type="hidden" value="FALSE">
			<input id="SAVE_COLLIDER" name="handsAndSaveScript,saveBoneColliderShapes" type="checkbox" value="TRUE" checked>	
			<label for="SAVE_COLLIDER">All bone shapes</label>	  
   			</inputs> 
   		        <note>Wrist and headset position is always saved.</note>   
		   </div>

	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);



