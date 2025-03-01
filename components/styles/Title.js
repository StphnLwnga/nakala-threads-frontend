import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: ${props => props.theme.red};
    border-radius: 4px;
    display: inline;
    line-height: 1.3;
    font-size: 3rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
`;

export default Title;
