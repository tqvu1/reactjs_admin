import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';

import { TabsWrapper } from 'src/components/Common';
import CommenDetailContainer from 'src/containers/CommentDetail';
// import appActions from 'src/stores/ui/app';

const CommentDetail: React.FC = () => {
  // const dispatch = useDispatch();
  // const { id } = useParams<{ id?: string }>();

  // React.useEffect(() => {
  //   dispatch(appActions.updateLoading(true));
  // }, []);

  // React.useEffect(() => {
  //   dispatch(fetchResources(id!));
  // }, []);

  return (
    <TabsWrapper>
      <CommenDetailContainer />
    </TabsWrapper>
  );
};

export default CommentDetail;
