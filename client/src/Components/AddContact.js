import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Form } from 'react-bootstrap'
import { Grid, Fab } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import { addContact } from "../redux/Actions/ContactActions";
import {
    Button
} from '@material-ui/core';


export default function AddContact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setFirstName('');
        setLastName('');
        setEmail('');
    };
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        dispatch(addContact({
            firstName,
            lastName,
            email
        }));
        setFirstName('');
        setLastName('');
        setEmail('');
        setShow(false)
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adding new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required placeholder="First name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder="Last name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter email" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Add
                                </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
