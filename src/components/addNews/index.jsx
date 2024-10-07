import React, { useState } from 'react';

const AddNews = ({ userId }) => {
  const [news, setNews] = useState({
    name: '',
    category: '',
    image: '',
    date: '',
    author: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newsWithUserId = { ...news, userId };

    try {
      const response = await fetch('http://localhost:3000/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsWithUserId),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('News added:', jsonResponse);
        alert('News added successfully!');
        setNews({
          name: '',
          category: '',
          image: '',
          date: '',
          author: '',
          description: '',
        });
      } else {
        console.error('Error adding news:', response.statusText);
        alert('Failed to add news');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4"
      >
        <h2 className="text-center text-xl font-semibold text-gray-700">Add News</h2>

        <input
          type="text"
          name="name"
          placeholder="News Title"
          value={news.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-teal-300"
          required
        />

        <select
          name="category"
          value={news.category}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-teal-300"
          required
        >
          <option value="">Select a Category</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Business">Business</option>
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
          {/* Diğer kategorileri buraya ekleyebilirsiniz */}
        </select>

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={news.image}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-teal-300"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={news.description}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-teal-300"
          rows="4"
          required
        />

        <input
          type="date"
          name="date"
          value={news.date}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-teal-300"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={news.author}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-teal-300"
          required
        />

        <button
          type="submit"
          className="bg-[#c0e9e9] text-gray-800 p-2 w-full rounded hover:bg-teal-300 transition duration-200"
        >
          Add News
        </button>
      </form>
    </div>
  );
};

export default AddNews;
