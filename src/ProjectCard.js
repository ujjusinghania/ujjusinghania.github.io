import React, { Component } from "react";

import {
	Card,
	CardBody,
	CardFooter,
	Button,
	Image,
	Box,
	Text,
} from "grommet";
import { Github, Clipboard } from "grommet-icons";

class ProjectCard extends Component {

	render() {
		console.log(this.props.githubLink)
		return (
			<Card background="light" height="100%">
				<CardBody>
					<CardBody>
						<Box background="brand" height="medium">
							<Image
								fit="cover"
								src={this.props.projectImageURL}
							/>
						</Box>
						<Box pad="medium">
							<Text>
								<b>{this.props.projectName}</b>
							</Text>
							<br/>
							<Text>{this.props.projectDescription}</Text>
						</Box>
					</CardBody>
				</CardBody>
				<CardFooter pad={{ horizontal: "small" }} background="light">
					{this.props.githubLink !== "" && <Button icon={<Github color="plain" />} />}
					{this.props.projectReportLink !== "" && <Button icon={<Clipboard color="plain" />} />}
				</CardFooter>
			</Card>
		);
	}
}

ProjectCard.defaultProps = {
	"projectImageURL": "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",
	"githubLink": "",
	"projectReportLink": "",
	"languagesList": []
}

export default ProjectCard;
