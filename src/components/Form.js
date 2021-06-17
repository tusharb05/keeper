import React, {useState, useContext, useEffect} from 'react';
import {FaPlus} from 'react-icons/fa'
import './Form.css'
import { EditContext } from './Home';
import {VscSaveAs} from 'react-icons/vsc'

const Form = ({setFunc, formShow, setFormShow}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const editContext = useContext(EditContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(editContext.beingEdited){
            let newObj = {
                title: title, 
                desc: desc
            }
            editContext.completeEdit(editContext.objEdited, newObj);
            setTitle('');
            setDesc('');
            setFormShow(false)
        }else{
            if(title.length>100) return alert('You cannot add a note with the Title more than 100 character long')
            let obj = {
                title: title,
                desc: desc
            }
            setFunc(prevNotes=>[...prevNotes, obj]);
            setTitle('');
            setDesc('');
            setFormShow(false)
        }
    }   

    useEffect(()=>{
        editContext.beingEdited && setTitle(editContext.objEdited.title)
        editContext.beingEdited && setDesc(editContext.objEdited.desc)

    }, [editContext.beingEdited, editContext.beingEdited]) 
    
    return (

        <div className="form" >

            <form className="create-note" onSubmit={handleSubmit}>

                <input type="text" className="title" value={title} required placeholder={formShow ? 'Title' : 'Add a Note...'} onClick={()=>setFormShow(true)} onChange={(e)=>setTitle(e.target.value)}/>

                {
                    formShow && 
                    <>
                    <hr className="hr"/>

                    <textarea placeholder="Take a note..." rows="3" value={desc} required onChange={(e)=>setDesc(e.target.value)}></textarea>

                    <button className='btn'>
                        {editContext.beingEdited ? <VscSaveAs className="plus"/> : <FaPlus className="plus"/>}
                    </button>   
                    </>
                }

            </form>
        </div>
    )
}

export default Form
