import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
// import _ from 'lodash';
import * as Yup from 'yup';

import { UserCreatorEntity } from 'src/stores/domain/user/userCreator/detail';
// import { saveUser } from 'src/useCase/userCreatorDetail';
// import { Dispatch } from 'src/stores';
import { t } from 'src/libs/I18nService';

export type Value = {
  battery_level?: number;
  block?: number;
  block_chatting_expired?: string | number;
  other?: number;
};

const useForm = (entity: UserCreatorEntity | null) => {
  // const dispatch = useDispatch<Dispatch>();
  const initialValues: Value = {
    block: entity?.is_block,
  };

  const validationSchema = Yup.object().shape({
    other: Yup.number()
      .min(
        1,
        t('validated.number_lte', { name: t('other.direct_input'), value: 0 }),
      )
      .typeError(t('message.input_number_require')),
  });

  const formik = useFormik<Value>({
    initialValues,
    validationSchema,
    async onSubmit(values, meta) {
      // await dispatch();
      // saveUser({
      //   meta,
      //   id: entity?.id!,
      //   ..._.omit(values, 'other'),
      // }),
    },
    enableReinitialize: true,
  });

  return { formik };
};

export default useForm;
