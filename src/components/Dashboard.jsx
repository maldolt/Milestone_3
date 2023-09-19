import React, { useState } from 'react';
import { supabase } from './utilities/supabaseClient'; 

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('posts').insert([{ title, content }]);

      if (error) {
        console.error('Error adding post:', error.message);
        return;
      }

      console.log('Post added successfully:', data);
      // Optionally, you can redirect the user or show a success message
    } catch (error) {
      console.error('Error adding post:', error.message);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
