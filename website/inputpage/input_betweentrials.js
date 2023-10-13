document.querySelector('#INPUT_BETWEENTRIALS').insertAdjacentHTML('beforeend', `                                 

    
	<form>
	<inputcolumn>
 		  <inputdivider> Break (pause between selected trials) </inputdivider>
		  <div class="form-control">          
			<name></name>
   			<inputs>	    
			<input id="BREAK_FLAG_H" name="trialScript,stage6_breakFlag" type="hidden" value="FALSE">
			<input id="BREAK_FLAG" name="trialScript,stage6_breakFlag" type="checkbox" value="TRUE" checked>
			<label for="BREAK_FLAG">Take break after trial</label>		
			</inputs>    
			<name>Break duration [seconds]:</name>
   			<inputs>
   			<label for="BREAK_TIME"></label>
			<input id="BREAK_TIME" name="trialScript,stage6_breakDuration" type="number" value="30" />
   			</inputs>      
   			<name>Break message:</name>
   			<inputs>      
			<label for="BREAK_TEXT"></label>
			<textarea id="BREAK_TEXT" name="messagesScript,breakText" rows="2" cols="50">break</textarea>
   			</inputs>  
			<name>Message position [meters]:</name>
   			<inputs>
   			<label for="BREAK_POS_X">X:</label>
			<input id="BREAK_POS_X" name="setupScript,breakMessageLocalPositionX" type="number" value="0.4" />
			<label for="BREAK_POS_Y">Y:</label>
			<input id="BREAK_POS_Y" name="setupScript,breakMessageLocalPositionY" type="number" value="0.15" />
			<label for="BREAK_POS_Z">Z:</label>
			<input id="BREAK_POS_Z" name="setupScript,breakMessageLocalPositionZ" type="number" value="0.65" />
   			</inputs>  
			<name>Message size [relative]:</name>
   			<inputs>
   			<label for="BREAK_SIZE_X">X:</label>
			<input id="BREAK_SIZE_X" name="setupScript,breakMessageScaleX" type="number" value="20" />
			<label for="BREAK_SIZE_Y">Y:</label>
			<input id="BREAK_SIZE_Y" name="setupScript,breakMessageScaleY" type="number" value="30" />
   			</inputs>   
			<name>Message font size:</name>
   			<inputs>
   			<label for="BREAK_FONT"></label>
			<input id="BREAK_FONT" name="setupScript,breakMessageTextSize" type="number" value="50" />
   			</inputs>   
		   </div>
 		
 		  <inputdivider> Trial number display </inputdivider>
		  <div class="form-control">          
			<name></name>
   			<inputs>	    
			<input id="TRIALN_FLAG_H" name="setupScript,trialNumberFlag" type="hidden" value="FALSE">
			<input id="TRIALN_FLAG" name="setupScript,trialNumberFlag" type="checkbox" value="TRUE" checked>
			<label for="TRIALN_FLAG">Display trial number</label>		
			</inputs>    
			<name>Pre-number string:</name>
   			<inputs>      
			<label for="TRIALN_TEXT"></label>
			<textarea id="TRIALN_TEXT" name="messagesScript,trialNumberText" rows="2" cols="50">Trial:</textarea>
   			</inputs>  
			<name>Position [meters]:</name>
   			<inputs>
   			<label for="TRIALN_POS_X">X:</label>
			<input id="TRIALN_POS_X" name="setupScript,trialNumberMessageLocalPositionX" type="number" value="-0.8" />
			<label for="TRIALN_POS_Y">Y:</label>
			<input id="TRIALN_POS_Y" name="setupScript,trialNumberMessageLocalPositionY" type="number" value="0.4" />
			<label for="TRIALN_POS_Z">Z:</label>
			<input id="TRIALN_POS_Z" name="setupScript,trialNumberMessageLocalPositionZ" type="number" value="1.1" />
   			</inputs>  
			<name>Font size:</name>
   			<inputs>
   			<label for="TRIALN_FONT"></label>
			<input id="TRIALN_FONT" name="setupScript,trialNumberMessageTextSize" type="number" value="40" />
   			</inputs>   
		   </div>


		  <inputdivider> Bird at target </inputdivider>
		  <div class="form-control">          
			<name></name>
   			<inputs>	    
			<input id="CHANGETARGETBIRD_FLAG_H" name="trialScript,stage0_changeBird" type="hidden" value="FALSE">
			<input id="CHANGETARGETBIRD_FLAG" name="trialScript,stage0_changeBird" type="checkbox" value="TRUE" checked>
			<label for="CHANGETARGETBIRD_FLAG">Change bird after trial</label>		
			</inputs>    
		   </div>
  
  	
	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);

