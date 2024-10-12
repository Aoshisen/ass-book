import styled from "@emotion/styled";
import { useClickAway, useToggle } from "@uidotdev/usehooks";
import { FC } from "react";
import { ColorResult, ChromePicker } from "react-color";

interface ColorPickerProps {
	value: string;
	onChange?: (e: string) => void
}

interface ColorPlaceHolderProps {
	background: string
}

const ColorPlaceHolder = styled("div")(({ background }: ColorPlaceHolderProps) => ({
	height: 20,
	width: 20,
	background,
}))

const ColorWrapper = styled("div")({
	position: "relative",
})

const PickerWrapper = styled("div")({
	position: "absolute",
	zIndex: 200,
	left: -40
})

const ColorPicker: FC<ColorPickerProps> = ({ value, onChange }) => {
	function handleChange(e: ColorResult) {
		onChange?.(e.hex)
	}
	const [open, toggle] = useToggle(false)
	const pickRef = useClickAway<any>(handleColorPickOutSideClick)

	function handleColorPickOutSideClick() {
		toggle()
	}
	function handleColorPlaceHolderClick() {
		toggle()
	}
	return <ColorWrapper>
		<ColorPlaceHolder background={value} onClick={handleColorPlaceHolderClick} />
		{
			open &&
			<PickerWrapper ref={pickRef}>
				<ChromePicker color={value} onChange={handleChange} />
			</PickerWrapper>
		}
	</ColorWrapper >
}

export default ColorPicker;