import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import glamorous, { withTheme } from "glamorous-native";
import { NativeModules } from "react-native";

import { ThemePropType } from "../prop-types/theme";
import Logger from "../models/Logger";

class DebugSettingsForceLogListItem extends PureComponent {
  state = {
    isUnderlayVisible: false,
  };

  onPress = () => {
    const { navigateGoBack, logLevel } = this.props;
    setTimeout(() => {
      navigateGoBack();
      try {
        const { NativeNotifications } = NativeModules;
        if (logLevel === Logger.LOG_LEVEL_WARNING) {
          Logger.logWarning(`test`);
          NativeNotifications.testLogWarning(`test`);
        } else if (logLevel === Logger.LOG_LEVEL_ERROR) {
          Logger.logError(`test`);
          NativeNotifications.testLogError(`test`);
        }
      } catch (error) {
        // console.log(`error: ${error}`);
      }
    }, 50);
  };

  renderButtonText() {
    const { theme, logLevel } = this.props;
    const { isUnderlayVisible } = this.state;
    const titleColor = isUnderlayVisible
      ? theme.titleColorActive
      : theme.listItemName.color;

    return (
      <glamorous.Text
        style={theme.listItemName}
        flex={1}
        allowFontScaling={false}
        numberOfLines={1}
        color={titleColor}
      >
        Force
        {` ${logLevel} `}
        log
      </glamorous.Text>
    );
  }

  render() {
    const { theme } = this.props;

    return (
      <glamorous.TouchableHighlight
        onPress={this.onPress}
        underlayColor={theme.underlayColor}
        onShowUnderlay={() => {
          this.setState({ isUnderlayVisible: true });
        }}
        onHideUnderlay={() => {
          this.setState({ isUnderlayVisible: false });
        }}
      >
        <glamorous.View
          padding={8}
          paddingLeft={16}
          flexDirection="row"
          justifyContent="space-between"
        >
          {this.renderButtonText()}
        </glamorous.View>
      </glamorous.TouchableHighlight>
    );
  }
}

DebugSettingsForceLogListItem.propTypes = {
  theme: ThemePropType.isRequired,
  navigateGoBack: PropTypes.func.isRequired,
  logLevel: PropTypes.string.isRequired,
};

export default withTheme(DebugSettingsForceLogListItem);
