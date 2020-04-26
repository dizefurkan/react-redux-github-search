import { connect } from 'react-redux';

import { search as searchAction } from '../../actions/search';

import UserSearch from '../../atomic/organisms/UserSearch';

const mapStateToProps = (state) => ({
  data: state.search.items,
  status: state.search.status,
  error: state.search.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (inputValue) => {
    dispatch(searchAction(inputValue));
  }
})

const UserSearchContainer = connect(mapStateToProps, mapDispatchToProps)(UserSearch);

export default UserSearchContainer;
