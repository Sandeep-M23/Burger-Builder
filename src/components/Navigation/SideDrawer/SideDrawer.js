import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxillary'

import styles from './SideDrawer.module.css';


const sideDrawer = (props) =>{
    let attachedStyles = [styles.SideDrawer , styles.Close];
    if(props.open){
        attachedStyles=[styles.SideDrawer,styles.Open]
    }
    return(
        <Auxillary>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedStyles.join(' ')} onClick={props.closed}>
            <div className={styles.Logo}>
               <Logo/>
            </div>
            <nav>
                <NavigationItems isAuthenticated ={props.IsAuth}/>
            </nav>
        </div>
        </Auxillary>
    )
}
export default sideDrawer;