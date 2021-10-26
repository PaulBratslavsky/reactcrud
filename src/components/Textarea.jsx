import styled from 'styled-components';

const InputStyled = styled.div`
  position: relative;
  margin-bottom: 16px;
  background: none;

  textarea {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 4px 4px 4px 24px;
    border: none;
    background: rgba(0, 0, 0, 0.1);
    color: white;
    border: 1.5px solid #5e4c5a;
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out;
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;


    &::placeholder {
      color: #7f7f83;
      font-family: 'Roboto', sans-serif;
      text-transform: lowercase;
    }

    &:focus {
      outline: none;
      border: 1.75px solid #da47b9;
    }

    &:focus::placeholder { 
      color: rgb(206, 208, 219, 0.3);
    }
  }
`;

export default function Input({
  placeholder,
  onChange,
  value,
  name,
  required,
}) {
  return (
    <InputStyled>
      <textarea
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
      />
    </InputStyled>
  );
}
