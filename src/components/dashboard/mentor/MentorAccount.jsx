import React from 'react';
import PwdUpdate from '../PwdUpdate';

const MentorAccount = ({tab}) => {
    return (
        <PwdUpdate tab={tab} userType={'mentor'} />
    );
}

export default MentorAccount;
