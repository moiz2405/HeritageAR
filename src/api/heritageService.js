// src/api/heritageService.js
const BASE_URL = 'https://example.com/api'; // Replace with your actual API

export const getHeritageSites = async () => {
  try {
    const response = await fetch(`${BASE_URL}/heritage-sites`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching heritage sites:', error);
    throw error;
  }
};
