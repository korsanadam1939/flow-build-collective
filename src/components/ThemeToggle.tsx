import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full hover:bg-primary/10 transition-all duration-300"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary transition-transform hover:rotate-180 duration-500" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform hover:-rotate-12 duration-300" />
      )}
      <span className="sr-only">
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </Button>
  );
};

export default ThemeToggle;