import React from 'react';

import Text from '../../atoms/Text';
import IconText from '../../molecules/IconText';

const Repos = ({ repos }) => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center mb-2">
        <Text text="Repositories" className="text-xl font-bold " />
        <Text text={repos.data.length + 1} className="ml-1 text-sm" />
      </div>
      <div className="grid-rows-2">
        {repos.data.map((repo, index) => (
          <div className="mb-5 border border-solid border-gray-500 box-border p-5">
            <Text text={repo.name} className="text-blue-500 font-bold mb-1 text-lg" />
            <Text text={repo.description} className="text-gray-700 text-sm" />
            <div className="flex flex-row space-x-3 mt-3">
              <IconText iconName="star" text={repo.stargazers_count} className="text-sm text-gray-600" />
              <IconText iconName="eye" text={repo.watchers_count} className="text-sm text-gray-600" />
              <IconText iconName="fork" text={repo.forks_count} className="text-sm text-gray-600" />
            </div>
          </div>  
        ))}
      </div>
    </React.Fragment>
  );
}

export default Repos;
