import styled from 'styled-components';

const PriceTag = styled.span`
  background: ${props => props.theme.red};
  border-radius: 3px;
  transform: rotate(5deg) skew(-7deg);
  color: white;
  font-weight: 800;
  padding: 5px;
  line-height: 1;
  font-size: 1.5rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;

export default PriceTag;
