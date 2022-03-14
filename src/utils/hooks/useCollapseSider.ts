import { useAppDispatch, useAppSelector } from 'src/stores';
import uiActions from 'src/stores/ui/app';
import { useCallback } from 'react';

const useCollapseSider = () => {
  const collapsed = useAppSelector((state) => state.ui.app.collapsed);
  const dispatch = useAppDispatch();

  const toggle = useCallback(() => {
    dispatch(uiActions.updateCollapsed(!collapsed));
  }, [collapsed]);

  return [collapsed, toggle] as const;
};

export default useCollapseSider;
