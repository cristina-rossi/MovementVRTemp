document.querySelector('#INPUT_GAMEOBJECTS').insertAdjacentHTML('beforeend', `                                 

    
		<form>

		<inputcolumn>
  
  
  		<!-- Stage 0 -->
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
		   </div>
  	
	</inputcolumn> 
	<figurecolumn>
    		<img src="website/inputpage/paradigmSmall-01.png"  style="width:100%">
	</figurecolumn>

 
	</form>

     
  
      

  `);

