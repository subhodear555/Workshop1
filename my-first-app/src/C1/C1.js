import React from 'react';

function C1() {
    return(
        <div>
            <div>
                Sudipta1
            </div>
            <div>
                Das
            </div>
            <C2 country="India" state="WB"></C2>
        </div>
    );
}

function C2(props) {
    return(
        <div>
            {props.country}, {props.state}
        </div>
    );
}

export {
    C1,
    C2
};