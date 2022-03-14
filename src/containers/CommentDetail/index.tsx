import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from 'src/stores';

import Main from './Main';

const CommentDetailContainer: React.FC = () => {
  // const commentProps = useSelector(
  //   (state: RootState) => state.domain.comment.detail,
  // );

  const commentProps = {
    loading: false,
    commentEntity: {
      id: 1,
      nickname: 'Adam',
      user_id: '1',
      series_title: 'A voice',
      creator: 'Kim Huyn',
      episode: 'Eps 1. Start story',
      comment_content:
        'Good. Nice images. Content is very fancy, exciting. Wait to next chapter. 5******* There are some ideas that abc, may be help to you. ',
      number_of_times_reported: 1,
      like: 0,
      dislike: 1,
      comment_date: '2021-09-30 16:08:58',
    },
  };

  return <Main {...commentProps} />;
};

export default CommentDetailContainer;
