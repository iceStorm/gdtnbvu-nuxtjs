export const state = () => ({
  mobile: false,
  activeHref: '/',
  items: [
    {
      title: {
        vi: 'Trang chủ',
        en: 'Home',
      },
      href: '/',
      icon: {
        outline: '/icons/ion/outline/home-outline.svg',
        filled: '/icons/ion/filled/home.svg',
      },
      newTab: false,
    },
    {
      title: {
        vi: 'Giới thiệu',
        en: 'About',
      },
      href: '/about',
      icon: {
        outline: '/icons/ion/outline/information-circle-outline.svg',
        filled: '/icons/ion/filled/alert-circle.svg',
      },
      newTab: false,
    },
    {
      title: {
        vi: 'Thành viên',
        en: 'Members',
      },
      href: '/members',
      icon: {
        outline: '/icons/ion/outline/people-outline.svg',
        filled: '/icons/ion/filled/people.svg',
      },
      newTab: false,
    },
    {
      title: {
        vi: 'Thư viện',
        en: 'Gallery',
      },
      href: '/gallery',
      icon: {
        outline: '/icons/ion/outline/images-outline.svg',
        filled: '/icons/ion/filled/images.svg',
      },
      newTab: false,
    },
    {
      title: {
        vi: 'Tin tức',
        en: 'News',
      },
      href: '/news',
      icon: {
        outline: '/icons/ion/outline/newspaper-outline.svg',
        filled: '/icons/ion/filled/newspaper.svg',
      },
      newTab: false,
    },
    {
      title: {
        vi: 'Liên hệ',
        en: 'Contact',
      },
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
