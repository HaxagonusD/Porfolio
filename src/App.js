/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

import "./App.css";
import PersonalCard from "./components/PersonaCard";

function App() {
  const TitleDiv = tw.div`w-full h-1/3 flex flex-col p-8 justify-center `;
  const Title = tw.h1`text-7xl mb-1`;
  const Description = tw.p`text-2xl m-1 pl-1`;
  const ProjectsDiv = tw.div`w-full flex flex-col p-8 justify-center bg-red-500`;
  const ProjectsTitle = tw.h1`text-5xl mb-1 `;
  const ProjectsContainer = tw.div``;
  const ProjectThumbnail = tw.div`shadow rounded p-4 my-5`;
  const ProjectPicture = tw.div``;
  const ProjectName = tw.div``;
  const SubTitle = tw.div`text-4xl font-bold border-solid border-t-2 border-black inline-block mt-2`;
  return (
    <div tw="h-screen ">
      <TitleDiv>
        <Title>Julian Q</Title>
        <Description>Full Stack Engineer</Description>
      </TitleDiv>
      <ProjectsDiv>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsContainer>
          <ProjectThumbnail>
            <ProjectPicture>image</ProjectPicture>
            <SubTitle>Harmony</SubTitle>
            <Description>Social media App</Description>
          </ProjectThumbnail>
          <ProjectThumbnail>
            <ProjectPicture>image</ProjectPicture>
            <SubTitle>Harmony</SubTitle>
            <Description>Social media App</Description>
          </ProjectThumbnail>
          <ProjectThumbnail>
            <ProjectPicture>image</ProjectPicture>
            <SubTitle>Harmony</SubTitle>
            <Description>Social media App</Description>
          </ProjectThumbnail>
        </ProjectsContainer>
      </ProjectsDiv>
    </div>
  );
}

export default App;
