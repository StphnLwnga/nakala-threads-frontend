import Link from 'next/link';
import Emoji from './Emoji';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  padding-top: 1.5rem;
  padding-bottom: 1.2rem;
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    border-radius: 7px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    :hover {
    	box-shadow: ${props => props.theme.bs}
    }
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
    h1:hover {
    	box-shadow: ${props => props.theme.bs}
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = props => (
	<StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Nakala Store</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      
    </div>
   
  </StyledHeader>
);

export default Header;
