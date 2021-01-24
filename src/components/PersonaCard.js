/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

function PersonalCard() {
  return (
    <div
      id="PersonalCard"
      tw="bg-blue-500 flex items-center flex-col w-56 shadow "
    >
      <div
        id="PersonalCard-profileImage"
        tw="bg-red-500 rounded-full h-24 w-24"
      ></div>
      <div id="PersonalCard-name">Julian Q</div>
      <div
        id="PersonalCard-breakLine"
        tw="border-solid border-2 border-black w-16"
      ></div>
      <div id="PersoncalCard-buttonList" tw="flex justify-evenly">
        <div id="PersonalCard-resumeButton" tw="bg-white m-4">
          <a href="#" tw="">
            Resume
          </a>
        </div>
        <div
          id="PersonalCard-projectsButton"
          tw="bg-white m-4
          "
        >
          <a href="#" tw="">
            Portfolio
          </a>
        </div>
      </div>
      <div id="PersonalCard-links" tw="bg-red-500 w-full h-8"></div>
    </div>
  );
}
export default PersonalCard;
