import * as React from 'react';
import {Text, View} from 'react-native';
import * as Navigation from 'react-navigation';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from 'src/state/store';

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => ({
    dispatch
});

const Home = (props: ReturnType<typeof mapDispatchToProps>) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <Text
                style={{textAlign: 'center', fontSize: 96}}
                onPress={() => props.dispatch({type: Navigation.NavigationActions.NAVIGATE, routeName: 'Main'})}
            >
                🏠
            </Text>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(Home);