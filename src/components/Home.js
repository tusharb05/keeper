import React, {useState} from 'react'
import AllNotes from './AllNotes';
import Form from './Form';

export const ValueContext = React.createContext();
export const DeleteContext = React.createContext();
export const EditContext = React.createContext();

const Home = () => {
    const [list, setList] = useState([]);
    const [isEdited, setIsEdited] = useState(false)
    const [editedObject, setEditedObject] = useState({})
    const [formShow, setFormShow] = useState(false)

    const deleteNote = (obj) => {
        setList(list.filter(x => x!==obj))
    }

    const editNote = (obj) => {
        setEditedObject(obj)
        setIsEdited(true)
        // console.log('editNote triggered')
        setFormShow(true)
    }

    const completeEdit = (previousObject, newObject)=>{
        setIsEdited(false)

        const newTitle = newObject.title;
        const newDesc = newObject.desc
        const index = list.indexOf(previousObject)
        list[index].title = newTitle;
        list[index].desc = newDesc;
        setList(list)
    }
    return (
        <div>
            <EditContext.Provider value={{
                beingEdited: isEdited, 
                setBeingEdited: setIsEdited, 
                objEdited: editedObject,
                completeEdit: completeEdit
                }
            }>
                <Form setFunc={setList} formShow={formShow} setFormShow={setFormShow}/>
            </EditContext.Provider>
            

            <DeleteContext.Provider value={deleteNote}>
                <ValueContext.Provider value={list}>
                    <EditContext.Provider value={editNote}>
                        <AllNotes/>
                    </EditContext.Provider>                  
                </ValueContext.Provider>
            </DeleteContext.Provider>
            
            
        </div>
    )
}

export default Home
