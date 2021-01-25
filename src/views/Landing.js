/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import Footer from "../components/Footer";
import HamburgerIcon from "../components/HamburgerIcon";
function Landing() {
  const TitleDiv = tw.div`w-full h-1/3 flex flex-col p-8 justify-center `;
  const Title = tw.h1`text-7xl mb-1 text-blue-400`;
  const Description = tw.p`text-2xl m-1 my-3 font-light`;
  const ProjectsDiv = tw.div`w-full flex flex-col p-8 justify-center `;
  const ProjectsTitle = tw.h1`text-5xl mb-1 `;
  const ProjectsContainer = tw.div`p-3`;
  const ProjectInfo = tw.div`p-3`;
  const ProjectPicture = tw.div`w-full rounded-t h-48 bg-gray-100`;
  const Project = tw.div`shadow rounded my-5`;
  const SubTitle = tw.div`text-4xl font-bold border-solid border-t-2 border-black inline-block my-2 `;
  const NavBar = tw.div`flex justify-between p-4 shadow-lg`;
  const Logo = tw.div`text-6xl font-script text-blue-400`;

  return (
    <div tw="h-screen font-open bg-gray-100">
      <NavBar>
        <Logo>Hax</Logo>
        <HamburgerIcon />
      </NavBar>
      <TitleDiv>
        <Title>Julian Q</Title>
        <Description>Full Stack Engineer</Description>
      </TitleDiv>
      <ProjectsDiv>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsContainer>
          <Project>
            <ProjectPicture>image</ProjectPicture>
            <ProjectInfo>
              <SubTitle>Harmony</SubTitle>
              <Description>Social media App</Description>
            </ProjectInfo>
          </Project>
        </ProjectsContainer>
      </ProjectsDiv>
      <Footer />
    </div>
  );
}
export default Landing;
