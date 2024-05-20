import { create } from 'zustand';
import { getJWT, removeJWT, getMe, isResponseOk } from '../api/api-utils';
import { endpoints } from '../api/config';

export const useStore = create((set) => ({
  isAuthorized: false,
  popupIsOpened: false,
  currentUser: null,
  token: null,
  openPopup: () => set({ popupIsOpened: true}),
  closePopup: () => set({ popupIsOpened: false}),
  login: (jwt, currentUser) => set({ isAuth: true, user: { ...user, id: user._id }, token: jwt }),
  logout: () => set({ token: null, isAuthorized: false, currentUser: null }),
  checkIsAuthorized: async () => {
    const jwt = getJWT();
    if (jwt) {
      getMe(endpoints.me, jwt).then((userData) => {
        if (isResponseOk(userData)) {
          set({ isAuthorized: true, currentUser: userData});
        } else {
          set({ isAuthorized: false, currentUser: null, token: null});
          removeJWT();
        }
      });
    }
  },
}));