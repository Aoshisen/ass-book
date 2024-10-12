import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../routes';


function SiderList() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const navigate = useNavigate();

	const handleListItemClick = (
		_: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number,
	) => {
		setSelectedIndex(index);
		navigate(routes[index].path)
	};

	const list_nav = routes.map((route, index) =>
		<ListItemButton
			key={route.text}
			selected={index === selectedIndex}
			onClick={
				(e) => {
					handleListItemClick(e, index)
				}
			}
		>
			<ListItemIcon>
				<route.icon />
			</ListItemIcon>
			<ListItemText primary={route.text} />
		</ListItemButton>)

	return (
		<List component="nav">
			{list_nav}
		</List>
	);
}

export default SiderList;