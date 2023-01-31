const filterData = (data, firstNamePrefix, onlyActive) =>
  data.filter((item) => {
    const fnLowerTest = item.Name.toLowerCase().startsWith(firstNamePrefix);
    const activeTest = !onlyActive || (onlyActive && item.is_active);
    return fnLowerTest && activeTest;
  });

export { filterData };
