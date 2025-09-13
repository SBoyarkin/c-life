
import './App.css'
import {Note} from "./components/note/Note.jsx";
import {Input} from "./components/input/Input.jsx";
import {Load} from "./components/load/Load.jsx";
import {useState} from "react";
import axios from "axios";
import {BASE_URL} from "./main.jsx";

function App() {
    const  [data, updateHandler] = useState([
    ])

    function removeNote(e) {
    const sidx = e.target.id;
    axios.delete(`${BASE_URL}/${sidx}`).then(
        response => {
            axios.get(BASE_URL)
                .then(response => {
                    updateHandler(response.data)
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
        }
    )
    }

    function createNote(e) {
        e.preventDefault()
        const uuid = self.crypto.randomUUID();
        const fd = new FormData(e.target)
        const entires = fd.entries()
        const obj = Object.fromEntries(entires)
        obj.id = uuid
        const arr = [...data]
        if (obj.content.length > 0) {
            axios.post(BASE_URL, obj)
                .then(response => {
                    if (response.status === 204) {
                        axios.get(BASE_URL)
                            .then(response => {
                                updateHandler(response.data)
                                e.target.reset()
                            })
                            .catch(error => {
                                console.error('Ошибка при получении данных:', error);
                            });
                    }
                })
                .catch(error => {
                    console.error('Ошибка при создании записи:', error);
                });
        }
        updateHandler(arr)

    }
    return (
        <>
            <Load updateHandler={updateHandler}/>
            <div className='main'>
                {data.map(({id, content}) => <Note id={id} text={content} removeHandler={removeNote}/>)}

            </div>
            <Input createHandler={createNote}/>
        </>
    )
}

export default App
