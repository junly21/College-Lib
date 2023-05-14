import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.red[0]};
  &:hover {
    background: ${palette.red[1]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.red &&
    css`
      background: ${palette.red[0]};
      &:hover {
        background: ${palette.red[1]};
      }
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
