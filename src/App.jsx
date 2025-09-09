
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
        console.log(data)
        const sidx = e.target.id
        console.log(sidx, 'sidx')
        const findx = data.findIndex(item => item.id == sidx);
        console.log(findx)

    }

    return (
        <>
            <Load/>
            <div className='main'>
                {data.map(({id, content}) => <Note id={id} text={content} removeHandler={removeNote}/>)}

            </div>
            <Input/>
        </>
    )
}

export default App
