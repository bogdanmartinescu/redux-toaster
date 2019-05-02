import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToast, removeToast } from '../actions';
import ToastComponent from './ToastComponent';

class ToasterContainer extends Component {
    constructor(props) {
        super(props);
    }

    dismiss(id) {
        const { dispatch } = this.props;
        console.log(id);
        dispatch(removeToast(id));
    };

    render() {
        console.log('props ', this.props);
        const { toasts, removeToast } = this.props;
        return (
            <div className={ toasts.length ? 'ui__toast-container' : null }>
                {
                    toasts.map(toast => {
                        return <ToastComponent 
                                    key={toast.id} 
                                    id={toast.id}
                                    type={toast.type} 
                                    icon={toast.icon} 
                                    content={toast.content} 
                                    dismiss={ () => dismissToast(toast.id) } 
                                />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    toasts: state.toasts
});

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('dtp ', dispatch, ownProps);
    return {
        addToast: () => dispatch(addToast()),
        dismissToast: (id) => dispatch(removeToast(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToasterContainer);