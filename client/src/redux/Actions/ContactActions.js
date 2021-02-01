import axios from 'axios';
import { GET_CONTACTS } from '../consts/ActionsType'

export const getContacts = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/users/");
        dispatch({
            type: GET_CONTACTS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const addContact = (newUser) => async (dispatch) => {
    try {
        const res = await axios.post("/api/users/add", newUser);
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
};

export const removeContact = (idContact) => async (dispatch) => {
    try {
        const res = await axios.delete(`/api/users/remove/${idContact}`);
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
};

export const updateContact = (idContact, updatedContact) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/users/update/${idContact}`, updatedContact);
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
};

// export const addContact = ()

