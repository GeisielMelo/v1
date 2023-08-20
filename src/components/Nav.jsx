import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import styled from "styled-components";
import logo from "../images/logo.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: ${(props) => props.navPosition};
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.color.Navy.default};
  transition: top 0.2s ease;
  box-shadow: 0 1px 5px rgba(2, 12, 27, 0.7);
`;

const Logo = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const Pages = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-family: ${(props) => props.theme.font.family.one};
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: ${(props) => props.theme.font.size.sm};
  color: ${(props) => props.theme.color.Green.default};
`;

const Page = styled.li`
  padding: 12px 16px;
  color: ${(props) => props.theme.color.Slate.default};
  &:hover {
    color: ${(props) => props.theme.color.Green.default};
  }
`;

const ResumeButton = styled.button`
  padding: 12px 16px;
  font-family: ${(props) => props.theme.font.family.one};
  font-weight: ${(props) => props.theme.font.weight.regular};
  color: ${(props) => props.theme.color.Green.default};
  background: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.color.Green.default};
  border: 1px solid ${(props) => props.theme.color.Green.default};
  &:hover {
    background: ${(props) => props.theme.color.Navy.Lightest};
  }
`;

const Hamburger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  cursor: pointer;

  background: none;
  border-radius: 5px;
  color: ${(props) => props.theme.color.Green.default};
  border: 1px solid ${(props) => props.theme.color.Green.default};
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const MobilePages = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 20px;
`;

export const Nav = ({ settings, isMobile }) => {
  const [activeClass, setActiveClass] = useState("0px");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPos > prevScrollPos) {
        setActiveClass("-100px");
      } else if (currentScrollPos < prevScrollPos) {
        setActiveClass("0px");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  const handleInternalLinkClick = (link) => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
    window.location.href = link;
  };

  return (
    <Container navPosition={activeClass.toString()}>
      <Logo src={logo} onClick={() => handleInternalLinkClick("/#")} />

      {isMobile ? (
        <Menu>
          <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </Hamburger>
          {isMenuOpen && (
            <MobileMenu>
              <MobilePages>
                <Logo src={logo} onClick={() => handleInternalLinkClick("/#")} />
                {settings.Pages.map((page, index) => (
                  <Page key={index} onClick={() => handleInternalLinkClick(page.Link)}>
                    {page.Name}
                  </Page>
                ))}
                <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <MenuOpenIcon />
                </Hamburger>
              </MobilePages>
            </MobileMenu>
          )}
        </Menu>
      ) : (
        <Menu>
          <Pages>
            {settings.Pages.map((page, index) => (
              <Page key={index} onClick={() => handleInternalLinkClick(page.Link)}>
                {page.Name}
              </Page>
            ))}
            <ResumeButton onClick={() => handleButtonClick(settings.Buttons[0].Link)}>{settings.Buttons[0].Name}</ResumeButton>
          </Pages>
        </Menu>
      )}
    </Container>
  );
};
