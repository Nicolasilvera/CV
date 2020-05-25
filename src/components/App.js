import React from 'react';
import Header from './header.js';
import Body from './body.js';
import '../css/app.css';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={pagActual:'CV'};
	}
	handleSelect(i){
		this.setState({pagActual:i});
	}
	render(){
		return(
			<div className="App">
		        <Header className="header" onSelect={(i)=>this.handleSelect(i)}/>
        		<Body pagActual={this.state.pagActual} className="body"/>
			</div>
			);

	}
}


export default App;