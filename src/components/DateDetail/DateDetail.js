import React, {Fragment} from 'react';

const DateDetail = ({date}) => {
    return (  
        <Fragment>
            <span> {date.start} - {date.end} </span> <br></br>
            <span> {date.title} </span>
        </Fragment>
    );
}
 
export default DateDetail;