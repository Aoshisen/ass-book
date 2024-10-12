import Home from "../pages/index"
import Library from "../pages/library"
import Settings from "../pages/settings"

import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


const routes = [{
	path: "/",
	element: Home,
	icon: HomeIcon,
	text: "Home",
}, {
	path: "/library",
	element: Library,
	icon: LibraryBooksIcon,
	text: "Library",
}, {
	path: "/settings",
	element: Settings,
	icon: SettingsIcon,
	text: "Settings",
}]

export default routes