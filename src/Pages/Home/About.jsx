import shovon from '../../assets/Images/shovon.png'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={shovon} className="max-w-sm h-80 shadow-2xl" />
                    <div className="p-10">
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="py-6 text-lg">I am a passionate junior React front-end developer with a strong dedication to building dynamic and interactive user interfaces. My journey as a React developer began with a fascination for how modern web applications can deliver seamless and engaging user experiences. I believe that continuous learning is key to thriving in the tech industry. I am committed to staying updated with the latest advancements in React and the broader JavaScript ecosystem..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;