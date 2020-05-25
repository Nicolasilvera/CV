import React from 'react';
import myImage from '../../assets/images/myImage.jpeg';
import '../../css/CV.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';


function AtomicCard(props){
	const map = (props.ulrMap ? <center> <iframe className="mapa" src={props.ulrMap} title={"Mapa de "+props.subtitulo}/></center> : '');
	return(
		<div>
			<h1 style={{color: 'white', fontSize:'2.5em'}}><i>{props.encabezado}</i></h1>
			<div>
				<h1>{props.titulo}</h1>
				<h2>{props.subtitulo}</h2>
				{(map ? map : '')}
				{props.texto}
				{props.tabla}
			</div>
		</div>
	);

}

function ImgCard(props){
	const hoy = new Date();
	var nacimiento =  new Date("03/13/1996");
	var edad=hoy.getFullYear() - nacimiento.getFullYear();
	if ( (hoy.getMonth() - nacimiento.getMonth()) < 0 || ( (hoy.getMonth() - nacimiento.getMonth()) === 0 && hoy.getDate() < nacimiento.getDate())) {
		edad= edad-1;
	}	
	return(
		<Container id="introduccion" className="contenedor contenedorPar">
			<Row >
				<Col md={4} >
					<Image src={myImage} fluid className="profile-pic" />
				</Col>
				<Col md={8}>
					<AtomicCard
						encabezado= "Introducción"
						titulo= {props.name}
						subtitulo={"("+edad + " años)"}
						texto= <p>
						Soy Analista Programador, egresado el día 29 de Julio de 2019 de la Universidad Nacional de La Pampa. Además,
						he finalizado las asignaturas de la carrera de Ingeniería en Sistemas, restando realizar 200 horas
						en el marco de "Prácticas Profesionales Supervisadas (PPS)" y la tesis, por lo que estimo finalizar la materia en los
						primeros meses de 2021.<br/>
						Actualmente me encuentro en la búsqueda de mi primer empleo, con una disponibilidad horaria completa, para así
						poder realizar un proyecto que me permita realizar las PPS. Me encuentro realmente muy motivado para comenzar a insertarme
						en el mundo laboral, y seguir estudiando lo necesario para poder desarrollar mis tareas eficientemente dentro del mismo. 
						</p>
					/>						
				</Col>	
			</Row>
		</Container>
		);
}

function HistoryCard(){
	return(
		<Container className="contenedor contenedorImpar" id="historiapre">
				<h1 style={{color: 'white', fontSize:'2.5em'}}><i>Historia Preuniversitaria</i></h1>
				<Row>
					<Col sm={12} md={6}>
					<AtomicCard 
						titulo= "Santa Rosa - La Pampa" 
						subtitulo= "(1996 - 2013)"
						ulrMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102473.51455473414!2d-64.37127611699815!3d-36.619229070818434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd07f7558a33%3A0x7bda8c2a7b70fd81!2sSanta%20Rosa%2C%20La%20Pampa!5e0!3m2!1ses-419!2sar!4v1587945131775!5m2!1ses-419!2sar"
						texto=<div><p>En cuánto a lo profesional, cabe destacar de éste período que cursé mi educación secundaria en el <i>Colegio de 
						la Universidad Nacional de La Pampa</i>, comenzando en 2008 y egresando del sexto año en 2013.</p>
						<p>Durante los 
						últimos 3 años, además de las materias habituales, realicé la orientación de Ciencias Humanas a contraturno. 
						Gracias a ésta forma de dictado de clases y el nivel académico del colegio, no sólo me furmé en Ciencias Humanas
						sino que en el resto de las asignaturas "comunes" también.</p></div>
					/>
					</Col>
					<Col sm={12} md={6}>
					<AtomicCard 
						titulo= "General Pico - La Pampa" 
						subtitulo= "(2014 - 2019)"
						ulrMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51866.39542579917!2d-63.7862172803876!3d-35.66100098079765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c37d4f9847b43f%3A0x6b4fc7aecf7b9d89!2sGral.%20Pico%2C%20La%20Pampa!5e0!3m2!1ses-419!2sar!4v1588187099859!5m2!1ses-419!2sar"
						texto=<div><p>En 2014 decidí cambiar de ciudad para comenzar con mi formación como Ingeniero en Sistemas, a la Ciudad de General
							Pico (a unos 130 km de Santa Rosa), ingresando entonces a la Facultad de Ingeniría de la Universidad Nacional de La Pampa</p>
							<p>Si bien el comienzo fue difícil para mi, aprendí a gestionar las tareas para cumplir con mis propias espectativas
							un año después. Es decir, el 2014 arranqué trabado, pero a partir de 2015 logré empezar el camino que buscaba al ritmo que quería.</p></div>
					/>
					</Col>
				</Row>
		</Container>
		
		);
}

