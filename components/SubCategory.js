import React from "react"
import Dropdown from "react-bootstrap/Dropdown"

const SubCategory = ({subCategory})=>{

    return(
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sub Category
            </Dropdown.Toggle>
            {/* map over categories */}
            <Dropdown.Menu>{subCategory.map(subCategory =>{
                return(
                <Dropdown.Item key={subCategory.id}> {subCategory.name} ({subCategory.shiurCount}) </Dropdown.Item>
                )
            })}
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}

export default SubCategory