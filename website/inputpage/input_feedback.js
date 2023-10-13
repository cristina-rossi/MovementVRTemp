document.querySelector('#INPUT_FEEDBACK').insertAdjacentHTML('beforeend', `                                  

    
		<form>

		<inputcolumn>
  
  		<!-- colors -->
    		  <inputdivider> Colors </inputdivider>
		  <div class="form-control">        
			<name>Target mesh success color:</name>
   			<inputs>
   			<label for="TARGET_COLOR_S_R">R:</label>
			<input id="TARGET_COLOR_S_R" name="plateScript,targetMeshColorSuccessR" type="number" value="0" />
   			<label for="TARGET_COLOR_S_G">G:</label>
			<input id="TARGET_COLOR_S_G" name="plateScript,targetMeshColorSuccessG" type="number" value="0.75" />
   			<label for="TARGET_COLOR_S_B">B:</label>
			<input id="TARGET_COLOR_S_B" name="plateScript,targetMeshColorSuccessB" type="number" value="0.4" />
   			<label for="TARGET_COLOR_S_A">Alpha:</label>
			<input id="TARGET_COLOR_S_A" name="plateScript,targetMeshColorSuccessAlpha" type="number" value="0.5" />
   			</inputs>            
			<name>Target mesh failure color:</name>
   			<inputs>
   			<label for="TARGET_COLOR_U_R">R:</label>
			<input id="TARGET_COLOR_U_R" name="plateScript,targetMeshColorUnsuccessR" type="number" value="1" />
   			<label for="TARGET_COLOR_U_G">G:</label>
			<input id="TARGET_COLOR_U_G" name="plateScript,targetMeshColorUnsuccessG" type="number" value="0" />
   			<label for="TARGET_COLOR_U_B">B:</label>
			<input id="TARGET_COLOR_U_B" name="plateScript,targetMeshColorUnsuccessB" type="number" value="0" />
   			<label for="TARGET_COLOR_U_A">Alpha:</label>
			<input id="TARGET_COLOR_U_A" name="plateScript,targetMeshColorUnsuccessAlpha" type="number" value="0.5" />
   			</inputs>    
   		        <note>Target color changes online based on success criteria</note>   
      
			<name>Particle effect success color:</name>
   			<inputs>
   			<label for="EFFECT_COLOR_S_R">R:</label>
			<input id="EFFECT_COLOR_S_R" name="plateAndGrapeScript,plateGrapeColorSuccessR" type="number" value="0" />
   			<label for="EFFECT_COLOR_S_G">G:</label>
			<input id="EFFECT_COLOR_S_G" name="plateAndGrapeScript,plateGrapeColorSuccessG" type="number" value="0.75" />
   			<label for="EFFECT_COLOR_S_B">B:</label>
			<input id="EFFECT_COLOR_S_B" name="plateAndGrapeScript,plateGrapeColorSuccessB" type="number" value="0.4" />
   			<label for="EFFECT_COLOR_S_A">Alpha:</label>
			<input id="EFFECT_COLOR_S_A" name="plateAndGrapeScript,plateGrapeColorSuccessAlpha" type="number" value="0.5" />
   			</inputs>            
			<name>Particle effect failure color:</name>
   			<inputs>
   			<label for="EFFECT_COLOR_U_R">R:</label>
			<input id="EFFECT_COLOR_U_R" name="plateAndGrapeScript,plateGrapeColorUnsuccessR" type="number" value="1" />
   			<label for="EFFECT_COLOR_U_G">G:</label>
			<input id="EFFECT_COLOR_U_G" name="plateAndGrapeScript,plateGrapeColorUnsuccessG" type="number" value="0" />
   			<label for="EFFECT_COLOR_U_B">B:</label>
			<input id="EFFECT_COLOR_U_B" name="plateAndGrapeScript,plateGrapeColorUnsuccessB" type="number" value="0" />
   			<label for="EFFECT_COLOR_U_A">Alpha:</label>
			<input id="EFFECT_COLOR_U_A" name="plateAndGrapeScript,plateGrapeColorUnsuccessAlpha" type="number" value="0.5" />
   			</inputs>    
   		        <note>Particle effect appears on plate upon trial change</note>    
		   </div>


  		<!-- message -->
    		  <inputdivider> Message displayed after failure trials </inputdivider>
		  <div class="form-control">        
			<name>Plate too tilted:</name>
   			<inputs>      
			<label for="FAIL1"></label>
			<textarea id="FAIL1" name="messagesScript,failText1" rows="1" cols="50"></textarea>
   			</inputs>      
			<name>Plate overshot or moved away from target:</name>
   			<inputs>      
			<label for="FAIL2"></label>
			<textarea id="FAIL2" name="messagesScript,failText2" rows="1" cols="50" value="no throwing"></textarea>
   			</inputs>              
			<name>Plate fell:</name>
   			<inputs>      
			<label for="FAIL3"></label>
			<textarea id="FAIL3" name="messagesScript,failText3" rows="1" cols="50"></textarea>
   			</inputs>          
			<name>Time limit reached:</name>
   			<inputs>      
			<label for="FAIL4"></label>
			<textarea id="FAIL4" name="messagesScript,failText4" rows="1" cols="50" value="too slow"></textarea>
   			</inputs>    
              
			<name>Message position [meters]:</name>
   			<inputs>
   			<label for="FAIL_POS_X">X:</label>
			<input id="FAIL_POS_X" name="setupScript,failMessageLocalPositionX" type="number" value="0.4" />
			<label for="FAIL_POS_Y">Y:</label>
			<input id="FAIL_POS_Y" name="setupScript,failMessageLocalPositionY" type="number" value="0.15" />
			<label for="FAIL_POS_Z">Z:</label>
			<input id="FAIL_POS_Z" name="setupScript,failMessageLocalPositionZ" type="number" value="0.65" />
   			</inputs>  
			<name>Message size [relative]:</name>
   			<inputs>
   			<label for="FAIL_SIZE_X">X:</label>
			<input id="FAIL_SIZE_X" name="setupScript,failMessageScaleX" type="number" value="20" />
			<label for="FAIL_SIZE_Y">Y:</label>
			<input id="FAIL_SIZE_Y" name="setupScript,failMessageScaleY" type="number" value="30" />
   			</inputs>   
			<name>Message font size:</name>
   			<inputs>
   			<label for="FAIL_FONT"></label>
			<input id="FAIL_FONT" name="setupScript,failMessageTextSize" type="number" value="50" />
   			</inputs>  
			<name>Message duration [seconds]:</name>
   			<inputs>
   			<label for="FAIL_TIME"></label>
			<input id="FAIL_TIME" name="trialScript,stage5_outcomeMessageDuration" type="number" value="1" />
   			</inputs>  
		   </div>

     
  		<!-- bird sound -->
    		  <inputdivider> Bird sound </inputdivider>
		  <div class="form-control">        
			<name>Volume [0 to 1]:</name>
   			<inputs>      
			<label for="BIRDVOL"></label>
			<input id="BIRDVOL" name="setupScript,targetBirdVolume" type="number" value="1" />
   			</inputs>      
   		        <note>Change sounds by replacing failure and success mp3 files in Resources</note>    
		   </div>
     


	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);


