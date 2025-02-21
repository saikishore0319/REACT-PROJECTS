import { Link } from "react-router"
export default function PageNotFound()
{
    return(
        <div className="text-center flex justify-center items-center text-white h-screen flex-col bg-red-500">
            <h1 >Page Not Found</h1>
            <p >ERROR 404</p>
            <Link to={"/"} >Go to home page</Link>
        </div>
    )
}