import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContentWrapper } from 'src/components/Common';
import UserListContainer from 'src/containers/UserCreatorList';
import { fetchResources } from 'src/useCase/userCreatorList';
import appActions from 'src/stores/ui/app';
import useQueryUrl from 'src/utils/hooks/useQueryUrl';
import { PER } from 'src/constants/app';
import { t } from 'src/libs/I18nService';

const UserCreatorList: React.FC = () => {
  const dispatch = useDispatch();
  const query = useQueryUrl();
  const { page, per } = query;

  useEffect(() => {
    dispatch(appActions.updateLoading(true));
    dispatch(appActions.updateLoading(false));
  }, []);

  useEffect(() => {
    dispatch(
      fetchResources({
        ...query,
        page: page ? Number(page) : 1,
        per: per ? Number(per) : PER.user_creator_list,
      }),
    );
  }, [query]);

  return (
    <ContentWrapper title={t('title.user_list')}>
      <UserListContainer />
    </ContentWrapper>
  );
};

export default UserCreatorList;
