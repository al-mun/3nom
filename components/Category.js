import React from "react"
import Dropdown from "react-bootstrap/Dropdown"

const Category = ({category})=>{

    return(
        <div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Category
        </Dropdown.Toggle>
        {/* map over categories */}
        <Dropdown.Menu>{category.map(category =>{
            return(
              <Dropdown.Item key={category.id}> {category.name} ({category.shiurCount}) </Dropdown.Item>
            )
        })}
        </Dropdown.Menu>
      </Dropdown>
        </div>
    )
}

export default Category