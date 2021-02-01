import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ContactCard from './ContactCard';
import { getContacts } from '../redux/Actions/ContactActions'


function ContactList() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContacts())
    }, []);
    const contacts = useSelector(state => state.contacts.users)
    return (
        <div style={{ display: 'flex', flexWrap: "wrap" }}>
            {
                contacts && contacts.map((el, i) => <ContactCard key={contacts._id} el={el} i={i} />)
            }
        </div>
    )
}

export default ContactList
