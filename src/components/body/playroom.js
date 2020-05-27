import React from 'react';
import '../../css/playroom.css';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Tictactoe from './playroom/tictactoe';
import Snake from './playroom/snake';


import imgTictactoe from '../../assets/images/tictactoe.png';
import imgSnake from '../../assets/images/snake.png';

function CardLauncher(props){
	return(
		<Col sm={12} md={6} >
			<Button className="button-launcher"
					style={{backgroundImage: "url(" + props.src + ")", margin:"1vh"}}
					value={props.name} 
					onClick={()=>props.onClick(props.name)}>
				<b><i>{props.name}</i></b>
			</Button>
		</Col>
		);
}

function Launcher(props){
	return(
			<div>
				<br/>
				<Container>	
					<Row  style={{width:'100%'}}>
						<CardLauncher src={imgTictactoe} onClick={props.onClick} name="TIC-TAC-TOE"/>
						<CardLauncher src={imgSnake} onClick={props.onClick} name="SNAKE"/>
					</Row>
				</Container>
			</div>
		);
}
class Playroom extends React.Component{
	constructor(props){
		super(props);
		this.state={lanzado:'null'};
	};

	renderSwitch(lanzado) {
		switch(lanzado) {
		    case 'TIC-TAC-TOE':
		      return <Tictactoe onClose={()=>this.handleCloseGame()}/>;
		    case 'SNAKE':
		      return <Snake onClose={()=>this.handleCloseGame()}/>;
		    default:
		      return <Launcher onClick={(i)=>this.handleClick(i)}/>;
  		}
	}

	handleClick(i){
		this.setState({lanzado:i});
	}
	handleCloseGame(){
		this.setState({lanzado:null});
	}

	render(){
		const lanzado=this.renderSwitch(this.state.lanzado);
		return(
			lanzado
		);
	};
}

export default Playroom;