import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import Modal from '../../atoms/Modal';

const baseURL = 'https://api.github.com/users/';

const UserDetail = (props) => {
  const { username } = props.match.params;
  console.log(username)

  const [userData, setUserData] = useState({});
  const [userFollowers, setUserFollowers] = useState([]);
  const [userFollowings, setUserFollowings] = useState([]);

  const [isUserFollowersModalVisible, setUserFollowersModalVisibility] = useState(false);
  const [isUserFollowingsModalVisible, setUserFollowingsModalVisible] = useState(false);

  const [userDataStatus, setUserDataStatus] = useState('');

  useEffect(() => {
    setUserDataStatus('pending');
    axios({
      url: baseURL + username,
      method: 'GET',
      headers:{
      }
    })
      .then(result => {
        setUserDataStatus('resolved');
        setUserData(result.data);
      })
      .catch(err => {
        setUserDataStatus('rejected');
      });
  }, []);

  const changeFollowersModalVisibility = () => {
    setUserFollowersModalVisibility(!isUserFollowersModalVisible);
    if (!userFollowers.length) {
      axios({
        url: userData.followers_url,
        method: 'GET'
      })
        .then(result => {
          setUserFollowers(result.data);
        })
    }
  };
  const changeFollowingsModalVisibility = () => {
    setUserFollowingsModalVisible(!isUserFollowingsModalVisible);
    if (!userFollowers.length) {
      axios({
        url: userData.following_url,
        method: 'GET'
      })
        .then(result => {
          setUserFollowings(result.data);
        })
    }
  };

  return (
    <div>
      {userDataStatus === 'pending' && <Text text="Loading..." />}
      {userDataStatus === 'resolved' &&
        <React.Fragment>
          <Image url={userData.avatar_url} width="100px" height="100px" />
          <Text text={userData.login} />
          <Button onClick={changeFollowersModalVisibility} text={`${userData.followers} Followers`} />
          <Button onClick={changeFollowingsModalVisibility} text={`${userData.following} Following`} />
        </React.Fragment>
      }
      {userDataStatus === 'rejected' && <Text text="Ups, something wrong with fetch user data" />}
      {isUserFollowersModalVisible &&
        <Modal closeModal={changeFollowersModalVisibility}>
          <div>{userFollowers.length}</div>
          <ul className="mt-3">
            {userFollowers.map(item => (
              <li>
                <Link to={`/detail/${item.login}`}>
                  <Image url={item.avatar_url} width="30px" height="30px" rounded />
                  <Text text={item.login} />
                </Link>
              </li>
            ))}
          </ul>
        </Modal>
      }
      {isUserFollowingsModalVisible &&
        <Modal closeModal={changeFollowingsModalVisibility}>
          <div>{userFollowings.length}</div>
          <ul className="mt-3">
            {userFollowings.map(item => (
              <li>
                <Link to={`/detail/${item.login}`} replace={true}>
                  <Image url={item.avatar_url} width="30px" height="30px" rounded />
                  <Text text={item.login} />
                </Link>
              </li>
            ))}
          </ul>
        </Modal>
      }
    </div>
  );
};

export default UserDetail;