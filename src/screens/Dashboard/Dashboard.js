import React from 'react';
import './Dashboard.css';
import {Dropdown}  from 'react-bootstrap';
import {DropdownButton}  from 'react-bootstrap';

const leagues_data = [{id:"789", name:"ביתר ירושלים"},{id:"235",name:"הפועל תא"},{id:"134",name:"מכבי חיפה"}]
const games_data = [
    {id: "1234",team1name: "מכבי חיפה", team2name: "ביתר ירושלים", round: "5" ,field_Name:"טדי" , date:"25/5/2000", time: "4:00"},
    {id: "456", team1name: "מכבי ראשלצ", team2name: "ביתר ירוחם", round: "3" ,field_Name:"יד אליהו" , date:"24/5/2000", time: "2:00"}
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
        this.setState ({games : this.get_leagues()})
    }

    get_leagues() {
        return leagues_data;
    }

    get_games() {
        return 
    }

    

    render(){
        return(
            <div className= "">
                <h2>פאנל הזנת תוצאות</h2>
                <DropdownButton size="sm" title={this.state.selected_league}>
                    {this.state.leagues.map((leag)=> {return <Dropdown.Item style={{fontSize:"0.7em", textAlign:"center"}} key={leag.id} onClick={()=>{this.handle_leag_select(leag.name)}} > {leag.name} </Dropdown.Item>})}
                </DropdownButton>
                <br/>
                <div className="d-flex align-items-center list-group " >
                    {this.state.games.map((game)=>{return (
                    <button 
                        type="button"
                        style={{width:"100%", maxWidth:"500px"}} 
                        key={game.id} 
                        className="list-group-item list-group-item-action">
                        <h2>{game.id}</h2>
                        </button>
                    )})}
                </div>
            </div>
            
        )
        
    }
}

export default Dashboard;