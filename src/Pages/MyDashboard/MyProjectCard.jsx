import { useState } from "react";
import { Link } from "react-router-dom";


const MyProjectCard = ({project}) => {
    const [datas, setDatas] =useState(project)

    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/project/${id}`,{
            method:'DELETE'
        }).then(data =>{
            console.log(data);
            setDatas(datas.filter(data => data._id !== id))
        })
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-4 text-black">
               
                    <img src={project.image} alt="Shoes" className="rounded-xl w-96 h-64" />
                
                <div className="card-body items-center text-center">
                <h2 className="card-title text-black"><a className="text-blue-700" href={project?.live} target="/">{project.name}</a></h2>
                <h2 className="card-title text-blue-700">{project.types}</h2>
                    <div className="flex space-x-3">
                        <a className="text-blue-700" href={project.front}>Client Repository</a>
                        <a className="text-blue-700" href={project.server}>Server Repository</a>
                    </div>
                    <div className="card-actions text-white">
                        <Link className="btn bg-green-500 p-1 rounded-lg" to={`/dashboard/editproject/${project._id}`}>Edit</Link>
                        <Link className="btn bg-blue-500 p-1 rounded-lg" to={`/details/${project._id}`}>Details</Link>
                        <Link className="btn bg-red-500 p-1 rounded-lg " onClick={handleDelete}>Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjectCard;