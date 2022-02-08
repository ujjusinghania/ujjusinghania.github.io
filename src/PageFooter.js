import React, { Component } from "react";
import { Footer, Text, Box } from "grommet";
import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";

class PageFooter extends Component {

	render() {
		return (
			<Footer
				background="light-1"
				pad="medium"
				alignContent="center"
				style={this.props.style}
			>
				<Box direction="row" gap="small">
					<UseAnimations animation={activity} autoplay={false} loop={true} />
					<Text weight="bold">made by ujjwal singhania </Text>
				</Box>
				<Text weight="bold">🎮 🥞 ❤️</Text>
			</Footer>
		);
	}
}

export default PageFooter;
