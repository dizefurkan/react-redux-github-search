import { connect } from 'react-redux';

import UserDetail from '../../atomic/pages/UserDetail';

const mapStateToProps = (state) => ({
  user: state.user.user,
  pending: state.user.pending,
  error: state.user.error,
});

export default connect(mapStateToProps, null)(UserDetail);
