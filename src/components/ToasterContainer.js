import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToastComponent from './ToastComponent';

class ToasterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { toasts } = this.props;
        
        return (
            <div className={ toasts.length ? 'toast-container' : null }>
                {
                    toasts.map(toast => {
                        return <ToastComponent key={toast.id} type={toast.type} icon={toast.icon} content={toast.content} />
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        toasts: state.toasts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToasterContainer);