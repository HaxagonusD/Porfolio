/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Link } from "react-router-dom";
function Footer() {
  const FooterLink = tw.div`inline-block my-1 pl-1`;
  const LinkGroupTitle = tw.h1`text-2xl font-bold`;
  const LinkGroup = tw.div`px-6 py-8 flex-col flex text-white bg-black`;
  return (
    <div tw="flex justify-evenly bg-black " className="Footer">
      <LinkGroup>
        <LinkGroupTitle>Navigation</LinkGroupTitle>
        <FooterLink>
          <Link to="/">Home</Link>
        </FooterLink>
        <FooterLink>
          <Link to="/about">About</Link>
        </FooterLink>
        <FooterLink>
          <Link to="/contact">Contact</Link>
        </FooterLink>
      </LinkGroup>
      <LinkGroup>
        <LinkGroupTitle>Links</LinkGroupTitle>
        <FooterLink>
          <a
            href="https://github.com/HaxagonusD"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </FooterLink>
        <FooterLink>
          <a
            href="https://www.linkedin.com/in/julian-q-379184ba"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </FooterLink>
      </LinkGroup>
    </div>
  );
}
export default Footer;
