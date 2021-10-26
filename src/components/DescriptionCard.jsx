import React from 'react';
import styled from 'styled-components';

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
    padding: 0.15rem 1rem;
    border-radius: 5px;
    background: rgba(235, 071, 195, 0.9);
    vertical-align: middle;
    color: white;
  }
`;

const Tags = ({tags}) => tags.map((tag, index) => <span key={index} className="tags">{tag}</span>);

export default function DescriptionCard({ item }) {
  const { title, description, tags } = item;
  return (
    <DescriptionCardStyled>
      <h1>{title}</h1>
      <p>{description}</p>
      <Tags tags={tags} />
    </DescriptionCardStyled>
  );
}
