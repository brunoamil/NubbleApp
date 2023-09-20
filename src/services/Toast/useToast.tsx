import {ToastService} from './types';
// import {useToastContext} from './useToastContext';
import {useToastServiceZustand, useToastZustand} from './useToastZustand';
// import {useToastZustand} from './useToastZustand';

export function useToast(): ToastService['toast'] {
  // WITH CONTEXT
  // const {toast} = useToastContext();
  return useToastZustand();
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  // WITH CONTEXT
  // const {showToast, hideToast} = useToastContext();
  // return {
  //   showToast,
  //   hideToast,
  // };
  return useToastServiceZustand();
}
