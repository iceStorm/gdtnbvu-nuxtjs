export const state = () => ({
  mobile: false,
  mobileVisibility: false,
  items: [
    {
      title: 'Trang chủ',
      href: '/',
      newTab: false,
    },
    {
      title: 'Giới thiệu',
      href: '/about',
      newTab: false,
    },
    {
      title: 'Thành viên',
      href: '/members',
      newTab: false,
    },
    {
      title: 'Thư viện',
      href: '/gallery',
      newTab: false,
    },
    {
      title: 'Tin tức',
      href: '/news',
      newTab: false,
    },
    {
      title: 'Liên hệ',
      href: '/contact',
      newTab: false,
    },
  ],
});

export const mutations = {
  toggleMobileMode(state, value) {
    state.mobile = value;
  },

  toggleMobileVisibility(state) {
    state.mobileVisibility = !state.mobileVisibility;
  },
  setMobileVisibility(state, value) {
    state.mobileVisibility = value;
  },
};
