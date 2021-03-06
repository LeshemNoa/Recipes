// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const searchIngredient = async (term, from = 0, size = 10) => {
  const response = await fetch('/api/search/ingredient',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        term,
        from,
        size,
      }),
    });

  handleErrors(response);
  return response.json();
};

export const searchByIngredients = async (terms, from = 0, size = 10) => {
  const response = await fetch('/api/search/ingredients',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        terms,
        from,
        size,
      }),
    });

  handleErrors(response);
  return response.json();
};

const apiRequests = { searchIngredient, searchByIngredients };
export default apiRequests;
