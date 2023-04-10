import Button from './components/Button'
import NavBar from './components/Navbar';
import NavLinks from './components/NavLinks';
import SocialLinks from './components/SocialLinks';
import {InstaIcon, FaceIcon, LinkedinIcon} from './components/InstaIcon';
import HeroSection from './components/HeroSection';
import Avatar from './components/Avatar'
import Projetos from './components/Projetos'


function App() {
  return (
    <>
      
        <NavBar>
          <NavLinks>
            <Button> sobre mim</Button>
            <Button> contato </Button> 
          </NavLinks>
          <SocialLinks>
            <InstaIcon />
            <FaceIcon />
            <LinkedinIcon/>
          </SocialLinks>
        </NavBar>
        

        <HeroSection>
          
          <Avatar/>

        </HeroSection>

        <Projetos>

        </Projetos>
      
    </>
  );
}

export default App;
