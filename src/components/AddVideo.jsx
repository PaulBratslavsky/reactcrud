import { useState } from 'react';
import { getVideoIdFromURL } from '../utils';

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  url: '',
  tags: '',
};

export default function AddVideo() {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description, url, tags } = formState;
    console.log(title, description, url, tags);

    const videoId = getVideoIdFromURL(url);

    const dataToSubmit = {
      title,
      description,
      url,
      tags: tags.split(','),
      videoId,
    }

    console.log(dataToSubmit);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formState.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formState.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="url"
        placeholder="YouTube"
        value={formState.url}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="tags"
        placeholder="Tags"
        value={formState.tags}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Video</button>
    </form>
  );
}
