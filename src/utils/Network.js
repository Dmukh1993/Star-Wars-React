export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fethc.", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error("Could not fethc.", error.message);
    return false;
  }
};

// (async () => {
//   const body = await getApiResurs(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();
