import React from 'react';
import '../../../css/tictactoe.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Square(props){
    return (
      <button 
        className={(props.winner ? (props.winner==='draw' ? "square draw" : "square winner"): (props.last ? "squareBold" : "square"))}
        onClick={props.onClick}
      >
        {props.value}
      </button>
    );
}

class Board extends React.Component {
      constructor(props){
        super(props);
        this.state={
          last:props.last
        };
      }

      renderSquare(i) {
        var isWinner=null;
        if (calculateWinner(this.props.squares) ){
          isWinner=( (calculateWinner(this.props.squares).indexOf(i) !== -1) ? true : false) ;
          if(calculateWinner(this.props.squares)==='draw'){
            isWinner='draw';
          }
        }
        
        return(
          <Square
            winner= {(isWinner)}
            last = {(this.props.last === i ? true : false)}
            value={this.props.squares[i]}
            onClick={()=>this.props.onClick(i)}
          />
        );
      }

      render() {
        const filas=[0,1,2].slice();
        const columnas=[1,2,3].slice();
        return (
          <div>
          {filas.map( (index) => 
            <div className="board-row">
            {columnas.map( (value) => this.renderSquare(index*3+value-1) )}
            </div>
            )}
          </div>
        );
      }
}

class Game extends React.Component {
      constructor(props){
        super(props);
        this.state={
          history:[{squares:Array(9).fill(null),}],
          historyLast:[-1],
          stepNumber:0,
          xIsNext:true,
          winner:null,
        };
      }
      reset(){
        const newState={
          history:[{squares:Array(9).fill(null),}],
          historyLast:[-1],
          stepNumber:0,
          xIsNext:true,
          winner:null,
        };
        this.setState(newState);
      }
       handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const historyLast = this.state.historyLast.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares
          }]),
          historyLast: historyLast.concat(i),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
        });
      }

      jumpTo(step) {
        this.setState({
          historyLast: this.state.historyLast.slice(0, this.state.stepNumber + 1),
          stepNumber: step,
          xIsNext: (step % 2) === 0,

        });
      }

      render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        
        const moves = history.map((step, move) => {
          const desc = history[move].squares.slice().map(element => element ? element : '-');
          const showMove= <div>
                              {desc.toString()[0]} {desc.toString()[2]} {desc.toString()[4]}  <br/>  
                              {desc.toString()[6]} {desc.toString()[8]} {desc.toString()[10]}  <br/> 
                              {desc.toString()[12]} {desc.toString()[14]} {desc.toString()[16]}
                              <br/> 
                          </div>;
          return (
              <Button key={move} style={{marginLeft:'10px',backgroundColor:'CornflowerBlue'}} onClick={() => this.jumpTo(move)}>{showMove}</Button>
          );
        });

        let status;
        if (winner && winner === 'draw') {
           status = "¡Tenemos un empate!";
        }else if(winner){
          status = "¡Tenemos un ganador!\n"+ current.squares[winner[0]];
        } else {
          status = 'Turno de: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
          <Container className="contenedor" style={{marginTop:'5vh'}}>
            <Button variant="danger" style={{float:'right'}} onClick={()=>this.props.onClose()}>x</Button>
            <Row style={{width:'100%'}}>
              <Col sm={12} md={4} >
                <center style={{width:'300px'}}>
                  <Board 
                    last={this.state.historyLast[this.state.stepNumber]}
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                  />
                  <Button variant="danger" onClick={()=>this.reset()} style={{width:'100%'}}>Restart </Button>
                </center>
              </Col>
              <Col sm={12} md={8} className="game-info">
                <h1><i>{status}</i></h1>
                <h2>Volver a turnos anteriores</h2>
                <ul>{moves}</ul>
              </Col>
            </Row>
          </Container>
        );

      }
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [a, b, c];
      }
    }
    var someNull=false;
    for (let i=0; i<squares.length;i++){
      if(squares[i] == null){
        someNull=true;
      }
    }
    const draw = !someNull;

    if (draw){
      return ('draw');
    }else{
      return null;
    }
  }

  export default Game;