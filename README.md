# [edakik](https://www.linkedin.com/company/edakik) front end task

Hey, this project created with [Create React App](https://create-react-app.dev/)

## Installation

Use the [npm](https://npmjs.com/) package manager to install.

```bash
npm install
```

## What's in the box?
- React fully used React.Hooks API
- Redux // for state management
- Axios // for request
- Tailwind CSS
- Atomic Design
- Container Pattern

## Work with Mock Data

### Why?
Because GitHub API v3 has a request limition. I create a folder inside `/src/mock`

### How to use?
```javascript
// src/reducers/search.js line:7
const initialState = {
  items: require('../mock/users.json'),
  status: '',
  error: null,
};
```

```javascript
// src/containers/UserSearch.js line:13
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (inputValue) => {
    // dispatch(searchAction(inputValue));
  }
});
```
That's it. Now you mocked the User Search data.
Make samething for other reducers.

## Contributing
Developed by [dizefurkan](https://github.com/dizefurkan)


## License
[MIT](https://choosealicense.com/licenses/mit/)