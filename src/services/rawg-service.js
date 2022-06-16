import axios from 'axios';

const baseUrl = 'https://api.rawg.io/api';
const apiKey = '378d5bca1f484b1a9628790bba7a670c';

const getGamesList = async (filterParams) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(filterParams)) {
    if (value) {
      params.append(key, value);
    }
  }

  try {
    const res = await axios.get(`${baseUrl}/games?key=${apiKey}&${params.toString()}`);

    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};

const getGameDetailById = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/games/${id}?key=${apiKey}`);

    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

const getGameScreenshots = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/games/${id}/screenshots?key=${apiKey}`);

    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
};

export { getGamesList, getGameDetailById, getGameScreenshots };
