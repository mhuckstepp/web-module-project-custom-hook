import useLocalStorage from "./appActions";

function useDarkMode(key) {
  const [darkOn, setDarkOn] = useLocalStorage(key);
}

export default useDarkMode;
