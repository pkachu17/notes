import React, {useEffect, useState} from 'react';
import CreateNotes from '../modals/createNotes';
import Card from './Card';

const Notes = () => {

    const [modal, setModal] = useState(false);
    const [noteList, setNoteList] = useState([]);

    useEffect( ()=>{
        let arr = localStorage.getItem("noteList");
        
        if(arr){
            let obj = JSON.parse(arr);
            setNoteList(obj);
        }
    },[]

    )

    const toggle =()=>{
        setModal(!modal);
    }

    const saveNotes = (noteObj) =>{
        let tempList = noteList;
        tempList.push(noteObj);
        localStorage.setItem("noteList", JSON.stringify(tempList));
        setNoteList(tempList);
        setModal(false);
    }

    const deleteNotes = (index)=>{
        let tempList = noteList;
        tempList.splice(index, 1);
        localStorage.setItem("noteList", JSON.stringify(tempList));
        setNoteList(tempList);
        window.location.reload();
    }

    const updateListArray =(obj, index) =>{
        let tempList = noteList;
        tempList[index] = obj;
        localStorage.setItem("noteList", JSON.stringify(tempList));
        setNoteList(tempList);
        window.location.reload();
    }

    return (
       <div className='notesapp'>
             <div className='header text-center'>
                <div className='appname'><h3>Notes</h3></div>
                <div className='addnotes'><button className="btn btn-primary" onClick = {()=> setModal(true)}>Add</button></div>
            </div>
            <div className='notes-container'>
                {noteList && noteList.map((obj, index) => <Card noteObj = {obj} index = {index} deleteNote = {deleteNotes} updateListArray={updateListArray}/>)}
                
             </div>
            <CreateNotes toggle={toggle} modal={modal} save ={saveNotes}/>    
       </div>
    );
};

export default Notes;