function CarrerHistory(){
	return(
		<Container id="facultad" className="contenedor contenedorPar">
				<h1 style={{color: 'white', fontSize:'3em'}}><i>Facultad de Ingeniería</i></h1>
				<Row >
					<Col sm={12} md={12}>
						<h1>Facultad de Ingeniería</h1>
					</Col>
					<Col sm={12} md={6}>
					<AtomicCard
						titulo="Analista Programador"
						subtitulo="(2014 - 2019)"
						texto=<p>He finalizado los estudios de Analista Programador en Julio de 2019, con un promedio de 7.32/10. Tengo certificado de título 
						en trámite, porque lamentablemente pese al tiempo transcurrido, aún no he recibido el título.</p>
					/>
					</Col>
					<Col sm={12} md={6}>
					<AtomicCard
						titulo="Ingeniería en Sistemas"
						subtitulo="(2014 - ...)"
						texto= <p>He finalizado las materias de Ingeniería en Sistemas, debiendo realiar 200 horas de "Prácticas Profesionales Supervisadas",
						al finalizarlas, estaré habilitado entonces para comenzar a desarrollar mi tesis. Estimo terminar la carrera en su totalidad en 
						Abril de 2021.</p>
					/>
					</Col>
				</Row>
		</Container>
		
		);
}


function RowSkill(props){
	return(
		<tr className="rowStyle">
		      <td>{props.contexto}</td>
		      <td>{props.tecnologia}</td>
		      <td>{props.autocalificacion} </td>
		</tr>
		);
}


function Skills(){
	const tabla= <Table hover responsive>
			  <thead>
			    <tr style={{'background-color':'darkslategray'}}>
			      <th>Contexto</th>
			      <th>Tecnología</th>
			      <th>Autocalificacion</th>
			    </tr>
			  </thead>
			  <tbody>
			    <RowSkill contexto="Base de Datos" tecnologia="Oracle" autocalificacion="6" />
			    <RowSkill contexto="Base de Datos" tecnologia="MySQL" autocalificacion="7" />
			    <RowSkill contexto="Frameworks / Librerías" tecnologia="Django" autocalificacion="5" />
			    <RowSkill contexto="Frameworks / Librerías" tecnologia="Laravel" autocalificacion="7" />
			    <RowSkill contexto="Frameworks / Librerías" tecnologia="React" autocalificacion="7" />
			    <RowSkill contexto="Lenguaje de Programación" tecnologia="C/C++" autocalificacion="8" />
			    <RowSkill contexto="Lenguaje de Programación" tecnologia="Java" autocalificacion="8" />
			    <RowSkill contexto="Lenguaje de Programación" tecnologia="Python" autocalificacion="8" />
			    <RowSkill contexto="Otros conocimientos" tecnologia="Git" autocalificacion="7" />
			    <RowSkill contexto="Otros conocimientos" tecnologia="Español" autocalificacion="Nativo"/>
			    <RowSkill contexto="Otros conocimientos" tecnologia="Herramientas de Office" autocalificacion="8"/>
			    <RowSkill contexto="Otros conocimientos" tecnologia="Ingles" autocalificacion="Medio"/>
			    <RowSkill contexto="Otros conocimientos" tecnologia="UML" autocalificacion="6"/>
			    <RowSkill contexto="Sistemas Operativos" tecnologia="Linux" autocalificacion="7"/>
			    <RowSkill contexto="Sistemas Operativos" tecnologia="Windows" autocalificacion="8"/>
			    <RowSkill contexto="Tecnologías Web" tecnologia="Bootstrap" autocalificacion="9"/>
			    <RowSkill contexto="Tecnologías Web" tecnologia="CSS" autocalificacion="9"/>
			    <RowSkill contexto="Tecnologías Web" tecnologia="HTML" autocalificacion="7"/>
			    <RowSkill contexto="Tecnologías Web" tecnologia="Javascript" autocalificacion="9"/>
			    <RowSkill contexto="Tecnologías Web" tecnologia="JQuery" autocalificacion="9"/>
			    <RowSkill contexto="Tecnologías Web" tecnologia="Materialize" autocalificacion="8"/>
			    <RowSkill contexto="Tecnologías Web" tecnologia="PHP" autocalificacion="7"/>
			  </tbody>
			</Table>;
	
	return(
		<Container id="habilidades" className="contenedor contenedorImpar noPadding">
			<AtomicCard
				encabezado="Conocimientos / Habilidades"
				subtitulo="Conocimientos"
				tabla={tabla}
			/>
		</Container>
		);
}

function ItemMenuRapido(props){
	return(
		<div className="itemMenuRapido" style={{backgroundColor:props.color}}>
			{props.letterRef}<a href={props.href}> {props.text} </a>
		</div>
		);
}

function MenuRapido(){
	return(
			<div className="menuRapido">
				<ItemMenuRapido 
					color='#119E9E' 
					letterRef='M'
					text="Introducción"
					href="#introduccion"
				/>
				<ItemMenuRapido 
					color='teal' 
					letterRef='E'
					text="Historia Preuniversitaria"
					href="#historiapre"
				/>
				<ItemMenuRapido 
					color='blue' 
					letterRef='N'
					text="Facultad"
					href="#facultad"
				/>
				<ItemMenuRapido 
					color='navy' 
					letterRef='Ú'
					text="Habilidades"
					href="#habilidades"
				/>
			</div>
		);
}

function CV(){
	return(
		<div className="body">
			<ImgCard name="Silvera, Nicolás Omar"/><br/>
			<HistoryCard /><br/>
			<CarrerHistory/><br/>
			<Skills/><br/>
			<MenuRapido/>
		</div>
		);
}
export default CV;