export const state = () => ({
  mobile: false,
  activeHref: '/',
  items: [
    {
      title: 'Trang chủ',
      href: '/',
      icon: {
        outline: '/icons/ion/outline/home-outline.svg',
        filled: '/icons/ion/filled/home.svg',
      },
      newTab: false,
    },
    {
      title: 'Giới thiệu',
      href: '/about',
      icon: {
        outline: '/icons/ion/outline/information-circle-outline.svg',
        filled: '/icons/ion/filled/alert-circle.svg',
      },
      newTab: false,
    },
    {
      title: 'Thành viên',
      href: '/members',
      icon: {
        outline: '/icons/ion/outline/people-outline.svg',
        filled: '/icons/ion/filled/people.svg',
      },
      newTab: false,
    },
    {
      title: 'Thư viện',
      href: '/gallery',
      icon: {
        outline: '/icons/ion/outline/images-outline.svg',
        filled: '/icons/ion/filled/images.svg',
      },
      newTab: false,
    },
    {
      title: 'Tin tức',
      href: '/news',
      icon: {
        outline: '/icons/ion/outline/newspaper-outline.svg',
        filled: '/icons/ion/filled/newspaper.svg',
      },
      newTab: false,
    },
    {
      title: 'Liên hệ',
      href: '/contact',
      icon: {
        outline: '/icons/ion/outline/chatbox-outline.svg',
        filled: '/icons/ion/filled/chatbox.svg',
      },
      newTab: false,
    },
  ],
});

export const mutations = {
  setActiveMenuItem(state, href) {
    state.activeHref = href;
  },

  toggleMobileMode(state, value) {
    state.mobile = value;
  },
};
