/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import ReactMarkdown from "react-markdown";
function About() {
  const Li = tw.li`py-2`;
  return (
    <div>
      <p tw="p-8 m-0 text-xl">
        Greetings, I'm Julian. Some call me Hax. I'm a Full Stack Engineer based
        in New York City looking for a new position. I know Javascript like the
        back of my hand. I've programmed in other languages like Python, Ruby,
        Java, C / C++. I like making websites with React.js, and Express.js
      </p>
      <ul tw="p-8 m-0 mb-auto text-xl">
        <Li>❤ Vim lover</Li>
        <Li>
          🌱 I’m currently learning Redux, React Native, Firebase, and Next.js
        </Li>
        <Li>👯 I’m looking to collaborate on new projects</Li>
        <Li>🤔 I’m looking for help with career skills</Li>
        <Li>💬 Ask me about the wonders of the universe</Li>
        <Li>📫 How to reach me: julianq.js@gmail.com</Li>

        <Li>⚡ Fun fact: INTJ</Li>
      </ul>
    </div>
  );
}
export default About;
