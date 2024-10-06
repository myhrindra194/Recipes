/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input, InputGroup, Button, ButtonGroup } from "reactstrap";

export default function Banner({size, value, onChange,}){
    const [rSelected, setRSelected] = useState(1);

    return(
        <div className="py-4" style={{maxHeight: "140px"}}>
            <InputGroup className="w-25 mb-3 mt-2">
                <Input 
                    placeholder="Search Recipes" 
                    value={value} 
                    onChange={onChange}
                />
            </InputGroup>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="py-3">Learn, Cook & Eat your food</h1>
                <h3 className="text-success"><i className="fas fa-burger me-3"></i>{size} Recipes</h3>
            </div>
            <ButtonGroup>
                <Button color="btn btn-outline-dark" onClick={() => setRSelected(1)} active={rSelected === 1}>
                    Radio 1
                </Button>
                <Button color="btn btn-outline-dark" onClick={() => setRSelected(2)} active={rSelected === 2}>
                    Radio 2
                </Button>
                <Button color="btn btn-outline-dark" onClick={() => setRSelected(3)} active={rSelected === 3}>
                    Radio 3
                </Button>
              
            </ButtonGroup>
        </div>
    )
}