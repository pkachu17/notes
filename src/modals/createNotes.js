import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const CreateNotes = ({modal, toggle, save}) => {

    const [noteName, setNoteName] = useState();
    const [description, setDescription] = useState();

    const handleChange =(e) =>{
        const {name, value} = e.target;

        if(name === "noteName"){
            setNoteName(value);
        }else{
            setDescription(value);
        }
    }

    const handleSave =() =>{
        let noteObj = {};
        noteObj["Name"] = noteName;
        noteObj["Description"] = description;
        save(noteObj);
    }

    return (
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add Note
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <label>Name</label>
                            <input type="text" className='form-control' value={noteName} onChange={handleChange} name='noteName'/>
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <textarea rows="5" className='form-control' value={description} onChange={handleChange} name="description"></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={toggle} onClick={handleSave}>Create</Button>{" "}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>

            </Modal>
    );
};

export default CreateNotes;