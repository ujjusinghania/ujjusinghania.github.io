import {
	Card,
	Collapse,
	Container,
	Grid,
	Spacer,
	Text,
} from "@nextui-org/react";
import PortfolioNavbar from "./PortfolioNavbar";
const PortfolioProjectsList = require("./PortfolioProjectsList.json");
const ProjectsPage = () => {
	return (
		<>
			<PortfolioNavbar />
			<Spacer x={4} />
			<Container fluid>
				<Collapse.Group splitted>
					<Collapse title="Machine Learning Projects" expanded>
						<Grid.Container gap={3}>
							{PortfolioProjectsList["ml_projects"].map((projectAttributes) => {
								return (
									<Grid xs={12} sm={6} md={4}>
										<Card isPressable variant="bordered">
											<Card.Header>
												<Text b>{projectAttributes.projectName}</Text>
											</Card.Header>
											<Card.Body css={{ p: 0 }}>
												<Card.Image
													src={projectAttributes.projectImageURL}
													objectFit="cover"
													width="100%"
													height={300}
												/>
												<Spacer x={4} />
												<Container>
													<Text>{projectAttributes.projectDescription}</Text>
												</Container>
											</Card.Body>
											<Card.Footer
												css={{ justifyItems: "flex-start" }}
											></Card.Footer>
										</Card>
									</Grid>
								);
							})}
						</Grid.Container>
					</Collapse>
					<Collapse title="Mobile Applications" expanded>
						<Grid.Container gap={3}>
							{PortfolioProjectsList["mobile_apps"].map((projectAttributes) => {
								return (
									<Grid xs={10} sm={6} md={4}>
										<Card isPressable variant="bordered">
											<Card.Header>
												<Text b>{projectAttributes.projectName}</Text>
											</Card.Header>
											<Card.Body css={{ p: 0 }}>
												<Card.Image
													src={projectAttributes.projectImageURL}
													objectFit="cover"
													width="100%"
													height={300}
												/>
												<Spacer x={4} />
												<Container>
													<Text>{projectAttributes.projectDescription}</Text>
												</Container>
											</Card.Body>
											<Card.Footer
												css={{ justifyItems: "flex-start" }}
											></Card.Footer>
										</Card>
									</Grid>
								);
							})}
						</Grid.Container>
					</Collapse>
					<Collapse title="Web Applications" expanded>
						<Grid.Container gap={3}>
							{PortfolioProjectsList["web_apps"].map((projectAttributes) => {
								return (
									<Grid xs={10} sm={6} md={4}>
										<Card isPressable variant="bordered">
											<Card.Header>
												<Text b>{projectAttributes.projectName}</Text>
											</Card.Header>
											<Card.Body css={{ p: 0 }}>
												<Card.Image
													src={projectAttributes.projectImageURL}
													objectFit="cover"
													width="100%"
													height={300}
												/>
												<Spacer x={4} />
												<Container>
													<Text>{projectAttributes.projectDescription}</Text>
												</Container>
											</Card.Body>
											<Card.Footer
												css={{ justifyItems: "flex-start" }}
											></Card.Footer>
										</Card>
									</Grid>
								);
							})}
						</Grid.Container>
					</Collapse>
				</Collapse.Group>
			</Container>
		</>
	);
};

export default ProjectsPage;
