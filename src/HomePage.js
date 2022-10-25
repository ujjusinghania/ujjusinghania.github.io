import { Button, Container, Spacer } from "@nextui-org/react";
import PortfolioNavbar from "./PortfolioNavbar";
import { Grid, Card, Text } from "@nextui-org/react";
import profile from "./imgs/profile.png";

const HomePage = () => {
	return (
		<>
			<PortfolioNavbar />
			<Spacer x={4} />
			<Container fluid>
				<Grid.Container gap={3} justify="center">
					<Grid xs={12} sm={6} md={4}>
						<Card>
							<Card.Image
								autoResize={true}
								src={profile}
								objectFit="cover"
								height="100%"
							/>
						</Card>
					</Grid>
					<Grid xs={12} sm={6} md={4}>
						<Card css={{ padding: "24px" }}>
							<Card.Header>
								<Grid.Container>
									<Grid xs={12}>
										<Text
											h3
											size={32}
											weight="bold"
										>
											Hi, I am Ujjwal! 👋🏻
										</Text>
									</Grid>
									<Grid xs={12}>
										<Text h5 size={24}>
											NYU '19 🗽 → UC Berkeley '20 🌉 → Full-Stack Engineer at
											Amazon 📦
										</Text>
									</Grid>
									<Grid>
										<Text h6 size={16} transform="full-width">
											My avid interest in technology and its potential rests in
											my childhood. Having learned to switch on a computer when
											I was 2 years old and spending hours marveling at the
											moving character sprite in Pokémon when I was 6, I can say
											that I have been surrounded by technology all my life. I
											believe that imagination and focus, in conjunction, can
											solve all of the world's problems. Comfort zones bore me
											and I tend to enjoy situations that force me to adapt and
											to learn.
										</Text>
									</Grid>
								</Grid.Container>
							</Card.Header>
						</Card>
					</Grid>
				</Grid.Container>
				<Grid.Container gap={1} justify="center">
					<Grid>
						<Button size="xl" color="gradient" shadow auto ghost>
							Get In Touch
						</Button>
					</Grid>
				</Grid.Container>
			</Container>
		</>
	);
};

export default HomePage;
