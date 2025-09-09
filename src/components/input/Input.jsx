import S from './input.module.css'

export function Input() {
    return(
        <>
            <textarea className={S.aria} placeholder='input text'></textarea>
        </>
    )

}