import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './DefaultLayout.styles';

interface Props {};

class DefaultLayout extends Component<Props> {
    render () {
        const {
            children,
        } = this.props;
        return (
            <View style={styles.Container}>
                {children}
            </View>
        );
    }
}

export default DefaultLayout;