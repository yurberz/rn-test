const filter = (arr, value) => {
  const concatStr = (str1, str2) => {
    return str1.concat(str2).toLowerCase();
  };

  return arr?.filter((data) => {
    let search;

    if (data.hasOwnProperty("userId")) {
      search = concatStr(data.title, data.body);
    } else {
      search = concatStr(data.name, data.email);
    }

    return search.includes(value.toLowerCase());
  });
};

export default filter;
