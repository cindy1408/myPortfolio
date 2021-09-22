import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Languages from './Languages';

function MainSection(){
    return (
        <div>
            <Home />
            <Experience /> 
            <Projects /> 
            <Languages language = "some languages" />
        </div>
    )
}

export default MainSection; 