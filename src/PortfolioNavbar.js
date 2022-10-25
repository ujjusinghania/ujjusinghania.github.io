import React from "react";
import { Navbar, Link } from "@nextui-org/react";

const PortfolioNavbar = () => {
	const NavbarItems = [
		{
			text: "About Me",
			href: "#/"
		},
		{
			text: "Projects",
			href: "#/projects"
		},
	];

	return (
		<Navbar isBordered variant="floating">
			<Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
			<Navbar.Content hideIn="xs" enableCursorHighlight>
				{NavbarItems.map((item, index) => (
					<Navbar.Link href={item.href}>{item.text}</Navbar.Link>
				))}
			</Navbar.Content>
			<Navbar.Content>
				<Navbar.Link
					href="https://www.linkedin.com/in/ujjwal-s-51156990/"
					target="_blank"
				>
					LinkedIn
				</Navbar.Link>
				<Navbar.Link href="https://twitter.com/ujjusinghania" target="_blank">
					Twitter
				</Navbar.Link>
				<Navbar.Link href="https://github.com/ujjusinghania/" target="_blank">
					GitHub
				</Navbar.Link>
			</Navbar.Content>
			<Navbar.Collapse disableAnimation>
				{NavbarItems.map((item, index) => (
					<Navbar.CollapseItem key={item.text}>
						<Link
							color="inherit"
							css={{
								minWidth: "100%",
							}}
							href="#"
						>
							{item.text}
						</Link>
					</Navbar.CollapseItem>
				))}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default PortfolioNavbar;
