import S from './Note.module.css'

export function Note({id, text, removeHandler}) {

    return(
        <>
        <div className={S.note} key={id}>
            <div className={S.close} id={id} onClick={removeHandler}>X</div>
            <div>{text}</div>
        </div>
        </>
    )

}