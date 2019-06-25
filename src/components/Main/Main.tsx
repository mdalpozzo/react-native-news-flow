import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DefaultLayout from '../DefaultLayout';
import styles from './Main.styles';

interface Props {};

class Home extends Component<Props> {
    render () {
        return (
            <DefaultLayout>
                {/* {currentView} */}
            </DefaultLayout>
        );
    }
}

export default Home;