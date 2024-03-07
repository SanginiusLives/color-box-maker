import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({AddBox}) => {
    const INITIAL_STATE = {
        id: '',
        color: '',
        boxW: '',
        boxH: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newID = uuid()
        AddBox(newID, formData.color, formData.boxW, formData.boxH)

    }     



    return (
        <div className="boxForm" onSubmit={handleSubmit}>
            <form>
            <input
            type="text"
            name="color"
            placeholder='Background Color'
            value={formData.color}
            onChange={handleChange}
            />
            <input
            type="text"
            name="boxW"
            placeholder='Box Width'
            value={formData.boxW}
            onChange={handleChange}
            />
            <input
            type="text"
            name="boxH"
            placeholder='Box Height'
            value={formData.boxH}
            onChange={handleChange}
            />

            <button>Add Color Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm