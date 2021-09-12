import React, { Component } from 'react';

import styles from './Modal.module.css';

import Auxillary from '../../../hoc/Auxillary/Auxillary';

import Backdrop from '../Backdrop/Backdrop';



const Modal = props => {

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    // }

    return (
        <Auxillary>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={styles.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translate(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxillary>
    )

}
export default React.memo(Modal,
    (prevProps, nextProps) =>
        nextProps.show === prevProps.show && nextProps.children === prevProps.children);