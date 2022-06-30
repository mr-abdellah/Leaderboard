const getResponse = async (scoreInfo) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lxpoC6G6d9W60ZW2y6PR/scores/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scoreInfo),
    },
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

export default getResponse;