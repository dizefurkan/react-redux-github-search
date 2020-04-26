import React, { useState, useEffect } from 'react';

import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import Modal from '../../atoms/Modal';

const UserDetail = (props) => {
  const { username } = props.match.params;
  const {
    user,
    repos,
    followers,
    followings,
    fetchUser,
    fetchUserRepos,
    fetchUserFollowers,
    fetchUserFollowings,
  } = props;

  const [isUserFollowersModalVisible, setUserFollowersModalVisibility] = useState(false);
  const [isUserFollowingsModalVisible, setUserFollowingsModalVisible] = useState(false);

  useEffect(() => {
    fetchUser(username);
    fetchUserRepos(username);
    fetchUserFollowers(username);
    fetchUserFollowings(username);
  }, []);

  const changeFollowersModalVisibility = () => {
    setUserFollowersModalVisibility(!isUserFollowersModalVisible);
  };
  const changeFollowingsModalVisibility = () => {
    setUserFollowingsModalVisible(!isUserFollowingsModalVisible);
  };

  return (
    <div>
      {user.status === 'pending' && <Text text="Loading..." />}
      {user.status === 'resolved' &&
        <React.Fragment>
          <Image url={user.avatar_url} width="100px" height="100px" />
          <Text text={user.login} />
          <Button onClick={changeFollowersModalVisibility} text={`${user.followers} Followers`} />
          <Button onClick={changeFollowingsModalVisibility} text={`${user.following} Following`} />
        </React.Fragment>
      }
      {user.status === 'rejected' && <Text text="Ups, something wrong with fetch user data" />}
      {isUserFollowersModalVisible &&
        <Modal closeModal={changeFollowersModalVisibility}>
          <div>{followers.data.length}</div>
          <ul className="mt-3">
            {followers.data.map(follower => (
              <li>
                <Link to={`/detail/${follower.login}`}>
                  <Image url={follower.avatar_url} width="30px" height="30px" rounded />
                  <Text text={follower.login} />
                </Link>
              </li>
            ))}
          </ul>
        </Modal>
      }
      {isUserFollowingsModalVisible &&
        <Modal closeModal={changeFollowingsModalVisibility}>
          <div>{followings.data.length}</div>
          <ul className="mt-3">
            {followings.data.map(following => (
              <li>
                <Link to={`/detail/${following.login}`}>
                  <Image url={following.avatar_url} width="30px" height="30px" rounded />
                  <Text text={following.login} />
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