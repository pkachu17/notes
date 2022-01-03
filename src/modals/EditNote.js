import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditNotePopup = ({modal, toggle, updateNote, noteObj}) => {
    const [noteName, setNoteName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "noteName"){
            setNoteName(value)
        }else{
            setDescription(value)
        }


    }

    useEffect(() => {
        setNoteName(noteObj.Name)
        setDescription(noteObj.Description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = noteName
        tempObj['Description'] = description
        updateNote(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Note</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Note Name</label>
                        <input type="text" className = "form-control" value = {noteName} onChange = {handleChange} name = "noteName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditNotePopup;