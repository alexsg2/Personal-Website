import React from 'react';
import Description from '../Description';
import VTLogoPicture from '../../Projects/VTLogo.png';

const OldWebsite = () => {
    return (
        <Description
            projectTitle="VT Lost and Found"
            projectDescription={
                <>
                    This project was me and my group VTHacks11 Project Submission were we wanted to try out new technology!
                    <br />
                    <br />
                    Our website streamlines lost item reporting. Users submit a form, including a photo and contact info for found items.
                    <br />
                    Our AI identifies and categorizes these objects in our database. Users easily locate items in our organized sections, connecting with the uploader 
                    <br />
                    if they spot their belonging. Additionally, our AI provides names and colors for quick identification.
                    <br />
                    <br />
                    We employed React for the frontend, Flask to create our API, and python for our Google Vision AI. Flask seamlessly facilitated 
                    <br />
                    the flow of information from React to our API for the AI to identify the items. Following our AI's identification of items, we meticulously stored 
                    <br />
                    this valuable data in MongoDB Atlas. When users try to find lost items, Flask efficiently retrieves and presents this information 
                    <br />
                    from MongoDB Atlas to React, ensuring a smooth and reliable user experience.
                </>
            }
            projectImage={VTLogoPicture}
            backgroundColor="white"
            imagebackground="#8D1D41"
            buttons={[
                { label: 'DevPost', link: 'https://devpost.com/software/vt-lost-and-found' },
            ]}
            languagesUsed="Flask, MongoDB, React, GoogleVision"
        />
    )
}

export default OldWebsite