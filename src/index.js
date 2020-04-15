// import React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="today at 4:45PM"
          body="I'm a Fan!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="today at 2:00AM"
          body="It's pretty good"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="yesterday at 5:00PM"
          body="You make good points"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Render React Component
ReactDOM.render(<App />, document.querySelector('#root'));
