import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import Modal from '../../atoms/Modal';

import { fetchUser } from '../../../actions/user';

const UserDetail = (props) => {
  const { username } = props.match.params;
  const { user, pending, dispatch, error } = props;

  const [userFollowers, setUserFollowers] = useState([]);
  const [userFollowings, setUserFollowings] = useState([]);

  const [isUserFollowersModalVisible, setUserFollowersModalVisibility] = useState(false);
  const [isUserFollowingsModalVisible, setUserFollowingsModalVisible] = useState(false);

  const [userDataStatus, setUserDataStatus] = useState('');

  useEffect(() => {
    dispatch(fetchUser(username));
  }, []);

  const changeFollowersModalVisibility = () => {
    setUserFollowersModalVisibility(!isUserFollowersModalVisible);
    if (!userFollowers.length) {
      axios({
        url: user.followers_url,
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
        url: user.following_url,
        method: 'GET'
      })
        .then(result => {
          setUserFollowings(result.data);
        })
    }
  };

  return (
    <div>
      {pending && <Text text="Loading..." />}
      {!pending &&
        <React.Fragment>
          <Image url={user.avatar_url} width="100px" height="100px" />
          <Text text={user.login} />
          <Button onClick={changeFollowersModalVisibility} text={`${user.followers} Followers`} />
          <Button onClick={changeFollowingsModalVisibility} text={`${user.following} Following`} />
        </React.Fragment>
      }
      {!pending && error && <Text text="Ups, something wrong with fetch user data" />}
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