import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { getVideoIdFromURL } from '../utils';
import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';
import Textarea from './Textarea';
import Button from './Button';
import Input from './Input';

const postUrl = 'http://localhost:3000/videos';

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  url: '',
  tags: '',
};

const FormStyled = styled.form`
  position: relative;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);

  svg {
    color: #fff;
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: rgba(235, 071, 195, 0.9);
    }
  }
`;

export default function AddVideo({ setShow, setVideos }) {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description, url, tags } = formState;
    const videoID = getVideoIdFromURL(url);

    const dataToSubmit = {
      id: uuid,
      title,
      description,
      videoUrl: url,
      tags: tags.split(' '),
      videoID,
      liked: false,
    };

    postData(postUrl, dataToSubmit);

  }

  async function postData(url, dataToSubmit) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(dataToSubmit),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      console.log(data, 'data');
      setVideos(prevState => [...prevState, dataToSubmit]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        placeholder="Title"
        value={formState.title}
        onChange={handleChange}
        required
      />
      <Textarea
        name="description"
        placeholder="Description"
        value={formState.description}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="url"
        placeholder="YouTube Url"
        value={formState.url}
        onChange={handleChange}
        pattern="^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$"
        required
      />
      <Input
        type="text"
        name="tags"
        placeholder="Tags"
        value={formState.tags}
        onChange={handleChange}
        required
      />
      <Button type="submit">Add Video</Button>
      <IoIosCloseCircle onClick={() => setShow(false)} />
    </FormStyled>
  );
}
