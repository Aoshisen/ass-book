import styled from "@emotion/styled";

const Section = styled("section")(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "minmax(80px,100px) auto",
	alignItems: "center",
	fontWeight: "bold",
	alignSelf: "start",
	minHeight: 32,
	color: theme.palette.text.secondary,
	...theme.applyStyles("dark", {
		color: theme.palette.text.secondary
	})
}))
export default Section;