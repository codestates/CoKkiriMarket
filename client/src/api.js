const validationCheckAPI = {
  checkPostFormValid: (data) => {
    if (!(data.categories && data.title && data.price && data.contents)) {
      return false;
    }
    return true;
  },

  checkSearchFormValid: (data) => {
    if (!data.word) {
      return false;
    }
    return true;
  }
};

export default validationCheckAPI;
