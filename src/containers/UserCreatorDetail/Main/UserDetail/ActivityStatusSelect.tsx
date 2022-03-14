import React from 'react';
import { FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';

import { SelectField } from 'src/components/Form';
import { USER_ACTIVITY_STATUS } from 'src/constants/optionsSelect/userCreatorDetail';
import { Value } from './useForm';
import ActivitiesStatus from 'src/components/Common/ActivitiesStatus';

type Props = {
  formik: FormikProps<Value>;
};

const ActivityStatusSelect: React.FC<Props> = ({ formik }) => {
  const { t } = useTranslation();
  const { getFieldProps, setFieldValue } = formik;
  const options = USER_ACTIVITY_STATUS(t).map((opt) => ({
    ...opt,
    label: <ActivitiesStatus is_blocked={opt.value} />,
  }));

  return (
    <SelectField
      field={getFieldProps('block')}
      optionsSelect={options}
      setFieldValue={setFieldValue}
      selectProps={{
        optionLabelProp: 'label',
      }}
    />
  );
};

export default ActivityStatusSelect;
