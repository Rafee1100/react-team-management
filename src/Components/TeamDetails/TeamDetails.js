import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import ball from '../../Icon/football (1) 1.png';
import built from '../../Icon/found 1.png';
import flag from '../../Icon/flag (1) 1.png';
import gender from '../../Icon/male-gender-sign 1.png';
import maleTeam from '../../Photo/male.png';
// import femaleTeam from '../../Photo/female.png';
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youtube from '../../Icon/YouTube.png'

const TeamDetails = () => {
    const [teamDetails, setTeamDetails] = useState({});
    const{id}= useParams();
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data =>setTeamDetails(data.teams[0]))
    },[id])

    const topImageStyle = {
        width:'220px',
        height:'200px',
        marginTop: '35px',
    }
    return (
        <div>
            <div className="container">
                <div className="top">
                    <img src={teamDetails.strTeamBadge} alt="" style={topImageStyle}/>
                </div>
                <div className="container second-part">
                    <div className="row d-flex  flex-column flex-md-row align-items-center justify-content-center pt-5 info">
                        <div className="col-md-5 col-sm-12 ps-2 pb-sm-5 information">
                            <h2 className="pb-2">{teamDetails.strTeam}</h2>
                            <h6 className="fs-6 pb-3"> <img src={built} alt=""/>&nbsp;Founded: November 29,{teamDetails.intFormedYear} </h6>
                            <h6 className="fs-6 pb-3"> <img src={flag} alt=""/>&nbsp;Country: {teamDetails.strCountry} </h6>
                            <h6 className="fs-6 pb-3"> <img src={ball} alt=""/>&nbsp;Sports Type: {teamDetails.strSport} </h6>
                            <h6 className="fs-6 pb-3"> <img src={gender} alt=""/>&nbsp;Country: {teamDetails.strGender} </h6>
                        </div>
                    <div className="col-md-7 col-sm-12 pb-sm-5 team-player">
                        <img className="heading-image" src={maleTeam} alt="image1"/>
                    </div>
                </div>
                <div className="row d-flex  flex-column-reverse flex-md-row align-items-center justify-content-center pt-5 description">
                    <p>{teamDetails.strDescriptionEN}</p>
                </div>
                <div className="row d-flex  flex-column-reverse flex-md-row align-items-center justify-content-center pt-5 description">
                    <p>{teamDetails.strDescriptionEN}</p>
                </div>
                <div class="container icons">
                    <div class="container row">
                        <div class="col"><a href={`https://${teamDetails.strTwitter}`}  target="_blank" rel="noreferrer"> <img src={twitter} alt=""/></a>
                        <a href={`https://${teamDetails.strFacebook}`} target="_blank" rel="noreferrer"> <img src={facebook} alt=""/> </a>
                        <a href={`https://${teamDetails.strYoutube}`} target="_blank" rel="noreferrer"> <img src={youtube} alt=""/> </a>
                        </div>
                        {/* <div class="col"><a href=""> <img src={facebook} alt="image"/> </a></div>
                        <div class="col"><a href=""> <img src={youtube} alt="image"/> </a></div> */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TeamDetails;