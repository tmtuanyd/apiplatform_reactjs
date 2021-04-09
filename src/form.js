import React from 'react';

export const renderField = ({input, label, type, meta: {error}}) => {
    return (
        <div className={'form-group'}>
            <input {...input}/>
        </div>
    )
}
