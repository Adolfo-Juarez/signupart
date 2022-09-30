import '../../assets/style/FormStyles/Inputs.css'

function InputAtom({ name, type="text" }) {
    return (
        <>
            <label className='label-singup'>{name}</label>
            <input className='input-signup' type={type}/>
        </>
    );
}

export default InputAtom;