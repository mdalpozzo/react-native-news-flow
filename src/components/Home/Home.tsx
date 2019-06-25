import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Panel from './components/Panel';
import DefaultLayout from '../DefaultLayout';
import styles from './Home.styles';

interface Props {};

class Home extends Component<Props> {
    render () {
        return (
            <DefaultLayout>
                <Panel title="Headline" stylesProp={styles.Headline}>
                </Panel>
                <Panel title="Related" stylesProp={styles.Related}>
                </Panel>
            </DefaultLayout>
        );
    }
}

export default Home;