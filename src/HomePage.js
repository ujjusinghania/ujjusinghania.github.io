import React, { Component } from "react";

import { Image, Box, Paragraph, Main, Heading, Text, Button } from "grommet";

import Navbar from "./Navbar.js";
import PageFooter from "./PageFooter.js";

import profile from "./imgs/profile.JPG";
import { Mail } from "grommet-icons";

class HomePage extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Main pad="large" gap="large" style={{paddingBottom: "10vh"}}>
					<Box direction="row-responsive" justify="center" gap="xlarge">
						<Box height="medium" width="medium">
							<Image fit="cover" src={profile} />
						</Box>
						<Box>
							<Heading level="3">
								Hi, I am Ujjwal!
							</Heading>
							<Paragraph>
								My avid interest in technology and its potential rests in my
								childhood. Having learned to switch on a computer when I was 2
								years old and spending hours marveling at the moving character
								sprite in Pokémon when I was 6, I can say that I have been
								surrounded by technology all my life. I believe that imagination
								and focus, in conjunction, can solve all of the world's
								problems. Comfort zones bore me and I tend to enjoy situations
								that force me to adapt and to learn. A self-proclaimed
								"learn-it-all".
							</Paragraph>
						</Box>
					</Box>
					<Box direction="row" justify="center" gap="medium">
						<Button
							primary
							href="mailto:ujjwalsinghania@gmail.com"
							label={
								<Text margin="small" weight="bold">
									get in touch
								</Text>
							}
							icon={<Mail />}
							color="black"
						/>
					</Box>
				</Main>
				<PageFooter style={{
					position: "fixed",
					bottom: "0",
					width: "100%"
				}}/>
			</div>
		);
	}
}

export default HomePage;
