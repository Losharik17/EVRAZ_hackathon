import { AppDispatch, AppReducer } from 'app/store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useTypedDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<AppReducer> = useSelector;
