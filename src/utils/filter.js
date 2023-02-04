const filterData = (data, firstNamePrefix, lastNamePrefix, emailPrefix, telephonePrefix) =>
  data.filter((item) => {
    const firstNames = item.Name.toLowerCase().startsWith(firstNamePrefix);
    const lastNames = item.Surname.toLowerCase().startsWith(lastNamePrefix);
    const emails = item.Email.toLowerCase().startsWith(emailPrefix);
    const telephones = item.Telephone.toLowerCase().startsWith(telephonePrefix);
    return firstNames && lastNames && emails && telephones;
  });

export { filterData };
