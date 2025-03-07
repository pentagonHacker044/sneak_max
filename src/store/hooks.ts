import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispath } from "./index.ts";

export const useAppDispatch = () => useDispatch<AppDispath>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
