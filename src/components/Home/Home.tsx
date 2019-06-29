import React, {Component} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import Panel from './components/Panel';
import DefaultLayout from '../DefaultLayout';
import styles from './Home.styles';
import StoryFeedItem from 'Components/StoryFeedItem';
import { Stories } from '../Main';

interface Props {
    stories: Stories;
};

class Home extends Component<Props> {
    render () {
        const {
            stories,
        } = this.props as Props;
        return (
            <DefaultLayout>
                <Panel title="Headline" stylesProp={styles.Headline}>
                </Panel>
                <View style={styles.Stories}>
                    <FlatList 
                        data={stories}
                        renderItem={({item}) => <StoryFeedItem
                            story={item}
                        />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </DefaultLayout>
        );
    }
}

export default Home;