import { FC, ReactElement } from "react";
import { Controller } from "react-hook-form";
import Section from "./Section";

const FormItem: FC<{
	name: string,
	control: any,
	children?: ReactElement | ((field: any) => ReactElement);
	label?: string,
	Comp: any,
	propsName?: string,
	[e: string]: any,
}> = ({ children, name, control, label, Comp, propsName, ...rest }) => {

	return <Controller
		control={control}
		render={({ field }) => {
			const valueProps = propsName ? {
				[propsName]: field.value
			} : {
				value: field.value
			}
			function handleComponentChange(e) {
				field.onChange(e)
			}
			return <Section>
				{label && <label>{label}</label>}
				<div>
					<Comp
						onChange={handleComponentChange}
						{...valueProps}
						{...rest}
					/>
				</div>
			</Section>
		}
		}
		name={name}
	/>
}

export default FormItem;