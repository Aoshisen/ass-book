import { Slider, Typography, Checkbox } from "@mui/material"
import { useForm } from "react-hook-form";
import Form from "../components/Form";
import FormItem from "../components/FormItem";
import styled from "@emotion/styled";
import ColorPicker from "../components/ColorPicker";
const defaultValues = {
	input_ass: "this is input name",
	font_color: "black",
	opacity: 0.7,
	background_opacity: 0.5,
	font_size: 24,
	white_space: 20,
	window: false
}

const NovelSetting = () => {
	const { control } = useForm({ defaultValues, })
	return <Form>
		<FormItem name="font_color" control={control} label="文本颜色" Comp={ColorPicker} hideTextfield />
		<FormItem name="background_color" control={control} label="背景颜色" Comp={ColorPicker} hideTextfield />
		<FormItem name="opacity" control={control} label="整体透明度" Comp={Slider} size="small" />
		<FormItem name="background_opacity" control={control} label="背景透明度" Comp={Slider} size="small" />
		<FormItem name="font_size" control={control} label="字体大小" Comp={Slider} size="small" />
		<FormItem name="white_space" control={control} label="字体大小" Comp={Slider} size="small" />
		<FormItem name="window" control={control} label="阅读器窗口" Comp={Checkbox} propsName="checked" />
	</Form>
}
const NovelSettingWrapper = styled("div")({
	marginTop: 20
})

const Wrapper = styled("div")({
	padding: "2em"
})

const Settings = () => {
	return <Wrapper>
		<Typography variant="h4" fontWeight="bold">
			this is Settings
		</Typography>
		<NovelSettingWrapper>
			<NovelSetting />
		</NovelSettingWrapper>
	</Wrapper>
}

export default Settings;