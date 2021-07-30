import React from "react";
require('./ErrorBox.css');

const ErrorBox = (props) => {
    const { error } = props;

    return !error ? false : <div className='ErrorBox'>{error}</div>;
};

export default ErrorBox;