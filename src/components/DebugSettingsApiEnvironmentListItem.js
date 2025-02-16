import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ViewPropTypes } from "react-native";
import glamorous, { withTheme } from "glamorous-native";

import { ThemePropType } from "../prop-types/theme";

class DebugSettingsApiEnvironmentListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isUnderlayVisible: false,
    };
  }

  onPress = () => {
    const { apiEnvironmentName, onPress } = this.props;
    onPress(apiEnvironmentName);
  };

  renderName() {
    const { theme, apiEnvironmentName } = this.props;
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
        {apiEnvironmentName}
      </glamorous.Text>
    );
  }

  renderSelectedCheckMark() {
    const { theme, selected } = this.props;
    const { isUnderlayVisible } = this.state;
    const borderColor = isUnderlayVisible
      ? theme.titleColorActive
      : theme.underlayColor;

    if (selected) {
      return (
        <glamorous.View
          width={13}
          height={6}
          marginLeft={12}
          alignSelf="center"
          backgroundColor="transparent"
          borderBottomWidth={2}
          borderLeftWidth={2}
          borderColor={borderColor}
          transform={[
            {
              rotate: "-45deg",
            },
          ]}
        />
      );
    }

    return null;
  }

  render() {
    const { style, theme } = this.props;

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
          style={style}
          padding={8}
          paddingLeft={16}
          flexDirection="row"
          justifyContent="space-between"
        >
          {this.renderName()}
          {this.renderSelectedCheckMark()}
        </glamorous.View>
      </glamorous.TouchableHighlight>
    );
  }
}

DebugSettingsApiEnvironmentListItem.propTypes = {
  theme: ThemePropType.isRequired,
  style: ViewPropTypes.style,
  apiEnvironmentName: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

DebugSettingsApiEnvironmentListItem.defaultProps = {
  style: null,
  selected: false,
};

export default withTheme(DebugSettingsApiEnvironmentListItem);
