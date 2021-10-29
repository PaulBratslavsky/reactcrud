import React from "react";
import styled from "styled-components";
import { deleteData } from "../api";

import { MdDeleteForever, MdEdit } from "react-icons/md";

const DescriptionCardStyled = styled.div`
  padding: 2rem;

  h1 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.4rem;
  }

  .tags {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.15rem 1rem;
    border-radius: 5px;
    background: rgba(235, 071, 195, 0.9);
    vertical-align: middle;
    color: white;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
  }

  svg {
    display: block;
    font-size: 2.5rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Tags = ({ tags }) =>
  tags.split(" ").map((tag, index) => (
    <span key={index} className="tags">
      {tag}
    </span>
  ));

export default function DescriptionCard({
  item,
  videos,
  setVideos,
  setVideo,
  handleEditing,
}) {
  async function handleDelete() {
    try {
      const url = `http://localhost:3000/videos/${item.id}`;
      const data = await deleteData(url);
      console.log(data);
      const newVideos = videos.filter((video) => video.id !== item.id);
      const lastVideo = newVideos[newVideos.length - 1];
      setVideo(lastVideo.videoID);
      setVideos(newVideos);
    } catch (error) {
      console.log(error);
    }
  }

  const { id, title, description, tags } = item;
  return (
    <DescriptionCardStyled>
      <h1>{title}</h1>
      <p>{description}</p>
      <Tags tags={tags} />
      <div>
        <MdDeleteForever onClick={handleDelete} />
        <MdEdit onClick={() => handleEditing(id)} />
      </div>
    </DescriptionCardStyled>
  );
}
