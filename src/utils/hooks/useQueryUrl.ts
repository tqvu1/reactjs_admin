import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const useQueryUrl = () => {
  const location = useLocation();

  const query = qs.parse(location.search, {
    parseBooleans: true,
    // parseNumbers: true,
    arrayFormat: 'bracket-separator',
    arrayFormatSeparator: '|',
  });

  return query as Record<string, any>;
};

export default useQueryUrl;
