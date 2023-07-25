import Nav from '../../Components/Nav'
import Hero from '../../Components/Hero'
import About from '../../Components/About'
import Projects from '../../Components/Projects'

const LandingPage = () => {

    return(
        <>
            <Nav />
            <main>
                <Hero />
                <About />
                <Projects />
            </main>
            
        </>
    )
}

export default LandingPage