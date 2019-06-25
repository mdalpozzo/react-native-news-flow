import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './DefaultLayout.styles';
import NavBar from '../NavBar';

interface Props {};

class DefaultLayout extends Component<Props> {
    render () {
        const {
            children,
        } = this.props;
        return (
            <View style={styles.Container}>
                {children}
                <NavBar stylesProp={styles.NavBar}></NavBar>
            </View>
        );
    }
}

export default DefaultLayout;