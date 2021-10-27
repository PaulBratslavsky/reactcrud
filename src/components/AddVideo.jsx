import { useEffect, useState } from 'react';
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
  videoUrl: '',
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

export default function AddVideo({ setShow, setVideos, isEditing, setIsEditing,  }) {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  useEffect(() => { 
    setFormState(isEditing);
  }, [isEditing]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleClose() {
    setShow(false);
    setFormState(INITIAL_FORM_STATE);
    setIsEditing(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description, videoUrl, tags } = formState;
    const videoID = getVideoIdFromURL(videoUrl);

    const dataToSubmit = {
      id: uuid,
      title,
      description,
      videoUrl: videoUrl,
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
      
      setVideos((prevState) => [...prevState, data]);
      setFormState(INITIAL_FORM_STATE);
      setShow(false);
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
        name="videoUrl"
        placeholder="YouTube Url"
        value={formState.videoUrl}
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
      <Button type="submit" text={isEditing ? "Edit Video" : "Add Video"} />
      <IoIosCloseCircle onClick={handleClose} />
    </FormStyled>
  );
}
