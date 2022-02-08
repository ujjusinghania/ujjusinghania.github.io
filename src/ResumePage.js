import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { Box, Main, Button, Text } from "grommet";
import { Download } from "grommet-icons";

import Navbar from "./Navbar.js";
import PageFooter from "./PageFooter.js";
import resumePdf from "./UjjwalSinghania_Resume_Jan2022.pdf";

class ResumePage extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Main pad="large" gap="large">
					<Box direction="row" justify="center" gap="medium">
						<Box elevation="medium">
							<Document
								title="Ujjwal's Resume"
								file={resumePdf}
								options={{
									cMapUrl: "cmaps/",
									cMapPacked: true,
								}}
							>
								<Page pageNumber={1} />
							</Document>
						</Box>
					</Box>
					<Box direction="row" justify="center" gap="medium">
						<Button
							primary
							label={
								<Text margin="small" weight="bold">
									download resume
								</Text>
							}
							icon={<Download />}
							color="black"
                            href="https://drive.google.com/file/d/1jEmOLnd1S9DTxWOw3xIGe9Lq6UNiJ6zW/view?usp=sharing"
                            target="_blank"
						/>
					</Box>
				</Main>
				<PageFooter />
			</div>
		);
	}
}

export default ResumePage;
