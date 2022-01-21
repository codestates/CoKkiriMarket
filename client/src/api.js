const validationCheckAPI = {
  checkPostFormValid: (data) => {
    if (!(data.category && data.title && data.price && data.description)) {
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
