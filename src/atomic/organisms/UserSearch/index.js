import React from 'react';
import axios from 'axios';

import { search as searchAction } from '../../../actions/search';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Link from '../../atoms/Link';

import { debounce } from '../../../utils';

const baseURL = 'https://api.github.com/search/users?q=';
const UserSearch = ({ dispatch, search}) => {
  const [inputValue, setInputValue] = React.useState('');
  const onInputChange = value => setInputValue(value);
  const fetchUsers = () => {
    dispatch(searchAction(inputValue));
  }
  const isDataExist = !!search.items.length;
  const { pending } = search;

  React.useEffect(() => {
    fetchUsers();
  }, [inputValue]);

  return (
    <div>
      <Text type="title" text="Hey, let's find some GitHub User ha?" />
      <Input onChange={onInputChange} />
      {pending && <Text text="Loading..." />}
      {isDataExist && !pending &&
        <React.Fragment>
          <ul className="mt-3">
            <Text text={`${search.items.length} user found`} className="mb-3 text-gray-500" />
            {search.items.map(item => (
              <li className="mb-4">
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