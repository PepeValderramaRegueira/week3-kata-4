const namesSorter = departmentsArray => {
  if (departmentsArray.length === 0) return 0;

  let allNames = [];

  departmentsArray.forEach(department => {
    department.forEach(name => allNames.push(name));
  });

  allNames.sort((prev, current) =>
    prev.length < current.length
      ? -1
      : prev.length > current.length
      ? 1
      : prev.localeCompare(current)
  );

  return allNames;
};

console.log(
  namesSorter([["Juan", "Ariel", "Julia"], ["Brad", "Michael", "Alexander"]])
);
