import { useFormik } from 'formik';
// import * as Yup from 'yup';

import { CommentEntity } from 'src/stores/domain/comment/list';
// import { t } from 'src/libs/I18nService';

export type Value = {
  id?: number;
  nickname?: string;
  user_id?: string;
  series_title?: string;
  episode?: string;
  creator?: string;
  comment_content?: string;
  number_of_times_reported?: number;
  like?: number;
  dislike?: number;
  comment_date?: string;
};

const useForm = (entity: CommentEntity | null) => {
  const initialValues: Value = {
    nickname: '',
    user_id: '',
    series_title: '',
    episode: '',
    creator: '',
    comment_content: '',
    number_of_times_reported: 0,
    like: 0,
    dislike: 0,
    comment_date: '',
  };

  const formik = useFormik<Value>({
    initialValues,
    async onSubmit(values, meta) {
      console.log('---values', values);
    },
    enableReinitialize: true,
  });

  return { formik };
};

export default useForm;
