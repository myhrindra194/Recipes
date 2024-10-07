/* eslint-disable react/prop-types */
import { Input } from "reactstrap"

export default function Banner({value, onChange, size, children}){
    return (
        <div>
            <div className="mt-4 col-12 col-md-3">
                <Input 
                    placeholder="Search Recipes" 
                    value={value} 
                    onChange={onChange}
                />
            </div>
            <div className="d-md-flex d-sm-block justify-content-between align-items-center py-3">
                <h1>Learn, Cook & Eat your food</h1>
                <h3 className="text-success"><i className="fas fa-burger me-3"></i>{size} Recipes</h3>
            </div>
            {children}
        </div>
    )
}