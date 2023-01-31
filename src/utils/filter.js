// const filterData = (data, firstNamePrefix, onlyActive) =>
//   data.filter((item) => {
//     const fnLowerTest = item.Name.toLowerCase().startsWith(firstNamePrefix);
//     const activeTest = !onlyActive || (onlyActive && item.Is_active);
//     return fnLowerTest && activeTest;
//   });

// Functional version (destructured)
const filterData = (data, firstNamePrefix, onlyActive) =>
  data
    .map((item) => ({
      ...item,
      Name: item.Name.toLowerCase(),
    }))
    .filter(
      (item) =>
        item.Name.startsWith(firstNamePrefix.toLowerCase()) &&
        (!onlyActive || item.is_active)
    );

export { filterData };
