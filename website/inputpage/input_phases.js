document.querySelector('#INPUT_GAMEOBJECTS').insertAdjacentHTML('beforeend', `                                 

    
	<form>
	<inputcolumn>

	<!-- Start -->
	  <inputdivider> Start of paradigm </inputdivider>
	  <div class="form-control">  
   			<note>initial delay with message at the very start of paradigm</note>
 			<name>Message:</name>
   			<inputs>      
			<label for="START_MSG"></label>
<textarea id="START_MSG" name="messagesScript,startText" rows="2" cols="50">
Welcome!
(Loading...)
</textarea>
   			</inputs>               
			<name>Message position [meters]:</name>
   			<inputs>
   			<label for="STARTMSG_POS_X">X:</label>
			<input id="STARTMSG_POS_X" name="setupScript,startMessageLocalPositionX" type="number" value="0" />
			<label for="STARTMSG_POS_Y">Y:</label>
			<input id="STARTMSG_POS_Y" name="setupScript,startMessageLocalPositionY" type="number" value="1.3" />
			<label for="STARTMSG_POS_Z">Z:</label>
			<input id="STARTMSG_POS_Z" name="setupScript,startMessageLocalPositionZ" type="number" value="4.4" />
   			</inputs>  			
			<name>Message font size:</name>
   			<inputs>
   			<label for="STARTMSG_FONT"></label>
			<input id="STARTMSG_FONT" name="setupScript,startMessageTextSize" type="number" value="250" />
   			</inputs>  
			<name>Duration [seconds]:</name>
   			<inputs>
   			<label for="STARTMSG_TIME"></label>
			<input id="STARTMSG_TIME" name="startScript,experimentStartTimeDelay" type="number" value="5" />
   			</inputs>  
	  </div>
  
  	<!-- End -->
	  <inputdivider> End of paradigm </inputdivider>
	  <div class="form-control">  
   <note>Message at the very end of paradigm</note>
 			<name>Message:</name>
   			<inputs>      
			<label for="END_MSG"></label>
<textarea id="END_MSG" name="messagesScript,endText" rows="2" cols="50">
The end
</textarea>
   			</inputs>               
			<name>Message position [meters]:</name>
   			<inputs>
   			<label for="ENDMSG_POS_X">X:</label>
			<input id="ENDMSG_POS_X" name="setupScript,endMessageLocalPositionX" type="number" value="0" />
			<label for="ENDMSG_POS_Y">Y:</label>
			<input id="ENDMSG_POS_Y" name="setupScript,endMessageLocalPositionY" type="number" value="0.8" />
			<label for="ENDMSG_POS_Z">Z:</label>
			<input id="ENDMSG_POS_Z" name="setupScript,endMessageLocalPositionZ" type="number" value="4.4" />
   			</inputs>  			
			<name>Message font size:</name>
   			<inputs>
   			<label for="ENDMSG_FONT"></label>
			<input id="ENDMSG_FONT" name="setupScript,endMessageTextSize" type="number" value="250" />
   			</inputs>  
   	  </div>


	<!-- Position hands in hand-target -->
	  <inputdivider> "Position hands in hand-target" phase </inputdivider>
	  <div class="form-control">  
   			<note>asks participant to place hands within target hand-meshes to start trial</note>
 			<name>Message:</name>
   			<inputs>      
			<label for="HANDTARGET_MSG"></label>
<textarea id="HANDTARGET_MSG" name="messagesScript,startText" rows="2" cols="50">
Welcome!
(Loading...)
</textarea>
   			</inputs>               
			<name>Message position [meters]:</name>
   			<inputs>
   			<label for="HANDTARGETMSG_POS_X">X:</label>
			<input id="HANDTARGETMSG_POS_X" name="setupScript,startMessageLocalPositionX" type="number" value="0" />
			<label for="HANDTARGETMSG_POS_Y">Y:</label>
			<input id="HANDTARGETMSG_POS_Y" name="setupScript,startMessageLocalPositionY" type="number" value="1.3" />
			<label for="HANDTARGETMSG_POS_Z">Z:</label>
			<input id="HANDTARGETMSG_POS_Z" name="setupScript,startMessageLocalPositionZ" type="number" value="4.4" />
   			</inputs>  			
			<name>Message font size:</name>
   			<inputs>
   			<label for="HANDTARGETMSG_FONT"></label>
			<input id="HANDTARGETMSG_FONT" name="setupScript,startMessageTextSize" type="number" value="250" />
   			</inputs>  
			<name>Duration [seconds]:</name>
   			<inputs>
   			<label for="HANDTARGETMSG_TIME"></label>
			<input id="HANDTARGETMSG_TIME" name="startScript,experimentStartTimeDelay" type="number" value="5" />
   			</inputs>  
	  </div>
      
  	
	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);
