import { useLoaderData } from "react-router-dom";


const EditProject = () => {
    const project = useLoaderData()
    const { name, types, live, front, server, image, features, _id } = project
    const { info1,info2,info3,info4,info5,info6,info7 } = {features}

    const handleEditProject = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const types = form.types.value
        const live = form.live.value
        const front = form.front.value
        const server = form.server.value
        const image = form.image.value
        const info1 = form.info1.value
        const info2 = form.info2.value
        const info3 = form.info3.value
        const info4 = form.info4.value
        const info5 = form.info5.value
        const info6 = form.info6.value
        const info7 = form.info7.value

        const projectInfo = {
            name, types, live, front, server, image,
            features: [
                 info1,
                 info2,
                 info3,
                 info4,
                 info5,
                 info6,
                 info7

            ]
        }
        console.log(projectInfo);

        fetch(`http://localhost:5000/project/${_id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(projectInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="">
            <h2 className="text-3xl text-center my-6 text-white">Edit Project</h2>
            <form onSubmit={handleEditProject}>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label>Project Name</label>
                        <input type="text" name='name' defaultValue={name} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Project Types</label>
                        <input type="text" name='types' defaultValue={types} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Live Link</label>
                        <input type="text" name='live' defaultValue={live} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Front-end Repo</label>
                        <input type="text" name='front' defaultValue={front} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Server-side Ripo</label>
                        <input type="text" name='server' defaultValue={server} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input type="text" name='image' defaultValue={image} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Info 1</label>
                        <input type="text" name='info1' defaultValue={features && features[0]} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Info 3</label>
                        <input type="text" name='info3' defaultValue={features && features[1]} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Info 4</label>
                        <input type="text" name='info4' defaultValue={features && features[2]} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Info 5</label>
                        <input type="text" name='info5' defaultValue={features && features[3]} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Info 6</label>
                        <input type="text" name='info6' defaultValue={features && features[4]} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Info 7</label>
                        <input type="text" name='info7' defaultValue={features && features[5]} className="w-full border text-black border-gray-200" />
                    </div>
                    <div>
                        <label>Info 2</label>
                        <input type="text" name='info2' defaultValue={features && features[6]} className="w-full border text-black border-gray-200" />
                    </div>
                </div>
                <input type="submit" value="Update" className="btn flex mx-auto my-3 w-1/3 p-1" />
            </form>
        </div>
    );
};

export default EditProject;