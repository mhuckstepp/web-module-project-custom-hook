import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [storedVal, setMode] = useLocalStorage("Dark Mode", false);

  return [storedVal, setMode];
}
