import classes from './Input.module.css';

const Input = (props) =>{
    return (<div className={classes.input}>
        <label htlmFor={props.input.id}>{props.labe}</label>
        <input {...props.input} />
    </div>);
};

export default Input;