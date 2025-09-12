import S from './Load.module.css'
import axios from "axios";
import {BASE_URL} from "../../main.jsx";

export function Load({updateHandler}) {

    function LoadData(e) {

        axios.get(BASE_URL)
            .then(response => {
                updateHandler(response.data)
                console.log('Данные получены:', response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }
    return(
        <>
            <div className={S.main}>
                <h3 className={S.ma0}> Notes</h3>
                <div className={S.btn}>
                    <span className="material-symbols-outlined" onClick={LoadData}>directory_sync</span>
                </div>

            </div>
        </>
    )
}