const validationCheckAPI = {
  checkPostFormValid: (data) => {
    if (!(data.category && data.title && data.price && data.description)) {
      return false;
    }
    return true;
  }
};

export default validationCheckAPI;
