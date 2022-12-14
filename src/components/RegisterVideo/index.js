import React from "react";
import { StyledRegisterVideo } from "./style";
/*
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)
    return {
        values,
        handleChange: (e) => {
            const value = e.target.value
            const name = e.target.name
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForm() {
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
} */


// Whiteboarding
// Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Frost punk", url: "https://youtube.." }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);
    /*
    ## O que precisamos para o form funcionar?
    - pegar os dados, que precisam vir do state
        - titulo
        - url do vídeo 
    - precisamos ter um onSubmit do nosso form
    - Limpar o formulário após o Submit
    */

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {/* Ternário */}
            {/* Operadores de Curto-circuito */}
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        console.log(formCadastro.values);

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div className="resize">
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input
                                placeholder="Titulo do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}


// [X] Falta o botão para adicionar
// [X] Modal
// -> [X] Precisamos controlar o state
// -> Formulário em si