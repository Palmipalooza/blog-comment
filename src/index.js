// import React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// import App from '../src/components/App.jsx';
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

// Render React Component
ReactDOM.render(<App />, document.querySelector('#root'));
