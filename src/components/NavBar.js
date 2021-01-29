/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import HamburgerIcon from "../components/HamburgerIcon";
import CrossIcon from "../components/CrossIcon";
import { Link } from "react-router-dom";

function NavBar() {
  const NavBar = tw.div`flex justify-between items-center p-4`;
  const Logo = tw.div`text-6xl font-script `;
  const NavItem = tw.div`px-2 text-xl`;

  return (
    <div>
      <NavBar>
        <Logo>Hax</Logo>
        <div tw="flex">
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </div>
      </NavBar>
    </div>
  );
}
export default NavBar;
