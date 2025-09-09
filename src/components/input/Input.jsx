import S from './input.module.css'

export function Input({createHandler}) {
    return(
        <>
            <form className={S.inpitTextForm} onSubmit={createHandler}>
                <textarea className={S.aria} name='content' placeholder='input text'></textarea>
                <button type='submit'></button>
            </form>
        </>
    )

}