import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import topBanner from '../../Photo/top.jpg';
import './Home.css'
import Teams from '../Teams/Teams';

const Home = () => {
    const [teams,setTeams] = useState([]);
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
    },[])
    
    return (
       
        <div className="container">
            <div className="top align-items-center justify-content-center  pt-5">
               <h1>Primer League</h1>
              
            </div>
            <div className="row-gx-5 teams-area">
                {
                teams.map(team =><Teams team={team}></Teams>)
                }
            </div>
        </div>
    );
};

export default Home;