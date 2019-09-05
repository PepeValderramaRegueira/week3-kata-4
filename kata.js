const namesSorter = departmentsArray => {
  if (departmentsArray.length === 0) return 0;

  let allNames = [];

  departmentsArray.forEach(department => {
    department.forEach(name => allNames.push(name));
  });

  allNames.sort((prev, current) => {
    if (prev.length < current.length) return -1;
    else if (prev.length > current.length) return 1;
    else {
      if (prev.localeCompare(current) < 0) return -1;
      else return 1;
    }
  });

  return allNames;
};

console.log(
  namesSorter([["Juan", "Ariel", "Julia"], ["Brad", "Michael", "Alexander"]])
);
