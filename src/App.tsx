import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import UserData from "./components/UserData";
import axios from "axios";

type UserData = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gistsn: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
};

const INITIAL_DATA: object = {
  avatar_url: "../public/image/avatar-default.png",
  name: "Aliasghar Bagheri",
  created_at: "Joined 24 Aug 2013",
  login: "hosseiniBagheri",
  bio: "Lorem ipsum dolor",
  public_repos: 83,
  followers: 218,
  following: 77,
  location: "Iran",
  blog: "exmaple.com",
  twitter_username: "aliasgharh1381",
  html_url: "https://github.com/hosseiniBagheri",
  email: "example@gmail.com",
};

const App = () => {
  const [theme, setTheme] = useState<string>("light");
  const [searchValue, setSearchValue] = useState<string>("");
  const [userData, setUserData] = useState<Partial<UserData>>(INITIAL_DATA);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const submitFormHandler = () => {
    const search = searchValue.trim();
    if (search) {
      const sendRequest = async () => {
        const { data } = await axios.get(
          `https://api.github.com/users/${search}`
        );

        setUserData(data);
      };
      sendRequest();
    }
  };

  return (
    <div className="app dark:bg-slate-900 w-full min-h-screen p-5 bg-blue-50 flex items-center justify-center">
      <div className="w-full md:w-7/12 flex overflow-hidden flex-col items-center justify-center gap-2">
        <div className="container w-full">
          <Header theme={theme} setTheme={setTheme} />
        </div>
        <div className="w-full rounded-xl bg-white shadow-sm dark:bg-slate-800">
          <Search
            submitFormHandler={submitFormHandler}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="w-full rounded-xl bg-white shadow-sm dark:bg-slate-800">
          <UserData {...userData} />
        </div>
      </div>
    </div>
  );
};

export default App;
