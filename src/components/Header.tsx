import { FiGithub, FiMoon } from "react-icons/fi";
import { CiLight } from "react-icons/ci";

type HeaderProps = {
  theme: string;
  setTheme: (theme: string) => void;
};
const Header = ({ theme, setTheme }: HeaderProps) => {
  return (
    <div className="w-full py-3 flex items-center justify-between mb-2">
      <button className="text-3xl">
        <a
          href="https://github.com/hosseiniBagheri"
          target="_blank"
          className="dark:text-slate-500"
        >
          <FiGithub />
        </a>
      </button>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="flex items-center justify-center gap-2 text-slate-400"
        >
          <span className="text-base font-bold tracking-[2px]">LIGHT</span>
          <span className="text-xl">
            <CiLight />
          </span>
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="flex items-center justify-center gap-2 text-slate-700"
        >
          <span className="text-base font-bold tracking-[2px]">DARK</span>
          <span className="text-xl">
            <FiMoon />
          </span>
        </button>
      )}
    </div>
  );
};

export default Header;
