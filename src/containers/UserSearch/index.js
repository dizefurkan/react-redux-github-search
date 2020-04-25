import { connect } from 'react-redux';

import UserSearch from '../../atomic/organisms/UserSearch';

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, null)(UserSearch);
