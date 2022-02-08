import React, { Component } from "react";

import { Box, Grid, Heading } from "grommet";

import Navbar from "./Navbar.js";
import ProjectCard from "./ProjectCard.js";
import PageFooter from "./PageFooter.js";

const ProjectList = require("./ProjectList.json");

class ProjectPage extends Component {
	render() {
		console.log(ProjectList)
		return (
			<div>
				<Navbar />
				<Box pad="large" background="light-2">
					<Heading level="2">Machine Learning Projects</Heading>
					Applications that use machine learning as part of their core
					functionality.
				</Box>
				<Grid row="medium" columns="medium" pad="large">
					{ProjectList['ml_projects'].map((projectAttributes) => {
						return (
							<Box pad="small">
								<ProjectCard
									projectName={projectAttributes.projectName}
									projectDescription={projectAttributes.projectDescription}
									projectImageURL={projectAttributes.projectImageURL}
									githubLink={projectAttributes.githubLink} 
									projectReportLink={projectAttributes.projectReportLink} 
									languagesList={projectAttributes.languagesList}
								/>
							</Box>
						);
					})}
				</Grid>

				<Box pad="large" background="light-2">
					<Heading level="2">Mobile Applications</Heading>
					Applications made for iOS and/or Android.
				</Box>
				<Grid row="medium" columns="medium" pad="large">
					{ProjectList['mobile_apps'].map((projectAttributes) => {
						return (
							<Box pad="small">
								<ProjectCard
									projectName={projectAttributes.projectName}
									projectDescription={projectAttributes.projectDescription}
									projectImageURL={projectAttributes.projectImageURL}
									githubLink={projectAttributes.githubLink} 
									projectReportLink={projectAttributes.projectReportLink} 
									languagesList={projectAttributes.languagesList}
								/>
							</Box>
						);
					})}
				</Grid>

				<Box pad="large" background="light-2">
					<Heading level="2">Web Applications</Heading>
					Applications made for the web.
				</Box>
				<Grid row="medium" columns="medium" pad="large">
					{ProjectList['web_apps'].map((projectAttributes) => {
						return (
							<Box pad="small">
								<ProjectCard
									projectName={projectAttributes.projectName}
									projectDescription={projectAttributes.projectDescription}
									projectImageURL={projectAttributes.projectImageURL}
									githubLink={projectAttributes.githubLink} 
									projectReportLink={projectAttributes.projectReportLink} 
									languagesList={projectAttributes.languagesList}
								/>
							</Box>
						);
					})}
				</Grid>
				<PageFooter />
			</div>
		);
	}
}

export default ProjectPage;
