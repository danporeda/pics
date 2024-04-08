import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Qo1TKO9Bdea2Fy9ooXfv3rxlyyMo90oYSsnf1Kv-f3M'
    },
    params: {
      query: term
    }
  });

  return response.data.results;
};

export default searchImages;