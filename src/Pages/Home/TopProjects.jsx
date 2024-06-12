import { useEffect } from "react";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";


const TopProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/project/`)
        .then(res => res.json())
        .then(data =>{
            setProjects(data)
            console.log(data);
        })
    },[])

    return (
        <div className="flex justify-center text-black" id="projects">
            <div>
            <h2 className="text-4xl text-center my-10">Top Projects</h2>
            <div  className="lg:grid grid-cols-3 gap-10">
                
                
                {
                    projects.map(project => <ProjectCard key={project._id} project={project}></ProjectCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default TopProjects;