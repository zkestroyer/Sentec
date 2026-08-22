/* SENTEC / Signal / Structure
 * Compact utility control: keeps the site in a deliberate dark or light system.
 */
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const target = isDark ? "light" : "dark";

  return <button className="theme-toggle" type="button" aria-label={`Switch to ${target} mode`} aria-pressed={!isDark} onClick={toggleTheme}>
    {isDark ? <Sun size={15} strokeWidth={1.8} /> : <Moon size={15} strokeWidth={1.8} />}
    <span className="theme-toggle-label">{target}</span>
  </button>;
}
