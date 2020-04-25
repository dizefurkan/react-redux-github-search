import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

const baseURL = 'https://api.github.com/users/';

const UserDetail = (props) => {
  const { username } = props.match.params;
  const [userData, setUserData] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus('pending');
    axios({
      url: baseURL + username,
      method: 'GET',
    })
      .then(result => {
        setStatus('resolved');
        setUserData(result.data);
      })
      .catch(err => {
        setStatus('rejected');
      });
  }, []);

  const showFollowers = () => {};
  const showFollowing = () => {};

  return (
    <div>
      {status === 'pending' && <Text text="Loading..." />}
      {status === 'resolved' &&
        <React.Fragment>
          <Image url={userData.avatar_url} width="100px" height="100px" />
          <Text text={userData.login} />
          <Button onClick={showFollowers} text={`${userData.followers} Followers`} />
          <Button onClick={showFollowing} text={`${userData.following} Following`} />
        </React.Fragment>
      }
    </div>
  );
};

export default UserDetail;