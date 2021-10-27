import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: inline-block;
  width: 100%;
  background: black;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0.5rem 0;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: #da47b9;
  }

`

export default function Button({text = "Submit"}) {
  return <ButtonStyled>{text}</ButtonStyled>
}