import styled from 'styled-components';

const InputStyled = styled.div`
  position: relative;
  margin-bottom: 16px;
  background: none;

  input {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 4px 4px 4px 24px;
    border: none;
    background: rgba(0, 0, 0, 0.1);
;
    color: white;
    border: 1.5px solid #98999e;
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out;
    font-size: 1.4rem;

    &::placeholder {
      color: #98999e;
      text-transform: capitalize;
    }

    &:focus {
      outline: none;
      border: 1.75px solid #da47b9;
    }
  }
`;

export default function Input({
  type,
  placeholder,
  onChange,
  value,
  name,
  required,
}) {
  return (
    <InputStyled>
      <input
        name={name}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
      />
    </InputStyled>
  );
}
