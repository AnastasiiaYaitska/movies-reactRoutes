import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
`;

export const Description = styled.div`
  padding-left: 25px;
`;

export const GoBack = styled(Link)`
  /* margin-bottom: 30px; */
  text-decoration: none;
  padding: 3px 5px;
  margin-left: 10px;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
`;
