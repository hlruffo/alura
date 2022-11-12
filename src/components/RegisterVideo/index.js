import { StyledRegisterVideo } from "./style";

export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(false)
    return (
        <StyledRegisterVideo>
            <button className="add-video">
                +
            </button>
            {formVisivel 
            ? <form>
                <div className="resize">
                    <button className="close-modal">
                        X
                    </button>
                    <input placeholder="Título do vídeo" />
                    <input placeholder="URL do vídeo" />
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
            : null}

        </StyledRegisterVideo>
    )
}