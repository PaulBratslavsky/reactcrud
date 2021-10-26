import React from 'react';
import styled from 'styled-components';
import { MdOutlinePlayCircleOutline } from 'react-icons/md';

const StyledVideoCard = styled.div`
  background: ${({ selected }) =>
    selected ? 'rgba(235, 071, 195, 0.9)' : 'rgba(235, 071, 195, 0.1)'};
  border-radius: 5px;
  width: 200px;
  margin-right: 10px;
  height: 100%;
  transition: all 0.3s ease-in-out;
  padding: 1rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(235, 071, 195, 0.9);
  }

  h2,
  svg {
    color: #fff;
  }
  svg {
    font-size: 8rem;
  }
`;

function VideoCard({ item, video, setVideo }) {
  return (
    <StyledVideoCard
      selected={item.videoID === video}
      key={item.id}
      onClick={() => setVideo(item.videoID)}
    >
      <h2>{item.title}</h2>
      <MdOutlinePlayCircleOutline />
    </StyledVideoCard>
  );
}

export default VideoCard;
