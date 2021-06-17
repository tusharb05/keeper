import React, {useContext} from 'react';
import { ValueContext } from './Home';
import Note from './Note';
import './AllNotes.css';

const AllNotes = () => {
    const list = useContext(ValueContext)
    
    return (
        <div className="notes-container">
            {
                list.map((single, index) => <Note object={single} key={index}/>)
            }
        </div>
    )
}

export default AllNotes
