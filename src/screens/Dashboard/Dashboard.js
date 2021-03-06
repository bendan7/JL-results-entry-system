import React,  { useState } from 'react';

import './Dashboard.css';
import {Dropdown}  from 'react-bootstrap';
import {DropdownButton}  from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Form,Row,Col} from 'react-bootstrap';

const leagues_data = [{id:"789", name:"נוער דרום א"},{id:"235",name:"נערים מרכז ב"},{id:"134",name:"נערים צפון ג"}]
const games_data = [
    {id: "1234",team1name: "מכבי חיפה", team2name: "ביתר ירושלים", round: "5" ,field_Name:"טדי" , date:"25/5/19", time: "8:00"},
    {id: "456", team1name: "מכבי ראשלצ", team2name: "ביתר ירוחם", round: "3" ,field_Name:"יד אליהו" , date:"24/5/19", time: "10:00"}
    ]

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            leagues: [],
            selected_league: "בחר ליגה",
            games: []
        }
        this.handle_leag_select = this.handle_leag_select.bind(this);
    }

    componentDidMount () {
        this.setState ({leagues : this.get_leagues()})   
    }

    handle_leag_select(leag_name){
        this.setState ({selected_league : leag_name})
        this.setState ({games : this.get_games()})
    }

    get_leagues() {
        return leagues_data;
    }

    get_games() {
        return games_data;
    }

    render(){
        return(
            <div className= "">
                <h2 style={{marginBottom:"25px"}}>פאנל הזנת תוצאות</h2>
                <DropdownButton size="lg" title={this.state.selected_league} style={{marginBottom:"25px"}}>
                    {this.state.leagues.map((leag)=> {return <Dropdown.Item style={{fontSize:"0.7em", textAlign:"center"}} key={leag.id} onClick={()=>{this.handle_leag_select(leag.name)}} > {leag.name} </Dropdown.Item>})}
                </DropdownButton>
                
                <div className="d-flex align-items-center list-group " >
                    {this.state.games.map((game)=>{return (

                        <GameCard 
                        key = {game.id}
                        gameid = {game.id}
                        team1name = {game.team1name} 
                        team2name = {game.team2name}
                        round = {game.round}
                        field_Name = {game.field_Name}
                        date = {game.date}
                        time = {game.time}
                        />

                    )})}
                </div>
                
            </div>
            
        )
        
    }
}


function GameCard(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button
        id = "modelgame"
        type="button"
        style={{width:"100%", maxWidth:"800px"}} 
        key={props.id} 
        className="list-group-item list-group-item-action"
        onClick= { handleShow}
        >
        <div>
            <h5>{props.team1name} - {props.team2name}</h5>
            <div className="d-flex justify-content-between" style={{fontSize:"0.7em"}}>
                <div> מחזור: {props.round} </div>
                <div>{props.date} - {props.time}</div>
                <div>{props.field_Name}</div> 
            </div>
        </div>
        </Button>
  
        <Modal show={show} onHide={handleClose} centered="true">
          <Modal.Header >
            <Modal.Title  style={{width:'100%', textAlign:'center'}}>{props.team1name} - {props.team2name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Row>
                    <Col>
                    <Form.Control placeholder={props.team2name} />
                    </Col>
                    <Col>
                    <Form.Control placeholder={props.team1name} />
                    </Col>
                </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              בטל
            </Button>
            <Button variant="primary" onClick={handleClose}>
              שמור
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  




export default Dashboard;