
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [categoriesList, setCategories] = useState([]);  // Ensure initialized as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://leasers.onrender.com/categories');
            
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }

            const data = await response.json();
            console.log('Fetched categories:', data);  // Inspect data structure

            // Access categoriesList from the data object
            if (data.data && Array.isArray(data.data.categoriesList)) {
                setCategories(data.data.categoriesList);  // Set the categories list from the fetched data
            } else {
                console.error('Expected an array but received:', data);
                setCategories([]);  // Set to empty array if data is not as expected
            }
        } catch (err: any) {
            console.error('Error fetching categories:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchCategories();
}, []);


  const handleCategoryClick = (categoryId: any) => {
    navigate(`/category/${categoryId}`);
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-green-200 dark:from-gray-800 dark:to-gray-900 py-8">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-3xl top-0 -left-20 transform rotate-45 -z-10"></div>
      <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-2xl bottom-0 -right-10 transform rotate-45 -z-10"></div>

      {/* Category content */}
      <div className="container mx-auto py-8 relative z-10">
        <h1 className="text-left text-4xl text-gray-900 dark:text-gray-100 font-bold mb-8">Categories</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categoriesList.map((category: any, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-700 shadow-md hover:bg-gradient-to-br from-yellow-100 to-pink-100 dark:from-yellow-900 dark:to-pink-900 transition duration-300 transform hover:scale-105"
              onClick={() => handleCategoryClick(category.id)}  // Ensure `category.name` exists
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 capitalize">{category.name}</h2>
              <img src={category.image} alt={category.name} className="w-20 h-20"/>       
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
