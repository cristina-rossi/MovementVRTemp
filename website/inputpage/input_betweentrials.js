document.querySelector('#INPUT_GAMEOBJECTS').insertAdjacentHTML('beforeend', `                                 

    
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
 		
  
  	
	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);

