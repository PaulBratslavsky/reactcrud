import { useState } from 'react';
import { getVideoIdFromURL } from '../utils';
import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';
import Textarea from './Textarea';
import Button from './Button';
import Input from './Input';

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  url: '',
  tags: '',
};

const FormStyled = styled.form`
  position: relative;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);

  svg {
    color: #fff;
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 1.2rem;
    cursor: pointer;
  }
`
  

export default function AddVideo({ setShow }) {
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
        placeholder="YouTube"
        value={formState.url}
        onChange={handleChange}
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
      <IoIosCloseCircle onClick={() => setShow(false)}/>
    </FormStyled>
  );
}
