import { atom } from 'recoil';

export const inputTitleState = atom<string>({
  // useStateと似てる グローバル変数として使える
  key: 'inputTitleState',
  default: '',
})
