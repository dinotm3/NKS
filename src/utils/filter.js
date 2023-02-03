const filterData = (data, firstNamePrefix, lastNamePrefix, onlyActive) =>
  data.filter((item) => {
    const fnLower = item.Name.toLowerCase().startsWith(firstNamePrefix);
    const lnLower = item.Surname.toLowerCase().startsWith(lastNamePrefix);
    const active = !onlyActive || (onlyActive && item.is_active);
    return fnLower && lnLower && active;
  });

// Functional version (destructured)
// const filterData = (data, firstNamePrefix, onlyActive) =>
//   data
//     .map((item) => ({
//       ...item,
//       Name: item.Name.toLowerCase(),
//     }))
//     .filter(
//       (item) =>
//         item.Name.startsWith(firstNamePrefix.toLowerCase()) &&
//         (!onlyActive || item.is_active)
//     );

export { filterData };
