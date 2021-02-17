

const FormGroup = (props) => {
    return (
        <div className="form-group col-xl-9">
            <label >{props.labelText}</label>
            <input type={props.inputType} className="form-control"  onChange={props.eventHandler} />
        </div>
    );
}

export default FormGroup;