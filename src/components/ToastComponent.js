import React from 'react';

const ToastComponent = ({ id, type, icon, content }) => {
    console.log(212)
    return (
        <div className="toast-item type-{type}">
            <div className="toast-icon">
                <i className={icon}></i>
            </div>

            <div className="toast-content">
                {content}
            </div>
        </div>
    )
}

export default ToastComponent;