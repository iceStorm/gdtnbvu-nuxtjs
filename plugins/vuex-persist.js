import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  new VuexPersistence({
    key: 'gdtn-vuex',
    storage: window.localStorage, // or window.sessionStorage or localForage 
  }).plugin(store);
};
