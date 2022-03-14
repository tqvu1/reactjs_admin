import history from 'src/libs/history';
import qs from 'query-string';

import useQueryUrl from 'src/utils/hooks/useQueryUrl';

const useTab = (defaultKey: string) => {
  const query = useQueryUrl();

  const onChangeTab = (tab) => {
    history.push({
      search: qs.stringify({ tab }),
    });
  };

  return {
    activeKey: query.tab || defaultKey,
    onChange: onChangeTab,
  };
};

export default useTab;
