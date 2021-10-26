import React from 'react';
import styled from 'styled-components';

const IframeContainer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export default function VideoPlayer({ videoId }) {
  return (
    <IframeContainer
      src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1`}
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></IframeContainer>
  );
}
