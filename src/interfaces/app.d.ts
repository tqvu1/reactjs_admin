declare namespace App {
  import { OptionCoreData } from 'rc-select/lib/interface';
  import { TFunction } from 'i18next';
  import { ColumnsType } from 'antd/es/table';

  export type ColumnsFnc<T> = (t: TFunction) => ColumnsType<T>;

  export type OptionsFnc = (
    t: TFunction,
  ) => (OptionCoreData & { [prop: string]: any })[];
}
