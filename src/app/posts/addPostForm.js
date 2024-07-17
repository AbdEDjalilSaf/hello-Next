// components/AddPostForm.js


function addPostForm(){


  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = { title, content };

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Post added:', result);
      } else {
        console.error('Failed to add post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          id="title"
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          placeholder="Content"
          id="content"
          required
        ></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default addPostForm;
