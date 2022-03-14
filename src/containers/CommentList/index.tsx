import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from 'src/stores';

import Main from './Main';

const CommentListContainerr: React.FC = () => {
  // const commentProps = useSelector(
  //   (state: RootState) => state.domain.comment.list,
  // );
  const commentProps = {
    loading: false,
    entities: [
      {
        id: 1,
        nickname: 'Adam',
        user_id: '1',
        series_title: 'A voice',
        creator: 'Lee Huyn',
        episode: 'Eps 1. Start story',
        comment_content: 'comment',
        number_of_times_reported: 1,
        like: 1,
        dislike: 1,
        comment_date: '1',
      },
      {
        id: 2,
        nickname: 'Adam',
        user_id: '1',
        series_title: 'A voice',
        creator: 'Kim Hook',
        episode: 'Eps 1. Start story',
        comment_content: 'comment',
        number_of_times_reported: 1,
        like: 1,
        dislike: 1,
        comment_date: '1',
      },
    ],
  };

  return <Main {...commentProps} />;
};

export default CommentListContainerr;
