import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Seperator } from '../components/List';
import { changeTheme } from '../actions/theme';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$PrimaryPurple',
})

class Themes extends Component {
  handleThemePress = (color) => {
    this.props.dispatch(changeTheme(color));
    this.props.navigation.goBack(null);
  }

  render() {
    return(
      <ScrollView>
        <StatusBar translucent={false} barStyle='default' />
        <ListItem
          text='Blue'
          onPress={() => this.handleThemePress(styles.$blue)}
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Seperator />
        <ListItem
          text='Green'
          onPress={() => this.handleThemePress(styles.$orange)}
          selected
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Seperator />
        <ListItem
          text='Orange'
          onPress={() => this.handleThemePress(styles.$green)}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Seperator />
        <ListItem
          text='Purple'
          onPress={() => this.handleThemePress(styles.$purple)}
          selected
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Seperator />
      </ScrollView>
    );
  }
}

export default connect()(Themes);
