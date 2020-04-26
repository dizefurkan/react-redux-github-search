import React from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';

const getFullDate = createdAt => {
  const createdDate = new Date(createdAt);
  const date = createdDate.getDate();
  const month = createdDate.getMonth() < 10 ? `0${createdDate.getMonth()}` : createdDate.getMonth();
  const year = createdDate.getFullYear();

  return `${date}/${month}/${year}`;
};

const UserCard = ({ user }) => {
  const createdDate = getFullDate(user.data.created_at);
  return (
    <div class="md:flex mb-5">
      <div class="md:flex-shrink-0">
        <Image url={user.data.avatar_url} width="100px" height="100px" rounded />
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <Text text={user.data.name} className="uppercase tracking-wide text-sm text-indigo-600 font-bold" />
        <Text text={user.data.login} />
        <Text text={user.data.company} />
        <Text text={user.data.bio} />
        <Text text={user.data.blog} />
        <Text text={user.data.location} />
        <Text text={createdDate} />
      </div>
    </div>
  );
};

export default UserCard;
