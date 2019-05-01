import React from 'react';
import PropTypes from 'prop-types';

const ToastComponent = ({ content, type, icon }) => {
    if(!type) {
        type = 'neutral';
    }
    
    return (
        <div className={ 'toast-item ' + type }>
            { icon && <div className="toast-icon">
                <i className={icon}></i>
            </div> }

            <div className="toast-content">
                {content}
            </div>
        </div>
    )
};

ToastComponent.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string,
    icon: PropTypes.string
};

export default ToastComponent;