import { useFormik } from 'formik';
import { RadioChangeEvent } from 'antd';
import qs from 'query-string';
import _ from 'lodash';
import * as Yup from 'yup';

import moment from 'src/libs/moment';
import { DATE_TIME } from 'src/constants/app';
import useQueryUrl from 'src/utils/hooks/useQueryUrl';
import * as SearchParams from 'src/interfaces/searchParams';
import { t } from 'src/libs/I18nService';
import history from 'src/libs/history';

const useForm = () => {
  const query = useQueryUrl();

  const validationSchema = Yup.object().shape({
    from_date: Yup.date().nullable(true),
    to_date: Yup.date()
      .nullable(true)
      .when('from_date', (from_date, schema) => {
        if (!from_date) {
          return;
        }
        return schema.min(from_date, t('validated.from_to_date'));
      }),
  });

  const defaultValue: SearchParams.CommentList = {
    search_type: 'nickname',
    search_text: '',
    period_search: 'register_date',
    series: '',
    episode: '',
    creator: '',
    from_date: '',
    to_date: '',
    quick_period_search: '',
  };

  const formik = useFormik<SearchParams.UserCreatorList>({
    initialValues: {
      ...defaultValue,
      ...query,
    },
    validationSchema,
    onSubmit(value) {
      history.push({
        search: qs.stringify({
          ..._.omitBy(value, _.isEmpty),
          page: 1,
          per: query.per,
        }),
      });
    },
    enableReinitialize: true,
  });

  const onChangeQuickPeriod = (e: RadioChangeEvent) => {
    const value = e.target.value;
    formik.setFieldValue('quick_period_search', value);
    formik.setFieldValue('to_date', moment().format(DATE_TIME));
    const setFromDate = formik.setFieldValue.bind(null, 'from_date');

    switch (value) {
      case 'today':
        setFromDate(moment().format(DATE_TIME));
        break;
      case 'yesterday':
        setFromDate(moment().subtract(1, 'day').format(DATE_TIME));
        break;
      case 'week':
        setFromDate(moment().subtract(1, 'week').format(DATE_TIME));
        break;
      case 'month':
        setFromDate(moment().subtract(1, 'month').format(DATE_TIME));
        break;
      default:
        break;
    }
  };

  const handleClear = () => {
    formik.setValues(defaultValue);

    formik.submitForm();
  };

  return { formik, onChangeQuickPeriod, handleClear };
};

export default useForm;
