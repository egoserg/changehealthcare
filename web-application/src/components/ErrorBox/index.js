import './errorBox.css';

const ErrorBox = (props) => {
    const { error } = props;

    return error && <div className='errorBox'>{error}</div>;
};

export default ErrorBox;