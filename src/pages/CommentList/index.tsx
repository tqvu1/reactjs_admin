import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContentWrapper } from 'src/components/Common';
import CommentListContainerr from 'src/containers/CommentList';
import appActions from 'src/stores/ui/app';
import { t } from 'src/libs/I18nService';

const CommentList: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.updateLoading(true));
    dispatch(appActions.updateLoading(false));
  }, []);

  return (
    <ContentWrapper title={t('title.user_list')}>
      <CommentListContainerr />
    </ContentWrapper>
  );
};

export default CommentList;
