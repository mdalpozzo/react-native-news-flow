import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './NavBar.styles';
import { withNavigation, NavigationScreenProp, NavigationScreenProps } from 'react-navigation';

interface Props {
    stylesProp?: any;
    navigation: NavigationScreenProp<any>;
};

class NavBar extends Component<Props> {
    render () {
        const {
            stylesProp,
        } = this.props;
        return (
            <View style={[stylesProp, styles.container]}>
                {/* <View style={styles.menu}>
                    <Text style={styles.text}>Home</Text>
                </View>
                <View style={styles.menu}>
                    <Text style={styles.text}>other</Text>
                </View>
                <View style={styles.menu}>
                    <Text style={styles.text}>other</Text>
                </View> */}
                <Button title="Home" onPress={() => this.props.navigation.navigate('TestComponent')}></Button>
                <Button title="Other" onPress={() => this.props.navigation.navigate('TestComponentB')}></Button>
                {/* <Button title="Other2" onPress={}></Button> */}
            </View>
        );
    }
}

export default withNavigation(NavBar);