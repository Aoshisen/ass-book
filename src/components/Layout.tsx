import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";

// 定义 Layout 组件
const Layout: React.FC<PropsWithChildren<unknown>> = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  height: "100vh"
}))

// 定义 Sider 和 Content 组件
export const Sider = styled("div")(({ theme }) => ({
  minWidth: 200,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  })
}));

export const Content = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary
  })
}));

export default Layout;
