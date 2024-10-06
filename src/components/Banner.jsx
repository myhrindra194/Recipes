/* eslint-disable react/prop-types */
import { Input, InputGroup } from "reactstrap"

export default function Banner({value, onChange, size, children}){
    return (
        <div className="pb-5">
            <InputGroup className="w-25 mt-4">
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
            {children}
        </div>
    )
}