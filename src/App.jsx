
import './App.css'
import {Note} from "./components/note/Note.jsx";
import {Input} from "./components/input/Input.jsx";
import {Load} from "./components/load/Load.jsx";
import {useState} from "react";

function App() {
    const  [data, updateHandler] = useState([
        {
            "id": 0,
            "content": "То, что было введено в поле ввода 0"
        },
        {
            "id": 1,
            "content": "То, что было введено в поле ввода 1"
        },
        {
            "id": 2,
            "content": "То, что было введено в поле ввода 2"
        },
        {
            "id": 3,
            "content": "То, что было введено в поле ввода 3"
        },
    ])

    function removeNote(e) {
    const sidx = e.target.id;
    const findx = data.findIndex(item => item.id == sidx);

    if (findx !== -1) {

        const actual_array = data.filter((_, index) => index !== findx);
        console.log('Новый массив', actual_array);
        updateHandler(actual_array)
    }
    }

    function createNote(e) {
        e.preventDefault()

        const uuid = self.crypto.randomUUID();

        const fd = new FormData(e.target)
        const entires = fd.entries()
        console.log(entires)
        const obj = Object.fromEntries(entires)
        obj.id = uuid
        const arr = [...data]
        arr.push(obj)
        console.log(arr)
        updateHandler(arr)

    }
    return (
        <>
            <Load/>
            <div className='main'>
                {data.map(({id, content}) => <Note id={id} text={content} removeHandler={removeNote}/>)}

            </div>
            <Input createHandler={createNote}/>
        </>
    )
}

export default App
