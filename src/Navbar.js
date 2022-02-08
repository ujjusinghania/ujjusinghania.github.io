import React, { Component } from "react";

import { Avatar, Header, Nav, Anchor, Box } from "grommet";

import UseAnimations from "react-useanimations";
import twitter from "react-useanimations/lib/twitter";
import linkedin from "react-useanimations/lib/linkedin";
import github from "react-useanimations/lib/github";

class Navbar extends Component {
	render() {
		return (
			<Header>
				<Nav direction="row" pad="medium" fill={true} justify="center">
					<Anchor
						icon={
							<UseAnimations
								animation={github}
								autoplay={false}
								loop={true}
							/>
						}
						href="https://github.com/ujjusinghania/"
						target="_blank"
					/>
					<Anchor
						icon={
							<UseAnimations
								animation={twitter}
								autoplay={false}
								loop={true}
							/>
						}
						href="https://twitter.com/ujjusinghania"
						target="_blank"
					/>
					<Anchor
						icon={
							<UseAnimations
								animation={linkedin}
								autoplay={false}
								loop={true}
							/>
						}
						href="https://www.linkedin.com/in/ujjwal-s-51156990/"
						target="_blank"
					/>
					<Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFbvhHYFOcl5w/profile-displayphoto-shrink_800_800/0/1595014478394?e=1636588800&v=beta&t=tQuQWrJTLtAJC32y4ZQDo-gvDLbfvFe-qVyW9THFqu4" />
					<Box pad="xsmall" justify="center">
						<Anchor color="black" label="about me" href="/" />
					</Box>
					<Box pad="xsmall" justify="center">
						<Anchor color="black"  label="projects" href="/projects" />
					</Box>
					<Box pad="xsmall" justify="center">
						<Anchor color="black" label="resume" href="/resume" />
					</Box>
				</Nav>
			</Header>
		);
	}
}

export default Navbar;
