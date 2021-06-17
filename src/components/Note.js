import React, {useContext, useEffect, useState} from 'react';
import './Note.css';
import {FaRegTrashAlt} from 'react-icons/fa';
import {BiPencil} from 'react-icons/bi'
import { DeleteContext, EditContext } from './Home';

const Note = ({object}) => {
    const {title, desc} = object;
    const [show, setShow] = useState(true);
    
    let deleteFunction = useContext(DeleteContext);
    let editFunction = useContext(EditContext);

    const handleDel = (e, object)=>{
        e.preventDefault();
        deleteFunction(object)
    }

    const handleEdit = (e, obj)=>{
        e.preventDefault();
        editFunction(obj)
    }

    useEffect(()=>{
        if(desc.length>50){
            console.log('useEffect ran')
            setShow(false)
        }
    }, [])


    return (
        <>
        {
            title.trim()!=='' 
            && 
            desc.trim()!=='' 
            && 
            <div className={desc.length>100 && show ? 'single-note bigger-note':'single-note'}>
                <div>
                    <h1>{title}</h1>
                    {
                    !show && desc.length>50 ? 
                    <>
                        <p>{desc.length > 50 && desc.substring(0,40)}...</p> 

                        {desc.length > 50 && 
                        <button className="read-more" onClick={()=>setShow(true)}>
                            Read More
                        </button>
                        }
                    </> 

                    : 
                    <>
                        <p>{desc}</p>
                        {
                            desc.length > 50 
                            && 
                            <button className="read-more" onClick={()=>setShow(false)}>
                                Show Less
                            </button> 
                        }
                    </>
                    }
                    
                </div>
                
                <div className="buttons">
                    <form onSubmit={(e)=>handleDel(e, object)}>
                        <button type="submit" className="submit">
                            <FaRegTrashAlt/>
                        </button>
                    </form> 
                    <form onSubmit={(e)=>handleEdit(e, object)}>
                        <button type="submit" className="edit-btn">
                            <BiPencil/>
                        </button>
                    </form>
                </div>
                
            </div>
        }
        </>
    )
}

export default Note
