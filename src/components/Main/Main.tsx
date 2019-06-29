import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DefaultLayout from '../DefaultLayout';
import styles from './Main.styles';
import {
    NestedState,
    HOME,
    OTHER,
    TEST,
} from './Main.types';
import {
    selectView,
} from './Main.selectors';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import {
    ActionTypes,
    setView,
} from './Main.actions';
import { connect } from 'react-redux';
import Home from 'Components/Home';
import TestComponentB from 'Components/TestComponentB';
import NavBar from 'Components/NavBar';

interface Props {
    view: string;
    setView: typeof setView;
};

class Main extends Component<Props> {
    private handleViewChange = (view: string): void => {
        this.props.setView(view);
    };

    render () {
        const {
            view,
        } = this.props as Props;

        let currentView: JSX.Element = <View><Text>No View Selected</Text></View>;
        switch (view) {
            case HOME:
                currentView = (
                    <Home></Home>
                );
                break;
            case TEST:
                currentView = (
                    <TestComponentB></TestComponentB>
                );
                break;
        }        

        return (
            <DefaultLayout>
                {currentView}
                <NavBar stylesProp={styles.NavBar} handleViewChange={this.handleViewChange} view={view}></NavBar>
            </DefaultLayout>
        );
    }
}

const mapStateToProps = (state: NestedState) => ({
    view: selectView(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<NestedState, void, ActionTypes>) => bindActionCreators({
    setView,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);

export{
    Main,
};