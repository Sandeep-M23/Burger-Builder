import React,{ useState }from 'react';
import styles from './Layout.module.css';
import {connect} from 'react-redux'

import Auxillary from '../Auxillary/Auxillary';

import ToolBar from '../../components/Navigation/Toolbar/Toolbar';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {

    const [ sideDrawerIsVisble , setSideDrawerIsVisble ] = useState(false);

   const SideDrawerClosedHandler = () => {
        setSideDrawerIsVisble(false);
    }

   const  SideDrawerToggleHandler = () => {
        setSideDrawerIsVisble(!sideDrawerIsVisble)
    }


        return(
            <Auxillary>
                <ToolBar 
                isAuth = {props.isAuthenticated}
                drawerToggleClicked={SideDrawerToggleHandler}/>
                <SideDrawer 
                isAuth = {props.isAuthenticated}
                open={sideDrawerIsVisble} 
                closed={SideDrawerClosedHandler}/>
                <main className={styles.Content}>
                    {props.children}
                </main>
            </Auxillary>
            )
};

const mapStateToProps = state =>{
    return{
        isAuthenticated:state.auth.token !== null
    }
}


export default connect(mapStateToProps)(Layout);