import { createContext, Dispatch, SetStateAction } from 'react';

interface ColorModeContextState {
  colorActive: string;
  updateColorActive: Dispatch<SetStateAction<string>>;
  selectionColor: string;
  updateSelectionColor: Dispatch<SetStateAction<string>>;
}

interface MenuBurgerContextState {
  menuBurgerIsOpen: boolean;
  updateMenuBurgerIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ColorModeContext = createContext({} as ColorModeContextState);
export const MenuBurgerContext = createContext({} as MenuBurgerContextState);
