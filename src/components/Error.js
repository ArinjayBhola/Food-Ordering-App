import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="text-center" >
                    <h1 className="text-4xl font-bold text-red-600">Oops!!!</h1>
                    <h2 className="text-2xl mt-2">Something went wrong</h2>
                    <h3 className="text-lg text-gray-600 mt-2">{err.status}:{err.statusText}</h3>
                </div>
            </div >
        </>
    )
}

export default Error;