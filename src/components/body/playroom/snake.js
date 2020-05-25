import React from 'react';
import '../../../css/snake.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class SnakeGame extends React.Component{
  initialState(){
    var body=[];
    body.push([240,50]);
    body.push([250,50]);
    body.push([260,50]);
    const head = [230,50];
    //x=[0,290] e y=[0,140]
    return {head:head,
            body:body, 
            direction:'left', 
            lastDirection:null,
            date: new Date(), 
            pause:true, 
            keepAlive:true, 
            timeIntervals:0,
            mouseCount:0,
            mouse:[Math.floor(Math.random() * 15)*10,Math.floor(Math.random() * 14)*10]
            };
  }
  constructor(props){
    super(props);
    this.state=this.initialState();
  }

  restart(){
    this.setState(this.initialState());
    document.getElementById('controllInput').focus();
  }

  isGameOver(newHead){
    if(newHead[0] === -10 || newHead[1] === -10 || newHead[0] === 300 || newHead[1] === 150){
      this.setState({pause:true});
      return true;
    }
    for(let i=0; i<this.state.body.length; i++){
      if(newHead[0] === this.state.body[i][0] && newHead[1] === this.state.body[i][1]){
        return true;
      }
    }
    return false;
  }

  moveSnake (){
    if(!this.state.pause){
      const newHead = [];
      const newBody=[];

      switch(this.state.direction){
        case 'left': newHead.push(this.state.head[0]-10 , this.state.head[1]);
                  break;
        case 'down': newHead.push(this.state.head[0] , this.state.head[1]+10); 
                  break;
        case 'right': newHead.push(this.state.head[0]+10 , this.state.head[1]);
                  break;
        case 'up': newHead.push(this.state.head[0] , this.state.head[1]-10);
                  break;
        default:  newHead.push(this.state.head[0] , this.state.head[1]);
                  break;
      }
      if (this.isGameOver(newHead)){
        this.setState({keepAlive:false, pause:true});
      }else{
        newBody.push(this.state.head);
        for(let i=0; i<this.state.body.length-1; i++){
          newBody.push(this.state.body[i]);
        }
        this.setState({head: newHead, body:newBody});
      }
      if(this.state.head[0] === this.state.mouse[0] && this.state.head[1] === this.state.mouse[1]){
        const newSnake= this.state.body;
        newSnake.push([this.state.mouse[0],this.state.mouse[1]]);
        var newMouse= [Math.floor(Math.random() * 15)*10,Math.floor(Math.random() * 14)*10];
        do{
          var valido=true;
          newMouse= [Math.floor(Math.random() * 15)*10,Math.floor(Math.random() * 14)*10];
          for(let i=0; i<this.state.body.length; i++){
            if(this.state.body[i][0] === newMouse[0] && this.state.body[i][1] === newMouse[1]){
              valido=false;
            }
          }
        }while(!valido);
        this.setState({body:newSnake, mouse:newMouse, mouseCount:this.state.mouseCount+1});
      }  
      this.setState({lastDirection:this.state.direction});
    }
  }
  renderGame(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    //Snake
    //Primero el Body
    for(let i=0; i<this.state.body.length; i++){
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.state.body[i][0], this.state.body[i][1], 10, 10);
        ctx.fillStyle = "#006400";
        ctx.fillRect(this.state.body[i][0]+1, this.state.body[i][1]+1, 8, 8);
        ctx.fillStyle = "#228B22";
        ctx.fillRect(this.state.body[i][0]+2, this.state.body[i][1]+2, 6, 6);
        ctx.fillStyle = "#006400";
        ctx.fillRect(this.state.body[i][0]+3, this.state.body[i][1]+3, 4, 4);
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.state.body[i][0]+4, this.state.body[i][1]+4, 2, 2);

      }   
    //Despues el Head
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.state.head[0], this.state.head[1], 10, 10);
    ctx.fillStyle = "#006400";
    ctx.fillRect(this.state.head[0]+1, this.state.head[1]+1, 8, 8);

    //Mouse
    ctx.fillStyle = "#FF0400";
    ctx.beginPath();
    ctx.arc(this.state.mouse[0]+5, this.state.mouse[1]+5 , 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
  tick() {
    const level = Math.floor(this.state.mouseCount/15)+1;
    this.setState({
      date: new Date(),
      timeIntervals: this.state.timeIntervals+level,
    });
    
    if( this.state.timeIntervals > 60 ){
      this.moveSnake();
      this.setState({timeIntervals:0});
    }
    //Borro el momento anterior del canvas
    document.getElementById("myCanvas").getContext("2d").clearRect(0, 0, 600, 600);     
    this.renderGame();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      5
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  handleKey(key){
    if(this.state.keepAlive){
      this.setState({pause:false});
    }
    switch(key){
      //IZQUIERDA
      case 'a':
      case 'ArrowLeft': if(! (this.state.lastDirection === 'right')){
                this.setState({direction:'left'});
                }
      break;
      //ABAJO
      case 's':
      case 'ArrowDown': if(! (this.state.lastDirection === 'up')){
                this.setState({direction:'down'});
                }
      break;
      //DERECHA
      case 'd':
      case 'ArrowRight': if(! (this.state.lastDirection === 'left')){
                this.setState({direction:'right'});
                }
      break;
      //ARRIBA
      case 'w':
      case 'ArrowUp': if(! (this.state.lastDirection === 'down')){
                this.setState({direction:'up'});
                }
      break;
      default: console.log('nada');
        break;
    }
  }

  render(props){
    const buttonRestart= <Button variant="danger" style={{height:'10vh', width:'25vw'}} onClick={()=>this.restart()}>Restart</Button>;
    const h1InfoStyle={fontSize:'2vw', textAlign:'left'};
    return(
       <Container className="contenedor">
        <Row>
          <Col sm={12} md={12}>
            <Button variant="danger" style={{float:'right'}} onClick={()=>this.props.onClose()}>x</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={8} md={8} className="gameArea">
              <canvas id="myCanvas" className="canvasSnake">
                Su navegador no soporta canvas =(  
              </canvas>
              <input id="controllInput" className="inputOculto" onKeyDown={(e)=>this.handleKey(e.key)} spellcheck="false" autofocus="true" readonly="true"/>
              {(!this.state.keepAlive) ?<div className="gameOver">Game Over<br/>SCORE: {this.state.mouseCount}<br/>{buttonRestart}</div> : '' }
            
          </Col>
          <Col sm={4} md={4}>
            <h1 style={h1InfoStyle}>NIVEL: {Math.floor(this.state.mouseCount/15)+1}</h1>
            <h1 style={h1InfoStyle}>SCORE: {this.state.mouseCount}</h1>
          </Col>
        </Row>
     </Container>
      
    );
  }
}

  export default SnakeGame;