const storageHelper = (key) => {
  return {
    get: () => {
      return JSON.parse(window.localStorage.getItem(key));
    },
    set: (value) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }
};

export default storageHelper;
