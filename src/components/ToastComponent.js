import React from 'react';
import PropTypes from 'prop-types';

const ToastComponent = ({ id, content, type, icon, dismiss }) => {
    if(!type) {
        type = 'neutral';
    }

    return (
        <div className={ 'ui__toast-item ' + type }>
            { icon && <div className="ui__toast-icon">
                <i className={icon}></i>
            </div> }

            <div className="ui__toast-content">
                <span>{content}</span>
            </div>

            <div className="ui__toast-dismiss">
                <a onClick={ (id) => dismiss(id) }>
                    <i className="fas fa-close"></i>    
                </a>
            </div>
        </div>
    )
};

ToastComponent.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string,
    icon: PropTypes.string,
    dismiss: PropTypes.func
};

export default ToastComponent;