import { connect } from 'react-redux';

import {
  fetchUser,
  fetchUserRepos,
  fetchUserFollowers,
  fetchUserFollowings
} from '../../actions/user';

import UserDetail from '../../atomic/pages/UserDetail';

const mapStateToProps = (state) => ({
  user: {
    data: state.user.user,
    status: state.user.status,
    error: state.user.error,
  },
  repos: {
    data: state.user.repos.repos,
    status: state.user.repos.status,
    error: state.user.repos.error,
  },
  followers: {
    data: state.user.followers.followers,
    status: state.user.followers.status,
    error: state.user.followers.error,
  },
  followings: {
    data: state.user.followings.followings,
    status: state.user.followings.status,
    error: state.user.followings.error,
  },
});

export const mapDispatchToProps = (dispatch) => ({
  fetchUser: (username) => {
    dispatch(fetchUser(username));
  },
  fetchUserRepos: (username) => {
    dispatch(fetchUserRepos(username));
  },
  fetchUserFollowers: (username) => {
    dispatch(fetchUserFollowers(username));
  },
  fetchUserFollowings: (username) => {
    dispatch(fetchUserFollowings(username));
  },
});

const UserDetailContainer = connect(mapStateToProps, mapDispatchToProps)(UserDetail);

export default UserDetailContainer;
