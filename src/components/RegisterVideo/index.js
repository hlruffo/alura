import React from "react";
import { StyledRegisterVideo } from "./style";

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)
    return {
        values,
        handleChange: (e) => {
            const value = e.target.value
            const name = e.target.name
            console.log(value)
            setValues({
                ...values,
                [name]: value, // name entre colchetes pq é uma variavel ( busca o name do input no HTML)
            })
        },
    clearForm(){
        setValues({})
    }
    }
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Insira um título", url: "Insira um Url" }
    })
    const [formVisivel, setFormVisivel] = React.useState(false)

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? <form onSubmit={(e) => {
                    e.preventDefault()
                    setFormVisivel(false)
                    formCadastro.clearForm()
                }} >
                    <div className="resize">
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input
                            placeholder="Título do vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange} />
                        <input
                            placeholder="URL do vídeo"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange} />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
                : null}

        </StyledRegisterVideo>
    )
}