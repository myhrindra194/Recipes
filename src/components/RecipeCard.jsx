/* eslint-disable react/prop-types */
import { Card, CardBody, CardTitle, CardSubtitle,CardText, CardFooter, Button } from "reactstrap";
import "./style.css";
import { useState } from "react";

export default function RecipeCard({ name, image, prepMin, cookMin, rating, reviewCount,instructions, ingredients, serving, calories }){
    const [showed, setShowed] = useState(false);

    return showed ?
    (
        <Card tag={"div"} className="row col-12 pt-3 mt-5">
            <CardTitle>
                <h4 className="mt-4 text-center">{name}</h4>
            </CardTitle>
            <CardBody className="d-flex justify-content-between pb-5">
                <div className="col-3 d-flex justify-content-center">
                    <img src={image} alt={name} className="img-fluid rounded-circle shadow"/>
                </div>
                <div className="col-3 pt-5">
                    <h3>The ingredients:</h3>
                    {
                        ingredients.map(item => (
                            <li key={item}>{item}</li>
                        ))
                    }
                </div>
                <div className="col-5 pt-5">
                    <h3>Follow these steps:</h3>
                    {
                        instructions.map(item => (
                            <li key={item}>{item}</li>
                        ))
                    }
                </div>
            </CardBody>
            <CardFooter className="d-flex justify-content-between bg-transparent align-items-center">
                    <CardText>
                        <i className="fas fa-clock me-2 fs-4" style={{color:"#FFD43B"}}></i>
                        {prepMin + cookMin} min 
                    </CardText>
                    <CardText>
                    <i className="fas fa-bowl-food me-2 fs-4" style={{color:"#FFD43B"}}></i>
                        Serving: {serving}
                    </CardText>
                    <CardText>
                        <i className="fas fa-dumbbell me-2 fs-4" style={{color:"#FFD43B"}}></i>
                        {calories} Cal 
                    </CardText>
                    <CardText>
                        <i className="fas fa-star me-2 fs-4" style={{color:"#FFD43B"}}></i>
                        {rating} 
                        <span className="text-muted ms-2">({reviewCount} reviews)</span> 
                    </CardText>
                    <Button color="btn btn-outline-warning" onClick={() => setShowed(false)}>Hide Recipe</Button>
                </CardFooter>
            
        </Card>
    ):
    (
        <div className="col-sm-8 col-md-6 col-lg-3">
            <div className="d-flex justify-content-center ">
                <img src={image} alt={name} className="hiddenImage col-9 img-fluid rounded-circle border z-3 shadow"/>
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
                    <Button color="btn btn-outline-warning" onClick={() => setShowed(true)}>View Recipe</Button>
                </CardFooter>
            </Card>
            
        </div>
    )
}