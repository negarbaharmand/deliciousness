import Pages from "./pages/Pages";
import Category from "./component/Category";
//BroserRouter gives the functionality to navigate over pages
import { BrowserRouter } from "react-router-dom";
import Search from "./component/Search";
import styled from "styled-components";
import logoIcon from "./assets/logo.svg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <StyledLogoLink to={"/deliciousness/"}>
            <LogoImage src={logoIcon} alt="Deliciousness Logo" />
          </StyledLogoLink>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const LogoImage = styled.img`
  width: 10rem !important;
  height: 10rem !important;
  display: block;
  @media (max-width: 768px) {
    width: 6rem !important;
    height: 6rem !important;
  }
`;

const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Nav = styled.div`
  padding: 2rem 0rem 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 1rem 0rem 0.5rem 0rem;
  }
`;

export default App;
