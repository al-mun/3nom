import React, { useState } from "react"

import Dropdown from "react-bootstrap/Dropdown"

const Speakers = ({speakerData})=>{

    //sort the speakers
    const sortedSpeakers = speakerData.sort((a, b) => b.isMainSpeaker - a.isMainSpeaker)

    // const [selectedSpeaker, setSelectedSpeaker] = useState()

    // const changeSpeaker = ()=>{

    // }
     
    return(
        <div>

            <h1>Speakers</h1>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {/* {[SelectedSpeaker]} */}
                </Dropdown.Toggle>
                {/* map over speakers */}
                <Dropdown.Menu>{sortedSpeakers.map(speaker =>{
                    return(
                    <Dropdown.Item key={speaker.id}> {speaker.firstName} {speaker.lastName} </Dropdown.Item>
                    )
                })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Speakers