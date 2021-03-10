import React from 'react';
import './Team.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Teams = (props) => {
    const {strTeam,strTeamBadge,strSport,idTeam}=props.team;
    console.log(props.team)
    // const id= parseInt(idTeam);
    // console.log(typeof(id))
    const history = useHistory();
    const showDetails = idTeam => {
        const url = `team/${idTeam}`;
        history.push(url);
    }

    return (
        <div>
            <div className=" container all">
            <div class="card-body cards">
                    <img src={strTeamBadge} alt=""></img>
                    <h5>{strTeam}</h5>                    
                    <p class="card-text">Sports Type: {strSport}</p>
                    <button onClick={()=>showDetails(idTeam)} class="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
               
            
        </div>
    );
};

export default Teams;