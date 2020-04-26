import React, { useState, useEffect } from 'react';

import UserCard from '../../molecules/UserCard';
import Repos from '../../molecules/Repos';
import UserList from '../../molecules/UserList';

import Button from '../../atoms/Button';
import Modal from '../../atoms/Modal';
import Text from '../../atoms/Text';

const UserDetail = (props) => {
  const { username } = props.match.params;
  const {
    user,
    repos,
    followers,
    following,
    fetchUser,
    fetchUserRepos,
    fetchUserFollowers,
    fetchUserFollowing,
  } = props;

  const [isUserFollowersModalVisible, setUserFollowersModalVisibility] = useState(false);
  const [isUserFollowingModalVisible, setUserFollowingModalVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    fetchUser(username);
    fetchUserRepos(username);
    fetchUserFollowers(username);
    fetchUserFollowing(username);
  }, [username]);

  const changeFollowersModalVisibility = () => {
    setUserFollowersModalVisibility(!isUserFollowersModalVisible);
    if (isUserFollowingModalVisible) {
      setUserFollowingModalVisible(false);
    }
  };
  const changeFollowingModalVisibility = () => {
    setUserFollowingModalVisible(!isUserFollowingModalVisible);
    if (isUserFollowersModalVisible) {
      setUserFollowersModalVisibility(false);
    }
  };

  return (
    <div>
      {user.status === 'pending' && <Text text="Loading..." />}
      {user.status === 'resolved' &&
        <React.Fragment>
          <UserCard user={user} />
          <div className="mb-10 space-x-3">
            <Button onClick={changeFollowersModalVisibility} text={`${user.data.followers} Followers`} />
            <Button onClick={changeFollowingModalVisibility} text={`${user.data.following} Following`} />
          </div>
          <Repos repos={repos} />
        </React.Fragment>
      }
      {user.status === 'rejected' && <Text text="Ups, something wrong with fetch user data" />}
      {isUserFollowersModalVisible &&
        <Modal closeModal={changeFollowersModalVisibility}>
          <UserList users={followers.data} />
        </Modal>
      }
      {isUserFollowingModalVisible &&
        <Modal closeModal={changeFollowingModalVisibility}>
          <UserList users={following.data} />
        </Modal>
      }
    </div>
  );
};

export default UserDetail;