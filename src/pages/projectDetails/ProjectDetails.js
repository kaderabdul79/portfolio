import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const {id} = useParams()
    const projectDetails = [
        {
        name:"Apartment",
        id:"apartment",
        description:"Anyone can take schedule a visit to look the apartment.It'll help people to view aparment after they liked they can visit via take schedule.",
        reason:"Many Apartment's seller display apartment online but main thing they don't offer to visit the apartment whenever buyer want.To keep in mind to solve this through apartment projects buyer can visit just they need take a schedule before come to visit.",
        techStack:"I used React, Node, Express and MongoDB. Authentication was done via Firebase.All the data will stored in MongoDB Atlas. I used react context Api to centralize users all the page.",
        ImagesURL:"apartment-project.PNG",
        status:"Almost Complete / Not Responsive / Deployed",
        url:"https://apartment-c3fc1.web.app/"
        },
        {
        name:"Charitox",
        id:"charitox",
        description:"To make easy to donate fundriser.People are use facebook but they need to convert currency bd to usd.Through this website directly you can donate.",
        reason:"In Bangladesh usually we didn't see fundraising website where people can get help through fundriser.But some of people do this through facebook.To donate bd currency needs to convert dollar.For this reason, I have been done this to make easy to donate.",
        techStack:"To build this application, I used React, Node, Express and MongoDB. Authentication was done via Firebase and the user data was stored in a user document in MongoDB Atlas.",
        ImagesURL:"charitox-project.PNG",
        status:"Almost Complete / Not Responsive / Deployed",
        url:"https://charitox-fa919.web.app/"
        }
        ]
    return (
        <div className='details-container'>
            {
                projectDetails.map(project => (
                    <div key={project.name}>
                    {project.id === id ? <div>
                        <div className="ProjectDetails_heading">{project.name}</div>
                        <div className="ProjectDetails_description">{project.description}</div>
                        <div className="ProjectDetails_sub-header">Reason Behind It</div>
                        <div className="ProjectDetails_description">{project.reason}</div>
                        <div className="ProjectDetails_sub-header">Technology Stacks</div>
                        <div className="ProjectDetails_description">{project.techStack}</div>
                        <div className="ProjectDetails_sub-header">Status</div>
                        <div className="ProjectDetails_description">{project.status}</div>
                        <Link to="/" className='go-back'>go back</Link>

                    </div> : ''}
                    </div>
                    )
                    
                )
            }
        </div>
    );
};

export default ProjectDetails;