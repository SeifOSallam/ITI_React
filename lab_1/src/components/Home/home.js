import AboutMe from "../AboutMe/aboutme";
import Hero from "../Hero/hero";
import Skills from "../Skills/skills";
import Footer from "../Footer/footer";
import Projects from "../Projects/projects";
function Home(){
    return(
        <>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>
        </>
    );
}

export default Home;