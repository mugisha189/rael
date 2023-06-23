"use client";
import React, { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

interface AppContextProps {
  toggleTheme?: () => void;
  isDarkTheme?: boolean | null;
}

const appContextDefaultValues: AppContextProps = {
  toggleTheme: () => {},
};

const AppContext = React.createContext<AppContextProps>(
  appContextDefaultValues
);

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean | null>(null);
  const pathname = usePathname();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // if (pathname?.includes("/timeline")) {
    //   window.location.reload();
    // }
  };

  React.useEffect(() => {
    console.log("isDark", isDarkTheme);
    if (isDarkTheme === null) return;
    const htmlElement = document.querySelector("html");
    if (isDarkTheme) {
      htmlElement?.classList.add("dark");
    } else {
      htmlElement?.classList.remove("dark");
    }
    window.localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  // set theme saved in local storage
  React.useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    console.log("theme", theme);

    if (theme === "dark") {
      console.log("isDark saved");
      setIsDarkTheme(true);
    } else if (theme === "light") {
      console.log("light saved");
      setIsDarkTheme(false);
    } else {
      console.log("syatem");
      setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  return (
    <AppContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <div
        style={{
          width: 20,
          position: "absolute",
          bottom: 20,
          left: 20,
          cursor: "pointer",
        }}
        onClick={toggleTheme}
        className=" dark:text-white absolute  rounded-full items-center justify-center flex"
      >
        {!isDarkTheme ? (
          <SunIcon className="w-11 dark:text-white" />
        ) : (
          <MoonIcon className="w-11 dark:text-white" />
        )}
      </div>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;