import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Form } from 'react-bootstrap'
import { Fab } from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit';
import { green } from '@material-ui/core/colors';
import {
    Button
} from '@material-ui/core';
import { updateContact } from '../redux/Actions/ContactActions'


export default function EditModal({ el }) {

    const [firstName, setFirstName] = useState(el.firstName);
    const [lastName, setLastName] = useState(el.lastName);
    const [email, setEmail] = useState(el.email);
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);



    const toggle = () => {
        setFirstName(el.firstName);
        setLastName(el.lastName);
        setEmail(el.email);
        setShow(!show);
    }

    const handleSave = () => {
        dispatch(updateContact(el._id, {
            firstName,
            lastName,
            email
        }));
        toggle()
    }

    return (
        <>
            <Button variant="primary" onClick={toggle}>
                <Fab style={{ color: green[600] }} color="primary" aria-label="edit" >
                    <EditIcon />
                </Fab>
            </Button>
            <Modal show={show} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
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
                        onClick={handleSave}
                    >
                        Save
                                </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={toggle}
                    >
                        Cancel
                                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
