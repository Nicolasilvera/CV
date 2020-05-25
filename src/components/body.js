import React from 'react';

import CV from './body/CV';
import Playroom from './body/playroom';

function Body(props){
	return(
		<center>
			{(props.pagActual === 'CV' ? <CV/> : <Playroom/> )}
		</center>
		);
}


export default Body;