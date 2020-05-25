import React, { useState } from 'react';
import '../css/header.css';

import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.png';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class LogoGiratorio extends React.Component{
	constructor(props){
		super(props);
		this.state={isPaused:false, className:'logo-giratorio'};
	}

	tick() {
		const status=!this.state.isPaused;
		const clase= this.props.className+" "+ (status ? 'paused' : 'running');
		this.setState({isPaused:status, className:clase});	
	}

	componentDidMount() {
	    this.timerID = setInterval(
	      () => this.tick(),
	      2000
	    );
  	}
	componentWillUnmount() {
    	clearInterval(this.timerID);
  	}

	render(){
		return (
			<img src={logo} className={this.state.className} alt="{this.props.alt}" />
			);
	}
}

function Logos(){
	return(
		<div className="divLogos">
			<LogoGiratorio className="logo-giratorio" alt="logo" />
			<img src={logo2} className="logo-nombre"/>
		</div>
	);
}

function BotonesMenu(props){
	return(
	<Nav variant="pills" onSelect={(selectedKey) => props.onSelect(selectedKey)}  className="divBotones">
	      <Nav.Item key="micv" className="anchorMenu">
	        <Nav.Link className="anchorMenu" eventKey="CV"><br/> Mi CV </Nav.Link>
	      </Nav.Item>
	      <Nav.Item key="juegos" className="anchorMenu">
	        <Nav.Link className="anchorMenu" eventKey="Playroom"><br/>Juegos</Nav.Link>
	      </Nav.Item>
	</Nav>
	);
}

function MenuMovil(props){
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	  return (
	    <div >
	      	<Modal show={show} onHide={handleClose}>
	        	<Nav onSelect={(selectedKey) => props.onSelect(selectedKey)} className="flex-column modalMenuMovil">
			      <Nav.Item key="micv" className="anchorMenuMovil">
			        <Nav.Link  onClick={handleClose} eventKey="CV">Mi CV </Nav.Link>
			      </Nav.Item>
			      <Nav.Item key="juegos" className="anchorMenuMovil">
			        <Nav.Link onClick={handleClose} eventKey="Playroom">Juegos</Nav.Link>
			      </Nav.Item>
				</Nav>
		  	</Modal>
		  <Button className="menuMovilButton" onClick={handleShow}>≡</Button>
	    </div>
	);
}



class Header extends React.Component{
	render(props){
		return(
			<Navbar className="navbar">
			  <Logos/>
			  <BotonesMenu  onSelect={(i)=>this.props.onSelect(i)}/> 
			  <MenuMovil onSelect={(i)=>this.props.onSelect(i)}/>

			</Navbar>
		);
	};

}


export default Header;