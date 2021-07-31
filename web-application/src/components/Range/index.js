import './range.css';

const Range = (props) => {
    const { range } = props;

    return range && (
        <div className='rangeBox'>
            <b>Result:</b>
            {range && range.join(', ')}
        </div>);
};

export default Range;
