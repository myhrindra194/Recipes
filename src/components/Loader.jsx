import { Spinner } from "reactstrap";


export default function Loader(){
    return(
        <div className="container d-flex justify-content-center mt-5">
            <Spinner>Loading</Spinner>
        </div>
    )
}