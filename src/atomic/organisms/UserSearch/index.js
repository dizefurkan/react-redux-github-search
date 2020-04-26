import React from 'react';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Link from '../../atoms/Link';

import { debounce } from '../../../utils';

const UserSearch = ({ data, status, error, fetchUsers }) => {
  const [inputValue, setInputValue] = React.useState('');
  const onInputChange = value => setInputValue(value);

  React.useEffect(() => {
    fetchUsers(inputValue);
  }, [inputValue]);

  return (
    <div>
      <Text type="title" text="Hey, let's find some GitHub User ha?" />
      <Input onChange={onInputChange} />
      {status === 'pending' && <Text text="Loading..." />}
      {status === 'resolved' &&
        <React.Fragment>
          <ul className="mt-3">
            <Text text={`${data.length} user found`} className="mb-3 text-gray-500" />
            {data.map(item => (
              <li className="mb-4 p-4 hover:bg-blue-200">
                <Link to={`/detail/${item.login}`} className="flex flex-row space-x-4 items-center">
                  <Image url={item.avatar_url} width="50px" height="50px" rounded />
                  <Text text={item.login} />
                </Link>
              </li>
            ))}
          </ul>
        </React.Fragment>
      }
    </div>
  )
}

export default UserSearch;