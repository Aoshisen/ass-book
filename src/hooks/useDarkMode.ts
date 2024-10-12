import { useLocalStorage, useMediaQuery } from '@uidotdev/usehooks';

const KEY = "darkMode";
// 自定义 Hook：检测系统主题并允许用户手动切换主题
const useDarkMode = () => {
	// 使用 useMediaQuery 检测系统主题
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	// 使用 useLocalStorage 保存用户手动设置的主题（默认值 null）
	const [storedMode, setStoredMode] = useLocalStorage<boolean | null>(KEY, null);

	// 根据用户存储的选择和系统主题判断当前主题模式
	const isDarkMode = storedMode !== null ? storedMode : prefersDarkMode;

	// 切换主题，并存储用户的选择到 localStorage
	const toggleDarkMode = () => {
		const newMode = !isDarkMode;
		setStoredMode(newMode); // 存储到 localStorage
	};

	return [isDarkMode, toggleDarkMode] as const;
};

export default useDarkMode;

