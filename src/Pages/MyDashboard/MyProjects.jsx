import { useEffect, useState } from "react";
import MyProjectCard from "./MyProjectCard";


const MyProjects = () => {
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
        <div className=" text-black p-5" id="projects">
            <div>
            <h2 className="text-4xl text-center my-6 text-white">My Projects</h2>
            <div  className="flex flex-wrap gap-5">
                
                
                {
                    projects.map(project => <MyProjectCard
                         key={project._id} project={project}></MyProjectCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default MyProjects;