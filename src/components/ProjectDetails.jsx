import { useLoaderData } from "react-router-dom";


const ProjectDetails = () => {
    const project = useLoaderData()
    const  {features}  = project
    console.log(project);



    return (
        <div>
            <div className="card bg-base-100 shadow-xl my-4 text-black">

                <img src={project.image} className="rounded-xl" />

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black"><a className="text-blue-700" href={project?.live} target="/">{project.name}</a></h2>
                    <h2 className="card-title text-blue-700">{project.types}</h2>
                    <div className="flex space-x-3">
                        <a className="text-blue-700" href={project.front}>Client Repository</a>
                        <a className="text-blue-700" href={project.server}>Server Repository</a>
                    </div>
                    <div className="card-actions text-black">
                        <ol className="list-decimal text-left">
                            {features && features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;