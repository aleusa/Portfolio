import { Intro } from "./Sections/Intro/Intro";
import { Experience } from "./Sections/Experience/Experience";
import { Footer } from "./Sections/Footer/Footer";
import { Skills } from "./Sections/Skills/Skills";

export const HomePage = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};
