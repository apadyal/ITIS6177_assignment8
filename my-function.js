export const handler = async (event) => {
  const response = 'Anushka says ' + event.keyword;
  return response;
};
