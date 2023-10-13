document.querySelector('#INPUT_GAMEOBJECTS').insertAdjacentHTML('beforeend', `                                 

    
		<form>

		<inputcolumn>
  
  
  		<!-- Plate -->
    		  <inputdivider> Plate </inputdivider>
		  <div class="form-control">        
			<name>Plate scale [relative]:</name>
   			<inputs>
   			<label for="PLATE_SCALE_X">X:</label>
			<input id="PLATE_SCALE_X" name="setupScript,plateScaleX" type="number" value="1" />
			<label for="PLATE_SCALE_Y">Y:</label>
			<input id="PLATE_SCALE_Y" name="setupScript,plateScaleY" type="number" value="1" />
			<label for="PLATE_SCALE_Z">Z:</label>
			<input id="PLATE_SCALE_Z" name="setupScript,plateScaleZ" type="number" value="1" />
   			</inputs>         
			<name>Plate physics:</name>
   			<inputs>
   			<label for="PLATE_MASS">Mass [kg]:</label>
			<input id="PLATE_MASS" name="setupScript,plateMass" type="number" value="1" />
			<label for="PLATE_DRAG">Y:</label>
			<input id="PLATE_DRAG" name="setupScript,plateDrag" type="number" value="0" />
			<label for="PLATE_ADRAG">Angular drag:</label>
			<input id="PLATE_ADRAG" name="setupScript,plateAngularDrag" type="number" value="0.05" />
   			</inputs>             
			<name>Plate-hands friction:</name>
   			<inputs>
   			<label for="PLATE_FRICTIOND">Dynamic coefficient:</label>
			<input id="PLATE_FRICTIOND" name="setupScript,frictionPlateHandsDynamic" type="number" value="0.6" />
			<label for="PLATE_FRICTIONS">Static coefficient:</label>
			<input id="PLATE_FRICTIONS" name="setupScript,frictionPlateHandsStatic" type="number" value="0.6" />
   			</inputs>              
			<name>Plate apperance adjustments [meters]</name>
   			<inputs>
   			<label for="PLATE_BUFFER">Vertical offset:</label>
			<input id="PLATE_BUFFER" name="setupScript,plateStandYBuffer" type="number" value="0.006" />
   			<label for="PLATE_ADJUSTTHRESH">Threshold for origin update:</label>
			<input id="PLATE_ADJUSTTHRESH" name="setupScript,maxDistanceResetPlateOrigin" type="number" value="0.01" />
   		  	<note>Plate is enabled (but invisible) at adjusted position to avoid collision with stand.</note> 
   		  	<note>Plate returns to start position on stand (from Task tab) before it is set to visible.</note>
   			</inputs>   
		   </div>

     	<!-- Grape -->
    		  <inputdivider> Grape </inputdivider>
		  <div class="form-control">     
			<name>Grape position offset wrt plate [meters]:</name>
   			<inputs>
   			<label for="GRAPE_OFFSET_X">X:</label>
			<input id="GRAPE_OFFSET_X" name="setupScript,grapePositionX" type="number" value="0" />
			<label for="GRAPE_OFFSET_Y">Y:</label>
			<input id="GRAPE_OFFSET_Y" name="setupScript,grapePositionY" type="number" value="0.04" />
			<label for="GRAPE_OFFSET_Z">Z:</label>
			<input id="GRAPE_OFFSET_Z" name="setupScript,grapePositionZ" type="number" value="0" />
   			</inputs>         
			<name>Grape scale [relative]:</name>
   			<inputs>
   			<label for="GRAPE_SCALE_X">X:</label>
			<input id="GRAPE_SCALE_X" name="setupScript,grapeScaleX" type="number" value="1" />
			<label for="GRAPE_SCALE_Y">Y:</label>
			<input id="GRAPE_SCALE_Y" name="setupScript,grapeScaleY" type="number" value="1" />
			<label for="GRAPE_SCALE_Z">Z:</label>
			<input id="GRAPE_SCALE_Z" name="setupScript,grapeScaleZ" type="number" value="1" />
   			</inputs>         
			<name>Grape physics:</name>
   			<inputs>
   			<label for="GRAPE_MASS">Mass [kg]:</label>
			<input id="GRAPE_MASS" name="setupScript,grapeMass" type="number" value="1" />
			<label for="GRAPE_DRAG">Y:</label>
			<input id="GRAPE_DRAG" name="setupScript,grapeDrag" type="number" value="0" />
			<label for="GRAPE_ADRAG">Angular drag:</label>
			<input id="GRAPE_ADRAG" name="setupScript,grapeAngularDrag" type="number" value="0.05" />
   			</inputs>             
			<name>Grape-plate friction:</name>
   			<inputs>
   			<label for="GRAPE_FRICTIOND">Dynamic coefficient:</label>
			<input id="GRAPE_FRICTIOND" name="setupScript,frictionPlateGrapeDynamic" type="number" value="0.3" />
			<label for="GRAPE_FRICTIONS">Static coefficient:</label>
			<input id="GRAPE_FRICTIONS" name="setupScript,frictionPlateGrapeStatic" type="number" value="0.3" />
   			</inputs>          
			<name>Ignore grape-hand collision:</name>
   			<inputs>		    
			<input id="GRAPE_HANDS_IGNORE_H" name="grapeScript,grapeAlwaysIgnoreHands" type="hidden" value="FALSE">
			<input id="GRAPE_HANDS_IGNORE" name="grapeScript,grapeAlwaysIgnoreHands" type="checkbox" value="TRUE" >
			<label for="GRAPE_HANDS_IGNORE"></label>	
   			</inputs>    			
		   </div>


     
     	<!-- Target mesh -->
    		  <inputdivider> Target Mesh (visual cylindrical mesh in front of bird) </inputdivider>
		  <div class="form-control">     
			<name>Mesh position offset [meters]:</name>
   			<inputs>
   			<label for="TARGETMESH_OFFSET_X">X:</label>
			<input id="TARGETMESH_OFFSET_X" name="setupScript,targetMeshLocalPositionX" type="number" value="0" />
			<label for="TARGETMESH_OFFSET_Y">Y:</label>
			<input id="TARGETMESH_OFFSET_Y" name="setupScript,targetMeshLocalPositionY" type="number" value="0" />
			<label for="TARGETMESH_OFFSET_Z">Z:</label>
			<input id="TARGETMESH_OFFSET_Z" name="setupScript,targetMeshLocalPositionZ" type="number" value="0" />
   			</inputs>   
   		  	<note>Offset of the visual mesh wrt to actual target position (that set in Task tab)</note>      
			<name>Mesh size [meters]:</name>
   			<inputs>
   			<label for="TARGETMESH_SIZE_X">X:</label>
			<input id="TARGETMESH_SIZE_X" name="setupScript,targetMeshSizeX" type="number" value="0.2" />
			<label for="TARGETMESH_SIZE_Y">Y:</label>
			<input id="TARGETMESH_SIZE_Y" name="setupScript,targetMeshSizeY" type="number" value="0.005" />
			<label for="TARGETMESH_SIZE_Z">Z:</label>
			<input id="TARGETMESH_SIZE_Z" name="setupScript,targetMeshSizeZ" type="number" value="0.2" />
   			</inputs>    		
		   </div>

	<!-- Bird sounds -->
    		  <inputdivider> Environment birds (not target bird) </inputdivider>
		  <div class="form-control">     
			<name>Sound volume [0 to 1]:</name>
   			<inputs>
   			<label for="CHIRP_VOL">Chirp:</label>
			<input id="CHIRP_VOL" name="setupScript,backgroundBirdChirpVolume" type="number" value="0.1" />
			<label for="WINGS_VOL">Wings:</label>
			<input id="WINGS_VOL" name="setupScript,backgroundBirdFlyawayVolume" type="number" value="0.1" />
   			</inputs>    		
		   </div>
  	
	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);

