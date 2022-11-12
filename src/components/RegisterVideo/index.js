import React from "react";
import { StyledRegisterVideo } from "./style";

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)
    return {
        values,
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
                }} >
                    <div className="resize">
                        <button className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input
                            placeholder="Título do vídeo"
                            value={formCadastro.values.titulo}
                            onChange={(e) => {
                                const value = e.target.value
                                console.log(value)
                                setValues({
                                    ...values,
                                    titulo: value,
                                })
                            }} />
                        <input
                            placeholder="URL do vídeo"
                            value={formCadastro.values.url}
                            onChange={(e) => {
                                const value = e.target.value
                                console.log(value)
                                setValues({
                                    ...values,
                                    url: value,
                                })
                            }} />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
                : null}

        </StyledRegisterVideo>
    )
}