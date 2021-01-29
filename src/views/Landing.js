/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import HarmonyImage from "../Harmony.PNG";
function Landing() {
  const TitleDiv = tw.div`w-full h-1/3 flex flex-col p-8 justify-center `;
  const Title = tw.h1`text-7xl mb-1 `;
  const Description = tw.p`text-2xl m-1 my-3 font-light px-2`;
  const ProjectsDiv = tw.div`w-full flex flex-col p-8 justify-center `;
  const ProjectsTitle = tw.h1`text-5xl mb-1 font-bold `;
  const ProjectsContainer = tw.div`p-3`;
  const ProjectInfo = tw.div`p-3`;
  const ProjectPicture = tw.div`w-full rounded-t h-48 bg-gray-100 max-w-full h-auto`;
  const Project = tw.div`shadow rounded my-5`;
  const SubTitle = tw.div`text-4xl font-bold border-solid border-t-2 border-black inline-block my-2 `;

  return (
    <div tw="min-h-screen font-nunito bg-white ">
      <TitleDiv>
        <Title>Julian Q</Title>
        <Description>Full Stack Engineer</Description>
      </TitleDiv>
      <ProjectsDiv>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsContainer>
          <Project>
            <ProjectPicture>
              <img atl="Harmony" src={HarmonyImage} />
            </ProjectPicture>
            <ProjectInfo>
              <SubTitle>Harmony</SubTitle>
              <Description>
                Social media app based around music and playlists
              </Description>
            </ProjectInfo>
          </Project>
        </ProjectsContainer>
      </ProjectsDiv>
    </div>
  );
}
export default Landing;
