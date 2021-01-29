/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import Footer from "../components/Footer";
function Contact() {
  const Link = tw.a`text-2xl`;
  return (
    <div tw="min-h-screen flex flex-col w-full justify-center">
      <Link href="https://github.com/HaxagonusD">Github</Link>
      <Link href="https://www.linkedin.com/in/julian-q-379184ba">LinkedIn</Link>
    </div>
  );
}
export default Contact;
