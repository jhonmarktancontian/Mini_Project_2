import styled from 'styled-components';
import { Card, Badge, Row, Stack, Container } from 'react-bootstrap';
import womanImage from '../../assets/images/woman.jpg';

export const StyledContainer = styled(Container)`
background-image: url(${womanImage});
min-height: 75vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`;

export const StyledRow = styled(Row)`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center; 
align-items: center;
margin: 0px;
`;

export const StyledCard = styled(Card)`
background-color: transparent;
border: none;
`;

export const StyledStack = styled(Stack)`
display: flex;
overflow-x: auto;
white-space: nowrap;
justify-content: center;


&::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

&::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

&::-webkit-scrollbar-track {
  background-color: transparent;
}
`;

export const StyledBadge = styled(Badge)`
font-weight: lighter;
color: #fff;
background-color: #198754;

@media (max-width: 767px) {
    font-size: 12px;
  }

@media(min-width: 768px) {
    font-size: 14px;
  }
`;
