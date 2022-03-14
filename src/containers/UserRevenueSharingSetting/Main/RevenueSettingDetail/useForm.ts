import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

// import { Dispatch } from 'src/stores';
import { t } from 'src/libs/I18nService';
import { RevenueSharingSetting } from 'src/stores/domain/user/userRevenueSharing/setting';
// import { saveRevenueSharingSetting } from 'src/useCase/userRevenueSharingSetting';

export type Value = {
  id: number;
  platform_percent: number;
  creator_percent: number;
};

const useForm = (entity: RevenueSharingSetting | null) => {
  // const dispatch = useDispatch<Dispatch>();
  const initialValues: Value[] | undefined = entity?.series_list || [];

  const validationSchema = Yup.object().shape({
    other: Yup.number()
      .min(
        1,
        t('validated.number_lte', { name: t('other.direct_input'), value: 0 }),
      )
      .typeError(t('message.input_number_require')),
  });

  const formik = useFormik<Value[]>({
    initialValues,
    validationSchema,
    async onSubmit(values, meta) {
      // await dispatch(
      //   saveRevenueSharingSetting({
      //     meta,
      //     id: entity?.id!,
      //     ..._.omit(values, 'other'),
      //   }),
      // );
    },
    enableReinitialize: true,
  });

  return { formik };
};

export default useForm;
