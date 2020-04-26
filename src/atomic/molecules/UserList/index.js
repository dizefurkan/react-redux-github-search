import React from 'react';

import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Link from '../../atoms/Link';

const UserList = ({ users }) => {
  return (
    <React.Fragment>
      <Text text={`${users.length} user`} className="font-bold" />
      <ul>
        {users.map(user => (
          <li className="mb-5 hover:bg-blue-200 p-3">
            <Link to={`/detail/${user.login}`} className="flex flex-row items-center">
              <div className="w-5 mr-3"><Image url={user.avatar_url} width="30px" height="30px" rounded /></div>
              <Text text={user.login} />
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default UserList;
