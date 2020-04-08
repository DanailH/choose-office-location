export const constructAPIEndpoint = segmentsArr => {
  return segmentsArr.join('/');
};

export const formatFlightDate = date => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};