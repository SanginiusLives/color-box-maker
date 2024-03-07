import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const INITIAL_STATE = [];

    const [boxes, setNewColors] = useState(INITIAL_STATE);

    const AddBox = (id, color, boxW, boxH) => {
        setNewColors(boxes => [...boxes, {id, color, boxW, boxH}])
    };

    const removeBox = (id) => {
        setNewColors(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div className="boxlist">
            <NewBoxForm AddBox={AddBox}/>

            {boxes.map(box => 
            <Box id={box.id} color={box.color} boxW={box.boxW} boxH={box.boxH} handleRemove={removeBox}/>
            )}
        </div>
    )
}

export default BoxList