import React from 'react';
import PersonalDetails from '../PersonalDetails';

const MentorDetails = ({tab}) => {
    return (
        <PersonalDetails tab={tab} userType={"mentor"} />
    );
}

export default MentorDetails;
