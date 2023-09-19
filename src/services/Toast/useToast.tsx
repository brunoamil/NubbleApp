import {ToastService} from './types';
import {useToastContext} from './useToastContext';

export function useToast(): ToastService {
  return useToastContext();
}
