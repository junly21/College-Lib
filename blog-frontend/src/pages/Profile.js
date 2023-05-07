import React from 'react';
import { useParams } from 'react-router-dom';

const profileData = {
  tester: {
    name: '아무개',
    description: '아무렇게나 사는 아무개',
  },
};
function Profile({ match }) {
  const { username } = useParams();
  const profile = profileData[username];

  if (!profile) {
    return <div>없는 사람인데?</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
