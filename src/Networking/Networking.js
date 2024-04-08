import axios from 'axios';
export const fetchImages = async (
  setLoading,
  currentPage,
  setImages,
  images,
) => {
  setLoading(true);

  const nextPage = currentPage.current + 1;
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/curated?page=${nextPage}&per_page=10`,
      {
        headers: {
          Authorization: 'Your Api Key',
        },
      },
    );
    if (response.status === 200) {
      currentPage.current = nextPage;
      setImages([...images, ...response.data.photos]);
    } else {
      console.error('Failed to fetch images. Status:', response.status);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    setLoading(false);
  }
};
