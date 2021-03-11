import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import ball from '../../Icon/football (1) 1.png';
import built from '../../Icon/found 1.png';
import flag from '../../Icon/flag (1) 1.png';
import gender from '../../Icon/male-gender-sign 1.png';
import maleTeam from '../../Photo/male.png';
import femaleTeam from '../../Photo/female.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const TeamDetails = () => {
    const [teamDetails, setTeamDetails] = useState({});
    const{id}= useParams();
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data =>setTeamDetails(data.teams[0]))
    },[id])

    const {strTeamBadge,strTeam,intFormedYear,strCountry,strSport,strGender,strDescriptionEN}=teamDetails;

    const topImageStyle = {
        width:'220px',
        height:'200px',
        marginTop: '35px',
    }
    return (
        <div>
            <div className="container">
                <div className="top">
                    <img src={strTeamBadge} alt="" style={topImageStyle}/>
                </div>
                <div className="container second-part">
                    <div className="row d-flex  flex-column flex-md-row align-items-center justify-content-center pt-5 info">
                        <div className="col-md-5 col-sm-12 ps-2 pb-sm-5 information">
                            <h2 className="pb-2">{strTeam}</h2>
                            <h6 className="fs-6 pb-3"> <img src={built} alt=""/>&nbsp; &nbsp;Founded: November 29,{intFormedYear} </h6>
                            <h6 className="fs-6 pb-3"> <img src={flag} alt=""/>&nbsp; &nbsp;Country: {strCountry} </h6>
                            <h6 className="fs-6 pb-3"> <img src={ball} alt=""/>&nbsp; &nbsp;Sports Type: {strSport} </h6>
                            <h6 className="fs-6 pb-3"> <img src={gender} alt=""/>&nbsp; &nbsp;Gender: {strGender} </h6>
                        </div>
                    <div className="col-md-7 col-sm-12 pb-sm-5 team-player">
                    {
                        strGender ==="Male" ? <img className="gender-image" src={maleTeam} alt="" /> :
                        <img className="gender-image" src={femaleTeam} alt=""/>   
                    }
                    </div>
                </div>
                <div className="row d-flex  flex-column-reverse flex-md-row align-items-center justify-content-center pt-5 description">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="row d-flex  flex-column-reverse flex-md-row align-items-center justify-content-center pt-5 description">
                    <p>{strDescriptionEN}</p>
                </div>
                <div class="container icons">
                    <div class="container row">
                        <div class="col icons">
                        <a href={`https://${teamDetails.strTwitter}`}  target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faTwitter} /></a>
                        <a href={`https://${teamDetails.strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href={`https://${teamDetails.strYoutube}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}  /> </a>
                        <a href={`https://${teamDetails.strInstagram}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}  /> </a>
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