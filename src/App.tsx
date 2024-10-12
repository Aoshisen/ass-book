import { Route, Routes } from 'react-router-dom';
import Layout, { Sider, Content } from './components/Layout';
import SiderList from "./components/SiderList.tsx"
import routes from './routes';
function App() {
  return (
    <>
      <Layout>
        <Sider>
          <SiderList />
        </Sider>
        <Content>
          <Routes>
            {
              routes.map(route => <Route path={route.path} element={<route.element />} key={route.path} />)
            }
          </Routes>
        </Content>
      </Layout>
    </>
  );
}
export default App;
