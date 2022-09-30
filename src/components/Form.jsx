import InputAtom from "../atoms/inputsAtom/Input";
import '../assets/style/FormStyles/Form.css'

function Form() {
    return (
        <>
            <form className="sign-up">
                <h1 className="inputHead">Registrate</h1>
                <InputAtom
                    name="Nombre"
                />
                <InputAtom
                    name="Apellido"
                />
                <InputAtom
                    name="Correo Electrónico"
                />
                <InputAtom
                    name="Dirección"
                />
                <InputAtom
                    name="Número de Celular"
                />
                <InputAtom
                    name="Numero local"
                />
                <InputAtom
                    type="password"
                    name="Contraseña"
                />
                <InputAtom
                    name="Confirma Contraseña"
                    type="password"
                />
                <button className="primary-button">Enviar</button>
            </form>
        </>
    );
}

export default Form;