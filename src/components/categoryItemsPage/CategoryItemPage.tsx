import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryItemPage = () => {
  const { categoryId } = useParams(); // Get categoryId from the URL
  const [items, setItems] = useState([]); // State to store fetched items
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);

        // Make sure categoryId is valid before making the request
        if (!categoryId) {
          throw new Error("Category ID is missing or invalid");
        }

        console.log(`Fetching items for category: ${categoryId}`);

        const response = await fetch(
          `https://leasers.onrender.com/items?category=${categoryId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }

        const data = await response.json();
        console.log("Fetched items:", data);

        // Make sure the response has the expected structure
        if (data.data && Array.isArray(data.data.itemsList)) {
          setItems(data.data.itemsList);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err: any) {
        console.error("Error fetching items:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoryId]);

  // Handle different loading and error states
  if (loading) return <p>Loading items...</p>;
  if (error) return <p>Error: {error}</p>;
  if (items.length === 0) return <p>No items found for this category.</p>;

  return (
    <div className="category-items-page p-6">
      <h1 className="text-3xl font-bold mb-6">
        Items in Category {categoryId}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((item: any) => (
          <div
            key={item.id}
            className="item-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {item.name}
            </h2>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover mt-2 rounded-md"
            />
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
            <p className="mt-2 text-blue-500 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItemPage;
