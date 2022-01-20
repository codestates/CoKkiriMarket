const validationCheckAPI = {
  checkPostFormValid: (data) => {
    console.log(data);
    if (!(data.title && data.price && data.description)) {
      return false;
    }
    return true;
  }
};

export default validationCheckAPI;
