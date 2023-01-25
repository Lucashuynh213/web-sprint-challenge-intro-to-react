// Write your Character component here
import React from "react"
import styled, {keyfreams} from 'styled-components';

const StyleCharater = styled.div`
.characters{
    
}
`


const Character = (props) => {
    return (
        <div className='charaters'>
            {props.info.name}
            <button onClick={() => props.openDetails(props.info.name)}>
                See details
            </button>
        </div>
  )
}

export default Character;