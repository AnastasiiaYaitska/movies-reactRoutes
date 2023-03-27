import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    color: orangered;
  }
`;
