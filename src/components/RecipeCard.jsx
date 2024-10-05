/* eslint-disable react/prop-types */
import { Card, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from "reactstrap";
import "./style.css";

export default function RecipeCard({ name, image, prepMin, cookMin, rating, reviewCount }){
    return(
        <div className="col-sm-8 col-md-6 col-lg-3" style={{maxHeight:"450px"}}>
            <div className="d-flex justify-content-center ">
                <img src={image} alt={name} className="col-10 img-fluid rounded-circle border z-3"/>
            </div> 
            <Card className="mb-5 pt-2 pt-md-5 d-flex">
                <CardBody className="text-center" >
                    <CardTitle className="fw-bold mt-5 pt-5">
                        {name}
                    </CardTitle>
                    <CardSubtitle>
                        <i className="fas fa-star me-2 fs-4" style={{color:"#FFD43B"}}></i>
                        {rating} 
                        <span className="text-muted ms-2">({reviewCount} reviews)</span> 
                    </CardSubtitle>
                </CardBody>
                <CardFooter className="d-flex justify-content-between bg-transparent align-items-center">
                    {prepMin + cookMin} min
                    <Button color="btn btn-outline-warning">View Recipe</Button>
                </CardFooter>   
            </Card>
            
        </div>
    )
}