import { BrowserRouter } from 'react-router-dom';
import CustomCursor from "./components/CustomCursor"; // Added Custom Cursor
import {
  About,
  Contact,
  Experience,
  Education,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <>
      {/* Custom Cursor placed at the top to ensure it's global */}
      <CustomCursor />

      <BrowserRouter>
        <div className="relative z-0 overflow-visible"> {/* Added overflow-visible */}
          <div>
            <Navbar />
            <Hero />  
          </div>

          <div className="bg-about bg-cover bg-center bg-no-repeat">
            <About />
          </div>

          <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
            <Tech />
          </div>

          <div className="bg-about bg-cover bg-center bg-no-repeat">
            <Education />
          </div>

          <Projects />

          <div
            className="bg-experience bg-cover bg-center bg-no-repeat 
              rounded-tl-[150px] rounded-br-[150px]">
            <div
              className="bg-experienceLight bg-cover bg-center 
              bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
              <Experience />
            </div>
          </div>

          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
