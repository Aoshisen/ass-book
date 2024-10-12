import { FC, PropsWithChildren } from "react";

const Form: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <form>{children}</form>
}
export default Form