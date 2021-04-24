import React from 'react';

function Wrapper(props) {
    return(
        <div className="container max-w-6xl px-10 mx-auto">
            {props.children}
        </div>
    )
}
export default Wrapper;