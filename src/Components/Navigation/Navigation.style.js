import styled from 'styled-components';
import { Colors, Sizes, LineHeight } from 'Styles/Theme';

export const StyledNavigation = styled.div`
  background-color: ${Colors.darkText};
  color: ${Colors.light};
  z-index: 300;
  box-shadow: 0px 4px 8px rgba(17, 17, 17, 0.16);

  a {
    text-decoration: none;
  }

  .navbar-nav {
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar.navbarBand {
    min-height: 75px;
    padding: 0;
    margin: 0;
  }

  .navLink {
    line-height: ${LineHeight.small}rem;
    display: flex;
    align-items: center;
    justify-content: left;
    color: black;
    padding: 0.5rem 1rem;

    .navLinkText {
      margin: 0 0 0 10px;
    }

    .bi {
      font-size: ${Sizes.xl};
    }
  }

  .main-nav {
    .navLink {
      color:${Colors.light};
    }

    @media (min-width: 992px) {
      margin-left: 75px;
    }
  }

  .withIconBi {
    .bi {
      font-size: ${Sizes.xl};
    }
  }
`;
