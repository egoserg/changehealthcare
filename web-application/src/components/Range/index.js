require('./Range.css');

const Range = (props) => {
    const { range } = props;

    return !range ? false : (
        <div className='RangeBox'>
            <b>Result:</b>
            {range ? range.join(', ') : false}
        </div>
    );
};

export default Range;
