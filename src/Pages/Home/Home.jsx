import About from "./About";
import Banner from "./Banner";
import { ContactMe } from "./ContactMe";
import TopProjects from "./TopProjects";


const Home = () => {
    return (
        <div >
            <Banner/>
            <TopProjects/>
            <About/>
            <ContactMe/>
        </div>
    );
};

export default Home;